import { NavLinks } from "@/components/ui/nav-links"
import { Portfolio } from "@/components/portfolio"
import { ApplyDotPattern } from "@/components/apply-dot-pattern"

export default function HomePage() {
  return (
    <main className="min-h-screen antialiased relative">
      <ApplyDotPattern />
      <div className="container relative px-4 py-16 mx-auto">
        <Portfolio />
      </div>
      <NavLinks />
    </main>
  )
}