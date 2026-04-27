import Link from "next/link"
import { ArrowRight, BriefcaseBusiness, GraduationCap, Mail, MapPin, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const profileHighlights = [
  { label: "Konum", value: "Turkiye", icon: MapPin },
  { label: "Uzmanlik", value: "Web ve Mobil Gelistirme", icon: BriefcaseBusiness },
  { label: "Egitim", value: "Bilgisayar Muhendisligi", icon: GraduationCap },
]

const focusAreas = ["Next.js", "TypeScript", "React Native", "UI/UX", "Node.js"]

export function Hero() {
  return (
    <section id="anasayfa" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 xl:gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Profil Ozeti</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              <span className="text-foreground">Merhaba, ben</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                Dogukan Mehmet Aladagli
              </span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-2xl text-pretty">
              Yazilim odakli bir profil olarak modern web ve mobil urunler gelistiriyorum. Kullanici deneyimi,
              performans ve temiz kod prensiplerini bir araya getirerek markalarin dijitalde guclu bir ilk izlenim
              birakmasina yardimci oluyorum.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground"
                >
                  {area}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <Button asChild size="lg" className="group w-full sm:w-auto">
                <Link href="#iletisim">
                  Benimle Iletisime Gec
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="#projeler">Projelerimi Incele</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card/90 backdrop-blur-sm p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-4 pb-6 border-b border-border">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold">
                DM
              </div>
              <div>
                <p className="text-lg font-semibold text-foreground">Dogukan Mehmet</p>
                <p className="text-sm text-muted-foreground">Junior Software Engineer</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {profileHighlights.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="mt-0.5 h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <Button asChild variant="secondary" className="w-full">
                <Link href="#iletisim">
                  <Mail className="h-4 w-4 mr-2" />
                  Teklif ve Is Birligi Icin Ulas
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
