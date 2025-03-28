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
        How to Plan for a Perfect Event
      </motion.h1>

      <div className="mx-auto max-w-3xl">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative mb-8 h-[400px] overflow-hidden rounded-lg"
        >
          <Image
            src="/images/gallery/4.jpg"
            alt="Event Planning"
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
            Planning a perfect event requires careful attention to detail and thorough preparation. Here are some key steps to ensure your event is a success:
          </p>

          <h2>1. Define Your Event Goals</h2>
          <p>
            Start by clearly defining what you want to achieve with your event. Whether it&apos;s a corporate gathering, wedding, or social celebration, having clear objectives will guide your planning process.
          </p>

          <h2>2. Create a Timeline</h2>
          <p>
            Develop a detailed timeline that outlines all the tasks that need to be completed before, during, and after the event. This will help you stay organized and ensure nothing is overlooked.
          </p>

          <h2>3. Set a Budget</h2>
          <p>
            Establish a realistic budget that covers all aspects of your event, including venue, catering, entertainment, and photography. Remember to include a contingency fund for unexpected expenses.
          </p>

          <h2>4. Choose the Right Venue</h2>
          <p>
            Select a venue that matches your event&apos;s style and can accommodate your guest list comfortably. Consider factors like location, accessibility, and available amenities.
          </p>

          <h2>5. Plan the Photography</h2>
          <p>
            Don&apos;t forget to arrange for professional photography to capture all the special moments. Book your photographer well in advance and discuss your specific requirements and shot list.
          </p>

          <h2>6. Coordinate with Vendors</h2>
          <p>
            Work closely with all your vendors to ensure everyone understands their roles and responsibilities. Regular communication is key to avoiding any last-minute surprises.
          </p>

          <h2>7. Create a Day-of Schedule</h2>
          <p>
            Develop a detailed schedule for the day of the event, including setup times, key activities, and cleanup. Share this with all involved parties to ensure smooth execution.
          </p>

          <p className="mt-8 text-gray-600">
            Remember, successful event planning is all about attention to detail and staying organized. By following these steps and working with experienced professionals, you can create an unforgettable event that meets all your objectives.
          </p>
        </motion.div>
      </div>
    </div>
  )
} 