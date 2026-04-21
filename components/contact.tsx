"use client"

import { useState } from "react"
import { Mail, MapPin, Phone, Send, Linkedin, Github, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: Mail,
    label: "E-posta",
    value: "dogukan@example.com",
    href: "mailto:dogukan@example.com",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+90 555 123 4567",
    href: "tel:+905551234567",
  },
  {
    icon: MapPin,
    label: "Konum",
    value: "İstanbul, Türkiye",
    href: "#",
  },
]

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Mesajınız gönderildi! En kısa sürede size dönüş yapacağım.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section id="iletisim" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            İletişim
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Projenizi Konuşalım
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Bir sonraki projeniz için benimle iletişime geçin. Size en uygun çözümü birlikte bulalım.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="font-medium text-foreground">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Sosyal Medya</h3>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-colors group"
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card border border-border">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Adınız
                  </label>
                  <Input
                    id="name"
                    placeholder="Adınızı girin"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-secondary border-border"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-posta
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ornek@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-secondary border-border"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Konu
                </label>
                <Input
                  id="subject"
                  placeholder="Proje hakkında"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="bg-secondary border-border"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mesajınız
                </label>
                <Textarea
                  id="message"
                  placeholder="Projeniz hakkında detaylı bilgi verin..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-secondary border-border resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Mesaj Gönder
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
