"use client"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface ServerStatusProps {
  name: string
  location: string
  status: "Online" | "Offline" | "Maintenance" | "In delivery"
}

export function ServerStatus({ name, location, status }: ServerStatusProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0
        }
        return prev + 0.5 // Slower increment for smoother animation
      })
    }, 50) // Faster interval for smoother animation

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="border-blue-900/20 bg-black overflow-hidden h-full">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-xl font-bold">{name}</h2>
              <p className="text-blue-300/80 text-sm">{location}</p>
            </div>
            <StatusBadge status={status} />
          </div>

          {status === "In delivery" && (
            <div className="mt-4">
              <DeliveryAnimation progress={progress} />
              <div className="mt-4">
                <div className="h-2 bg-blue-900/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full transition-all duration-300 ease-in-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex justify-between mt-1 text-xs text-blue-300/80">
                  <span>Preparing</span>
                  <span>In transit</span>
                  <span>Delivered</span>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

function StatusBadge({ status }: { status: ServerStatusProps["status"] }) {
  const getStatusColor = () => {
    switch (status) {
      case "Online":
        return "bg-green-500"
      case "Offline":
        return "bg-red-500"
      case "Maintenance":
        return "bg-yellow-500"
      case "In delivery":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div
      className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 ${status === "In delivery" ? "bg-blue-600/20 text-blue-400" : "bg-gray-800"}`}
    >
      <span className={`w-2 h-2 rounded-full ${getStatusColor()}`} />
      {status}
    </div>
  )
}

function DeliveryAnimation({ progress }: { progress: number }) {
  // Calculate position based on progress - position between "in transit" and "Delivered"
  // This puts the truck between 50% (in transit) and 100% (delivered)
  const position = 50 + progress * 0.25 // This will keep it between 50% and 75% of the way

  return (
    <div className="relative h-20 bg-blue-950/20 rounded-lg overflow-hidden">
      {/* Road */}
      <div className="absolute bottom-6 left-0 right-0 h-1 bg-blue-800/50" />

      {/* House */}
      <div className="absolute right-6 bottom-7">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 21H21" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M5 21V7L12 3L19 7V21"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M9 21V15H15V21" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Server truck */}
      <motion.div
        className="absolute bottom-7"
        style={{
          left: `${position}%`,
          transition: "left 0.5s ease-out", // Smoother transition
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 16V3H1V16H16Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 8H20L23 11V16H16V8Z" stroke="#3B82F6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="5.5" cy="18.5" r="2.5" stroke="#3B82F6" strokeWidth="2" />
          <circle cx="18.5" cy="18.5" r="2.5" stroke="#3B82F6" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* Add some clouds or scenery elements for visual interest */}
      <motion.div
        className="absolute top-4 left-10"
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 18C4.79086 18 3 16.2091 3 14C3 11.7909 4.79086 10 7 10C7.03906 10 7.07799 10.0006 7.1167 10.0018C7.54305 7.7296 9.59028 6 12 6C14.4097 6 16.457 7.7296 16.8833 10.0018C16.922 10.0006 16.9609 10 17 10C19.2091 10 21 11.7909 21 14C21 16.2091 19.2091 18 17 18H7Z"
            stroke="#3B82F6"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-3 right-20"
        animate={{ x: [0, -7, 0] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 18C4.79086 18 3 16.2091 3 14C3 11.7909 4.79086 10 7 10C7.03906 10 7.07799 10.0006 7.1167 10.0018C7.54305 7.7296 9.59028 6 12 6C14.4097 6 16.457 7.7296 16.8833 10.0018C16.922 10.0006 16.9609 10 17 10C19.2091 10 21 11.7909 21 14C21 16.2091 19.2091 18 17 18H7Z"
            stroke="#3B82F6"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </div>
  )
}
