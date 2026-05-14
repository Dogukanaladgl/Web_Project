"use client"

import { forwardRef, type ComponentProps } from "react"
import Link from "next/link"
import { scrollToSectionById } from "@/lib/scroll-to-section"

export type SectionLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  sectionId: string
  headerOffset?: number
}

/**
 * Ana sayfa içi bölüme kaydırır; adres çubuğunda #… oluşmaz.
 */
export const SectionLink = forwardRef<HTMLAnchorElement, SectionLinkProps>(function SectionLink(
  { sectionId, headerOffset, onClick, ...rest },
  ref,
) {
  return (
    <Link
      ref={ref}
      href="/"
      {...rest}
      onClick={(e) => {
        e.preventDefault()
        scrollToSectionById(sectionId, headerOffset !== undefined ? { headerOffset } : undefined)
        onClick?.(e)
      }}
    />
  )
})
