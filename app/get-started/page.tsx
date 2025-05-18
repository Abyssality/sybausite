import { Meteors } from "@/components/ui/meteors"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { PlanDetails } from "@/components/plan-details"
import { Leaf, Mountain, Cog } from "lucide-react"

export default function GetStarted() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none" />

      <NavBar />

      <section className="relative py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="absolute inset-0 overflow-hidden">
          <Meteors number={20} />
        </div>

        <div className="text-center mb-16 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Get Started with Orbyte
          </h1>
          <p className="text-blue-300/80 max-w-2xl mx-auto">
            Choose the perfect plan for your needs and start hosting your projects with confidence.
          </p>
        </div>

        <div className="space-y-16 relative z-10">
          <PlanDetails
            id="dirt"
            title="Dirt Plan"
            price="£4/month"
            icon={<Leaf className="h-12 w-12 text-blue-500" />}
            features={[
              "2GB RAM (Non-shared)",
              "90% CPU",
              "10GB Disk Space",
              "1 Backup",
              "1 Port",
              "24/7 Support",
              "DDoS Protection",
              "99.9% Uptime Guarantee",
            ]}
            description="Perfect for small projects and testing environments. Ideal for personal websites, development servers, and small applications."
          />

          <PlanDetails
            id="stone"
            title="Stone Plan"
            price="£8/month"
            icon={<Mountain className="h-12 w-12 text-blue-500" />}
            features={[
              "4GB RAM (Non-shared)",
              "170% CPU",
              "25GB Disk Space",
              "2 Backups",
              "2 Ports",
              "24/7 Priority Support",
              "Advanced DDoS Protection",
              "99.9% Uptime Guarantee",
            ]}
            description="Ideal for growing applications and medium-sized projects. Perfect for small businesses, game servers, and web applications with moderate traffic."
            popular={true}
          />

          <PlanDetails
            id="iron"
            title="Iron Plan"
            price="£12/month"
            icon={<Cog className="h-12 w-12 text-blue-500" />}
            features={[
              "6GB RAM (Non-shared)",
              "230% CPU",
              "40GB Disk Space",
              "3 Backups",
              "3 Ports",
              "24/7 Premium Support",
              "Enterprise DDoS Protection",
              "99.99% Uptime Guarantee",
            ]}
            description="For demanding applications and services with high traffic. Suitable for businesses, high-traffic websites, and resource-intensive applications."
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}
