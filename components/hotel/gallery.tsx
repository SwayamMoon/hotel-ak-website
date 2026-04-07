"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Hotel exterior view" },
  { src: "/images/gallery-2.jpg", alt: "Hotel room interior" },
  { src: "/images/gallery-3.jpg", alt: "Hotel bathroom" },
  { src: "/images/gallery-4.jpg", alt: "Hotel reception" },
  { src: "/images/gallery-5.jpg", alt: "Hotel corridor" },
  { src: "/images/gallery-6.jpg", alt: "Hotel dining area" },
]

export function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary uppercase tracking-wider text-sm font-medium">Gallery</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Hotel <span className="text-gold-gradient">Gallery</span>
          </h2>
          <p className="text-foreground/80 text-lg">
            Take a visual tour of our beautiful property and amenities.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-50 group-hover:scale-100">
                  <span className="text-primary-foreground text-2xl">+</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 text-foreground/80 hover:text-foreground transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 p-2 text-foreground/80 hover:text-foreground transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <div className="relative w-full max-w-4xl aspect-video mx-4">
            <Image
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              fill
              className="object-contain"
            />
          </div>

          <button
            onClick={goToNext}
            className="absolute right-4 p-2 text-foreground/80 hover:text-foreground transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-foreground/60">
            {currentIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  )
}
