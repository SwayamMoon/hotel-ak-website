"use client"

import {
  Wifi,
  Car,
  Clock,
  UtensilsCrossed,
  Wind,
  Bath,
  Shirt,
  Coffee,
  Cigarette,
  ChefHat,
} from "lucide-react"

const services = [
  { icon: Wifi, name: "Free Wi-Fi", description: "High-speed internet throughout the hotel" },
  { icon: Car, name: "Free Parking", description: "Secure parking available for guests" },
  { icon: Clock, name: "24/7 Front Desk", description: "Round-the-clock assistance" },
  { icon: UtensilsCrossed, name: "Room Service", description: "Food delivered to your room" },
  { icon: Wind, name: "Air Conditioning", description: "Climate control in all rooms" },
  { icon: Bath, name: "Private Bathrooms", description: "Clean and modern bathrooms" },
  { icon: Cigarette, name: "Smoke-free Property", description: "Clean and fresh environment" },
  { icon: ChefHat, name: "Kitchens Available", description: "In-room kitchens in select rooms" },

]

const whyChooseUs = [
  { title: "Instant booking via call or WhatsApp", icon: "1" },
  { title: "Clean and well-maintained rooms", icon: "2" },
  { title: "Affordable pricing", icon: "3" },
  { title: "Easy and quick check-in", icon: "4" },
  { title: "Direct support from hotel", icon: "5" },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary uppercase tracking-wider text-sm font-medium">Why Us</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Why Guests Prefer <span className="text-gold-gradient">Hotel AK Stay Inn</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="group glass rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-serif text-xl font-bold group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <p className="text-foreground/90 text-sm font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities & Amenities */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary uppercase tracking-wider text-sm font-medium">Amenities</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Facilities & <span className="text-gold-gradient">Amenities</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="group glass rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 text-sm">{service.name}</h3>
                <p className="text-xs text-foreground/60 hidden sm:block">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
