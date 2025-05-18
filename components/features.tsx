"use client"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { Zap, RefreshCw, Shield, Clock, Wrench, Globe } from "lucide-react"

export function Features() {
  return (
    <section id="features" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
          Why Choose Orbyte
        </h2>
        <p className="text-blue-300/80 max-w-2xl mx-auto">
          Experience the difference with our cutting-edge infrastructure and dedicated support.
        </p>
      </div>

      <HoverEffect
        items={[
          {
            title: "High Performance",
            description: "Our servers are optimized for maximum performance with NVMe SSDs and high-frequency CPUs.",
            icon: <Zap className="h-8 w-8 text-blue-500" />,
          },
          {
            title: "99.9% Uptime",
            description: "We guarantee 99.9% uptime with our redundant infrastructure and proactive monitoring.",
            icon: <RefreshCw className="h-8 w-8 text-blue-500" />,
          },
          {
            title: "DDoS Protection",
            description: "Built-in protection against DDoS attacks to keep your services running smoothly.",
            icon: <Shield className="h-8 w-8 text-blue-500" />,
          },
          {
            title: "Instant Setup",
            description: "Get your server up and running in seconds with our automated deployment system.",
            icon: <Clock className="h-8 w-8 text-blue-500" />,
          },
          {
            title: "24/7 Support",
            description: "Our expert team is available around the clock to help you with any issues.",
            icon: <Wrench className="h-8 w-8 text-blue-500" />,
          },
          {
            title: "Global Network",
            description: "Strategically located data centers ensure low latency for users worldwide.",
            icon: <Globe className="h-8 w-8 text-blue-500" />,
          },
        ]}
      />
    </section>
  )
}
