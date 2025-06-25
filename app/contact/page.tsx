"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - integrate with your backend or email service
    const whatsappMessage = `Hello! I'm interested in your devotional ornaments.%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`
    window.open(`https://wa.me/9867066347?text=${whatsappMessage}`, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone & WhatsApp",
      details: "+91 98670 66347",
      description: "Available 9 AM - 8 PM IST",
      action: "https://wa.me/9867066347",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@aabharanshringar.com",
      description: "We respond within 24 hours",
      action: "mailto:info@aabharanshringar.com",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Mumbai, Maharashtra",
      description: "Serving devotees worldwide",
      action: null,
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Mon - Sat: 9 AM - 8 PM",
      description: "Sunday: 10 AM - 6 PM",
      action: null,
    },
  ]

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
            <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-maroon-800 mb-6">Connect With Us</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're here to help you find the perfect devotional ornaments for your beloved Thakorji. Reach out to us
              for custom designs, inquiries, or any assistance you need.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-8"></div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-white to-ivory-50 h-full">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-playfair text-lg font-bold text-maroon-800 mb-2">{info.title}</h3>
                    <p className="text-gray-800 font-semibold mb-2">{info.details}</p>
                    <p className="text-gray-600 text-sm mb-4">{info.description}</p>
                    {info.action && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gold-300 text-gold-700 hover:bg-gold-50"
                        asChild
                      >
                        <a href={info.action} target="_blank" rel="noopener noreferrer">
                          {info.title === "Phone & WhatsApp" ? "Chat Now" : "Contact"}
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 shadow-2xl border-0">
                <CardContent className="p-0">
                  <h2 className="font-playfair text-3xl font-bold text-maroon-800 mb-6">Send Us a Message</h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below and we'll get back to you as soon as possible. For immediate assistance, use
                    our WhatsApp chat.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="border-gold-200 focus:border-gold-400"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="border-gold-200 focus:border-gold-400"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="border-gold-200 focus:border-gold-400"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="border-gold-200 focus:border-gold-400"
                          placeholder="What can we help you with?"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="border-gold-200 focus:border-gold-400"
                        placeholder="Please describe your requirements, preferred designs, or any questions you have..."
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        type="submit"
                        size="lg"
                        className="bg-gradient-to-r from-maroon-600 to-maroon-700 hover:from-maroon-700 hover:to-maroon-800 text-white flex-1"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                      <Button
                        type="button"
                        size="lg"
                        variant="outline"
                        className="border-green-500 text-green-600 hover:bg-green-50"
                        asChild
                      >
                        <a href="https://wa.me/9867066347" target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="w-5 h-5 mr-2" />
                          WhatsApp Chat
                        </a>
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <Card className="overflow-hidden shadow-2xl border-0">
                <div className="h-64 bg-gradient-to-br from-gold-100 to-gold-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-gold-600 mx-auto mb-4" />
                    <h3 className="font-playfair text-xl font-bold text-maroon-800 mb-2">Mumbai, Maharashtra</h3>
                    <p className="text-gray-600">Serving devotees worldwide with authentic devotional ornaments</p>
                  </div>
                </div>
              </Card>

              {/* Why Choose Us */}
              <Card className="p-8 shadow-xl border-0 bg-gradient-to-br from-ivory-50 to-white">
                <CardContent className="p-0">
                  <h3 className="font-playfair text-2xl font-bold text-maroon-800 mb-6">
                    Why Choose Aabharan Shringar?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        <strong>25+ Years of Experience</strong> in creating divine ornaments
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        <strong>Master Artisans</strong> preserving traditional craftsmanship
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        <strong>Global Shipping</strong> to devotees worldwide
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        <strong>Custom Designs</strong> tailored to your requirements
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        <strong>Quality Guarantee</strong> on all our handcrafted pieces
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="p-6 shadow-xl border-0 bg-gradient-to-r from-green-50 to-green-100">
                <CardContent className="p-0 text-center">
                  <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-playfair text-xl font-bold text-gray-800 mb-2">Need Immediate Assistance?</h3>
                  <p className="text-gray-600 mb-4">Chat with us on WhatsApp for instant support</p>
                  <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white" asChild>
                    <a href="https://wa.me/9867066347" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Start WhatsApp Chat
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
