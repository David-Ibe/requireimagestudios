import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Amanda & Toyosi",
    image: "/2z.jpg",
    role: "Wedding Couple",
    content: "The team captured our wedding day perfectly. Every precious moment was documented beautifully.",
    rating: 5,
  },
  {
    name: "First Bank Nigeria Ltd",
    image: "/h.jpg",
    role: "Corporate Client",
    content: "Professional service for our annual conference. The quality of photos exceeded our expectations.",
    rating: 5,
  },
  {
    name: "The Johnson Family",
    image: "/1.jpg",
    role: "Family Portrait",
    content: "Amazing family portrait session. They were great with the kids and captured natural, beautiful moments.",
    rating: 5,
  },
  // Add more testimonials...
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-bold text-red-500">Client Testimonials</h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Read what our clients have to say about their experience with Require Image Studios.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 p-6 transition-all hover:shadow-lg"
            >
              <div className="mb-4 flex items-center space-x-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 