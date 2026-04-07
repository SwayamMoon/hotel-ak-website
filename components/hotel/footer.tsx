"use client"
import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Instagram } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Rooms", href: "#rooms" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/hotelakstayinn.ngp?igsh=MWNxZDYxOGsxdGc3ZA%3D%3D&utm_source=qr" },
]

export function Footer() {
  return (
    <footer className="bg-secondary/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="#home" className="flex items-center gap-2 mb-6">
  <div className="w-12 h-12 rounded-full overflow-hidden bg-primary flex items-center justify-center">
    <Image
      src="/images/ak-logo.png"
      alt="AK Logo"
      width={48}
      height={48}
      className="object-contain p-1"
    />
  </div>

  <div>
    <span className="font-serif text-xl font-semibold text-foreground">Hotel AK</span>
    <span className="block text-xs text-primary tracking-wider">STAY INN</span>
  </div>
</Link>
            <p className="text-foreground/70 leading-relaxed">
              Your trusted choice for comfortable and affordable accommodation in Nagpur.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="tel:+918411926850"
                  className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  +91 84119 26850
                </Link>
              </li>
              <li>
                 <Link
                   href="mailto:hotelakstayinn@gmail.com"
                   className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors"
               >
                   <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                   <span>hotelakstayinn@gmail.com</span>
                 </Link>
              </li>
              <li className="flex items-start gap-3 text-foreground/70">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Hotel AK Stay Inn - Jay Durga layout, Manish Nagar, Nagpur, Maharashtra 440037</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-6">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-foreground/60 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Hotel AK Stay Inn. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-foreground/60">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
