import {
  Globe,
  Smartphone,
  Database,
  Palette,
  ShieldCheck,
  Wrench,
  ArrowUpRight,
} from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web Sitesi Geliştirme",
    description: "Modern, hızlı ve SEO uyumlu web siteleri. React, Next.js ve en güncel teknolojilerle kurumsal ve kişisel projeler.",
    features: ["Responsive Tasarım", "SEO Optimizasyonu", "Hızlı Yükleme"],
  },
  {
    icon: Smartphone,
    title: "Mobil Uygulama",
    description: "iOS ve Android platformları için kullanıcı dostu mobil uygulamalar. React Native ile cross-platform çözümler.",
    features: ["Cross-Platform", "Kullanıcı Deneyimi", "Push Bildirimler"],
  },
  {
    icon: Palette,
    title: "UI/UX Tasarım",
    description: "Kullanıcı odaklı arayüz tasarımları. Modern ve estetik görsel kimlik oluşturma.",
    features: ["Prototipleme", "Kullanıcı Araştırması", "Marka Kimliği"],
  },
  {
    icon: Database,
    title: "Backend Geliştirme",
    description: "Güçlü ve ölçeklenebilir sunucu taraflı çözümler. API geliştirme ve veritabanı yönetimi.",
    features: ["API Geliştirme", "Veritabanı", "Performans"],
  },
  {
    icon: ShieldCheck,
    title: "Teknoloji Danışmanlığı",
    description: "İşinizi dijitale taşıyın. Teknoloji seçimi, sistem mimarisi ve dijital dönüşüm stratejileri.",
    features: ["Dijital Dönüşüm", "Strateji", "Optimizasyon"],
  },
  {
    icon: Wrench,
    title: "Bakım & Destek",
    description: "Projelerinizin sürdürülebilirliği için düzenli bakım, güncelleme ve teknik destek hizmetleri.",
    features: ["7/24 Destek", "Güvenlik", "Güncellemeler"],
  },
]

export function Services() {
  return (
    <section id="hizmetler" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Hizmetlerim
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Size Nasıl Yardımcı Olabilirim?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Yazılım ve teknoloji alanında sunduğum profesyonel hizmetlerle projelerinizi hayata geçiriyorum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
