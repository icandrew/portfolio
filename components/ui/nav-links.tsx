"use client"

import { Home, Github, Linkedin, Sun, Moon } from 'lucide-react'
import Link from "next/link"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const BehanceIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24"
    className="w-5 h-5 text-muted-foreground"
  >
    <path 
      fill="currentColor" 
      d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"
    />
  </svg>
)

export function NavLinks() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="relative">
        {/* Background blur effect */}
        <div className="absolute inset-0 bg-secondary/80 backdrop-blur-lg rounded-full" />
        
        <RainbowButton 
          variant="secondary"
          className="relative w-auto px-4 py-2 rounded-full"
        >
          <div className="flex items-center gap-2">
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-2 hover:bg-muted/50 rounded-full transition-colors"
              aria-label="Home"
            >
              <Home className="w-5 h-5 text-muted-foreground" />
            </Link>
            {/* <Link
              href="/blog"
              className="p-2 hover:bg-muted/50 rounded-full transition-colors"
              aria-label="Blog"
            >
              <FileText className="w-5 h-5 text-muted-foreground" />
            </Link> */}
            <Link
              href="https://github.com/icandrew"
              className="p-2 hover:bg-muted/50 rounded-full transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/amistlr/"
              className="p-2 hover:bg-muted/50 rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground" />
            </Link>
            <Link
              href="https://www.behance.net/amistlr"
              className="p-2 hover:bg-muted/50 rounded-full transition-colors"
              aria-label="Behance"
            >
              <BehanceIcon />
            </Link>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 hover:bg-muted/50 rounded-full transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-muted-foreground" />
              ) : (
                <Moon className="w-5 h-5 text-muted-foreground" />
              )}
            </button>
          </div>
        </RainbowButton>
      </div>
    </div>
  )
} 