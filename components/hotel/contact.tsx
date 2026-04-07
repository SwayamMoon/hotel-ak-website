"use client"

import Link from "next/link"
import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-primary uppercase tracking-wider text-sm font-medium">Book Now</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Book Your Room Now — <span className="text-gold-gradient">Quick & Easy</span>
            </h2>
            <p className="text-foreground/80 text-lg">
              Call or WhatsApp now to confirm your booking instantly.
            </p>
          </div>

          {/* Booking Card */}
          <div className="glass rounded-2xl p-8 lg:p-12 text-center">
            <div className="mb-8">
              <p className="text-foreground/80 mb-4">For instant booking and inquiries:</p>
              <div className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-bold text-primary font-serif">
                <Phone className="w-7 h-7" />
                +91 84119 26850
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto text-lg px-10 py-6 animate-pulse-gold">
                <Link href="tel:+918411926850" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-lg px-10 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="https://wa.me/918411926850" target="_blank" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Booking
                </Link>
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-foreground/60 text-sm">
                Our team is available 24/7 to assist you with your booking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
