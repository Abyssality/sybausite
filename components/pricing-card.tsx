"use client"
import { Button } from "@/components/ui/button"
import type React from "react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  popular?: boolean
  icon: React.ReactNode
}

export function PricingCard({ title, price, description, features, popular = false, icon }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: title === "Dirt" ? 0.1 : title === "Stone" ? 0.2 : 0.3 }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
      <Card className={`relative h-full border-blue-900/20 bg-black ${popular ? "border-blue-500/50" : ""}`}>
        {popular && (
          <div className="absolute -top-3 left-0 right-0 mx-auto w-fit rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
            Most Popular
          </div>
        )}
        <CardHeader className="pb-8 pt-6">
          <div className="mb-2 flex items-center">{icon}</div>
          <CardTitle className="text-2xl">{title}</CardTitle>
          <div className="flex items-baseline text-3xl font-bold">
            {price}
            <span className="ml-1 text-sm font-medium text-muted-foreground">/month</span>
          </div>
          <CardDescription className="pt-1.5 text-blue-300/80">{description}</CardDescription>
        </CardHeader>
        <CardContent className="pb-8">
          <ul className="space-y-2.5">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-blue-500" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="pt-4">
          <Button
            asChild
            variant={popular ? "default" : "outline"}
            className={`w-full ${popular ? "bg-blue-600 hover:bg-blue-700" : "border-blue-600 text-blue-500 hover:bg-blue-600/10"}`}
          >
            <Link href={`/get-started#${title.toLowerCase()}`}>Get Started</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
