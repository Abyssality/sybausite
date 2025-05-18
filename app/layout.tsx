import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Orbyte Hosting - High Performance Server Solutions",
  description:
    "Premium non-shared server hosting with powerful resources for all your projects. Choose from our Dirt, Stone, and Iron plans.",
  metadataBase: new URL("https://orbyte-hosting.vercel.app"),
  openGraph: {
    title: "Orbyte Hosting - Premium Server Solutions",
    description: "High-performance non-shared server hosting with 99.9% uptime and DDoS protection.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview-xwznF4g0P6uwaCDebyMaFwFU5DnSup.png",
        width: 1200,
        height: 630,
        alt: "Orbyte Hosting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orbyte Hosting - Premium Server Solutions",
    description: "High-performance non-shared server hosting with 99.9% uptime and DDoS protection.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview-xwznF4g0P6uwaCDebyMaFwFU5DnSup.png",
    ],
  },
  discord: {
    color: "#3B82F6",
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Orbyte Hosting - Premium Server Solutions" />
        <meta property="theme-color" content="#3B82F6" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="min-h-screen bg-black text-white overflow-hidden flex flex-col">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none" />
            <NavBar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
