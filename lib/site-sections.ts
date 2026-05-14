/** Ana sayfa içi bölüm kimlikleri — section id ile birebir aynı olmalı */
export const SITE_SECTION_NAV = [
  { id: "anasayfa", label: "Ana Sayfa" },
  { id: "hizmetler", label: "Hizmetler" },
  { id: "hakkimda", label: "Hakkımda" },
  { id: "deneyim", label: "Deneyim" },
  { id: "projeler", label: "Projelerim" },
  { id: "iletisim", label: "İletişim" },
] as const

export type SiteSectionId = (typeof SITE_SECTION_NAV)[number]["id"]
