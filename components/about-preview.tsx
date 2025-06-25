"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, Award, Users } from "lucide-react"

export default function AboutPreview() {
  const stats = [
    { icon: Heart, label: "Years of Devotion", value: "25+" },
    { icon: Award, label: "Handcrafted Pieces", value: "10,000+" },
    { icon: Users, label: "Happy Devotees", value: "5,000+" },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-ivory-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-maroon-800 mb-6">
              The Art of Divine Adornment
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              For over two decades, Aabharan Shringar has been dedicated to creating exquisite handcrafted ornaments for
              Thakorji. Each piece is a testament to our unwavering devotion and commitment to preserving the sacred
              traditions of Krishna worship.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our master artisans blend ancient techniques with contemporary artistry, ensuring every Mukut, Mala, and
              Vastra reflects the divine beauty and spiritual significance that devotees cherish.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-playfair text-2xl font-bold text-maroon-800">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-maroon-600 to-maroon-700 hover:from-maroon-700 hover:to-maroon-800 text-white"
              asChild
            >
              <a href="/about">Discover Our Story</a>
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Master artisan crafting devotional ornaments"
                width={500}
                height={600}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl border border-gold-200"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-playfair font-bold text-xl">॥</span>
                </div>
                <div>
                  <div className="font-playfair text-lg font-bold text-maroon-800">Handcrafted Excellence</div>
                  <div className="text-sm text-gray-600">Every piece blessed with devotion</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
