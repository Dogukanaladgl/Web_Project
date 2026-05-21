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
} from "lucide-react"
import { AnimatedSection } from "./animated-section"

import "./flip-card.css"

// Hizmetlerim Kısmı Kartları
const services = [
  {
    icon: Globe,
    title: "Web Sitesi Geliştirme",
    description:
      "Modern, hızlı ve SEO uyumlu web siteleri. React, Next.js ve en güncel teknolojilerle kurumsal ve kişisel projeler.",
    features: ["Responsive Tasarım", "SEO Optimizasyonu", "Hızlı Yükleme"],
  },
  {
    icon: Smartphone,
    title: "Mobil Uygulama",
    description:
      "iOS ve Android platformları için kullanıcı dostu mobil uygulamalar. React Native ile cross-platform çözümler.",
    features: ["Cross-Platform", "React Native", "Dart", "Expo Go", "Firebase"],
  },
  {
    icon: Palette,
    title: "UI/UX Tasarım",
    description: "Kullanıcı odaklı arayüz tasarımları. Modern ve estetik görsel kimlik oluşturma.",
    features: ["Prototipleme", "Kullanıcı Araştırması", "Marka Kimligi"],
  },
  {
    icon: Database,
    title: "Backend Gelistirme",
    description:
      "Güçlü ve ölçeklenebilir sunucu tarafı çözümleri. API geliştirme ve veritabanı yönetimi.",
    features: ["API Geliştirme", "Veritabanı", "Performans"],
  },
  {
    icon: ShieldCheck,
    title: "Teknoloji Danışmanlığı",
    description:
      "İşinizi dijitale taşıyın. Teknoloji seçimi, sistem mimarisi ve dijital dönüşüm stratejileri.",
    features: ["Dijital Dönüşüm", "Optimizasyon", "Mimari Seçimi", "Teknoloji Seçimi"],
  },
  {
    icon: Wrench,
    title: "Bakım & Destek",
    description:
      "Projelerinizin sürdürülebilirliği için düzenli bakım, güncelleme ve teknik destek hizmetleri.",
    features: ["7/24 Destek", "Güvenlik", "Güncellemeler", "Bakım"],
  },
]

function ServiceIconBox({
  Icon,
  isInView,
  index,
}: {
  Icon: (typeof services)[0]["icon"]
  isInView: boolean
  index: number
}) {
  return (
    <motion.div
      initial={{ scale: 0.85, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.85, opacity: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 + 0.1, type: "spring", stiffness: 260 }}
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/15"
    >
      <Icon className="h-6 w-6 text-primary" aria-hidden />
    </motion.div>
  )
}

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="h-full"
    >
      {/* Mobil: flip yok — ikon + başlık, açıklama, teknolojiler alt alta */}
      <article
        className="md:hidden flex flex-col rounded-[calc(var(--radius)+4px)] border border-border bg-card p-5 text-left shadow-[0_8px_24px_oklch(0_0_0/0.25)] [background-image:radial-gradient(ellipse_120%_80%_at_50%_-20%,color-mix(in_oklch,var(--primary)_18%,transparent),transparent_55%)]"
      >
        <div className="flex items-start gap-3">
          <ServiceIconBox Icon={Icon} isInView={isInView} index={index} />
          <h3 className="min-w-0 flex-1 pt-1 text-lg font-bold leading-snug text-foreground">
            {service.title}
          </h3>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
        <ul className="mt-4 flex flex-col gap-2 border-t border-border/60 pt-4" aria-label="Kullanılan teknolojiler">
          {service.features.map((feature) => (
            <li key={feature}>
              <span className="inline-flex w-full items-center justify-center rounded-full border border-border/80 bg-secondary px-3 py-1.5 text-center text-xs font-medium text-foreground">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </article>

      {/* Masaüstü: mevcut flip kart (md ve üzeri) */}
      <div className="hidden h-full min-h-[300px] md:block">
        <div
          className="flip-card h-full min-h-[300px] rounded-[calc(var(--radius)+4px)] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          tabIndex={0}
          role="group"
          aria-label={`${service.title}: ayrıntılar için üzerine gelin veya odağı verin`}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.85, opacity: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 + 0.1, type: "spring", stiffness: 260 }}
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/15"
              >
                <Icon className="h-7 w-7 text-primary" aria-hidden />
              </motion.div>
              <h3 className="text-lg font-bold leading-snug text-foreground sm:text-xl">{service.title}</h3>
            </div>

            <div className="flip-card-back">
              <div className="flip-card-back__body">
                <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 border-t border-border/60 pt-4">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="inline-flex items-center rounded-full border border-border/80 bg-secondary px-3 py-1.5 text-xs font-medium text-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Services() {
  return (
    <section id="hizmetler" className="relative border-y border-border/25 bg-transparent py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Hizmetlerim
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Size Nasıl Yardımcı Olabilirim?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Yazılım ve teknoloji alanında sunduğum profesyonel hizmetlerle projelerinizi hayata geçiriyorum.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
