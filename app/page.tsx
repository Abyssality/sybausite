import { Meteors } from "@/components/ui/meteors"
import { PricingCard } from "@/components/pricing-card"
import { HeroSection } from "@/components/hero-section"
import { Features } from "@/components/features"
import { Leaf, Mountain, Cog } from "lucide-react"

export default function Home() {
  return (
    <main className="flex-grow">
      <HeroSection />

      <section id="plans" className="relative py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="absolute inset-0 overflow-hidden">
          <Meteors number={20} />
        </div>

        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Choose Your Plan
          </h2>
          <p className="text-blue-300/80 max-w-2xl mx-auto">
            Powerful hosting solutions for every project. Scale your applications with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          <PricingCard
            title="Dirt"
            icon={<Leaf className="h-8 w-8 text-blue-500" />}
            price="£4"
            popular={false}
            features={["2GB RAM (Non-shared)", "90% CPU", "10GB Disk Space", "1 Backup", "1 Port"]}
            description="Perfect for small projects and testing"
          />

          <PricingCard
            title="Stone"
            icon={<Mountain className="h-8 w-8 text-blue-500" />}
            price="£8"
            popular={true}
            features={["4GB RAM (Non-shared)", "170% CPU", "25GB Disk Space", "2 Backups", "2 Ports"]}
            description="Ideal for growing applications"
          />

          <PricingCard
            title="Iron"
            icon={<Cog className="h-8 w-8 text-blue-500" />}
            price="£12"
            popular={false}
            features={["6GB RAM (Non-shared)", "230% CPU", "40GB Disk Space", "3 Backups", "3 Ports"]}
            description="For demanding applications and services"
          />
        </div>
      </section>

      <Features />
    </main>
  )
}
