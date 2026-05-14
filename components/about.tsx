"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { AnimatedSection, AnimatedStagger, AnimatedItem } from "./animated-section"

//skiller
const skills = [
  { name: "React / Next.js", level: 90, detail: "Modern ve performans odakli arayuzler" },
  { name: "TypeScript", level: 85, detail: "Tip guvenli ve surdurulebilir kod yapisi" },
  { name: "React Native", level: 80, detail: "Tek kod tabaniyla mobil uygulama gelistirme" },
  { name: "Node.js", level: 75, detail: "API ve backend servis gelistirme" },
  { name: "Tailwind CSS", level: 95, detail: "Hizli ve tutarli tasarim sistemi uygulama" },
  { name: "UI/UX Design", level: 70, detail: "Kullanici odakli arayuz planlama" },
]

const CIRCLE_RADIUS = 36
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS

function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const progressOffset = CIRCLE_CIRCUMFERENCE - (skill.level / 100) * CIRCLE_CIRCUMFERENCE

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="rounded-xl border border-border/70 bg-secondary/30 p-5 text-center transition-colors hover:border-primary/40 hover:bg-secondary/50"
    >
      <div className="mx-auto mb-4 relative h-24 w-24">
        <svg className="h-24 w-24 -rotate-90" viewBox="0 0 96 96" aria-hidden="true">
          <circle
            cx="48"
            cy="48"
            r={CIRCLE_RADIUS}
            className="stroke-border"
            strokeWidth="8"
            fill="none"
          />
          <motion.circle
            cx="48"
            cy="48"
            r={CIRCLE_RADIUS}
            className="stroke-primary"
            strokeWidth="8"
            fill="none"
            strokeDasharray={CIRCLE_CIRCUMFERENCE}
            initial={{ strokeDashoffset: CIRCLE_CIRCUMFERENCE }}
            animate={isInView ? { strokeDashoffset: progressOffset } : { strokeDashoffset: CIRCLE_CIRCUMFERENCE }}
            transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
            strokeLinecap="round"
          />
        </svg>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
          className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-foreground"
        >
          {skill.level}%
        </motion.div>
      </div>
      <p className="text-sm font-semibold text-foreground">{skill.name}</p>
      <p className="text-xs text-muted-foreground mt-1">{skill.detail}</p>
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
            Hakkimda
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
            Tutkulu Bir Yazılım Geliştirici
          </h2>
          <div className="space-y-4 text-muted-foreground max-w-3xl">
            <p className="text-pretty">
              Merhaba! Ben <strong className="text-foreground">Doğukan Mehmet Aladağlı</strong>, junior seviyede bir bilgisayar muhendisiyim. Teknolojiye olan tutkum ve surekli ogrenme istegim ile kendimi her gun gelistiriyorum.
            </p>
            <p className="text-pretty">
              Web tasarimi ve mobil uygulama gelistirme konularinda uzmanlaşarak, musterilerimin dijital dunyada guclu bir varlik olusturmalarına yardimci oluyorum. Her projede kalite, kullanici deneyimi ve modern teknolojileri on planda tutuyorum.
            </p>
            <p className="text-pretty">
              Hedefim, teknoloji ile is dunyasi arasinda kopru kurarak, isletmelerin dijital donusum sureclerinde guvenilir bir partner olmak.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-12 rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-foreground mb-6">Teknik Yetenekler</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
