"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, BriefcaseBusiness, GraduationCap, Mail, MapPin, Sparkles, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const profileHighlights = [
  { label: "Konum", value: "Konya, Türkiye", icon: MapPin },
  { label: "Uzmanlık Alanı", value: "Web ve Mobil Geliştirme", icon: BriefcaseBusiness },
  { label: "Eğitim", value: "Bilgisayar Mühendisliği", icon: GraduationCap },
]


const focusAreas = ["Nest.js", "PostgreSQL", "TypeScript", "React Native","Dart", "UI/UX", "Node.js","HTML","CSS",""]

export function Hero() {
  return (
    <section id="anasayfa" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        />
        
        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 xl:gap-14 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8"
            >
              <Sparkles className="h-4 w-4 text-primary" />

              <span className="text-sm text-muted-foreground">Profil Ozeti</span>
            </motion.div>

              


            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance"
            >
              <span className="text-foreground">Merhaba, ben</span>
              <br />

              <motion.span
                className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Doğukan Mehmet Aladağlı
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground max-w-2xl text-pretty"
            >
              Yazilim odakli bir profil olarak modern web ve mobil urunler gelistiriyorum. Kullanici deneyimi,
              performans ve temiz kod prensiplerini bir araya getirerek markalarin dijitalde guclu bir ilk izlenim
              birakmasina yardimci oluyorum.
            </motion.p>

              


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {focusAreas.map((area, index) => (
                <motion.span
                  key={area}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  whileHover={{ scale: 1.05, backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
                  className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground cursor-default transition-colors"
                >
                  {area}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row items-center sm:items-start gap-4"
            >
              <Button asChild size="lg" className="group w-full sm:w-auto">
                <Link href="#iletisim">
                  Benimle İletişime Geç
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="#projeler">Projelerimi İncele</Link>
              </Button>
            </motion.div>
          </div>

          {/* Right card */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="rounded-2xl border border-border bg-card/90 backdrop-blur-sm p-6 sm:p-8 shadow-sm"
          >
            <div className="flex items-center gap-4 pb-6 border-b border-border">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 200 }}
                className="h-16 w-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold"
              >
                DM
              </motion.div>
              <div>
                <p className="text-lg font-semibold text-foreground">Doğukan Mehmet</p>
                <p className="text-sm text-muted-foreground">Computer Engineer</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {profileHighlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-6 pt-6 border-t border-border space-y-3"
            >
              <Button asChild variant="secondary" className="w-full">
                <Link href="#iletisim">
                  <Mail className="h-4 w-4 mr-2" />
                  Teklif ve İş Birliği İçin İletişime Geç
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="#deneyim">
                  <Download className="h-4 w-4 mr-2" />
                  Deneyimlerimi Gor
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
