"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatsAppCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      // Show tooltip after 3 seconds
      setTimeout(() => setShowTooltip(true), 3000)
      // Hide tooltip after 8 seconds
      setTimeout(() => setShowTooltip(false), 8000)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 max-w-xs border border-gold-200"
              >
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="pr-6">
                  <h4 className="font-playfair font-bold text-maroon-800 mb-2">Need Help?</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Chat with us on WhatsApp for instant assistance with your devotional ornament needs.
                  </p>
                  <div className="text-xs text-gold-600 font-medium">
                    ✓ Instant Response
                    <br />✓ Custom Designs
                    <br />✓ Global Shipping
                  </div>
                </div>
                {/* Arrow */}
                <div className="absolute bottom-4 right-4 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white transform rotate-45"></div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="relative">
            <Button
              size="lg"
              className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl border-4 border-white"
              asChild
            >
              <a
                href="https://wa.me/9867066347"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-8 h-8" />
              </a>
            </Button>

            {/* Pulse Animation */}
            <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
            <div className="absolute inset-0 rounded-full bg-green-400 animate-pulse opacity-30"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
