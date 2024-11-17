import { NavLinks } from "@/components/ui/nav-links"
import { Portfolio } from "@/components/portfolio"
import { ApplyDotPattern } from "@/components/apply-dot-pattern"
import { AnimatedModalDemo } from "@/components/animated-modal-demo"

export default function HomePage() {
  return (
    <main className="min-h-screen antialiased relative">
      <ApplyDotPattern />
      <div className="container relative mx-auto">
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-4 right-4 md:right-0 z-50">
            <AnimatedModalDemo />
          </div>
        </div>
        <div className="py-16">
          <Portfolio />
        </div>
      </div>
      <NavLinks />
    </main>
  )
}