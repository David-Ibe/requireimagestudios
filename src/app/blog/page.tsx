import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    title: "How to Plan for a Perfect Event",
    excerpt: "Discover the essential steps to organize a flawless event...",
    image: "/7.jpg",
    date: "April 1, 2024",
    category: "Event Planning",
    slug: "how-to-plan-for-a-perfect-event",
  },
  {
    title: "Guide to Plan for a Photoshoot",
    excerpt: "A step-by-step guide to ensure your photoshoot is a success...",
    image: "/3.jpg",
    date: "April 5, 2024",
    category: "Photoshoot Planning",
    slug: "guide-to-plan-for-a-photoshoot",
  },
  {
    title: "How to Make Effective Use of a Professional Photographer",
    excerpt: "Maximize the benefits of hiring a professional photographer...",
    image: "/6.jpg",
    date: "April 10, 2024",
    category: "Photography Tips",
    slug: "how-to-make-effective-use-of-a-professional-photographer",
  },
  // Add more blog posts...
]

export default function BlogPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-bold text-red-500">Photography Blog</h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Tips, insights, and stories from our photography experiences.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-lg border border-gray-200 transition-all hover:shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-red-500">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h2 className="mb-2 text-xl font-semibold">{post.title}</h2>
                <p className="text-gray-600">{post.excerpt}</p>
                <div className="mt-4 text-red-500 group-hover:underline">Read More</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 