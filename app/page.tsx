import { Navbar } from "@/components/hotel/navbar"
import { Hero } from "@/components/hotel/hero"
import { About } from "@/components/hotel/about"
import { Rooms } from "@/components/hotel/rooms"
import { Services } from "@/components/hotel/services"
import { Gallery } from "@/components/hotel/gallery"
import { Location } from "@/components/hotel/location"
import { Contact } from "@/components/hotel/contact"
import { Footer } from "@/components/hotel/footer"
import { FloatingButtons } from "@/components/hotel/floating-buttons"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Services />
      <Gallery />
      <Location />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
