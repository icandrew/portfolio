"use client"

import { cn } from "@/lib/utils"

interface ApplyDotPatternProps {
  className?: string
}

export function ApplyDotPattern({ className }: ApplyDotPatternProps) {
  return (
    <div className={cn("absolute inset-0 -z-10", className)}>
      <div
        className="absolute h-full w-full"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--muted-foreground)) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
          opacity: 0.2,
        }}
      />
    </div>
  )
} 