/** Sosyal bağlantılar — .env.local ile özelleştirin */
export const socialConfig = {
  github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/Dogukanaladgl",
  linkedin:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ??
    "https://www.linkedin.com/in/do%C4%9Fukan-alada%C4%9Fl%C4%B1-0a661a254/",
  /** Örnek: https://wa.me/905551234567 — aşağıdaki whatsappHref bölümüne bakın */
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/905412635474",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "dogukana4250@gmail.com",
} as const

export function mailtoHref(email: string) {
  return `mailto:${email}`
}

/**
 * WhatsApp linki: numarayı uluslararası formatta yazın (+, boşluk, tire yok).
 * TR örnek: 0555 123 45 67 → "905551234567"
 */
export function whatsappHref(phoneDigits: string, prefilledMessage?: string) {
  const digits = phoneDigits.replace(/\D/g, "")
  const base = `https://wa.me/${digits}`
  if (!prefilledMessage) return base
  return `${base}?text=${encodeURIComponent(prefilledMessage)}`
}
