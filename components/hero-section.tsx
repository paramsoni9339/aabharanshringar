"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

const heroSlides = [
  {
    id: 1,
    image: "/placeholder.svg?height=800&width=1200",
    title: "Divine Craftsmanship",
    subtitle: "Handcrafted Shringar for Thakorji",
    description: "Exquisite ornaments that embody devotion and artistry",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=800&width=1200",
    title: "Sacred Artistry",
    subtitle: "Premium Mukut & Mala Collection",
    description: "Each piece tells a story of divine love and dedication",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=800&width=1200",
    title: "Timeless Elegance",
    subtitle: "Traditional Vastra & Ornaments",
    description: "Preserving ancient traditions with modern excellence",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      {heroSlides.map((slide, index) => (
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                {heroSlides[currentSlide].title}
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-6 text-gold-200">
                {heroSlides[currentSlide].subtitle}
              </h2>
              <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-2xl">{heroSlides[currentSlide].description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-8 py-4 text-lg shadow-xl"
                  asChild
                >
                  <a href="/gallery">Explore Collection</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-maroon-800 px-8 py-4 text-lg"
                  asChild
                >
                  <a href="https://wa.me/9867066347" target="_blank" rel="noopener noreferrer">
                    Contact Us
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" onClick={prevSlide} className="text-white hover:bg-white/20 p-2">
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-gold-400 w-8" : "bg-white/50"
                }`}
              />
            ))}
          </div>

          <Button variant="ghost" size="sm" onClick={nextSlide} className="text-white hover:bg-white/20 p-2">
            <ChevronRight className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-white hover:bg-white/20 p-2 ml-4"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 right-8 z-20"
      >
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2 rotate-90 origin-center">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </motion.div>
    </section>
  )
}
