"use client"
import { useState, useEffect } from "react"
import { Loader2 } from "lucide-react"

interface AIExplanationProps {
  planName: string
}

export function AIExplanation({ planName }: AIExplanationProps) {
  const [explanation, setExplanation] = useState<string>("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getExplanation() {
      setLoading(true)
      try {
        const response = await fetch("/api/explain-plan", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ planName }),
        })

        if (!response.ok) {
          throw new Error("Failed to get explanation")
        }

        const data = await response.json()
        setExplanation(data.explanation)
      } catch (error) {
        console.error("Error getting explanation:", error)
        setExplanation("Perfect for small to medium workloads. Provides dedicated resources with no sharing.")
      } finally {
        setLoading(false)
      }
    }

    getExplanation()
  }, [planName])

  return (
    <div className="bg-blue-950/30 p-4 rounded-lg">
      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
        <span className="text-blue-400">AI</span> Perfect Use Case
      </h4>

      {loading ? (
        <div className="flex items-center gap-2 text-blue-300/80">
          <Loader2 className="h-4 w-4 animate-spin" />
          Analyzing...
        </div>
      ) : (
        <div className="text-blue-100">{explanation}</div>
      )}
    </div>
  )
}
