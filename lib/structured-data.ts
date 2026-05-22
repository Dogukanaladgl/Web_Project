import { socialConfig } from "@/lib/social-config"
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site-metadata"

/** Google'ın siteyi daha iyi anlaması için JSON-LD (schema.org) */
export function getSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: "tr-TR",
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: SITE_NAME,
        url: SITE_URL,
        jobTitle: "Bilgisayar Mühendisi",
        description: SITE_DESCRIPTION,
        email: `mailto:${socialConfig.email}`,
        sameAs: [socialConfig.github, socialConfig.linkedin, socialConfig.whatsapp],
        knowsAbout: [
          "Web Geliştirme",
          "Mobil Uygulama Geliştirme",
          "React",
          "Next.js",
          "Flutter",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Konya",
          addressCountry: "TR",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#services`,
        name: SITE_TITLE,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        areaServed: { "@type": "Country", name: "Türkiye" },
        provider: { "@id": `${SITE_URL}/#person` },
      },
    ],
  }
}
