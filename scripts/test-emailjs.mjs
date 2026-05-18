/**
 * EmailJS bağlantı testi — .env.local doldurulduktan sonra:
 *   npm run test:email
 */
import { readFileSync, existsSync } from "node:fs"
import { resolve, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const envPath = resolve(root, ".env.local")

function loadEnvFile(filePath) {
  if (!existsSync(filePath)) return {}
  const env = {}
  for (const line of readFileSync(filePath, "utf8").split("\n")) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith("#")) continue
    const eq = trimmed.indexOf("=")
    if (eq === -1) continue
    const key = trimmed.slice(0, eq).trim()
    let value = trimmed.slice(eq + 1).trim()
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }
    env[key] = value
  }
  return env
}

const env = loadEnvFile(envPath)
const publicKey = env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
const serviceId = env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? ""
const templateId = env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? ""

const missing = [
  !publicKey && "NEXT_PUBLIC_EMAILJS_PUBLIC_KEY",
  !serviceId && "NEXT_PUBLIC_EMAILJS_SERVICE_ID",
  !templateId && "NEXT_PUBLIC_EMAILJS_TEMPLATE_ID",
].filter(Boolean)

if (missing.length) {
  console.error("❌ Eksik ortam değişkenleri (.env.local):")
  missing.forEach((k) => console.error(`   - ${k}`))
  console.error("\nEmailJS: https://dashboard.emailjs.com/")
  console.error("  Public Key  → Account → API Keys")
  console.error("  Service ID  → Email Services")
  console.error("  Template ID → Email Templates")
  process.exit(1)
}

const templateParams = {
  from_name: "EmailJS Test",
  reply_to: "test@example.com",
  user_email: "test@example.com",
  subject: "Portfolio form testi",
  message: "Bu mesaj npm run test:email ile gönderildi.",
}

console.log("📧 EmailJS test gönderimi başlıyor...")

const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: templateParams,
  }),
})

const body = await res.text()

if (!res.ok) {
  console.error(`❌ HTTP ${res.status}`)
  console.error(body || "(boş yanıt)")
  if (res.status === 403 && body.includes("non-browser")) {
    console.error(
      "\nℹ️  Bu normal: EmailJS varsayılan olarak sadece tarayıcıdan API kabul eder.",
    )
    console.error(
      "   İletişim formunu http://localhost:3000 üzerinden deneyin (dev sunucusunu yeniden başlatın).",
    )
    console.error(
      "   Terminal testi için: dashboard → Account → Security →",
    )
    console.error('   "Allow API requests from non-browser applications" açın.',
    )
  }
  if (res.status === 400 && body.includes("Public Key")) {
    console.error(
      "\nℹ️  PUBLIC_KEY ile SERVICE_ID karışmış olabilir.",
    )
    console.error("   PUBLIC_KEY → Account → API Keys (service_/template_ yok)")
    console.error("   SERVICE_ID → Email Services → service_xxxxx")
  }
  process.exit(1)
}

console.log("✅ Test e-postası gönderildi (HTTP 200).")
console.log("   Gelen kutunuzu ve EmailJS dashboard → History bölümünü kontrol edin.")
