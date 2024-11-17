import { Home, Sun } from 'lucide-react'
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function Component() {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className={cn(
        "group relative inline-flex animate-rainbow cursor-pointer items-center justify-center rounded-full border-0 bg-[length:200%] px-4 py-2 transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent]",
        
        // before styles
        "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]",
        
        // light mode colors
        "bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
        
        // dark mode colors
        "dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
      )}>
        <div className="flex items-center gap-2 backdrop-blur-sm">
          <Link
            href="/"
            className="p-2 hover:bg-muted rounded-full transition-colors"
            aria-label="Home"
          >
            <Home className="w-5 h-5 text-primary-foreground" />
          </Link>
          {/* ... other links with the same structure */}
          <button
            className="p-2 hover:bg-muted rounded-full transition-colors"
            aria-label="Toggle theme"
          >
            <Sun className="w-5 h-5 text-primary-foreground" />
          </button>
        </div>
      </div>
    </nav>
  )
}