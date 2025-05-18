import { Meteors } from "@/components/ui/meteors"
import Link from "next/link"
import Image from "next/image"
import { Calendar, User, Clock } from "lucide-react"

export const metadata = {
  title: "Blog - Orbyte Hosting",
  description: "Latest news, tutorials, and updates from Orbyte Hosting.",
}

export default function BlogPage() {
  return (
    <section className="relative py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="absolute inset-0 overflow-hidden">
        <Meteors number={15} />
      </div>

      <div className="text-center mb-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
          Orbyte Blog
        </h1>
        <p className="text-blue-300/80 max-w-2xl mx-auto">Latest news, tutorials, and updates from Orbyte Hosting.</p>
      </div>

      <div className="relative z-10 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "How to Optimize Your Minecraft Server for Better Performance",
              excerpt: "Learn how to optimize your Minecraft server settings for maximum performance and minimal lag.",
              image: "/placeholder.svg?height=200&width=400",
              date: "May 15, 2025",
              author: "Orbyte Team",
              readTime: "5 min read",
              slug: "optimize-minecraft-server",
            },
            {
              title: "Setting Up a Discord Bot on Your Server",
              excerpt: "A step-by-step guide to setting up and hosting your own Discord bot on our servers.",
              image: "/placeholder.svg?height=200&width=400",
              date: "May 10, 2025",
              author: "Orbyte Team",
              readTime: "8 min read",
              slug: "discord-bot-setup",
            },
            {
              title: "The Benefits of Non-Shared Hosting",
              excerpt: "Why non-shared hosting provides better performance and reliability for your projects.",
              image: "/placeholder.svg?height=200&width=400",
              date: "May 5, 2025",
              author: "Orbyte Team",
              readTime: "4 min read",
              slug: "benefits-non-shared-hosting",
            },
            {
              title: "Introducing Our New Iron Plan",
              excerpt: "Discover the features and benefits of our new high-performance Iron hosting plan.",
              image: "/placeholder.svg?height=200&width=400",
              date: "April 28, 2025",
              author: "Orbyte Team",
              readTime: "3 min read",
              slug: "introducing-iron-plan",
            },
            {
              title: "How to Install and Configure Plugins on Your Server",
              excerpt: "A comprehensive guide to installing and configuring plugins on your game server.",
              image: "/placeholder.svg?height=200&width=400",
              date: "April 20, 2025",
              author: "Orbyte Team",
              readTime: "7 min read",
              slug: "install-configure-plugins",
            },
            {
              title: "Server Security Best Practices",
              excerpt: "Essential security practices to keep your server and data safe from threats.",
              image: "/placeholder.svg?height=200&width=400",
              date: "April 15, 2025",
              author: "Orbyte Team",
              readTime: "6 min read",
              slug: "server-security-best-practices",
            },
          ].map((post, index) => (
            <Link
              key={index}
              href={`/blog/${post.slug}`}
              className="bg-blue-950/10 border border-blue-900/20 rounded-xl overflow-hidden hover:bg-blue-900/20 transition-colors group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{post.title}</h2>
                <p className="text-blue-300/80 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-4 text-sm text-blue-400/70">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex justify-center">
        <div className="inline-flex rounded-md">
          <button className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-l-md hover:bg-blue-700 transition-colors">
            1
          </button>
          <button className="px-4 py-2 text-sm font-medium bg-blue-950/20 text-white hover:bg-blue-900/30 transition-colors">
            2
          </button>
          <button className="px-4 py-2 text-sm font-medium bg-blue-950/20 text-white hover:bg-blue-900/30 transition-colors">
            3
          </button>
          <button className="px-4 py-2 text-sm font-medium bg-blue-950/20 text-white rounded-r-md hover:bg-blue-900/30 transition-colors">
            Next
          </button>
        </div>
      </div>
    </section>
  )
}
