"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ServerConsole } from "@/components/server-console"
import { ServerSidebar } from "@/components/server-sidebar"
import { ServerStats } from "@/components/server-stats"
import { Loader2 } from "lucide-react"

export default function PanelPage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {loading ? (
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
            <Loader2 className="h-12 w-12 text-blue-500 animate-spin mb-4" />
            <p className="text-blue-300/80">Loading your server panel...</p>
          </motion.div>
        </div>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row min-h-[calc(100vh-4rem)]"
          >
            <ServerSidebar />
            <div className="flex-1 flex flex-col">
              <div className="p-4 md:p-6 flex-1">
                <ServerConsole />
                <ServerStats />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  )
}
