"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Instagram, Facebook, Heart } from "lucide-react"

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const categories = [
    { name: "Mukut Collection", href: "/gallery?category=mukut" },
    { name: "Mala & Jewelry", href: "/gallery?category=mala" },
    { name: "Vastra & Fabrics", href: "/gallery?category=vastra" },
    { name: "Temple Ornaments", href: "/gallery?category=ornaments" },
  ]

  return (
    <footer className="bg-gradient-to-b from-maroon-900 to-maroon-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                <span className="text-white font-playfair font-bold text-xl">आ</span>
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold">Aabharan Shringar</h3>
                <p className="text-gold-200 text-sm">The Art of Adornment</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Dedicated to creating divine ornaments for Thakorji with unmatched craftsmanship and devotion. Each piece
              is a testament to our love for Lord Krishna.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/aabharanshringar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gold-600 hover:bg-gold-500 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/aabharanshringar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gold-600 hover:bg-gold-500 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-playfair text-xl font-bold mb-6 text-gold-200">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-gold-200 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-gold-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-playfair text-xl font-bold mb-6 text-gold-200">Collections</h4>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className="text-gray-300 hover:text-gold-200 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-gold-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-playfair text-xl font-bold mb-6 text-gold-200">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="https://wa.me/9867066347"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-gold-200 transition-colors duration-200"
                  >
                    +91 98670 66347
                  </a>
                  <p className="text-sm text-gray-400">WhatsApp Available</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:info@aabharanshringar.com"
                    className="text-gray-300 hover:text-gold-200 transition-colors duration-200"
                  >
                    info@aabharanshringar.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Mumbai, Maharashtra
                    <br />
                    <span className="text-sm text-gray-400">Serving Devotees Worldwide</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-maroon-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">© 2024 Aabharan Shringar. All rights reserved.</p>
              <p className="text-gray-500 text-xs mt-1">Crafted with devotion for Lord Krishna</p>
            </div>

            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>for devotees worldwide</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
