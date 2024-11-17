'use client'

import { ExperienceSection } from "./experience-section"
import { LinkPreview } from "@/components/ui/link-preview"

export function Portfolio() {
  return (
    <div className="min-h-screen text-foreground p-8 md:p-12 lg:p-16">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <LinkPreview url="https://www.behance.net/amistlr">
              Crafting Intuitive
            </LinkPreview>
            , Beautiful{" "}
            <span className="text-primary">Digital Experiences.✨</span>
          </h1>
        </div>

        {/* Experience Section */}
        <ExperienceSection />
      </div>
    </div>
  )
}