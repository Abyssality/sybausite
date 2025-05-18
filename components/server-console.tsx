"use client"
import { useState, useEffect, useRef } from "react"
import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Square, RotateCw, Maximize2, ChevronRight } from "lucide-react"

export function ServerConsole() {
  const [consoleLines, setConsoleLines] = useState<string[]>([])
  const [isRunning, setIsRunning] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const consoleRef = useRef<HTMLDivElement>(null)

  // Simulate console output
  useEffect(() => {
    if (isRunning) {
      const startupMessages = [
        "[Pterodactyl Daemon]: Checking server disk space usage, this could take a few seconds...",
        "[Pterodactyl Daemon]: Loading process configuration files...",
        "[Pterodactyl Daemon]: Ensuring file permissions are correct...",
        "[Pterodactyl Daemon]: Server marked as starting...",
        "[Pterodactyl Daemon]: Pulling container image, this could take a few seconds...",
        "[Pterodactyl Daemon]: Creating container...",
        "[Pterodactyl Daemon]: Starting container...",
        "Status: Image is up to date for ghcr.io/pterodactyl/yolks:java_17",
        "[Pterodactyl Daemon]: Finished pulling Docker container image.",
        "[Pterodactyl Daemon]: Pulling Docker container image.",
        "Using user-defined Java version: 17",
        "System Information:",
        "  CPU: Intel(R) Xeon(R) CPU @ 2.30GHz (4 cores)",
        "  Memory: 4096MB",
        "  Storage: 25GB",
        "  OS: Linux",
        "Starting Minecraft server version 1.19.2",
        "Loading properties",
        "Default game type: SURVIVAL",
        "Generating keypair",
        "Starting Minecraft server on *:25565",
        'Preparing level "world"',
        "Preparing start region for dimension minecraft:overworld",
        "Preparing spawn area: 0%",
        "Preparing spawn area: 20%",
        "Preparing spawn area: 40%",
        "Preparing spawn area: 60%",
        "Preparing spawn area: 80%",
        "Preparing spawn area: 100%",
        'Done (12.345s)! For help, type "help"',
        "Server started successfully!",
      ]

      let index = 0
      const interval = setInterval(() => {
        if (index < startupMessages.length) {
          setConsoleLines((prev) => [...prev, startupMessages[index]])
          index++
        } else {
          clearInterval(interval)
        }
      }, 300)

      return () => clearInterval(interval)
    }
  }, [isRunning])

  // Auto-scroll console
  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight
    }
  }, [consoleLines])

  const handleStart = () => {
    setConsoleLines([])
    setIsRunning(true)
  }

  const handleStop = () => {
    setConsoleLines((prev) => [...prev, "Stopping server...", "Server stopped."])
    setIsRunning(false)
  }

  const handleRestart = () => {
    setConsoleLines((prev) => [...prev, "Restarting server...", "Server stopped."])
    setTimeout(() => {
      setConsoleLines([])
      setIsRunning(true)
    }, 1000)
  }

  const handleSendCommand = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim() === "") return

    setConsoleLines((prev) => [...prev, `> ${inputValue}`])

    // Simulate command responses
    if (inputValue.startsWith("help")) {
      setTimeout(() => {
        setConsoleLines((prev) => [
          ...prev,
          "Available commands:",
          "/help - Shows this help message",
          "/list - Lists all online players",
          "/stop - Stops the server",
          "/ban <player> - Bans a player",
          "/op <player> - Makes a player an operator",
          "/time set <time> - Sets the time",
          "/weather <type> - Sets the weather",
        ])
      }, 300)
    } else if (inputValue.startsWith("list")) {
      setTimeout(() => {
        setConsoleLines((prev) => [...prev, "There are 0/20 players online:"])
      }, 300)
    } else {
      setTimeout(() => {
        setConsoleLines((prev) => [...prev, 'Unknown command. Type "help" for help.'])
      }, 300)
    }

    setInputValue("")
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <Card className="border-blue-900/20 bg-black mb-6">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-xl font-bold">Console</CardTitle>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 border-blue-900/20 text-blue-500 hover:bg-blue-900/20 hover:text-blue-400"
              onClick={handleStart}
              disabled={isRunning}
            >
              <Play className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 border-blue-900/20 text-blue-500 hover:bg-blue-900/20 hover:text-blue-400"
              onClick={handleStop}
              disabled={!isRunning}
            >
              <Square className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 border-blue-900/20 text-blue-500 hover:bg-blue-900/20 hover:text-blue-400"
              onClick={handleRestart}
            >
              <RotateCw className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 border-blue-900/20 text-blue-500 hover:bg-blue-900/20 hover:text-blue-400"
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div
            ref={consoleRef}
            className="bg-blue-950/30 rounded-md p-3 h-80 overflow-y-auto font-mono text-sm text-blue-100/90 mb-3"
          >
            {consoleLines.map((line, index) => (
              <div key={index} className="whitespace-pre-wrap mb-1">
                {line}
              </div>
            ))}
            {consoleLines.length === 0 && (
              <div className="text-blue-500/50 italic">Server is offline. Click the start button to begin.</div>
            )}
          </div>
          <form onSubmit={handleSendCommand} className="relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type a command..."
              className="w-full bg-blue-950/20 border border-blue-900/20 rounded-md py-2 px-10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!isRunning}
            />
            <ChevronRight className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 h-4 w-4" />
            <Button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-7 bg-blue-600 hover:bg-blue-700 py-0 px-3 text-xs"
              disabled={!isRunning}
            >
              Send
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
