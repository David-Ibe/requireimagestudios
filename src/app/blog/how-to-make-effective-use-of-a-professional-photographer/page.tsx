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
        How to Make Effective Use of a Professional Photographer
      </motion.h1>

      <div className="mx-auto max-w-3xl">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative mb-8 h-[400px] overflow-hidden rounded-lg"
        >
          <Image
            src="/images/gallery/blog/professional-photography.jpg"
            alt="Professional Photography"
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
            Working with a professional photographer can elevate your event or project to new heights. Here&apos;s how to make the most of your photography session:
          </p>

          <h2>1. Define Your Vision</h2>
          <p>
            Before the shoot, clearly communicate your goals and expectations. Share examples of styles you like and discuss the specific shots you want to capture.
          </p>

          <h2>2. Plan the Timeline</h2>
          <p>
            Work with your photographer to create a realistic schedule that allows enough time for setup, different shots, and any specific moments you want to capture.
          </p>

          <h2>3. Choose the Right Location</h2>
          <p>
            Select locations that complement your vision and provide good lighting. Your photographer can help suggest optimal spots and times of day for the best results.
          </p>

          <h2>4. Prepare Your Space</h2>
          <p>
            If shooting in a specific location, ensure it&apos;s clean and organized. Remove any distracting elements that might detract from the final images.
          </p>

          <h2>5. Discuss Shot Lists</h2>
          <p>
            Create a detailed list of must-have shots. This helps ensure nothing important is missed during the session.
          </p>

          <h2>6. Consider Lighting</h2>
          <p>
            Talk to your photographer about lighting requirements. They may need to bring additional equipment or scout locations at specific times for optimal natural light.
          </p>

          <h2>7. Be Open to Suggestions</h2>
          <p>
            Trust your photographer&apos;s expertise. They may suggest poses, angles, or locations that you hadn&apos;t considered but could enhance your final results.
          </p>

          <p className="mt-8 text-gray-600">
            Remember, a successful photo shoot is a collaboration between you and your photographer. Clear communication, proper planning, and trust in their expertise will help ensure you get the best possible results.
          </p>
        </motion.div>
      </div>
    </div>
  )
} 