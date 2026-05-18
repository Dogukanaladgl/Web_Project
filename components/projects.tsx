"use client"

import { useLayoutEffect, useRef, useState } from "react"
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion"
import { Github } from "lucide-react"
import { AnimatedSection } from "./animated-section"

// Projelerim Kısmı Kartları
const projects = [

  {
    title: "Mobil Buzdolabı Uygulaması",
    description:
      "Buzdolabınızda bulunan ürünlerin son kullanma tarihleri yaklaştıkça alarm vermesini sağlayan cross-platform mobil uygulama. Bu ",
    image: "/placeholder-project-2.jpg",
    tags: ["Flutter","Dart", "Firebase", "Android", "iOS"],
    githubUrl: "#",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Kütüphane Rezervasyon Sistemi",
    description:
      "Yüksek sayıda kullanıcıya hizmet veren kütüphanelerde saatlik kullanım hakları tanıyan ve farklı kullanım durumlarına olanak tanıyan rezervasyon sistemi.",
    image: "/placeholder-project-3.jpg",
    tags: ["React", "Flutter","Dart", "Nest.js", "PostgreSQL","TypeScript","Android","iOS"],
    githubUrl: "#",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Kişisel Web Sitesi",
    description:
      "Yüksek sayıda kullanıcıya hizmet veren kütüphanelerde saatlik kullanım hakları tanıyan ve farklı kullanım durumlarına olanak tanıyan rezervasyon sistemi.",
    image: "/placeholder-project-3.jpg",
    tags: ["React","TypeScript","CSS"],
    githubUrl: "#",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Task Yonetim Uygulamasi",
    description:
      "Ekip isbirligi icin tasarlanmis, gercek zamanli guncellemeler ve bildirimlerle proje yonetim araci.",
    image: "/placeholder-project-4.jpg",
    tags: ["Next.js", "Socket.io", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-orange-500/20 to-amber-500/20",
  },
]

function ProjectCard({
  project,
  index,
  scrollLinked,
  layout = "carousel",
}: {
  project: (typeof projects)[0]
  index: number
  scrollLinked?: boolean
  layout?: "carousel" | "grid"
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={scrollLinked ? false : { opacity: 0, y: 50 }}
      animate={
        scrollLinked ? { opacity: 1, y: 0 } : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
      }
      transition={{ duration: 0.6, delay: scrollLinked ? 0 : index * 0.15 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={
        layout === "grid"
          ? "group w-full rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
          : "group shrink-0 snap-start rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 w-[min(22rem,calc(100vw-2.5rem))] sm:w-96 max-w-md"
      }
    >
      <div className={`aspect-video bg-gradient-to-br ${project.color} relative overflow-hidden`}>
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.div
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 5 }}
            className="w-20 h-20 rounded-2xl bg-card/80 backdrop-blur-sm flex items-center justify-center shadow-lg"
          >
            <span className="text-3xl font-bold text-primary">{project.title[0]}</span>
          </motion.div>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-primary/10 flex items-center justify-center"
        >
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            className="w-12 h-12 rounded-full bg-card flex items-center justify-center shadow-lg"
            aria-label={`${project.title} GitHub deposu`}
          >
            <Github className="h-5 w-5 text-foreground" />
          </motion.a>
        </motion.div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-5 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 text-pretty">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                scrollLinked || isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{
                duration: 0.3,
                delay: scrollLinked ? 0 : index * 0.15 + tagIndex * 0.05 + 0.3,
              }}
              className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground"
            >
              {tag}
            </motion.span>
          ))}
        </div>

      </div>
    </motion.div>
  )
}

function ProjectsScrollStrip() {
  const containerRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [scrollMax, setScrollMax] = useState(0)

  useLayoutEffect(() => {
    const track = trackRef.current
    const sticky = stickyRef.current
    if (!track || !sticky) return

    const measure = () => {
      const vw = sticky.clientWidth
      const max = Math.max(0, track.scrollWidth - vw)
      setScrollMax(max)
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(track)
    ro.observe(sticky)
    window.addEventListener("resize", measure)
    return () => {
      ro.disconnect()
      window.removeEventListener("resize", measure)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollMax])

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={
        scrollMax > 0
          ? { height: `calc(100dvh + ${scrollMax}px)` }
          : { minHeight: "min(80dvh, 36rem)" }
      }
    >
      <div
        ref={stickyRef}
        data-projects-sticky
        className="sticky top-0 flex h-[100dvh] max-h-[100vh] items-center overflow-hidden"
      >
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex w-max gap-6 will-change-transform pl-4 pr-4 sm:pl-6 sm:pr-6 lg:pl-8 lg:pr-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} scrollLinked />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

function ProjectsGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2"
    >
      {projects.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} layout="grid" />
      ))}
    </motion.div>
  )
}

function ProjectsOverflowFallback() {
  return (
    <div className="-mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Proje kartları — yatay kaydırın"
        className="flex gap-6 overflow-x-auto overflow-y-hidden pb-4 pt-1 snap-x snap-mandatory scroll-smooth scroll-pl-4 scroll-pr-4 sm:scroll-pl-6 sm:scroll-pr-6 [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border/70 hover:[&::-webkit-scrollbar-thumb]:bg-border"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}

export function Projects() {
  const reduceMotion = useReducedMotion()
  const preferOverflowScroll = reduceMotion === true
  const useScrollStrip = projects.length > 3 && !preferOverflowScroll

  return (
    <section id="projeler" className="relative border-y border-border/25 bg-transparent py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-8 text-center sm:mb-10">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Portfolyo
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Projelerim
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Geliştirdiğim projelerden bazıları aşağıda listelenmektedir. Dilediğiniz projeyi inceleyebilir; projede kullanılan teknolojileri ve programlama dilleri görebilirsiniz.
          </p>
        </AnimatedSection>

        {useScrollStrip ? (
          <ProjectsScrollStrip />
        ) : preferOverflowScroll ? (
          <ProjectsOverflowFallback />
        ) : (
          <ProjectsGrid />
        )}
      </div>
    </section>
  )
}
