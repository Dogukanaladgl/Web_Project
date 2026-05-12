"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "#anasayfa", label: "Ana Sayfa" },
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#hakkimda", label: "Hakkımda" },
  { href: "#deneyim", label: "Deneyim" },
  { href: "#projeler", label: "Projelerim" },
  { href: "#iletisim", label: "İletişim" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeHash, setActiveHash] = useState(navItems[0].href)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""))

    const scrollTop = () => window.scrollY ?? document.documentElement.scrollTop

    /** Bölümün belge tepesine göre gerçek konumu (offsetTop yerine — nested layout doğru çalışır) */
    const sectionDocumentTop = (el: HTMLElement) => {
      const r = el.getBoundingClientRect()
      return r.top + scrollTop()
    }

    const getActiveHash = () => {
      const headerH = headerRef.current?.offsetHeight ?? 72
      const threshold = headerH + 16
      const line = scrollTop() + threshold
      let currentHash = navItems[0].href

      for (const id of sectionIds) {
        const section = document.getElementById(id)
        if (!section) continue
        if (line >= sectionDocumentTop(section)) {
          currentHash = `#${id}`
        }
      }

      return currentHash
    }

    const updateActiveSection = () => {
      setActiveHash(getActiveHash())
    }

    updateActiveSection()
    window.addEventListener("scroll", updateActiveSection, { passive: true })
    window.addEventListener("resize", updateActiveSection, { passive: true })
    window.addEventListener("load", updateActiveSection)
    window.addEventListener("hashchange", updateActiveSection)

    return () => {
      window.removeEventListener("scroll", updateActiveSection)
      window.removeEventListener("resize", updateActiveSection)
      window.removeEventListener("load", updateActiveSection)
      window.removeEventListener("hashchange", updateActiveSection)
    }
  }, [])

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
    >
      {/* İç kenarlar iletişim/form ile aynı (max-w-7xl + px); tema anahtarı fixed olduğu için satıra pe-14 vermiyoruz — "Teklifte" form grid’iyle sağda hizalı */}
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
            {navItems.map((item) => {
              const isActive = activeHash === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative z-10 whitespace-nowrap rounded-lg px-2.5 py-2 text-xs transition-colors lg:px-3 lg:text-sm ${
                    isActive
                      ? "font-semibold text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setActiveHash(item.href)}
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
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild className="hidden sm:flex">
              <Link href="#iletisim">Teklifte Bulunun</Link>
            </Button>
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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-3 transition-colors rounded-lg ${
                  activeHash === item.href
                    ? "bg-secondary text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
                onClick={() => {
                  setActiveHash(item.href)
                  setIsMenuOpen(false)
                }}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link href="#iletisim" onClick={() => setIsMenuOpen(false)}>
                Teklifte Bulunun
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
