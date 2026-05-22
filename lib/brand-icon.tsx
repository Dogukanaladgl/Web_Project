/** Site header ile uyumlu favicon / apple-icon (ImageResponse) */
const BRAND_PRIMARY = "#4a6fa8"
const BRAND_PRIMARY_FOREGROUND = "#ffffff"

type BrandIconProps = {
  size: number
  borderRadius: number
  fontSize: number
}

export function BrandIconMarkup({ size, borderRadius, fontSize }: BrandIconProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: BRAND_PRIMARY,
        borderRadius,
        color: BRAND_PRIMARY_FOREGROUND,
        fontSize,
        fontWeight: 700,
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
        letterSpacing: "-0.02em",
      }}
    >
      D
    </div>
  )
}
