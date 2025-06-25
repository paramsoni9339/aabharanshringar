import { Suspense } from "react"
import HeroSection from "@/components/hero-section"
import AboutPreview from "@/components/about-preview"
import FeaturedProducts from "@/components/featured-products"
import Testimonials from "@/components/testimonials"
import WhatsAppCTA from "@/components/whatsapp-cta"
import LoadingSpinner from "@/components/loading-spinner"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-ivory-50 to-white">
      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-ivory-50 animate-pulse" />}>
        <AboutPreview />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-white animate-pulse" />}>
        <FeaturedProducts />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-ivory-50 animate-pulse" />}>
        <Testimonials />
      </Suspense>

      <WhatsAppCTA />
    </main>
  )
}
