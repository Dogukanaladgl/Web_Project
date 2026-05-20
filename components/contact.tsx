"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, MapPin, Phone, Send, CheckCircle, Loader2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SocialIcons } from "@/components/social-icons"
import { AnimatedSection } from "./animated-section"
import {
  getEmailJsErrorMessage,
  isEmailJsConfigured,
  sendContactEmail,
} from "@/lib/emailjs"
import { mailtoHref, socialConfig } from "@/lib/social-config"

const contactInfo = [
  {
    icon: Mail,
    label: "Mail",
    value: socialConfig.email,
    href: mailtoHref(socialConfig.email),
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+90 541 263 5474",
    href: "tel:+905412635474",
  },
  {
    icon: MapPin,
    label: "Konum",
    value: "Konya, Turkiye",
    href: "#",
  },
]

// İletişim Kısmı

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const formRef = useRef(null)
  const isFormInView = useInView(formRef, { once: true, margin: "-50px" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null)

    if (!isEmailJsConfigured()) {
      setSubmitError(
        "Form henüz yapılandırılmadı. Proje kökünde .env.local dosyasına EmailJS bilgilerini ekleyin.",
      )
      return
    }

    setIsSending(true)
    try {
      await sendContactEmail(formData)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => setIsSubmitted(false), 4000)
    } catch (err) {
      if (process.env.NODE_ENV === "development") {
        console.error("[EmailJS]", err)
      }
      setSubmitError(getEmailJsErrorMessage(err))
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section
      id="iletisim"
      className="relative z-10 pb-16 pt-16 sm:pb-20 sm:pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-6 sm:mb-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
            İletişim
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Projenizi Konuşalım
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-pretty sm:mt-4">
            Proje fikirleriniz için benimle iletişime geçin. Size en uygun çözümü birlikte bulalım.
          </p>
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                    className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                  >
                    <item.icon className="h-5 w-5 text-primary" />
                  </motion.div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="font-medium text-foreground">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <AnimatedSection delay={0.3}>
              <h3 className="text-lg font-semibold text-foreground mb-4">Sosyal Medya</h3>
              <SocialIcons align="start" className="max-w-full" />
            </AnimatedSection>
          </div>

          {/* Contact form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card border border-border relative overflow-hidden">
              {/* Success overlay */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isSubmitted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                className={`absolute inset-0 bg-card/95 backdrop-blur-sm flex flex-col items-center justify-center z-10 ${
                  isSubmitted ? "pointer-events-auto" : "pointer-events-none"
                }`}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isSubmitted ? { scale: 1 } : { scale: 0 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                >
                  <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                </motion.div>
                <p className="text-xl font-semibold text-foreground">Mesajınız Gönderildi!</p>
                <p className="text-muted-foreground mt-2">En kısa sürede size dönüş yapacağım.</p>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    İsim Soyisim
                  </label>
                  <Input
                    id="name"
                    placeholder="İsim Soyisim"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-secondary border-border transition-all focus:ring-2 focus:ring-primary/20"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.35 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Mail
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ornek@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-secondary border-border transition-all focus:ring-2 focus:ring-primary/20"
                  />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="mb-6"
              >
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Konu
                </label>
                <Input
                  id="subject"
                  placeholder="Proje Hakkında"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="bg-secondary border-border transition-all focus:ring-2 focus:ring-primary/20"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.45 }}
                className="mb-6"
              >
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mesajınız
                </label>
                <Textarea
                  id="message"
                  placeholder="Projeniz Hakkında Detaylı Bilgi Verin..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-secondary border-border resize-none transition-all focus:ring-2 focus:ring-primary/20"
                />
              </motion.div>
              {submitError && (
                <div
                  role="alert"
                  className="mb-4 flex items-start gap-2 rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive"
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <Button type="submit" size="lg" className="w-full group" disabled={isSending}>
                  {isSending ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Mesaj Gönder
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
