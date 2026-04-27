"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "#anasayfa", label: "Ana Sayfa" },
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#hakkimda", label: "Hakkımda" },
  { href: "#projeler", label: "Projeler" },
  { href: "#iletisim", label: "İletişim" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeHash, setActiveHash] = useState(navItems[0].href)

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""))

    const getActiveHash = () => {
      if (window.location.hash && navItems.some((item) => item.href === window.location.hash)) {
        return window.location.hash
      }

      const scrollPosition = window.scrollY + 140
      let currentHash = navItems[0].href

      for (const id of sectionIds) {
        const section = document.getElementById(id)
        if (section && section.offsetTop <= scrollPosition) {
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
    window.addEventListener("hashchange", updateActiveSection)

    return () => {
      window.removeEventListener("scroll", updateActiveSection)
      window.removeEventListener("hashchange", updateActiveSection)
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 pe-14 sm:pe-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">D</span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:block">Doğukan M.</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm transition-colors rounded-lg ${
                  activeHash === item.href
                    ? "bg-secondary text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
                onClick={() => setActiveHash(item.href)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild className="hidden sm:flex">
              <Link href="#iletisim">Teklif Al</Link>
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
                Teklif Al
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
