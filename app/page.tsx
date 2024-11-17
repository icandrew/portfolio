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
          <div className="flex justify-center md:justify-end px-4 md:px-0 pt-4">
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