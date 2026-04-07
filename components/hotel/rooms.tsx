"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, MessageCircle, Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const rooms = [
  {
    name: "Classic Room",
    price: "1,299",
    image: "/images/room-classic.jpg",
    features: ["Budget-friendly", "Clean & comfortable", "Ideal for short stays"],
    popular: false,
  },
  {
    name: "Deluxe Room",
    price: "1,499",
    image: "/images/room-deluxe.jpg",
    features: ["More spacious", "Better interior", "Ideal for couples"],
    popular: true,
  },
  {
    name: "Super Deluxe Room",
    price: "1,799",
    image: "/images/room-super-deluxe.jpg",
    features: ["Spacious and premium feel", "Best comfort option", "Ideal for longer stays"],
    popular: false,
  },
]

export function Rooms() {
  return (
    <section id="rooms" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary uppercase tracking-wider text-sm font-medium">Our Rooms</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Choose Your <span className="text-gold-gradient">Room</span>
          </h2>
          <p className="text-foreground/80 text-lg">
            Clean, comfortable, and budget-friendly options for every traveler.
          </p>
        </div>

        {/* Room Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className={`group relative glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 ${
                room.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              {/* Popular Badge */}
              {room.popular && (
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">
                  <Star className="w-3 h-3 fill-current" />
                  Recommended
                </div>
              )}

              {/* Room Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              {/* Room Content */}
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{room.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold text-primary">₹{room.price}</span>
                  <span className="text-foreground/60">/night</span>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {room.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-foreground/80">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price Guarantee */}
                <p className="text-xs text-primary/80 mb-2">Best price guaranteed on direct booking</p>
                <p className="text-xs text-foreground/60 mb-6">Call now to check room availability</p>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  <Button asChild className="flex-1">
                    <Link href="tel:+918411926850" className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      Call to Book
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Link href="https://wa.me/918411926850" target="_blank" className="flex items-center justify-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
