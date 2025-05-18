import { NextResponse } from "next/server"
import { generateText } from "ai"
import { groq } from "@ai-sdk/groq"

export async function POST(req: Request) {
  try {
    const { planName } = await req.json()

    let planDetails = ""
    let useCase = ""

    if (planName === "Dirt Plan") {
      planDetails = "2GB RAM (Non-shared), 90% CPU, 10GB Disk Space"
      useCase = "Minecraft server with 5-10 friends, small Discord bot, or personal website"
    } else if (planName === "Stone Plan") {
      planDetails = "4GB RAM (Non-shared), 170% CPU, 25GB Disk Space"
      useCase = "Medium-sized game server with 10-20 players, web application, or small business site"
    } else if (planName === "Iron Plan") {
      planDetails = "6GB RAM (Non-shared), 230% CPU, 40GB Disk Space"
      useCase = "Large game server with 20+ players, high-traffic website, or resource-intensive application"
    }

    const { text } = await generateText({
      model: groq("llama3-70b-8192"),
      prompt: `You are a server hosting expert. Write exactly TWO short, direct sentences explaining why the ${planName} with ${planDetails} is perfect for a specific use case.

First sentence should mention the non-shared resources and a specific use case like: "${useCase}".
Second sentence should mention a key technical benefit.

Be direct, professional, and specific. No marketing fluff. No more than 2 sentences total.`,
      temperature: 0.3,
      maxTokens: 100,
    })

    return NextResponse.json({ explanation: text })
  } catch (error) {
    console.error("Error generating explanation:", error)
    return NextResponse.json({ error: "Failed to generate explanation" }, { status: 500 })
  }
}
