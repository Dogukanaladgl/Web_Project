export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://ddogukan.dev"

export const SITE_NAME = "Doğukan Mehmet Aladağlı"

export const SITE_TITLE = `${SITE_NAME} | Yazılım Hizmetleri`

/** Google snippet — sayfa içeriğinden bağımsız, net özet (≈155 karakter) */
export const SITE_DESCRIPTION =
  "Bilgisayar mühendisi — web sitesi, mobil uygulama, backend ve UI/UX. React, Next.js, Flutter ile yazılım ve teknoloji danışmanlığı. Konya, Türkiye."

export const SITE_KEYWORDS = [
  "Doğukan Mehmet Aladağlı",
  "yazılım geliştirici",
  "web geliştirme",
  "mobil uygulama",
  "React",
  "Next.js",
  "Flutter",
  "Konya",
  "portfolyo",
  "freelance yazılım",
]
