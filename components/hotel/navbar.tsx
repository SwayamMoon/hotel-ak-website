"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Rooms", href: "#rooms" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Location", href: "#location" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-primary flex items-center justify-center">
  <Image
    src="/images/ak-logo.png"
    alt="AK Logo"
    width={48}
    height={48}
    className="object-contain p-1"
  />
</div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="tel:+919876543210"
            className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden xl:inline">Call Now</span>
          </Link>
          <Button asChild className="animate-pulse-gold">
            <Link href="#rooms">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass mt-2 mx-4 rounded-xl p-6 animate-fade-in">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors py-2 border-b border-border/30"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <Link
  href="tel:+918411926850"
  className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors"
>
  <Phone className="w-4 h-4" />
  <span className="hidden xl:inline">Call Now</span>
</Link>
              <Button asChild className="w-full">
                <Link href="#rooms">Book Now</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
