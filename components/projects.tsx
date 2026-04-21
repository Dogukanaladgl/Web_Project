import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "E-Ticaret Platformu",
    description: "Modern ve kullanıcı dostu bir e-ticaret web sitesi. Ödeme entegrasyonu, stok yönetimi ve admin paneli ile tam kapsamlı çözüm.",
    image: "/placeholder-project-1.jpg",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Mobil Fitness Uygulaması",
    description: "Kişiselleştirilmiş antrenman programları ve beslenme takibi sunan cross-platform mobil uygulama.",
    image: "/placeholder-project-2.jpg",
    tags: ["React Native", "Firebase", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Kurumsal Web Sitesi",
    description: "Şık ve profesyonel kurumsal kimlik yansıtan, SEO optimizasyonlu ve hızlı yüklenen web sitesi.",
    image: "/placeholder-project-3.jpg",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Yönetim Uygulaması",
    description: "Ekip işbirliği için tasarlanmış, gerçek zamanlı güncellemeler ve bildirimlerle proje yönetim aracı.",
    image: "/placeholder-project-4.jpg",
    tags: ["Next.js", "Socket.io", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function Projects() {
  return (
    <section id="projeler" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Portföy
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Son Projelerim
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Geliştirdiğim projelerden bazıları. Her biri farklı teknolojiler ve çözümler içeriyor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">{project.title[0]}</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 text-pretty">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button asChild size="sm" variant="outline" className="flex-1">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Kaynak Kod
                    </a>
                  </Button>
                  <Button asChild size="sm" className="flex-1">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Canlı Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
