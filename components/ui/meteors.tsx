"use client"
import React from "react"
import { cn } from "@/lib/utils"

export const Meteors = ({
  number = 20,
  className,
}: {
  number?: number
  className?: string
}) => {
  const meteors = React.useMemo(() => {
    return [...Array(number)].map((_, idx) => ({
      id: idx,
      size: Math.floor(Math.random() * 3) + 1,
      speed: Math.floor(Math.random() * 10) + 5,
      delay: Math.floor(Math.random() * 20) + 0,
      opacity: Math.random() * 0.7 + 0.3,
      positionX: Math.floor(Math.random() * 100),
      positionY: Math.floor(Math.random() * 100),
      glowDelay: Math.floor(Math.random() * 5) + 0,
    }))
  }, [number])

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="absolute top-0 left-0 w-0.5 h-0.5 bg-blue-500 rotate-[215deg] animate-glow-pulse"
          style={
            {
              top: `${meteor.positionY}%`,
              left: `${meteor.positionX}%`,
              width: `${meteor.size}px`,
              height: `${meteor.size * 30}px`,
              opacity: meteor.opacity,
              animationDelay: `${meteor.delay}s`,
              animationDuration: `${meteor.speed}s`,
              boxShadow: "0 0 10px 1px rgba(59, 130, 246, 0.5)",
              "--glow-delay": `${meteor.glowDelay}s`,
            } as React.CSSProperties
          }
        />
      ))}
      <style jsx>{`
        span {
          animation: meteor linear infinite, glow-pulse 3s ease-in-out infinite var(--glow-delay);
        }
        @keyframes meteor {
          0% {
            transform: translateY(0) translateX(0) rotate(215deg);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translateY(1000px) translateX(-1000px) rotate(215deg);
            opacity: 0;
          }
        }
        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 10px 1px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 20px 4px rgba(59, 130, 246, 0.8);
          }
        }
      `}</style>
    </div>
  )
}
