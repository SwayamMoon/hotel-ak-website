"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MessageCircle, ArrowUp } from "lucide-react"

export function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/918411926850"
        target="_blank"
        className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 animate-pulse-gold"
        aria-label="Chat on WhatsApp"
        style={{ animationDuration: "3s" }}
      >
        <MessageCircle className="w-6 h-6" />
      </Link>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300 ${
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  )
}
