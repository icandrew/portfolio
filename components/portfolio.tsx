'use client'

import { ExperienceSection } from "./experience-section"

export function Portfolio() {
  return (
    <div className="text-foreground sm:p-8 md:p-12 lg:p-16 overflow-hidden">
      <div className="w-full max-w-[320px] sm:max-w-2xl md:max-w-4xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-6xl font-bold leading-tight">
            Crafting Intuitive, Beautiful <span className="text-primary">Digital Experiences.✨</span>
          </h1>
        </div>

        {/* Experience Section */}
        <ExperienceSection />
      </div>
    </div>
  )
}