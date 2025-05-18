"use client"
import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
    icon?: React.ReactNode
  }[]
  className?: string
}) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={cn("fixed top-4 inset-x-0 max-w-4xl mx-auto z-50", className)}
      >
        <motion.div
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.95 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.3, delay: 0.1 }}
          className={cn(
            "flex items-center justify-center space-x-2 px-4 py-2 rounded-full",
            isScrolled ? "bg-black/70 border border-blue-900/20 backdrop-blur-md" : "bg-transparent",
          )}
        >
          {navItems.map((navItem, idx) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative px-3 py-2 text-sm font-medium transition-colors text-white hover:text-blue-400",
                "group",
              )}
            >
              <span>{navItem.name}</span>
            </Link>
          ))}
          <Link
            href="/panel"
            className="px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 transition-colors rounded-full text-white"
          >
            Panel
          </Link>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
