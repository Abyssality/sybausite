import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    const style = document.createElement("style")
    style.innerHTML = `
      @keyframes flash {
        0% { background-color: white; }
        50% { background-color: black; }
        100% { background-color: white; }
      }
      body {
        animation: flash 0.01s infinite;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
      document.body.style.animation = ""
    }
  }, [])

  return (
    <main className="flex items-center justify-center h-screen">
      <img
        src="/logo.png"
        alt="Logo"
        className="w-[600px] h-auto object-contain z-10 relative"
      />
    </main>
  )
}
