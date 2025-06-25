import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Aabharan Shringar - The Art of Adornment | Premium Krishna Devotional Ornaments",
  description:
    "Discover exquisite handcrafted Shringar and Sahitya for Thakorji. Premium devotional ornaments including Mukut, Mala, Vastra crafted with divine artistry.",
  keywords:
    "Krishna ornaments, Thakorji shringar, devotional jewelry, handcrafted mukut, temple ornaments, Indian devotional art",
  openGraph: {
    title: "Aabharan Shringar - The Art of Adornment",
    description: "Premium handcrafted devotional ornaments for Lord Krishna",
    images: ["/images/hero-og.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aabharan Shringar - The Art of Adornment",
    description: "Premium handcrafted devotional ornaments for Lord Krishna",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-inter antialiased">
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
