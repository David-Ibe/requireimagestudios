"use client";

import { motion } from "framer-motion"
import Image from "next/image"
import { useRef, useEffect, useState } from "react"

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)

  // Array of 20 images
  const images = Array.from({ length: 20 }, (_, i) => `/images/gallery/about/${i + 1}.jpg`)
  
  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images]

  // Handle client-side initialization
  useEffect(() => {
    setIsClient(true)
    
    const preventContextMenu = (e: MouseEvent) => {
      e.preventDefault()
    }

    document.addEventListener('contextmenu', preventContextMenu)
    return () => {
      document.removeEventListener('contextmenu', preventContextMenu)
    }
  }, [])

  // Don't render anything until we're on the client
  if (!isClient) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 text-center text-4xl font-display font-bold text-gray-800"
      >
        About Us
      </motion.h1>

      <div className="grid gap-8">
        {/* Our Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col justify-center max-w-4xl mx-auto"
        >
          <h2 className="mb-4 text-3xl font-semibold text-gray-800 text-center">Our Story</h2>
          <p className="mb-4 text-gray-600">
            Founded in 2015, Require Image Studios has grown from a small photography service to one of Nigeria&apos;s leading global brands. Our journey is a testament to our dedication to excellence, our passion for storytelling, and our commitment to capturing authentic, unforgettable moments.
          </p>
          <p className="mb-4 text-gray-600">
            We specialize in a wide range of photography services, including corporate events, family portraits, studio sessions, corporate headshots, branding photography, wedding photography, and portrait photography. Each project we undertake is approached with the same level of dedication, creativity, and professionalism, ensuring that every image we create reflects the unique essence of our clients.
          </p>
          <p className="mb-4 text-gray-600">
            What sets us apart is not just our technical expertise but our ability to connect with people, understand their vision, and translate it into stunning visuals. Whether it&apos;s a corporate headshot that exudes confidence, a wedding album filled with love and emotion, or a branding session that captures the soul of a business, we pour our heart into every detail.
          </p>
          <p className="text-gray-600">
            Our growth over the years is a testament to the trust our clients place in us and the passion that drives our team. We are more than just photographers; we are storytellers, memory-makers, and visionaries. As we continue to grow, our mission remains the same: to inspire, to create, and to deliver exceptional artistry that leaves a lasting impact.
          </p>
        </motion.div>

        {/* Horizontal Image Slider */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative w-full overflow-hidden rounded-lg bg-gray-100"
          style={{ height: "400px" }}
        >
          <motion.div
            ref={containerRef}
            className="flex absolute h-full space-x-4 px-4"
            initial={{ x: 0 }}
            animate={{ 
              x: [0, -6000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 60,
                ease: "linear"
              }
            }}
            style={{
              WebkitOverflowScrolling: "touch",
            }}
          >
            {duplicatedImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative h-full w-[300px] flex-shrink-0 rounded-lg overflow-hidden"
                whileHover={{ scale: 1.05, zIndex: 1 }}
                transition={{ duration: 0.3 }}
                onContextMenu={(e) => e.preventDefault()}
              >
                <Image
                  src={image}
                  alt={`About Require Image Studios ${(index % 20) + 1}`}
                  fill
                  className="object-cover select-none"
                  priority={index < 4}
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity hover:opacity-100" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
} 