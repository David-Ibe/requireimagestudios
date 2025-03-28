"use client";

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { useParams } from "next/navigation"

const categoryTitles: { [key: string]: string } = {
  weddings: "Wedding Photography",
  events: "Events",
  family: "Family Portraits",
  studiofashion: "Studio Fashion",
  branding: "Custom Projects",
  businessevents: "Business Events",
  corporate: "Corporate"
}

export default function GalleryDetailPage() {
  const params = useParams()
  const category = params?.category as string || ""
  const id = params?.id as string || ""
  const [images, setImages] = useState<string[]>([])
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (category && id) {
      let galleryImages: string[] = []
      
      // Generate image paths based on category
      switch(category) {
        case 'events':
        case 'weddings':
        default:
          // For all categories, use standard .jpg extension
          galleryImages = Array.from(
            { length: 20 },
            (_, i) => `/images/gallery/${category}/${i + 1}.jpg`
          )
      }
      
      setImages(galleryImages)
    }
  }, [category, id])

  if (!mounted) {
    return null // Return null on server-side
  }

  return (
    <main className="min-h-screen bg-white py-8 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 md:mb-12 text-center">
          <Link 
            href={`/gallery/${category}`} 
            className="mb-4 md:mb-6 inline-flex items-center text-red-500 hover:text-red-600"
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
            Back to {categoryTitles[category] || "Gallery"}
          </Link>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900">
            {categoryTitles[category] || "Gallery"}
          </h1>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
              <Image
                src={selectedImage}
                alt="Selected photo"
                fill
                sizes="100vw"
                className="object-contain"
                priority
                quality={100}
              />
              <button
                className="absolute right-2 top-2 md:right-4 md:top-4 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/75"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(null)
                }}
              >
                <svg
                  className="h-5 w-5 md:h-6 md:w-6"
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