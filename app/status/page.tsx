import { Meteors } from "@/components/ui/meteors"
import { ServerStatus } from "@/components/server-status"

export const metadata = {
  title: "Server Status - Orbyte Hosting",
  description: "Check the real-time status of our server nodes",
  openGraph: {
    title: "Server Status - Orbyte Hosting",
    description: "Check the real-time status of our server nodes",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview-xwznF4g0P6uwaCDebyMaFwFU5DnSup.png",
        width: 1200,
        height: 630,
        alt: "Orbyte Hosting Status",
      },
    ],
  },
}

export default function StatusPage() {
  return (
    <section className="relative py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="absolute inset-0 overflow-hidden">
        <Meteors number={15} />
      </div>

      <div className="text-center mb-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
          Server Status
        </h1>
        <p className="text-blue-300/80 max-w-2xl mx-auto">
          Monitor the real-time status of our server nodes. All nodes are currently being deployed and will be online
          soon.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        <ServerStatus name="UK.IoM.3" location="Isle of Man, UK" status="In delivery" />
        <ServerStatus name="UK.IoM.2" location="Isle of Man, UK" status="In delivery" />
        <ServerStatus name="UK.IoM.1" location="Isle of Man, UK" status="In delivery" />
      </div>
    </section>
  )
}
