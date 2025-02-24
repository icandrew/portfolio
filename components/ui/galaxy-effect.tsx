'use client'

import { useEffect, useState } from 'react'

interface Star {
  top: number
  left: number
  duration: number
  color: string
}

interface GalaxyEffectProps {
  className?: string
}

export function GalaxyEffect({ className }: GalaxyEffectProps) {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 35 }, () => ({
        top: Math.random() * window.innerHeight,
        left: Math.random() * window.innerWidth,
        duration: Math.floor(Math.random() * 4) + 3,
        color: `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`
      }))
      setStars(newStars)
    }

    generateStars()
    window.addEventListener('resize', generateStars)
    return () => window.removeEventListener('resize', generateStars)
  }, [])

  return (
    <div className={`fixed inset-0 pointer-events-none z-30 ${className}`}>
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute w-[1px] h-[1px]"
          style={{
            top: `${star.top}px`,
            left: `${star.left}px`,
            backgroundColor: star.color,
            animation: `move-right ${star.duration}s linear infinite`,
          }}
        />
      ))}
    </div>
  )
}