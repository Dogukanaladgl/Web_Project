"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import type { IconType } from "react-icons"
import { DiMsqlServer, DiVisualstudio } from "react-icons/di"
import {
  SiAndroidstudio,
  SiCss,
  SiDart,
  SiDocker,
  SiExpo,
  SiFlutter,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiV0,
} from "react-icons/si"
import { VscVscode } from "react-icons/vsc"
import { Code2 } from "lucide-react"
import { AnimatedSection } from "./animated-section"

type Tech = {
  name: string
  icon: IconType
  /** Marka rengi veya tema uyumlu ikon için "theme" */
  color: string
}

type TechGroup = {
  title: string
  items: Tech[]
}

/** react-icons/si içinde yok — Simple Icons EmailJS */
const EmailJsIcon: IconType = (props) => (
  <svg viewBox="0 0 24 24" role="img" aria-hidden {...props}>
    <path
      fill="currentColor"
      d="M22.009 7.724V4.786a1.785 1.785 0 0 0-1.784-1.785h-3.84c-.686 0-1.275.388-1.575.955a1.787 1.787 0 0 0-1.575-.955H2.794A1.785 1.785 0 0 0 1.01 4.786v2.938l9.999 6.25 10-6.25zm0 1.811-10 6.25-10-6.25v10.675c0 .987.798 1.785 1.784 1.785h16.432a1.785 1.785 0 0 0 1.784-1.785V9.535z"
    />
  </svg>
)

const techGroups: TechGroup[] = [
  {
    title: "Mobil",
    items: [
      { name: "Dart", icon: SiDart, color: "#0175C2" },
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "Expo", icon: SiExpo, color: "#4630EB" },
      { name: "Android Studio", icon: SiAndroidstudio, color: "#3DDC84" },
    ],
  },
  {
    title: "Web & API",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "theme" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "HTML 5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS 3", icon: SiCss, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "v0", icon: SiV0, color: "theme" },
      { name: "EmailJS", icon: EmailJsIcon, color: "#32325D" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MsSQL", icon: DiMsqlServer, color: "#CC2927" },
    ],
  },
  {
    title: "Araçlar & DevOps",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Visual Studio", icon: DiVisualstudio, color: "#5C2D91" },
    ],
  },
]

function TechGroupSection({
  group,
  indexOffset,
}: {
  group: TechGroup
  indexOffset: number
}) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-semibold tracking-wide text-foreground">{group.title}</h4>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4">
        {group.items.map((tech, i) => (
          <TechCard key={tech.name} tech={tech} index={indexOffset + i} />
        ))}
      </div>
    </div>
  )
}

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
          <div className="space-y-8">
            {techGroups.map((group, groupIndex) => {
              const indexOffset = techGroups
                .slice(0, groupIndex)
                .reduce((sum, g) => sum + g.items.length, 0)
              return (
                <TechGroupSection
                  key={group.title}
                  group={group}
                  indexOffset={indexOffset}
                />
              )
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
