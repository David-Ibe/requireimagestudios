import { Button } from "@/components/ui/button"
import { Gallery } from "@/components/gallery"
import { Slideshow } from "@/components/slideshow"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <Slideshow />
        <div className="absolute inset-0">
          <div className="container mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Capturing Your Perfect Moments
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-gray-200">
              Professional photography for weddings, events, and special occasions
            </p>
            <a href="/contact">
              <Button className="bg-red-500 hover:bg-red-600">
                Book Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-red-500">
            Require Image Studios – Top Photographers for Weddings, Events, and Studio Sessions
          </h2>
          <p className="mb-12 text-center text-gray-600">
            Take a look at some of our beautiful photography work at weddings, corporate events, family portraits,
            birthdays, studio shots and more.
          </p>
          <Gallery />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#C86B6B] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Need Our Professional Photography?</h2>
          <p className="mb-8">
            We offer the best in studio photography, corporate photography, home and event photography. For
            organisations, weddings, families, birthdays, documentaries and more.
          </p>
          <a href="/contact">
            <Button className="border border-white text-white hover:bg-white hover:text-[#C86B6B]">
              TELL US ABOUT IT
            </Button>
          </a>
        </div>
      </section>

      
    </div>
  )
}

