"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, MessageCircle, MapPin, Star, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  "4.9 Rated by Guests",
  "Clean Rooms",
  "Affordable Stay",
  "Easy Check-in",
]

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hotel-hero.jpg"
          alt="Hotel AK Stay Inn - Luxury hotel lobby"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm text-foreground/90">Premium Hotel in Nagpur</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up leading-tight">
            Book Clean & Comfortable{" "}
            <span className="text-gold-gradient">Rooms in Nagpur</span>
            <span className="block mt-2 text-3xl sm:text-4xl md:text-5xl">Starting ₹1299</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Affordable rooms, quick booking, and a hassle-free stay at Hotel AK Stay Inn.
          </p>

          {/* Limited Availability Notice */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-primary">Limited rooms available — call now to check availability</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

  <a href="tel:8411926850">
    <Button size="lg" className="w-full sm:w-auto text-lg">
      <Phone className="w-5 h-5" />
      Call Now
    </Button>
  </a>

  <a href="https://wa.me/8411926850" target="_blank">
    <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg">
      <MessageCircle className="w-5 h-5" />
      WhatsApp
    </Button>
  </a>

  <a href="https://maps.app.goo.gl/BVACghzLtbGfgX4Y7?g_st=ic" target="_blank">
    <Button size="lg" variant="ghost" className="w-full sm:w-auto text-lg">
      <MapPin className="w-5 h-5" />
      Directions
    </Button>
  </a>

</div>

          {/* Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-2 text-foreground/80">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
