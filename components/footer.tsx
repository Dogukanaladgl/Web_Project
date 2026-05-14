import Link from "next/link"
import { Heart } from "lucide-react"
import { SocialIcons } from "@/components/social-icons"

const footerLinks = [
  { href: "#anasayfa", label: "Ana Sayfa" },
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#hakkimda", label: "Hakkımda" },
  { href: "#deneyim", label: "Deneyim" },
  { href: "#projeler", label: "Projelerim" },
  { href: "#iletisim", label: "İletişim" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">D</span>
              </div>
              <span className="font-bold text-lg text-foreground">Doğukan M. Aladağlı</span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left text-pretty">
              Bilgisayar Mühendisi
              <br />
              Yazılım & Teknoloji Danışmanlığı
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-4">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex justify-center md:justify-end w-full md:w-auto min-w-0">
            <SocialIcons variant="footer" />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} Doğukan Mehmet Aladağlı. Tüm hakları saklıdır.
          </p>
          <p className="flex items-center gap-1">
            Türkiye&apos;de yapıldı.
          </p>
        </div>
      </div>
    </footer>
  )
}
