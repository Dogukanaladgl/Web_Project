import { ImageResponse } from "next/og"
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE } from "@/lib/site-metadata"

export const alt = SITE_TITLE
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)",
          color: "#f8fafc",
          fontFamily: 'ui-sans-serif, system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 20,
              background: "#4a6fa8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 52,
              fontWeight: 700,
            }}
          >
            D
          </div>
          <div style={{ fontSize: 52, fontWeight: 700, lineHeight: 1.15 }}>{SITE_NAME}</div>
        </div>
        <div style={{ fontSize: 32, color: "#94a3b8", maxWidth: 900, lineHeight: 1.4 }}>
          {SITE_DESCRIPTION}
        </div>
      </div>
    ),
    { ...size },
  )
}
