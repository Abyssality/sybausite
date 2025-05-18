"use client"
import { useState } from "react"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { AIExplanation } from "@/components/ai-explanation"

interface PlanDetailsProps {
  id: string
  title: string
  price: string
  features: string[]
  description: string
  icon: React.ReactNode
  popular?: boolean
}

export function PlanDetails({ id, title, price, features, description, icon, popular = false }: PlanDetailsProps) {
  const [showAI, setShowAI] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id={id}
      className="scroll-mt-20"
    >
      <Card className={`border-blue-900/20 bg-black overflow-hidden ${popular ? "border-blue-500/50" : ""}`}>
        <CardContent className="p-0">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 md:col-span-1 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                {icon}
                <h2 className="text-2xl font-bold">{title}</h2>
                {popular && <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">Most Popular</span>}
              </div>
              <div className="text-3xl font-bold mb-4">{price}</div>
              <p className="text-blue-300/80 mb-6">{description}</p>
              <Button
                className="bg-blue-600 hover:bg-blue-700 w-full mb-4"
                onClick={() => window.open("https://billing.orbyte.host", "_blank")}
              >
                Purchase Now
              </Button>
              <Button
                variant="outline"
                className="border-blue-600 text-blue-500 hover:bg-blue-600/10 w-full flex items-center gap-2"
                onClick={() => setShowAI(!showAI)}
              >
                <Sparkles className="h-4 w-4" />
                {showAI ? "Hide Use Case" : "Show Perfect Use Case"}
              </Button>
            </div>

            <div className="p-6 md:col-span-2 bg-blue-950/20 flex flex-col">
              <h3 className="text-xl font-semibold mb-4">Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-blue-100">{feature}</span>
                  </div>
                ))}
              </div>

              {showAI && (
                <div className="mt-6 pt-6 border-t border-blue-900/20">
                  <AIExplanation planName={title} />
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
