"use client"

import Link from "next/link"
import { Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-white">Require Image Studios</h3>
            <p className="mb-4">Professional photography services for all your special moments.</p>
            <div className="flex space-x-4">
              <Link href="https://instagram.com/requireimagestudios" className="hover:text-red-500">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://youtube.com/requireimagestudios" className="hover:text-red-500">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-red-500">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-red-500">Services</Link>
              </li>
              <li>
                <Link href="/photography" className="hover:text-red-500">Portfolio</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-500">Contact</Link>
              </li>
              <li>
                <Link href="/testimonies" className="hover:text-red-500">Testimonials</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Contact Us</h4>
            <div className="space-y-3">
              <a href="https://wa.me/2347039883247" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-500" />
                <span>+2347039883247</span>
              </a>
              <a href="mailto:info@requireimagestudios.com" className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-500" />
                <span>info@requireimagestudios.com</span>
              </a>
              <a href="https://www.google.com/maps/search/?api=1&query=123+Photography+Street,+Lagos,+Nigeria" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-500" />
                <span>Primewaters garden, Lekki, Lagos, Nigeria</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Require Image Studios. All rights reserved.</p>
          <p>Website Development by{' '}
            <a 
              href="https://www.requiretechnologies.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-600 transition-colors"
            >
              Require Technologies Limited
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
} 