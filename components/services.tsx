"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Globe,
  Smartphone,
  Database,
  Palette,
  ShieldCheck,
  Wrench,
  ArrowUpRight,
} from "lucide-react"
import { AnimatedSection } from "./animated-section"

const services = [
  {
    icon: Globe,
    title: "Web Sitesi Gelistirme",
    description: "Modern, hizli ve SEO uyumlu web siteleri. React, Next.js ve en guncel teknolojilerle kurumsal ve kisisel projeler.",
    features: ["Responsive Tasarim", "SEO Optimizasyonu", "Hizli Yukleme"],
  },
  {
    icon: Smartphone,
    title: "Mobil Uygulama",
    description: "iOS ve Android platformlari icin kullanici dostu mobil uygulamalar. React Native ile cross-platform cozumler.",
    features: ["Cross-Platform", "Kullanici Deneyimi", "Push Bildirimler"],
  },
  {
    icon: Palette,
    title: "UI/UX Tasarim",
    description: "Kullanici odakli arayuz tasarimlari. Modern ve estetik gorsel kimlik olusturma.",
    features: ["Prototipleme", "Kullanici Arastirmasi", "Marka Kimligi"],
  },
  {
    icon: Database,
    title: "Backend Gelistirme",
    description: "Guclu ve olceklenebilir sunucu tarafli cozumler. API gelistirme ve veritabani yonetimi.",
    features: ["API Gelistirme", "Veritabani", "Performans"],
  },
  {
    icon: ShieldCheck,
    title: "Teknoloji Danismanligi",
    description: "Isinizi dijitale tasiyin. Teknoloji secimi, sistem mimarisi ve dijital donusum stratejileri.",
    features: ["Dijital Donusum", "Strateji", "Optimizasyon"],
  },
  {
    icon: Wrench,
    title: "Bakim & Destek",
    description: "Projelerinizin surdurulebilirligi icin duzenli bakim, guncelleme ve teknik destek hizmetleri.",
    features: ["7/24 Destek", "Guvenlik", "Guncellemeler"],
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="flex items-start justify-between mb-4">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
          className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
        >
          <service.icon className="h-6 w-6 text-primary" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ x: 5 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      </div>
      
      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {service.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
      
      <div className="flex flex-wrap gap-2">
        {service.features.map((feature, featureIndex) => (
          <motion.span
            key={feature}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.05 + 0.3 }}
            className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground"
          >
            {feature}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export function Services() {
  return (
    <section id="hizmetler" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Hizmetlerim
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Size Nasil Yardimci Olabilirim?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Yazilim ve teknoloji alaninda sunduğum profesyonel hizmetlerle projelerinizi hayata geciriyorum.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
