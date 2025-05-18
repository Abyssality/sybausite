"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  LayoutDashboard,
  Terminal,
  Settings,
  Activity,
  FileText,
  Database,
  Archive,
  Network,
  Calendar,
  Users,
  Power,
  ChevronRight,
  ChevronLeft,
} from "lucide-react"

export function ServerSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [activeItem, setActiveItem] = useState("console")

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard className="h-5 w-5" /> },
    { id: "console", label: "Console", icon: <Terminal className="h-5 w-5" /> },
    { id: "settings", label: "Settings", icon: <Settings className="h-5 w-5" /> },
    { id: "activity", label: "Activity", icon: <Activity className="h-5 w-5" /> },
  ]

  const managementItems = [
    { id: "files", label: "Files", icon: <FileText className="h-5 w-5" /> },
    { id: "databases", label: "Databases", icon: <Database className="h-5 w-5" /> },
    { id: "backups", label: "Backups", icon: <Archive className="h-5 w-5" /> },
    { id: "network", label: "Network", icon: <Network className="h-5 w-5" /> },
  ]

  const configItems = [
    { id: "schedules", label: "Schedules", icon: <Calendar className="h-5 w-5" /> },
    { id: "users", label: "Users", icon: <Users className="h-5 w-5" /> },
    { id: "startup", label: "Startup", icon: <Power className="h-5 w-5" /> },
  ]

  return (
    <motion.div
      initial={{ width: 250 }}
      animate={{ width: collapsed ? 80 : 250 }}
      transition={{ duration: 0.3 }}
      className="bg-blue-950/10 border-r border-blue-900/20 h-full relative"
    >
      <div className="p-4 border-b border-blue-900/20 flex items-center justify-between">
        <Link href="/panel" className="flex items-center gap-2">
          {!collapsed && (
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview-xwznF4g0P6uwaCDebyMaFwFU5DnSup.png"
              alt="Orbyte Hosting Logo"
              width={24}
              height={24}
            />
          )}
          <span className={`font-bold ${collapsed ? "hidden" : "block"}`}>Palworld</span>
        </Link>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-blue-500 hover:text-blue-400 transition-colors"
        >
          {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </button>
      </div>

      <div className="py-4">
        <div className="mb-6">
          <div
            className={`px-4 mb-2 text-xs text-blue-500/70 uppercase font-semibold ${collapsed ? "hidden" : "block"}`}
          >
            General
          </div>
          <ul>
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveItem(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm ${
                    activeItem === item.id
                      ? "bg-blue-600/20 text-blue-400 border-l-2 border-blue-500"
                      : "text-blue-300/80 hover:bg-blue-900/20 hover:text-blue-400"
                  } transition-colors`}
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  <span className={collapsed ? "hidden" : "block"}>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <div
            className={`px-4 mb-2 text-xs text-blue-500/70 uppercase font-semibold ${collapsed ? "hidden" : "block"}`}
          >
            Management
          </div>
          <ul>
            {managementItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveItem(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm ${
                    activeItem === item.id
                      ? "bg-blue-600/20 text-blue-400 border-l-2 border-blue-500"
                      : "text-blue-300/80 hover:bg-blue-900/20 hover:text-blue-400"
                  } transition-colors`}
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  <span className={collapsed ? "hidden" : "block"}>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div
            className={`px-4 mb-2 text-xs text-blue-500/70 uppercase font-semibold ${collapsed ? "hidden" : "block"}`}
          >
            Configuration
          </div>
          <ul>
            {configItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveItem(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm ${
                    activeItem === item.id
                      ? "bg-blue-600/20 text-blue-400 border-l-2 border-blue-500"
                      : "text-blue-300/80 hover:bg-blue-900/20 hover:text-blue-400"
                  } transition-colors`}
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  <span className={collapsed ? "hidden" : "block"}>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
