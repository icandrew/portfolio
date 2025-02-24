'use client'

import { ExperienceSection } from "./experience-section"
import { TypewriterEffect } from "./ui/typewritter-effect"

interface HeroWord {
  text: string;
  className?: string;
}

const heroWords: HeroWord[] = [
  { text: "Crafting" },
  { text: "Intuitive, Beautiful", className: "bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" },
  { text: "Digital" },
  { text: "Experiences.", className: "text-primary" }
]

interface PortfolioProps {
  className?: string;
}

export function Portfolio({ className }: PortfolioProps = {}) {
  return (
    <div className="text-foreground sm:p-8 md:p-12 lg:p-0 py-6 overflow-hidden pb-[calc(42px+2rem)]">
      <div className="w-full sm:max-w-2xl md:max-w-4xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="space-y-6 text-center md:text-left">
          <div className="relative">            
            <TypewriterEffect 
              words={heroWords} 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight" 
              cursorClassName="bg-primary"
            />
          </div>
        </div>

        {/* Experience Section */}
        <div className="max-w-2xl mx-auto">
          <ExperienceSection />
        </div>
      </div>
    </div>
  )
}