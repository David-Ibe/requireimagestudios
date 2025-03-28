"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { galleryImages } from "./gallery-data"

export function Gallery() {
  const [, setSelectedImage] = useState<number | null>(null)



  return (
    <>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((image, index) => (
          <div key={index} className="group overflow-hidden rounded-lg border border-gray-200">
            <div
              className="relative cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.title}
                width={600}
                height={400}
                className="aspect-[3/2] object-cover transition-transform duration-300 group-hover:scale-110"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/60 p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex h-full flex-col justify-end text-white">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-xl font-semibold">{image.title}</h3>
              <p className="mb-4 text-gray-600 line-clamp-3">
                {image.description}
              </p>
              <Link 
                href={`/gallery/${typeof image.category === 'string' ? image.category.toLowerCase() : image.category}/${image.src.split('/').pop()?.split('.')[0]}`}
                className="inline-block text-red-500 hover:underline"
              >
                 View Gallery →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <a
          href="https://instagram.com/requireimagestudios"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-500 text-white hover:bg-red-600 inline-flex items-center justify-center rounded-md px-4 py-2 font-medium sm:px-6 sm:py-3 sm:text-lg"
        >
          Follow on Instagram
        </a>
      </div>
    </>
  )
}

