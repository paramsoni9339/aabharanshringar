"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Radha Devi",
    location: "Vrindavan, India",
    role: "Temple Caretaker",
    rating: 5,
    text: "The craftsmanship of Aabharan Shringar is truly divine. Every piece we have received has enhanced the beauty of our beloved Thakorji. The attention to detail and devotion in each ornament is remarkable.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "New Jersey, USA",
    role: "Devotee",
    rating: 5,
    text: "As an NRI, finding authentic and beautiful Krishna ornaments was challenging until I discovered Aabharan Shringar. Their service is exceptional, and the quality surpasses all expectations.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Govind Patel",
    location: "Mumbai, India",
    role: "Temple Trustee",
    rating: 5,
    text: "We have been ordering from Aabharan Shringar for our temple for over 5 years. Their consistency in quality and timely delivery makes them our trusted partner in devotional service.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    location: "London, UK",
    role: "Krishna Devotee",
    rating: 5,
    text: "The international shipping was seamless, and the packaging ensured everything arrived in perfect condition. The Mukut we ordered is absolutely stunning and has become the centerpiece of our home temple.",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-ivory-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-maroon-800 mb-4">Devotees Speak</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our cherished customers who have experienced the divine beauty of our handcrafted ornaments
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-6"></div>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-white shadow-2xl border-0 overflow-hidden">
                  <CardContent className="p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                      {/* Quote Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                          <Quote className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-center lg:text-left">
                        {/* Stars */}
                        <div className="flex justify-center lg:justify-start mb-4">
                          {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
                          ))}
                        </div>

                        {/* Testimonial Text */}
                        <blockquote className="text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed italic">
                          "{testimonials[currentTestimonial].text}"
                        </blockquote>

                        {/* Author Info */}
                        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
                          <img
                            src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                            alt={testimonials[currentTestimonial].name}
                            className="w-16 h-16 rounded-full object-cover border-4 border-gold-200"
                          />
                          <div>
                            <div className="font-playfair text-xl font-bold text-maroon-800">
                              {testimonials[currentTestimonial].name}
                            </div>
                            <div className="text-gold-600 font-medium">{testimonials[currentTestimonial].role}</div>
                            <div className="text-gray-500 text-sm">{testimonials[currentTestimonial].location}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="border-gold-300 text-gold-600 hover:bg-gold-50"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? "bg-gold-500 w-8" : "bg-gold-200 hover:bg-gold-300"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="border-gold-300 text-gold-600 hover:bg-gold-50"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">Join thousands of satisfied devotees worldwide</p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-maroon-600 to-maroon-700 hover:from-maroon-700 hover:to-maroon-800 text-white px-8 py-4 text-lg shadow-xl"
            asChild
          >
            <a href="https://wa.me/9867066347" target="_blank" rel="noopener noreferrer">
              Start Your Journey
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
