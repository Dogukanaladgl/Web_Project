"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react"
import { AnimatedSection, AnimatedStagger, AnimatedItem } from "./animated-section"

const timelineData = [
  {
    type: "education" as const,
    title: "Bilgisayar Muhendisligi",
    organization: "Universite",
    location: "Turkiye",
    period: "2019 - 2023",
    description: "Bilgisayar Muhendisligi bolumunden mezun oldum. Yazilim gelistirme, veri yapilari, algoritmalar ve sistem tasarimi konularinda kapsamli egitim aldim.",
    highlights: ["Yazilim Muhendisligi", "Veri Yapilari", "Algoritma Analizi", "Veritabani Sistemleri"],
  },
  {
    type: "work" as const,
    title: "Junior Software Engineer",
    organization: "Freelance",
    location: "Turkiye",
    period: "2023 - Devam Ediyor",
    description: "Web ve mobil uygulama gelistirme projelerinde calisiyorum. Modern teknolojiler kullanarak musterilerin dijital ihtiyaclarini karsiliyorum.",
    highlights: ["Next.js", "React Native", "TypeScript", "Node.js"],
  },
  {
    type: "education" as const,
    title: "Lise Egitimi",
    organization: "Anadolu Lisesi",
    location: "Turkiye",
    period: "2015 - 2019",
    description: "Sayisal bolumden mezun oldum. Matematik ve fen bilimlerine olan ilgim bu donemde basladi.",
    highlights: ["Matematik", "Fizik", "Bilgisayar"],
  },
]

function TimelineCard({
  item,
  index,
}: {
  item: (typeof timelineData)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const isEducation = item.type === "education"
  const Icon = isEducation ? GraduationCap : Briefcase

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      {/* Timeline line connector */}
      <div className="absolute left-6 top-14 bottom-0 w-px bg-gradient-to-b from-primary/50 to-border hidden md:block" />
      
      <div className="flex gap-4 md:gap-6">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
          className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
            isEducation ? "bg-primary/10 text-primary" : "bg-accent text-accent-foreground"
          }`}
        >
          <Icon className="h-5 w-5" />
        </motion.div>

        {/* Content Card */}
        <div className="flex-1 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
            className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div>
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium mb-2 ${
                  isEducation ? "bg-primary/10 text-primary" : "bg-accent text-accent-foreground"
                }`}>
                  {isEducation ? "Egitim" : "Is Deneyimi"}
                </span>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.organization}</p>
              </div>
              <div className="flex flex-col sm:items-end gap-1 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{item.period}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4 text-pretty">{item.description}</p>

            <div className="flex flex-wrap gap-2">
              {item.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export function Timeline() {
  return (
    <section id="deneyim" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Egitim ve Kariyer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Zaman Cizelgem
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Egitim hayatim ve profesyonel kariyer yolculugum
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          {timelineData.map((item, index) => (
            <TimelineCard key={`${item.type}-${item.title}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
