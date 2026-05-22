import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Timeline } from "@/components/timeline"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { SiteBackground } from "@/components/site-background"
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/site-metadata"

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <SiteBackground />
      <Header />
      <main id="main-content" className="relative z-10">
        <Hero />
        <Stats />
        <Services />
        <About />
        <Timeline />
        <Projects />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}
