"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { FilteredGallery } from "@/components/filtered-gallery"

export default function PhotographyPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const services = [
    {
      title: "Wedding Photography",
      description: "Capturing your special moments with elegance and style.",
      image: "/85.jpg",
      link: "/gallery/weddings",
      folderPath: "weddings"
    },
    {
      title: "Corporate Photography",
      description: "Professional headshots and corporate events.",
      image: "/duro.jpg",
      link: "/gallery/businessevents",
      folderPath: "businessevents"
    },
    {
      title: "Family Portraits",
      description: "Beautiful family moments frozen in time.",
      image: "/generational.jpg",
      link: "/gallery/family",
      folderPath: "family"
    },
    {
      title: "Studio Sessions",
      description: "Professional studio photography for all occasions.",
      image: "/beauty.jpg",
      link: "/gallery/studiofashion",
      folderPath: "studiofashion"
    },
    {
      title: "Special Events",
      description: "Making your special events memorable.",
      image: "/bankers.jpg",
      link: "/gallery/events",
      folderPath: "events"
    },
    {
      title: "Custom Projects",
      description: "Tailored photography solutions for unique needs",
      image: "/helen.jpg",
      link: "/gallery/branding",
      folderPath: "branding"
    },
  ];

  const categories = [
    { name: "Weddings", path: "/gallery/weddings" },
    { name: "Corporate", path: "/gallery/businessevents" },
    { name: "Family", path: "/gallery/family" },
    { name: "Studio", path: "/gallery/studiofashion" },
    { name: "Events", path: "/gallery/events" },
  ];

  if (!mounted) {
    return null; // Return null on server-side
  }

  return (
    <main className="relative min-h-screen">
      {/* Hero Section with Parallax */}
      <div className="relative h-[100vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/1.jpg"
            alt="background image of generational photo"
            fill
            className="object-cover object-top"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative flex h-full items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-white"
          >
            <h1 className="font-display text-5xl font-bold leading-tight md:text-7xl">
              Capturing Life&apos;s
              <br />
              <span className="text-red-500">Beautiful</span> Moments
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-200">
              Every frame tells a story, every shot preserves a memory. Let us help you create timeless photographs that will be cherished for generations.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex justify-center gap-4"
            >
              <Link
                href="/contact"
                className="rounded-full bg-red-500 px-8 py-3 font-medium text-white transition-all hover:bg-red-600"
              >
                Book a Session
              </Link>
              <Link
                href="#portfolio"
                className="rounded-full border-2 border-white px-8 py-3 font-medium text-white transition-all hover:bg-white hover:text-black"
              >
                View Portfolio
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-0 left-0 right-0 flex justify-center pb-8"
        >
          <div className="flex animate-bounce items-center gap-2 text-white">
            <span className="text-sm">Scroll to Explore</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Services Grid */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="font-display text-4xl font-bold text-gray-900">Our Photography Services</h2>
            <p className="mt-4 text-gray-600">Specialized in capturing your precious moments with artistic excellence</p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group overflow-hidden rounded-2xl bg-white shadow-lg"
              >
                <Link 
                  href={service.link}
                  scroll={true}
                >
                  <div className="relative h-64">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:opacity-0" />
                  </div>
                </Link>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <Link
                      href={service.link}
                      scroll={true}
                      className="inline-flex items-center text-red-500 transition-colors hover:text-red-600"
                    >
                      View Gallery
                      <svg
                        className="ml-2 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="font-display text-4xl font-bold text-gray-900">Our Portfolio</h2>
            <p className="mt-4 text-gray-600">Browse through our collection of professional photography</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <a
                  key={category.name}
                  href={category.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-red-500 px-6 py-2 text-sm text-red-500 transition-colors hover:bg-red-500 hover:text-white"
                >
                  {category.name} Images →
                </a>
              ))}
            </div>
          </motion.div>
          <FilteredGallery />
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <Image
            src="/cta-background.jpg"
            alt="Photography equipment"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h2 className="font-display text-4xl font-bold">Ready to Create Something Beautiful?</h2>
            <p className="mt-4 text-lg text-gray-300">
              Let&apos;s work together to capture your special moments. Book a session with us today.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-red-500 px-8 py-3 font-medium text-white transition-all hover:bg-red-600"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 