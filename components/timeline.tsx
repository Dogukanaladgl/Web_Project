"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useScroll, useTransform, useSpring, useMotionValue, animate } from "framer-motion"
import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const timelineData = [
  {
    type: "education" as const,
    title: "Bilgisayar Mühendisliği",
    organization: "Üniversite",
    location: "Türkiye",
    period: "2022 - 2026",
    description: "Selçuk Üniversitesi Bilgisayar Mühendisliği bölümünden 3.3 not ortalaması ile mezun oldum. Yazılım geliştirme, veri yapıları, algoritmalar ve sistem tasarımı konularında kapsamlı bir eğitim aldım.",
    highlights: ["Mobil Programlama", "Web Programlama","Yazılım Mühendisliği", "Veri Yapıları", "Algoritma Analizi", "Veritabanı Sistemleri","Yapay Zeka"], 
  },
  {
    type: "work" as const,
    title: "Stajyer ",
    organization: "Selçuk Üniversitesi Dijital Bilgi Teknolojileri ve Uygulama Birimi",
    location: "Türkiye",
    period: "2026 Kasım - Devam Ediyor",
    description: "Web ve mobil uygulama gelistirme projelerinde etkin olarak rol aldım. Bu alanda modern teknolojiler kullanarak müşterilerin dijital ihtiyaçlarını karşılamak için elimden geleni yapıyorum.",
    highlights: ["Dart", "React Native", "TypeScript", "Node.js","Nest.js","Firebase",],
  },
  {
    type: "education" as const,
    title: "Lise Eğitimi",
    organization: "Nevşehir Merkez Anadolu Lisesi",
    location: "Türkiye",
    period: "2017 - 2021",
    description: "2021 yılında Nevşehir Merkez Anadolu Lisesinden mezun oldum.",
    highlights: [],
  },
]

function TimelineCard({
  item,
  index,
  isActive,
}: {
  item: (typeof timelineData)[0]
  index: number
  isActive: boolean
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isEducation = item.type === "education"
  const Icon = isEducation ? GraduationCap : Briefcase

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative pl-8 md:pl-12"
    >
      {/* Glowing dot on timeline */}
      <motion.div
        className="absolute left-0 md:left-3 top-6 z-20"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.3, type: "spring", stiffness: 300 }}
      >
        {/* Outer glow ring */}
        <motion.div
          className={`absolute -inset-2 rounded-full ${
            isActive ? "bg-primary/30" : "bg-primary/10"
          }`}
          animate={isActive ? {
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Inner dot */}
        <motion.div
          className={`relative w-4 h-4 rounded-full border-2 transition-all duration-500 ${
            isActive 
              ? "bg-primary border-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.8)]" 
              : "bg-background border-primary/50"
          }`}
          animate={isActive ? {
            boxShadow: [
              "0 0 10px rgba(59, 130, 246, 0.5)",
              "0 0 25px rgba(59, 130, 246, 0.8)",
              "0 0 10px rgba(59, 130, 246, 0.5)",
            ],
          } : {}}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
        className={`group relative rounded-2xl border bg-card p-6 mb-8 transition-all duration-500 overflow-hidden ${
          isActive 
            ? "border-primary/70 shadow-lg shadow-primary/20" 
            : "border-border hover:border-primary/30"
        }`}
      >
        {/* Animated light sweep effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
            animate={isActive ? {
              x: ["-100%", "200%"],
            } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
          />
        </motion.div>

        {/* Top accent glow */}
        <motion.div
          className={`absolute top-0 left-0 right-0 h-px transition-opacity duration-500 ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent)",
          }}
        />

        {/* Icon badge */}
        <motion.div
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4 transition-all duration-500 ${
            isEducation 
              ? isActive ? "bg-primary/20 text-primary" : "bg-primary/10 text-primary" 
              : isActive ? "bg-accent/80 text-accent-foreground" : "bg-accent text-accent-foreground"
          }`}
          animate={isActive ? { scale: [1, 1.02, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Icon className="h-3.5 w-3.5" />
          <span>{isEducation ? "Egitim" : "Is Deneyimi"}</span>
        </motion.div>

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <div>
            <h3 className={`text-lg font-semibold transition-colors duration-300 ${
              isActive ? "text-primary" : "text-foreground group-hover:text-primary"
            }`}>
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
          {item.highlights.map((highlight, i) => (
            <motion.span
              key={highlight}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: index * 0.2 + 0.5 + i * 0.05 }}
              className={`px-3 py-1 rounded-full text-xs transition-all duration-300 ${
                isActive 
                  ? "bg-primary/10 text-primary border border-primary/20" 
                  : "bg-secondary text-muted-foreground"
              }`}
            >
              {highlight}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(-1)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Track which card is active based on scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      const newIndex = Math.floor(value * timelineData.length)
      setActiveIndex(Math.min(newIndex, timelineData.length - 1))
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"])

  return (
    <section id="deneyim" className="py-24 overflow-hidden">
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

        <div ref={containerRef} className="max-w-3xl mx-auto relative">
          {/* Timeline track */}
          <div className="absolute left-[7px] md:left-[19px] top-6 bottom-6 w-[2px]">
            {/* Background track */}
            <div className="absolute inset-0 bg-border/50 rounded-full" />
            
            {/* Animated glowing line */}
            <motion.div
              className="absolute top-0 left-0 w-full rounded-full origin-top"
              style={{
                height: lineHeight,
                background: "linear-gradient(180deg, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.8) 50%, rgba(59, 130, 246, 1) 100%)",
                boxShadow: "0 0 15px rgba(59, 130, 246, 0.6), 0 0 30px rgba(59, 130, 246, 0.4)",
              }}
            />
            
            {/* Moving light orb */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
              style={{
                top: lineHeight,
                background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(59, 130, 246, 1) 50%, transparent 100%)",
                boxShadow: "0 0 20px rgba(59, 130, 246, 1), 0 0 40px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.6)",
              }}
            >
              {/* Trailing particles */}
              <motion.div
                className="absolute -top-8 left-1/2 -translate-x-1/2 w-1 h-8"
                style={{
                  background: "linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.8) 100%)",
                }}
              />
            </motion.div>
          </div>

          {/* Timeline items */}
          <div ref={timelineRef}>
            {timelineData.map((item, index) => (
              <TimelineCard 
                key={`${item.type}-${item.title}`} 
                item={item} 
                index={index}
                isActive={index <= activeIndex}
              />
            ))}
          </div>

          {/* End marker */}
          <motion.div
            className="absolute left-0 md:left-3 bottom-0 w-4 h-4"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="w-full h-full rounded-full bg-primary/20 border-2 border-primary/50"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
