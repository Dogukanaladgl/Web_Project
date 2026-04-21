import Link from "next/link"
import { ArrowRight, Code2, Smartphone, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="anasayfa" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm text-muted-foreground">Yeni projelere açığım</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            <span className="text-foreground">Merhaba, Ben</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary to-emerald-400 bg-clip-text text-transparent">
              Doğukan Mehmet
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Junior Bilgisayar Mühendisi olarak <strong className="text-foreground">web tasarımı</strong>, <strong className="text-foreground">mobil uygulama geliştirme</strong> ve <strong className="text-foreground">teknolojik danışmanlık</strong> hizmetleri sunuyorum.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="group">
              <Link href="#iletisim">
                Benimle İletişime Geç
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#projeler">Projelerimi İncele</Link>
            </Button>
          </div>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Globe className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Web Tasarım</h3>
              <p className="text-sm text-muted-foreground mt-1">Modern ve responsive</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Smartphone className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Mobil Uygulama</h3>
              <p className="text-sm text-muted-foreground mt-1">iOS ve Android</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Code2 className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Danışmanlık</h3>
              <p className="text-sm text-muted-foreground mt-1">Teknoloji çözümleri</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
