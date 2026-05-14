/**
 * Tek sayfadaki bölüme kaydırır; URL’de #fragment oluşturmaz (tıklamada preventDefault ile).
 */
export function scrollToSectionById(
  sectionId: string,
  options?: { headerOffset?: number; behavior?: ScrollBehavior },
): boolean {
  if (typeof document === "undefined") return false
  const el = document.getElementById(sectionId)
  if (!el) return false

  let offset = options?.headerOffset
  if (offset === undefined) {
    const header = document.querySelector("header")
    offset = header instanceof HTMLElement ? header.offsetHeight + 8 : 80
  }

  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top: Math.max(0, top), behavior: options?.behavior ?? "smooth" })
  return true
}
