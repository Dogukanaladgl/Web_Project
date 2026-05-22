import type { MetadataRoute } from "next"
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE } from "@/lib/site-metadata"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_TITLE,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#0f1419",
    theme_color: "#4a6fa8",
    lang: "tr",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  }
}
