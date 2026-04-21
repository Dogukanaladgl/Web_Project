import { Code2, GraduationCap, Rocket, Users } from "lucide-react"

const stats = [
  { icon: Code2, value: "10+", label: "Proje Tamamlandı" },
  { icon: Users, value: "15+", label: "Mutlu Müşteri" },
  { icon: Rocket, value: "2+", label: "Yıl Deneyim" },
  { icon: GraduationCap, value: "BSc", label: "Bilgisayar Müh." },
]

const skills = [
  { name: "React / Next.js", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "React Native", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "Tailwind CSS", level: 95 },
  { name: "UI/UX Design", level: 70 },
]

export function About() {
  return (
    <section id="hakkimda" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Hakkımda
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
              Tutkulu Bir Yazılım Geliştiricisi
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-pretty">
                Merhaba! Ben <strong className="text-foreground">Doğukan Mehmet Aladağlı</strong>, junior seviyede bir bilgisayar mühendisiyim. Teknolojiye olan tutkum ve sürekli öğrenme isteğim ile kendimi her gün geliştiriyorum.
              </p>
              <p className="text-pretty">
                Web tasarımı ve mobil uygulama geliştirme konularında uzmanlaşarak, müşterilerimin dijital dünyada güçlü bir varlık oluşturmalarına yardımcı oluyorum. Her projede kalite, kullanıcı deneyimi ve modern teknolojileri ön planda tutuyorum.
              </p>
              <p className="text-pretty">
                Hedefim, teknoloji ile iş dünyası arasında köprü kurarak, işletmelerin dijital dönüşüm süreçlerinde güvenilir bir partner olmak.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-card border border-border">
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">Teknik Yetenekler</h3>
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-emerald-400 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
