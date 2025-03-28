"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    src: "/wedded.jpg",
    alt: "Slide 1",
  },
  {
    src: "/br.jpg",
    alt: "Slide 2",
  },
  {
    src: "/c.jpg",
    alt: "Slide 3",
  },
  
  {
    src: "/e.jpg",
    alt: "Slide 5",
  },
  {
    src: "/couple.jpg",
    alt: "Slide 6",
  },
  {
    src: "/g.jpg",
    alt: "Wedding Photography 7",
  },
  {
    src: "/h.jpg",
    alt: "Wedding Photography 8",
  },
  {
    src: "/i.jpg",
    alt: "Wedding Photography 9",
  },
  {
    src: "/10.jpg",
    alt: "Wedding Photography 10",
  },
]

export function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setDirection('right')
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setDirection('left')
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, nextSlide])

  return (
    <div className="relative h-screen w-full overflow-hidden"
         onMouseEnter={() => setIsAutoPlaying(false)}
         onMouseLeave={() => setIsAutoPlaying(true)}>
      {slides.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transform transition-all duration-1000 ease-in-out
            ${index === currentIndex ? 'opacity-100 translate-x-0' : 
            direction === 'right' ? 
              index === (currentIndex - 1 + slides.length) % slides.length ? 'opacity-0 -translate-x-full' :
              index === (currentIndex + 1) % slides.length ? 'opacity-0 translate-x-full' : 'opacity-0' :
              index === (currentIndex - 1 + slides.length) % slides.length ? 'opacity-0 translate-x-full' :
              index === (currentIndex + 1) % slides.length ? 'opacity-0 -translate-x-full' : 'opacity-0'
            }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}
      
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/75 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/75 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 'right' : 'left')
              setCurrentIndex(index)
            }}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
} 