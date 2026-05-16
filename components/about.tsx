"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import type { IconType } from "react-icons"
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiExpo,
  SiNodedotjs,
  SiTailwindcss,
  SiFigma,
  SiGit,
  SiPostgresql,
} from "react-icons/si"
import { Code2 } from "lucide-react"
import { AnimatedSection } from "./animated-section"

type Tech = {
  name: string
  icon: IconType
  /** Marka rengi veya tema uyumlu ikon için "theme" */
  color: string
}

const techStack: Tech[] = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss, color: "#1572B6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "theme" },
  { name: "React Native", icon: SiExpo, color: "#4630EB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Git", icon: SiGit, color: "#F05032" },
]

function TechCard({ tech, index }: { tech: Tech; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })
  const Icon = tech.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="flex flex-col items-center justify-center gap-3 rounded-xl border border-border/70 bg-secondary/30 px-3 py-5 text-center transition-colors hover:border-primary/40 hover:bg-secondary/50"
    >
      <Icon
        className={`h-10 w-10 shrink-0 ${tech.color === "theme" ? "text-foreground" : ""}`}
        style={tech.color === "theme" ? undefined : { color: tech.color }}
        aria-hidden
      />
      <span className="text-sm font-medium text-foreground">{tech.name}</span>
    </motion.div>
  )
}

// Hakkımda 
export function About() {
  return (
    <section id="hakkimda" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Hakkımda
          </span>
          
          <div className="space-y-4 text-muted-foreground max-w-3xl">
            <p className="text-pretty">
              Merhaba! Ben <strong className="text-foreground">Doğukan Mehmet Aladağlı</strong>, junior seviyede bir bilgisayar mühendisiyim. Teknolojiye olan merakım ve sürekli öğrenme isteğim sayesinde her geçen gün teknoloji alanında yeni bilgiler öğrenip kendimi bu alanda geliştirmeye çalışıyorum.
            </p>
            <p className="text-pretty">
              Özellikle mobil uygulama geliştirme ve web tasarımı konularında uzmanlaşarak, müşterilerimin dijital dünyada güçlü bir varlık olma yolunda yardımımı sağlamak istiyorum. Her projede kalite, kullanıcı deneyimi ve modern teknolojileri ön planda tutuyorum.
            </p>
            <p className="text-pretty">
              Hedefim, teknoloji ile iş dünyası arasında köprü kurarak, işletmelerin dijital dönüşüm süreçlerinde güvenilir bir partner olmak.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-12 rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 shadow-[0_0_20px_-4px] shadow-primary/40">
              <Code2 className="h-5 w-5 text-primary" aria-hidden />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Teknik Yetenekler</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <TechCard key={tech.name} tech={tech} index={index} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
