import { NavLinks } from "@/components/ui/nav-links"
import { Portfolio } from "@/components/portfolio"
import { Background } from "@/components/ui/background-pattern"
import { AnimatedModalDemo } from "@/components/animated-modal-demo"
import MouseMoveEffect from "@/components/mouse-move-effect"

export default function Home() {
  return (
    <main>
      <MouseMoveEffect />
      <Background 
        position="fixed"
        dots={{ display: true, opacity: 0.5 }}
        gradient={{ display: true, opacity: 0.5 }}
        darkGradient={true}  // Add this new prop
      />
      <div className="container relative mx-auto">
        <div className="max-w-4xl mx-auto relative">
          <div className="flex justify-center md:justify-end px-4 md:px-0 pt-4">
            <AnimatedModalDemo />
          </div>
          <div className="space-y-16 py-6">
            <Portfolio />
          </div>
        </div>
      </div>
      <NavLinks />
    </main>
  )
}