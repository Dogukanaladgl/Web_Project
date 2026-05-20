"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
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

const cardBaseClass =
  "group rounded-2xl bg-card border border-border overflow-hidden transition-[transform,border-color,box-shadow] duration-200 ease-out hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0"

function ProjectCard({
  project,
  index,
  layout = "carousel",
}: {
  project: (typeof projects)[0]
  index: number
  layout?: "carousel" | "grid"
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const layoutClass =
    layout === "grid"
      ? "w-full"
      : "shrink-0 snap-start w-[min(22rem,calc(100vw-2.5rem))] sm:w-96 max-w-md"

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`${cardBaseClass} ${layoutClass}`}
    >
      <div className={`aspect-video bg-gradient-to-br ${project.color} relative overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-200 ease-out group-hover:scale-[1.04] motion-reduce:group-hover:scale-100">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-card/80 shadow-lg backdrop-blur-sm transition-transform duration-200 ease-out group-hover:rotate-2 motion-reduce:group-hover:rotate-0">
            <span className="text-3xl font-bold text-primary">{project.title[0]}</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-primary/10 opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 motion-reduce:group-hover:opacity-0">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto flex h-12 w-12 scale-95 items-center justify-center rounded-full bg-card opacity-0 shadow-lg transition-[transform,opacity] duration-200 ease-out group-hover:scale-100 group-hover:opacity-100 hover:scale-105 motion-reduce:opacity-100 motion-reduce:scale-100"
            aria-label={`${project.title} GitHub deposu`}
          >
            <Github className="h-5 w-5 text-foreground" />
          </a>
        </div>
      </div>

      <div className="p-6">
        <h3 className="mb-5 text-xl font-semibold text-foreground transition-colors duration-200 ease-out group-hover:text-primary">
          {project.title}
        </h3>
        <p className="mb-4 text-pretty text-sm text-muted-foreground">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.25,
                delay: index * 0.08 + tagIndex * 0.03 + 0.15,
              }}
              className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.article>
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

function ProjectsCarousel() {
  return (
    <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Proje kartları — yatay kaydırın"
        className="flex gap-6 overflow-x-auto overflow-y-hidden overscroll-x-contain px-4 pb-4 pt-1 snap-x snap-mandatory scroll-smooth scroll-pl-4 scroll-pr-4 sm:px-6 sm:scroll-pl-6 sm:scroll-pr-6 lg:px-8 lg:scroll-pl-8 lg:scroll-pr-8 [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border/70 hover:[&::-webkit-scrollbar-thumb]:bg-border"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background to-transparent sm:w-12"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent sm:w-12"
      />
    </div>
  )
}

export function Projects() {
  const reduceMotion = useReducedMotion()
  const useCarousel = projects.length > 3 && reduceMotion !== true

  return (
    <section
      id="projeler"
      className="relative border-y border-border/25 bg-transparent pt-16 pb-4 sm:pt-20 sm:pb-5"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-5 text-center sm:mb-6">
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

        {useCarousel ? <ProjectsCarousel /> : <ProjectsGrid />}
      </div>
    </section>
  )
}
