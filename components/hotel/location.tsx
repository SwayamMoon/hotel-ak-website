"use client"

import Link from "next/link"
import { MapPin, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Location() {
  return (
    <section id="location" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary uppercase tracking-wider text-sm font-medium">Find Us</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Easy to Reach <span className="text-gold-gradient">Location</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden glass h-[400px]">
            <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.4468649265254!2d79.0784578!3d21.094743400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf71a58f8241%3A0x62de38f4c1c069ff!2sHotelAKstayinn!5e0!3m2!1sen!2sin!4v1775558980290!5m2!1sen!2sin"
             width="100%"
             height="100%"
             style={{ border: 0 }}
             allowFullScreen
             loading="lazy"
             referrerPolicy="no-referrer-when-downgrade"
             title="Hotel AK Stay Inn Location"
/>
          </div>

          {/* Address Card */}
          <div className="glass rounded-2xl p-8 lg:p-10">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Hotel Address</h3>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Hotel AK Stay Inn - Plot no 22, Jay Durga Layout, Manish Nagar,<br />
                  Besa Rd, Nagpur, Maharashtra 440037
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-foreground/80">
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span>Easy access from Railway Station</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/80">
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span>Near major business centers</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/80">
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span>Close to shopping areas</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/80">
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span>Airport connectivity available</span>
              </div>
            </div>

            <Button asChild size="lg" className="w-full">
              <Link
                href="https://maps.app.goo.gl/UfKN5yPVqHKjUkhS9"
                target="_blank"
                className="flex items-center justify-center gap-2"
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
