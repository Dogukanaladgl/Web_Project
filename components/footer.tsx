import Link from "next/link"
import { SocialIcons } from "@/components/social-icons"
import { SectionLink } from "@/components/section-link"
import { SITE_SECTION_NAV } from "@/lib/site-sections"

const footerNavLinkClass =
  "flex min-h-11 items-center justify-center rounded-xl border border-border/60 bg-muted/25 px-3 py-2.5 text-center text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-foreground md:min-h-0 md:inline-flex md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-0 md:font-normal"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-12 lg:px-8">
        <div className="flex flex-col gap-8 md:grid md:grid-cols-3 md:items-center md:gap-8">
          <div className="flex flex-col items-center rounded-2xl border border-border/50 bg-muted/15 px-5 py-6 text-center md:items-start md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-0 md:text-left">
            <Link href="/" className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary shadow-sm shadow-primary/20">
                <span className="text-lg font-bold text-primary-foreground">D</span>
              </div>
              <span className="text-left text-lg font-bold leading-tight text-foreground">
                Doğukan M. Aladağlı
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground text-pretty">
              Bilgisayar Mühendisi
              <br />
              Yazılım & Teknoloji Danışmanlığı
            </p>
          </div>

          <nav
            className="mx-auto grid w-full max-w-sm grid-cols-2 gap-2 sm:max-w-md sm:gap-2.5 md:max-w-none md:flex md:flex-wrap md:justify-center md:gap-4"
            aria-label="Sayfa alt menüsü"
          >
            {SITE_SECTION_NAV.map((link) => (
              <SectionLink key={link.id} sectionId={link.id} className={footerNavLinkClass}>
                {link.label}
              </SectionLink>
            ))}
          </nav>

          <div className="flex w-full flex-col items-center gap-3 border-t border-border/60 pt-6 md:w-auto md:min-w-0 md:border-0 md:pt-0 md:items-end">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground md:hidden">
              Sosyal Medya
            </p>
            <SocialIcons variant="footer" />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 border-t border-border pt-6 text-center text-xs text-muted-foreground sm:text-sm md:flex-row md:items-center md:justify-between md:gap-4 md:text-left">
          <p>&copy; {currentYear} Doğukan Mehmet Aladağlı. Tüm hakları saklıdır.</p>
          <p>Türkiye&apos;de yapıldı.</p>
        </div>
      </div>
    </footer>
  )
}
