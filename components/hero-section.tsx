"use client"
import { Button } from "@/components/ui/button"
import { Spotlight } from "@/components/ui/spotlight"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Zap, Shield, Globe, Settings } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      <Spotlight className="hidden md:block" />

      <div className="container px-4 md:px-6 flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="animate-float"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview-xwznF4g0P6uwaCDebyMaFwFU5DnSup.png"
            alt="Orbyte Hosting Logo"
            width={180}
            height={180}
            className="mb-8 animate-pulse-slow"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-glow">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Orbyte Hosting
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="max-w-[700px] text-lg md:text-xl text-blue-300/80 mb-8">
            High-performance server hosting with unbeatable uptime and lightning-fast speeds. Power your projects with
            our cutting-edge infrastructure.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/get-started">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-500 hover:bg-blue-600/10">
            <Link href="/discord">Join Discord</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { icon: <Zap className="h-8 w-8 text-blue-500" />, label: "99.9% Uptime" },
            { icon: <Shield className="h-8 w-8 text-blue-500" />, label: "DDoS Protection" },
            { icon: <Globe className="h-8 w-8 text-blue-500" />, label: "Global Network" },
            { icon: <Settings className="h-8 w-8 text-blue-500" />, label: "24/7 Support" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="mb-2">{item.icon}</div>
              <div className="text-sm text-blue-300/80">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </section>
  )
}
