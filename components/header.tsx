"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { SectionLink } from "@/components/section-link"
import { SITE_SECTION_NAV, type SiteSectionId } from "@/lib/site-sections"
import { scrollToSectionById } from "@/lib/scroll-to-section"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSectionId, setActiveSectionId] = useState<SiteSectionId>(SITE_SECTION_NAV[0].id)
  const headerRef = useRef<HTMLElement>(null)
  const pendingSectionRef = useRef<SiteSectionId | null>(null)

  const selectSection = useCallback((id: SiteSectionId) => {
    pendingSectionRef.current = id
    setActiveSectionId(id)
  }, [])

  /** Yenilemede #fragment ile eski konuma dönülmesin — hash varsa temizle */
  useEffect(() => {
    if (!window.location.hash) return
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`)
  }, [])

  useEffect(() => {
    const sectionIds = SITE_SECTION_NAV.map((item) => item.id)
    const scrollTop = () => window.scrollY ?? document.documentElement.scrollTop

    const sectionDocumentTop = (el: HTMLElement) => {
      const r = el.getBoundingClientRect()
      return r.top + scrollTop()
    }

    const getActiveSectionId = () => {
      const headerH = headerRef.current?.offsetHeight ?? 72
      const threshold = headerH + 16
      const y = scrollTop()
      const line = y + threshold
      const viewportBottom = y + window.innerHeight
      const docHeight = document.documentElement.scrollHeight

      // Sayfa sonunda son bölüm (İletişim) aktif kalsın — max scroll genelde bölüm üstünü geçmez
      if (viewportBottom >= docHeight - 4) {
        for (let i = sectionIds.length - 1; i >= 0; i--) {
          if (document.getElementById(sectionIds[i])) return sectionIds[i]
        }
      }

      let currentId: SiteSectionId = SITE_SECTION_NAV[0].id

      for (const id of sectionIds) {
        const section = document.getElementById(id)
        if (!section) continue
        if (line >= sectionDocumentTop(section)) {
          currentId = id
        }
      }

      return currentId
    }

    let scrollEndTimer: ReturnType<typeof setTimeout> | undefined

    const updateActiveSection = () => {
      const pending = pendingSectionRef.current
      if (pending) {
        const target = document.getElementById(pending)
        const headerH = headerRef.current?.offsetHeight ?? 72
        const line = scrollTop() + headerH + 16
        const atPageBottom =
          scrollTop() + window.innerHeight >= document.documentElement.scrollHeight - 4

        if (target && (atPageBottom || Math.abs(sectionDocumentTop(target) - line) <= 32)) {
          pendingSectionRef.current = null
        } else {
          setActiveSectionId(pending)
          return
        }
      }
      setActiveSectionId(getActiveSectionId())
    }

    const onScroll = () => {
      updateActiveSection()
      clearTimeout(scrollEndTimer)
      scrollEndTimer = setTimeout(updateActiveSection, 120)
    }

    updateActiveSection()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("scrollend", updateActiveSection, { passive: true })
    window.addEventListener("resize", updateActiveSection, { passive: true })
    window.addEventListener("load", updateActiveSection)

    return () => {
      clearTimeout(scrollEndTimer)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("scrollend", updateActiveSection)
      window.removeEventListener("resize", updateActiveSection)
      window.removeEventListener("load", updateActiveSection)
    }
  }, [])

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-16 items-center justify-between gap-3 py-2">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">D</span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:block truncate">Doğukan M.</span>
          </Link>

          <nav
            className="relative hidden md:flex items-center gap-0.5 rounded-xl bg-muted/30 p-1 ring-1 ring-border/40 lg:gap-1"
            aria-label="Sayfa bölümleri"
          >
            {SITE_SECTION_NAV.map((item) => {
              const isActive = activeSectionId === item.id
              return (
                <SectionLink
                  key={item.id}
                  sectionId={item.id}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative z-10 whitespace-nowrap rounded-lg px-2.5 py-2 text-xs transition-colors lg:px-3 lg:text-sm ${
                    isActive
                      ? "font-semibold text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => selectSection(item.id)}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="header-nav-active-pill"
                      className="absolute inset-0 z-0 rounded-lg bg-background/55 shadow-sm ring-1 ring-border/60 backdrop-blur-md"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      aria-hidden
                    />
                  ) : null}
                  <span className="relative z-10">{item.label}</span>
                </SectionLink>
              )
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Button asChild className="hidden sm:flex shrink-0">
              <SectionLink sectionId="iletisim" onClick={() => selectSection("iletisim")}>
                Teklifte Bulunun
              </SectionLink>
            </Button>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col p-4 gap-2">
            {SITE_SECTION_NAV.map((item) => (
              <SectionLink
                key={item.id}
                sectionId={item.id}
                className={`px-4 py-3 transition-colors rounded-lg ${
                  activeSectionId === item.id
                    ? "bg-secondary text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
                onClick={() => {
                  selectSection(item.id)
                  setIsMenuOpen(false)
                }}
              >
                {item.label}
              </SectionLink>
            ))}
            <Button asChild className="mt-2">
              <SectionLink
                sectionId="iletisim"
                onClick={() => {
                  selectSection("iletisim")
                  setIsMenuOpen(false)
                }}
              >
                Teklifte Bulunun
              </SectionLink>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
