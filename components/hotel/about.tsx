"use client"

import Image from "next/image"
import { CheckCircle, Award, Clock, Shield } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Well-maintained rooms with quality furnishings",
  },
  {
    icon: Clock,
    title: "24/7 Service",
    description: "Round-the-clock staff for your convenience",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Your safety is our top priority",
  },
]

const highlights = ["Clean rooms", "Easy booking", "Comfortable stay"]

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/hotel-lobby.jpg"
                alt="Hotel AK Stay Inn lobby"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 glass rounded-xl p-6 max-w-xs hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <p className="text-primary-foreground font-serif text-2xl font-bold">2+</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Years of</p>
                  <p className="text-primary font-serif text-xl">Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-primary uppercase tracking-wider text-sm font-medium">About Us</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 leading-tight">
              About Hotel <span className="text-gold-gradient">AK Stay Inn</span>
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed mb-6">
              Welcome to Hotel AK Stay Inn, your trusted choice for comfortable and affordable accommodation in Nagpur. We pride ourselves on providing clean, well-maintained rooms in a peaceful environment. Whether you&apos;re visiting for business or leisure, our hotel offers the perfect blend of comfort, convenience, and value.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed mb-8">
              Located in the heart of Nagpur, we offer easy access to major attractions and business centers. Our dedicated staff is available 24/7 to ensure your stay is pleasant and hassle-free.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4 mb-10">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full"
                >
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 glass rounded-xl text-center hover:border-primary/50 transition-all duration-300"
                >
                  <feature.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-xs text-foreground/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
