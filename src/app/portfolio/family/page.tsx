"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { galleryImages } from "@/components/gallery-data"

export default function FamilyPortfolio() {
  const familyImages = galleryImages.filter(img => img.category === "Family")

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center text-4xl font-display font-bold text-gray-800"
      >
        Family Photography Portfolio
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-12 text-center text-lg text-gray-600"
      >
        Preserving precious family memories forever
      </motion.p>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {familyImages.map((image, index) => (
          <motion.div
            key={image.src}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group overflow-hidden rounded-lg shadow-lg"
          >
            <div className="relative aspect-[3/2]">
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex h-full flex-col justify-end text-white">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 