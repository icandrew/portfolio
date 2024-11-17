"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface BlurInProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function BlurIn({ children, className, delay = 0 }: BlurInProps) {
  return (
    <motion.div
      initial={{ 
        opacity: 0,
        filter: "blur(10px)",
      }}
      animate={{ 
        opacity: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.6, -0.05, 0.01, 0.99]
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}