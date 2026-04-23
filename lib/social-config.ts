/** Sosyal bağlantılar — .env.local ile özelleştirin */
export const socialConfig = {
  github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://linkedin.com",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://instagram.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/",
  telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL ?? "https://t.me/",
  twitter: process.env.NEXT_PUBLIC_TWITTER_URL ?? "https://twitter.com",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "dogukan@example.com",
} as const

export function mailtoHref(email: string) {
  return `mailto:${email}`
}
