'use client'

import { BlurIn } from "@/components/ui/blur-in"
import { ExperienceSection } from "./experience-section"

export function Portfolio() {
  return (
    <div className="min-h-screen text-foreground p-8 md:p-12 lg:p-16">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="space-y-6">
          <BlurIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Crafting Intuitive, Beautiful{" "}
              <span className="text-primary">Digital Experiences.✨</span>
            </h1>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              <span className="text-foreground font-medium">UI designer</span> with{" "}
              <span className="text-foreground font-medium">5+ years</span> of experience 
              creating user-friendly, visually appealing interfaces for websites and apps. 
              Skilled in{" "}
              <span className="text-foreground font-medium">
                wireframing, prototyping
              </span>, and tools like{" "}
              <span className="text-foreground font-medium">Adobe XD</span> and{" "}
              <span className="text-foreground font-medium">Figma</span>.{" "}
              <span className="text-primary font-medium">Let&apos;s collaborate!</span>
            </p>
          </BlurIn>
        </div>

        {/* Experience Section */}
        <ExperienceSection />
      </div>
    </div>
  )
}