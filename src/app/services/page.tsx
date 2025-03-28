import { Camera, Building2, Users, Cake } from "lucide-react"
import { LucideIcon } from "lucide-react"
import Link from "next/link"

interface Service {
  icon: LucideIcon
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: Camera,
    title: "Wedding Photography", 
    description: "Capturing your special day with elegance and style. Complete coverage of traditional and white wedding ceremonies.",
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description: "Professional photography for corporate events, conferences, and business portraits.",
  },
  {
    icon: Users,
    title: "Family Portraits",
    description: "Beautiful family portraits that capture the essence of your relationships and create lasting memories.",
  },
  {
    icon: Camera,
    title: "Corporate and Personal Branding",
    description: "We specialize in creating impactful visuals for executives, entrepreneurs, and creatives, delivering headshots and branding imagery that reflect your unique identity and professionalism.",
  },
  {
    icon: Cake,
    title: "Birthday Celebrations",
    description: "Capturing the joy and excitement of birthday parties and special celebrations.",
  },
  {
    icon: Camera,
    title: "Studio Sessions",
    description: "Professional studio photography for portraits, fashion shoots, and commercial photography.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-bold text-red-500">What We Do!</h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            We offer a comprehensive range of professional photography services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 p-6 transition-all hover:shadow-lg"
            >
              <service.icon className="mb-4 h-8 w-8 text-red-500" />
              <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 rounded-lg bg-red-500 p-8 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">Ready to Book Your Session?</h2>
          <p className="mb-6">
            Contact us today to discuss your photography needs and get a custom quote.
          </p>
          <Link 
            href="/contact" 
            className="rounded-lg border-2 border-white px-6 py-2 font-semibold transition-colors hover:bg-white hover:text-red-500"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
} 