"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedServices } from "@/components/featured-services"
import { HowItWorks } from "@/components/how-it-works"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedServices />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}
