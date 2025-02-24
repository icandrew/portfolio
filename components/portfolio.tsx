'use client'

import { ExperienceSection } from "./experience-section"
import Image from "next/image"

interface PortfolioProps {
  className?: string;
}

export function Portfolio() {  // Remove unused className parameter
  return (
    <div className="text-foreground sm:p-8 md:p-12 lg:p-0 py-6 overflow-hidden pb-[calc(42px+2rem)] relative">
      <div className="fixed left-0 top-0 z-10 opacity-60 max-w-screen overflow-hidden">
        <Image 
          src="/file/banner_star_mb.png"
          alt="Decorative star"
          width={1800}
          height={1800}
          className="w-full h-full"
          priority
        />
      </div>
      <div className="w-full sm:max-w-2xl md:max-w-4xl mx-auto space-y-16 relative z-20">
        <div className="space-y-6 text-center md:text-left">
          <div className="relative">            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Crafting{" "}
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Intuitive, Beautiful
              </span>
              <br />
              Digital{" "}
              <span>Experiences.✨</span>
            </h1>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <ExperienceSection />
        </div>
      </div>
    </div>
  )
}