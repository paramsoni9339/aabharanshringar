"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Award, Clock, Globe } from "lucide-react"

const milestones = [
  {
    year: "1999",
    title: "Foundation",
    description: "Started with a vision to create divine ornaments for Lord Krishna",
  },
  {
    year: "2005",
    title: "First Temple Partnership",
    description: "Began serving major temples across India with our handcrafted pieces",
  },
  {
    year: "2012",
    title: "International Expansion",
    description: "Extended our services to devotees worldwide, including NRI communities",
  },
  {
    year: "2018",
    title: "Master Artisan Recognition",
    description: "Our craftsmen received recognition for preserving traditional techniques",
  },
  {
    year: "2024",
    title: "Digital Transformation",
    description: "Launched our digital platform to serve devotees globally",
  },
]

const values = [
  {
    icon: Heart,
    title: "Devotion",
    description: "Every piece is crafted with pure devotion and love for Lord Krishna",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Uncompromising quality and attention to detail in every creation",
  },
  {
    icon: Clock,
    title: "Tradition",
    description: "Preserving ancient craftsmanship techniques passed down through generations",
  },
  {
    icon: Globe,
    title: "Global Service",
    description: "Serving devotees worldwide with authentic Indian devotional art",
  },
]

const team = [
  {
    name: "Manubhai Suchak",
    role: "Master Craftsman & Founder",
    image: "/placeholder.svg?height=300&width=300",
    description: "With over -- years of experience, leads our team of artisans in creating divine masterpieces",
  },
  {
    name: "Gopal Suchak",
    role: "Quality Assurance",
    image: "/gopal-pfp.jpg",
    description: "Specializes in traditional patterns and ensures authenticity in every design",
  },
  {
    name: "Shyam Suchak",
    role: "Quality Assurance",
    image: "/shyam-pfp.jpg",
    description: "Ensures every piece meets our highest standards before reaching devotees",
  },
]

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-ivory-50 to-white pt-24">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-maroon-800 mb-6">Our Sacred Journey</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              For over two decades, Aabharan Shringar has been dedicated to creating exquisite handcrafted ornaments
              that embody the divine beauty and spiritual significance of Lord Krishna worship.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Master artisan at work"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl p-6 text-white shadow-xl">
                  <div className="text-3xl font-playfair font-bold">25+</div>
                  <div className="text-sm">Years of Devotion</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-maroon-800">
                The Art of Divine Adornment
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our journey began with a simple yet profound vision: to create ornaments that would enhance the divine
                beauty of Thakorji and bring joy to devotees' hearts. What started as a small workshop has grown into a
                trusted name among temples and devotees worldwide.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Each piece we create is more than just an ornament – it's a prayer, a meditation, and a testament to our
                unwavering devotion to Lord Krishna. Our master artisans blend traditional techniques with contemporary
                artistry, ensuring every creation reflects the sacred traditions we hold dear.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-playfair font-bold text-maroon-800">10,000+</div>
                  <div className="text-gray-600">Handcrafted Pieces</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-playfair font-bold text-maroon-800">5,000+</div>
                  <div className="text-gray-600">Happy Devotees</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-maroon-800 mb-4">Our Sacred Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every aspect of our craft and service
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-white to-ivory-50">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-playfair text-xl font-bold text-maroon-800 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-b from-ivory-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-maroon-800 mb-4">
              Our Journey Through Time
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestones that mark our dedication to serving devotees worldwide
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold-400 to-gold-600 hidden lg:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  <div className="flex-1 lg:pr-8 lg:pl-8">
                    <Card className={`p-6 shadow-lg border-0 ${index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"}`}>
                      <CardContent className="p-0">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                            {milestone.year.slice(-2)}
                          </div>
                          <div>
                            <div className="text-2xl font-playfair font-bold text-maroon-800">{milestone.year}</div>
                            <div className="text-gold-600 font-semibold">{milestone.title}</div>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold-500 rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-maroon-800 mb-4">Master Artisans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated craftsmen who bring divine beauty to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-playfair text-xl font-bold text-maroon-800 mb-2">{member.name}</h3>
                    <div className="text-gold-600 font-semibold mb-4">{member.role}</div>
                    <p className="text-gray-600 leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-maroon-800 to-maroon-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-6">Begin Your Sacred Journey</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200">
              Let us create something divine for your beloved Thakorji. Connect with our master artisans today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  Connect with Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
