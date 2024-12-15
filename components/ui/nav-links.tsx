"use client"

import { Home, FileText, Github, Linkedin, Sun, Moon } from 'lucide-react'
import Link from "next/link"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

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
    <RainbowButton 
      sticky 
      variant="secondary"
      className="w-auto px-4 py-2 rounded-full"
    >
      <div className="flex items-center gap-2">
        <Link
          href="/"
          className="p-2 hover:bg-muted/50 rounded-full transition-colors"
          aria-label="Home"
        >
          <Home className="w-5 h-5 text-muted-foreground" />
        </Link>
        <Link
          href="/blog"
          className="p-2 hover:bg-muted/50 rounded-full transition-colors"
          aria-label="Blog"
        >
          <FileText className="w-5 h-5 text-muted-foreground" />
        </Link>
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
        {/* <Link
          href="https://twitter.com"
          className="p-2 hover:bg-muted/50 rounded-full transition-colors"
          aria-label="Twitter"
        >
          <Twitter className="w-5 h-5 text-muted-foreground" />
        </Link> */}
        {/* <Link
          href="https://youtube.com"
          className="p-2 hover:bg-muted/50 rounded-full transition-colors"
          aria-label="YouTube"
        >
          <Youtube className="w-5 h-5 text-muted-foreground" />
        </Link> */}
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
  )
} 