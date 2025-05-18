import { redirect } from "next/navigation"
import type { NextRequest } from "next/server"

export function GET(request: NextRequest) {
  return redirect("https://discord.gg/Z6Zwk63wct")
}
