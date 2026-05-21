/**
 * Mobil görünüm testi — yatay taşma, viewport meta, hamburger menü.
 * Kullanım: node scripts/mobile-viewport-test.mjs
 */
import { chromium, devices } from 'playwright'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const BASE = process.env.BASE_URL ?? 'http://localhost:3000'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.join(__dirname, '..', '.mobile-test-screenshots')

const profiles = [
  { name: 'iPhone 14', device: devices['iPhone 14'] },
  { name: 'Pixel 7', device: devices['Pixel 7'] },
  {
    name: 'Dar ekran 320px',
    device: {
      userAgent: devices['iPhone SE'].userAgent,
      viewport: { width: 320, height: 568 },
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
    },
  },
]

async function checkOverflow(page) {
  return page.evaluate(() => {
    const doc = document.documentElement
    const overflowX = doc.scrollWidth - window.innerWidth
    const hasMeta = !!document.querySelector('meta[name="viewport"]')
    const metaContent =
      document.querySelector('meta[name="viewport"]')?.getAttribute('content') ?? null
    return {
      innerWidth: window.innerWidth,
      scrollWidth: doc.scrollWidth,
      overflowPx: Math.max(0, overflowX),
      hasViewportMeta: hasMeta,
      viewportMeta: metaContent,
      title: document.title,
      headerVisible: !!document.querySelector('header'),
      hamburgerVisible: !!document.querySelector('header button.md\\:hidden'),
      desktopNavHidden: (() => {
        const nav = document.querySelector('header nav[aria-label="Sayfa bölümleri"]')
        if (!nav) return null
        return getComputedStyle(nav).display === 'none'
      })(),
    }
  })
}

async function run() {
  await mkdir(OUT_DIR, { recursive: true })

  const browser = await chromium.launch({ headless: true })
  const results = []

  for (const { name, device } of profiles) {
    const context = await browser.newContext({ ...device })
    const page = await context.newPage()

    try {
      await page.goto(BASE, { waitUntil: 'networkidle', timeout: 60000 })
      await page.waitForTimeout(800)

      const metrics = await checkOverflow(page)
      const slug = name.replace(/\s+/g, '-').toLowerCase()
      const screenshotPath = path.join(OUT_DIR, `${slug}-home.png`)
      await page.screenshot({ path: screenshotPath, fullPage: true })

      await page.locator('header button.md\\:hidden').click()
      await page.waitForTimeout(400)
      const menuOpen = await page.locator('header .md\\:hidden nav').isVisible()
      const menuShot = path.join(OUT_DIR, `${slug}-menu-open.png`)
      await page.screenshot({ path: menuShot, fullPage: false })

      results.push({
        profile: name,
        ...metrics,
        menuOpens: menuOpen,
        screenshots: { home: screenshotPath, menu: menuShot },
        status: metrics.overflowPx > 2 ? 'WARN_OVERFLOW' : 'OK',
      })
    } catch (err) {
      results.push({ profile: name, status: 'ERROR', error: String(err) })
    } finally {
      await context.close()
    }
  }

  await browser.close()

  console.log('\n=== Mobil görünüm test raporu ===\n')
  console.log(`URL: ${BASE}\n`)

  for (const r of results) {
    console.log(`--- ${r.profile} ---`)
    if (r.status === 'ERROR') {
      console.log(`  HATA: ${r.error}\n`)
      continue
    }
    console.log(`  Durum: ${r.status}`)
    console.log(`  Viewport: ${r.innerWidth}px | scrollWidth: ${r.scrollWidth}px`)
    console.log(`  Yatay taşma: ${r.overflowPx}px`)
    console.log(`  viewport meta: ${r.hasViewportMeta ? 'var' : 'YOK'} ${r.viewportMeta ?? ''}`)
    console.log(`  Hamburger görünür: ${r.hamburgerVisible}`)
    console.log(`  Masaüstü nav gizli: ${r.desktopNavHidden}`)
    console.log(`  Menü açılıyor: ${r.menuOpens}`)
    console.log(`  Ekran görüntüsü: ${r.screenshots.home}\n`)
  }

  const failed = results.filter((r) => r.status !== 'OK' && r.status !== 'ERROR')
  const errors = results.filter((r) => r.status === 'ERROR')
  if (errors.length) process.exit(1)
  if (failed.length) process.exit(2)
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
