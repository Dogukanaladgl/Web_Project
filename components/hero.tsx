"use client"

import { motion } from "framer-motion"
import { SectionLink } from "@/components/section-link"
import { ArrowRight, BriefcaseBusiness, GraduationCap, Mail, MapPin, Sparkles, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const profileHighlights = [
  { label: "Konum", value: "Konya, Türkiye", icon: MapPin },
  { label: "Uzmanlık Alanı", value: "Web ve Mobil Geliştirme", icon: BriefcaseBusiness },
  { label: "Eğitim", value: "Bilgisayar Mühendisliği", icon: GraduationCap },
]


const focusAreas = ["React Native","Dart", "TypeScript", "Nest.js", "Node.js", "PostgreSQL","MsSQL", "Firebase", "UI/UX","HTML","CSS"]

export function Hero() {
  return (
    <section id="anasayfa" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
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

              <span className="text-sm text-muted-foreground">Profil</span>
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
              Yazılım geliştirmeyi sadece kod yazmak değil, kullanıcıya gerçekten fayda sağlayan ürünler 
              ortaya çıkarmak olarak görüyorum.Web, mobil ve backend tarafında modern teknolojilerle çalışıyor; 
              öğrenmeye, üretmeye ve kendimi sürekli geliştirmeye devam ediyorum.
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
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex cursor-default items-center rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
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
                <SectionLink sectionId="iletisim">
                  Benimle İletişime Geç
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </SectionLink>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <SectionLink sectionId="projeler">Projelerimi İncele</SectionLink>
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
                <p className="text-lg font-semibold text-foreground">Doğukan M. Aladağlı</p>
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
              <Button asChild variant="outline" className="w-full">
                <SectionLink sectionId="iletisim">
                  <Mail className="h-4 w-4 mr-2" />
                  Teklif ve İş Birliği İçin İletişime Geç
                </SectionLink>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <SectionLink sectionId="deneyim">
                  <Download className="h-4 w-4 mr-2" />
                  Deneyimlerimi Gor
                </SectionLink>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
