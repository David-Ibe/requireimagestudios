"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { galleryImages } from "./gallery-data"
import { X } from "lucide-react"

export function FilteredGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filteredImages] = useState(galleryImages)
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({})

  const handleImageError = (src: string) => {
    setImageErrors(prev => ({...prev, [src]: true}))
    console.error(`Failed to load image: ${src}`)
  }

  return (
    <div>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredImages.map((image, index) => {
          if (imageErrors[image.src]) return null;
          return (
            <motion.div
              key={`${image.id}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group overflow-hidden rounded-lg border border-gray-200 shadow-lg"
            >
              <div
                className="relative cursor-pointer aspect-[4/3]"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={() => handleImageError(image.src)}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/60 p-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="flex h-full flex-col justify-end text-white">
                    <h3 className="text-lg font-semibold font-display">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && !imageErrors[filteredImages[selectedImage].src] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative h-[90vh] w-[90vw]">
              <Image
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].title}
                fill
                className="object-contain"
                priority
                quality={100}
                onError={() => handleImageError(filteredImages[selectedImage].src)}
              />
              <button
                className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/75"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 