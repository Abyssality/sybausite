"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Cpu, MemoryStickIcon as Memory, HardDrive } from "lucide-react"
import { useState, useEffect } from "react"

export function ServerStats() {
  const [cpuUsage, setCpuUsage] = useState(0)
  const [memoryUsage, setMemoryUsage] = useState(0)
  const [diskUsage, setDiskUsage] = useState(0)

  useEffect(() => {
    // Simulate changing stats
    const interval = setInterval(() => {
      setCpuUsage(Math.floor(Math.random() * 30) + 70) // 70-100%
      setMemoryUsage(Math.floor(Math.random() * 500) + 1500) // 1500-2000 MB
      setDiskUsage(Math.floor(Math.random() * 5) + 15) // 15-20 GB
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-4"
    >
      <Card className="border-blue-900/20 bg-black">
        <CardContent className="p-4 flex items-center gap-4">
          <div className="bg-blue-950/30 p-3 rounded-full">
            <Cpu className="h-6 w-6 text-blue-500" />
          </div>
          <div>
            <div className="text-sm text-blue-300/80">CPU Usage</div>
            <div className="text-xl font-semibold flex items-center gap-2">
              {cpuUsage}%
              <div className="w-32 h-2 bg-blue-950/30 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: `${cpuUsage}%` }} />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-blue-900/20 bg-black">
        <CardContent className="p-4 flex items-center gap-4">
          <div className="bg-blue-950/30 p-3 rounded-full">
            <Memory className="h-6 w-6 text-blue-500" />
          </div>
          <div>
            <div className="text-sm text-blue-300/80">Memory Usage</div>
            <div className="text-xl font-semibold flex items-center gap-2">
              {memoryUsage} MB
              <div className="w-32 h-2 bg-blue-950/30 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: `${(memoryUsage / 4096) * 100}%` }} />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-blue-900/20 bg-black">
        <CardContent className="p-4 flex items-center gap-4">
          <div className="bg-blue-950/30 p-3 rounded-full">
            <HardDrive className="h-6 w-6 text-blue-500" />
          </div>
          <div>
            <div className="text-sm text-blue-300/80">Disk Usage</div>
            <div className="text-xl font-semibold flex items-center gap-2">
              {diskUsage} GB
              <div className="w-32 h-2 bg-blue-950/30 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: `${(diskUsage / 25) * 100}%` }} />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
