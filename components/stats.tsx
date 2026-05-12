"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Code2, Users, FolderGit2, Coffee } from "lucide-react"

const stats = [
  { icon: FolderGit2, value: 5, suffix: "+", label: "Tamamlanan Proje" },
  { icon: Users, value: 10, suffix: "+", label: "Mutlu Müşteri" },
  { icon: Code2, value: 10000, suffix: "+", label: "Satır Kod" },
  { icon: Coffee, value: 500, suffix: "+", label: "İçilen Kahve Sayısı" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count.toLocaleString("tr-TR")}
      {suffix}
    </span>
  )
}

export function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative border-y border-border/20 bg-transparent py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1, type: "spring", stiffness: 200 }}
                className="mx-auto w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4"
              >
                <stat.icon className="h-6 w-6 text-primary" />
              </motion.div>
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
