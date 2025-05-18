import { Meteors } from "@/components/ui/meteors"
import Image from "next/image"
import { Server, Shield, Globe, Clock, Users, Award } from "lucide-react"

export const metadata = {
  title: "About Us - Orbyte Hosting",
  description:
    "Learn about Orbyte Hosting, our mission, and our commitment to providing high-quality server hosting solutions.",
}

export default function AboutPage() {
  return (
    <section className="relative py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="absolute inset-0 overflow-hidden">
        <Meteors number={15} />
      </div>

      <div className="text-center mb-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
          About Orbyte Hosting
        </h1>
        <p className="text-blue-300/80 max-w-2xl mx-auto">
          Providing premium non-shared server hosting solutions with unmatched performance and reliability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Our Mission</h2>
          <p className="text-lg mb-6 text-blue-100/90">
            At Orbyte Hosting, we believe that everyone deserves access to high-quality, reliable server hosting without
            breaking the bank. Our mission is to provide premium non-shared resources at affordable prices, ensuring
            that your projects run smoothly without the performance issues common with shared hosting.
          </p>
          <p className="text-lg mb-6 text-blue-100/90">
            Founded by gamers and developers who understand the frustration of laggy servers and downtime, we've built
            our infrastructure to deliver the performance and reliability we wanted for ourselves.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-3xl"></div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview-xwznF4g0P6uwaCDebyMaFwFU5DnSup.png"
              alt="Orbyte Hosting Logo"
              width={400}
              height={400}
              className="relative z-10"
            />
          </div>
        </div>
      </div>

      <div className="mt-24 relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">What Sets Us Apart</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Server className="h-10 w-10 text-blue-500" />,
              title: "Non-Shared Resources",
              description:
                "All our plans provide dedicated resources that aren't shared with other users, ensuring consistent performance.",
            },
            {
              icon: <Shield className="h-10 w-10 text-blue-500" />,
              title: "DDoS Protection",
              description:
                "Built-in protection against DDoS attacks keeps your services running smoothly even under pressure.",
            },
            {
              icon: <Globe className="h-10 w-10 text-blue-500" />,
              title: "Global Network",
              description: "Strategically located data centers ensure low latency for users worldwide.",
            },
            {
              icon: <Clock className="h-10 w-10 text-blue-500" />,
              title: "99.9% Uptime",
              description: "We guarantee 99.9% uptime with our redundant infrastructure and proactive monitoring.",
            },
            {
              icon: <Users className="h-10 w-10 text-blue-500" />,
              title: "24/7 Support",
              description: "Our expert team is available around the clock to help you with any issues.",
            },
            {
              icon: <Award className="h-10 w-10 text-blue-500" />,
              title: "Quality Hardware",
              description:
                "We use only high-quality hardware with NVMe SSDs and high-frequency CPUs for maximum performance.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-blue-950/10 border border-blue-900/20 rounded-xl p-6 hover:bg-blue-900/20 transition-colors"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-blue-300/80">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 relative z-10 bg-blue-950/10 border border-blue-900/20 rounded-xl p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-6 text-blue-400">Our Commitment</h2>
        <p className="text-lg mb-6 text-blue-100/90">
          We're committed to providing the best possible hosting experience for our customers. That means:
        </p>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <div className="bg-blue-500/20 p-1 rounded-full mt-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>
            <p className="text-blue-100/90">Transparent pricing with no hidden fees or surprise charges</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="bg-blue-500/20 p-1 rounded-full mt-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>
            <p className="text-blue-100/90">Continuous improvement of our infrastructure and services</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="bg-blue-500/20 p-1 rounded-full mt-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>
            <p className="text-blue-100/90">Responsive and helpful customer support</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="bg-blue-500/20 p-1 rounded-full mt-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>
            <p className="text-blue-100/90">Environmentally responsible hosting practices</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
