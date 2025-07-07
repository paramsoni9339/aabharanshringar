"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, X, Eye, Heart, ShoppingBag, Grid, List } from "lucide-react"

const categories = ["All", "Mukut", "Mala", "Vastra", "Ornaments", "Accessories"]

const products = [
  {
    id: 1,
    name: "Royal Golden Mukut",
    category: "Mukut",
    image: "/mukut-1.png?height=400&width=400",
    price: "Custom Pricing",
    description: "Exquisite handcrafted crown with intricate golden work and precious stones",
    featured: true,
  },
  {
    id: 2,
    name: "Divine Pearl Mala",
    category: "Mala",
    image: "/placeholder.svg?height=400&width=400",
    price: "Custom Pricing",
    description: "Sacred prayer beads made with finest pearls and gold accents",
    featured: false,
  },
  {
    id: 3,
    name: "Silk Brocade Vastra",
    category: "Vastra",
    image: "/placeholder.svg?height=400&width=400",
    price: "Custom Pricing",
    description: "Premium silk garment with traditional golden embroidery",
    featured: true,
  },
  {
    id: 4,
    name: "Temple Ornament Set",
    category: "Ornaments",
    image: "/placeholder.svg?height=400&width=400",
    price: "Custom Pricing",
    description: "Complete ornament collection for temple decoration",
    featured: false,
  },
  {
    id: 5,
    name: "Crystal Mukut Deluxe",
    category: "Mukut",
    image: "/placeholder.svg?height=400&width=400",
    price: "Custom Pricing",
    description: "Luxury crown adorned with crystals and precious metals",
    featured: true,
  },
  {
    id: 6,
    name: "Rudraksha Mala Premium",
    category: "Mala",
    image: "/placeholder.svg?height=400&width=400",
    price: "Custom Pricing",
    description: "Authentic Rudraksha beads with silver and gold detailing",
    featured: false,
  },
]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null)

  useEffect(() => {
    let filtered = products

    if (selectedCategory !== "All") {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    setFilteredProducts(filtered)
  }, [selectedCategory, searchTerm])

  return (
    <div className="min-h-screen bg-gradient-to-b from-ivory-50 to-white pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-maroon-800 mb-4">Divine Collection</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our exquisite range of handcrafted devotional ornaments, each piece blessed with devotion and
            crafted with precision
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-6"></div>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-gold-200 focus:border-gold-400"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-gradient-to-r from-gold-500 to-gold-600 text-white"
                      : "border-gold-300 text-gold-700 hover:bg-gold-50"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex border border-gold-200 rounded-lg overflow-hidden">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "bg-gold-500 text-white" : "text-gold-700"}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={viewMode === "list" ? "bg-gold-500 text-white" : "text-gold-700"}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Products Grid/List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" : "space-y-6"}
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {viewMode === "grid" ? (
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-b from-white to-ivory-50">
                  <div className="relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                      onClick={() => setSelectedProduct(product)}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/90 text-maroon-800 hover:bg-white"
                          onClick={() => setSelectedProduct(product)}
                        >
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

                    {product.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-maroon-500 to-maroon-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                    )}
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
              ) : (
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 relative">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={400}
                          height={300}
                          className="w-full h-48 md:h-full object-cover cursor-pointer"
                          onClick={() => setSelectedProduct(product)}
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {product.category}
                          </span>
                        </div>
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="font-playfair text-2xl font-bold text-maroon-800">{product.name}</h3>
                          {product.featured && (
                            <span className="bg-gradient-to-r from-maroon-500 to-maroon-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                              Featured
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-gold-600 text-lg">{product.price}</span>
                          <div className="flex space-x-3">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setSelectedProduct(product)}
                              className="border-gold-300 text-gold-700 hover:bg-gold-50"
                            >
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </Button>
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-maroon-600 to-maroon-700 hover:from-maroon-700 hover:to-maroon-800 text-white"
                              asChild
                            >
                              <a href="https://wa.me/9867066347" target="_blank" rel="noopener noreferrer">
                                Inquire Now
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-white" />
            </div>
            <h3 className="font-playfair text-2xl font-bold text-maroon-800 mb-4">No Products Found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All")
              }}
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </div>

      {/* Product Lightbox */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                  <Image
                    src={selectedProduct.image || "/placeholder.svg"}
                    alt={selectedProduct.name}
                    width={600}
                    height={600}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-4 right-4 bg-white/90 text-gray-800 hover:bg-white"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                <div className="lg:w-1/2 p-8">
                  <div className="mb-4">
                    <span className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {selectedProduct.category}
                    </span>
                  </div>
                  <h2 className="font-playfair text-3xl font-bold text-maroon-800 mb-4">{selectedProduct.name}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{selectedProduct.description}</p>
                  <div className="mb-8">
                    <span className="font-semibold text-gold-600 text-xl">{selectedProduct.price}</span>
                  </div>
                  <div className="flex space-x-4">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-maroon-600 to-maroon-700 hover:from-maroon-700 hover:to-maroon-800 text-white flex-1"
                      asChild
                    >
                      <a href="https://wa.me/9867066347" target="_blank" rel="noopener noreferrer">
                        Inquire on WhatsApp
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" className="border-gold-300 text-gold-700 hover:bg-gold-50">
                      <Heart className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
