"use client"
import { FloatingNav } from "@/components/ui/floating-navbar"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function NavBar() {
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Plans", link: "/#plans" },
    { name: "About", link: "/about" },
    { name: "Blog", link: "/blog" },
    { name: "Help Center", link: "/help" },
    { name: "Status", link: "/status" },
    { name: "Discord", link: "/discord" },
  ]

  return (
    <>
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between z-50 relative">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview-xwznF4g0P6uwaCDebyMaFwFU5DnSup.png"
            alt="Orbyte Hosting Logo"
            width={32}
            height={32}
          />
          <span className="font-bold text-xl">Orbyte</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-sm font-medium hover:text-blue-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/panel"
            className="hidden md:flex bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm font-medium transition-colors"
          >
            Control Panel
          </Link>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/95 pt-16 px-4 flex flex-col">
          <nav className="flex flex-col gap-4 py-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="text-lg font-medium hover:text-blue-400 transition-colors py-2 border-b border-blue-900/20"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/panel"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-full text-center text-white font-medium transition-colors mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Control Panel
            </Link>
          </nav>
        </div>
      )}

      {/* Only show floating nav when scrolled */}
      {isScrolled && <FloatingNav navItems={navItems} />}
    </>
  )
}
