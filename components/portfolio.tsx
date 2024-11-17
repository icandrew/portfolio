'use client'

import { ExperienceSection } from "./experience-section"

export function Portfolio() {
  return (
    <div className="text-foreground sm:p-8 md:p-12 lg:p-16 overflow-hidden">
      <div className="w-full sm:max-w-2xl md:max-w-4xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="space-y-6 text-center md:text-left">
          <div className="relative">            
            <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-6xl font-bold leading-tight">
              Crafting Intuitive, Beautiful <span className="text-primary">Digital Experiences.✨</span>
            </h1>
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