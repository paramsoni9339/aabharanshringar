"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, Heart, ShoppingBag } from "lucide-react"

const featuredProducts = [
  {
    id: 1,
    name: "Royal Mukut Collection",
    category: "Mukut",
    image: "/placeholder.svg?height=400&width=400",
    price: "Custom Pricing",
    description: "Exquisite handcrafted crowns adorned with precious stones",
  },
  {
    id: 2,
    name: "Divine Mala Set",
    category: "Mala",
    image: "/placeholder.svg?height=400&width=400",
    price: "Custom Pricing",
    description: "Sacred prayer beads crafted with devotion and precision",
  },
  {
    id: 3,
    name: "Silk Vastra Collection",
    category: "Vastra",
    image: "/placeholder.svg?height=400&width=400",
    price: "Custom Pricing",
    description: "Premium silk garments with intricate golden embroidery",
  },
  {
    id: 4,
    name: "Temple Ornament Set",
    category: "Ornaments",
    image: "/placeholder.svg?height=400&width=400",
    price: "Custom Pricing",
    description: "Complete ornament collection for temple decoration",
  },
]

export default function FeaturedProducts() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-maroon-800 mb-4">Featured Collections</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most cherished pieces, each crafted with devotion and designed to enhance the divine beauty of
            Thakorji
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-6"></div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-b from-white to-ivory-50">
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
                      hoveredProduct === product.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                      <Button size="sm" variant="secondary" className="bg-white/90 text-maroon-800 hover:bg-white">
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/90 text-maroon-800 hover:bg-white p-2"
                        >
                          <Heart className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/90 text-maroon-800 hover:bg-white p-2"
                        >
                          <ShoppingBag className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {product.category}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-maroon-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gold-600">{product.price}</span>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-maroon-600 to-maroon-700 hover:from-maroon-700 hover:to-maroon-800 text-white"
                      asChild
                    >
                      <a href="https://wa.me/9867066347" target="_blank" rel="noopener noreferrer">
                        Inquire
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-8 py-4 text-lg shadow-xl"
            asChild
          >
            <a href="/gallery">View Complete Collection</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
