"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Portfolio", href: "/photography" },
    { name: "Get in Touch", href: "/contact" },
    { name: "Client Reviews", href: "/testimonies" },
    { name: "News & Stories", href: "/blog" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image src="/ris.png" alt="Require Image Studios Logo" width={200} height={100} />
        </Link>

        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-2xl text-gray-700">☰</span>
        </button>

        <nav className={`md:flex ${isOpen ? "block" : "hidden"} absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent`}>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-red-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
} 