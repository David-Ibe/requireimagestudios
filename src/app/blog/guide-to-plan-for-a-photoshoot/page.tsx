"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function BlogPost() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center text-4xl font-display font-bold text-gray-800"
      >
        Guide to Plan for a Photoshoot
      </motion.h1>

      <div className="mx-auto max-w-3xl">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative mb-8 h-[400px] overflow-hidden rounded-lg"
        >
          <Image
            src="/images/gallery/blog/photoshoot-planning.jpg"
            alt="Photoshoot Planning"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-lg max-w-none"
        >
          <p>
            A successful photoshoot requires careful planning and attention to detail. Here&apos;s your comprehensive guide to planning the perfect photoshoot:
          </p>

          <h2>1. Define Your Purpose</h2>
          <p>
            Start by clearly identifying the purpose of your photoshoot. Whether it&apos;s for branding, personal portraits, or special events, your purpose will guide all other decisions.
          </p>

          <h2>2. Choose Your Style</h2>
          <p>
            Research and collect inspiration for the style you want to achieve. Create a mood board with examples of poses, lighting, and compositions that appeal to you.
          </p>

          <h2>3. Select the Right Location</h2>
          <p>
            Choose a location that complements your vision and provides the right backdrop for your photos. Consider lighting conditions and accessibility.
          </p>

          <h2>4. Plan Your Wardrobe</h2>
          <p>
            Select outfits that align with your shoot&apos;s purpose and style. Consider multiple options and how they&apos;ll look in different settings and lighting.
          </p>

          <h2>5. Consider Hair and Makeup</h2>
          <p>
            Decide if you need professional hair and makeup services. Schedule these appointments with enough time before the shoot.
          </p>

          <h2>6. Create a Shot List</h2>
          <p>
            Work with your photographer to develop a list of must-have shots. This ensures you capture all the important moments and poses you want.
          </p>

          <h2>7. Check the Weather</h2>
          <p>
            For outdoor shoots, monitor the weather forecast and have a backup plan in case of unfavorable conditions.
          </p>

          <p className="mt-8 text-gray-600">
            Remember, thorough preparation is key to a successful photoshoot. Take time to plan each aspect carefully, and don&apos;t hesitate to communicate your ideas and concerns with your photographer.
          </p>
        </motion.div>
      </div>
    </div>
  )
} 