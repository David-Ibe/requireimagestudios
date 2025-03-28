"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { useParams } from "next/navigation"


const categoryTitles: { [key: string]: string } = {
  weddings: "Wedding Photography",
  family: "Family Portraits",
  studiofashion: "Studio Fashion",
  partyevents: "Party Events",
  branding: "Custom Projects"
}

export default function GalleryPage() {
  const params = useParams()
  const category = params?.category as string || ""
  const [images, setImages] = useState<string[]>([])
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (category) {
      let galleryImages: string[] = []
      
      // Generate image paths based on category
      switch(category) {
        case 'weddings':
          galleryImages = Array.from(
            { length: 20 },
            (_, i) => {
              const num = i + 1
              if (num === 10 || num === 11) {
                return `/images/gallery/weddings/${num}.JPG`
              }
              if (num === 15) return null
              return `/images/gallery/weddings/${num}.jpg`
            }
          ).filter(Boolean) as string[]
          break
          
        default:
          galleryImages = Array.from(
            { length: 20 },
            (_, i) => `/images/gallery/${category}/${i + 1}.jpg`
          )
      }
      
      setImages(galleryImages)
    }
  }, [category])

  if (!mounted) {
    return null // Return null on server-side
  }

  return (
    <main className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <Link 
            href="/photography" 
            className="mb-6 inline-flex items-center text-red-500 hover:text-red-600"
          >
            <svg
              className="mr-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Photography
          </Link>
          <h1 className="font-display text-4xl font-bold text-gray-900">
            {categoryTitles[category] || "Gallery"}
          </h1>
          <p className="mt-4 text-gray-600">
            Browse through our collection of {category.replace(/-/g, " ")} photographs
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group cursor-pointer overflow-hidden rounded-lg bg-gray-100"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={image}
                  alt={`${category} photo ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative h-[90vh] w-[90vw]">
              <Image
                src={selectedImage}
                alt="Selected photo"
                fill
                className="object-contain"
                priority
                quality={100}
              />
              <button
                className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/75"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(null)
                }}
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
} 