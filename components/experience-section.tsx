'use client'

import { useState } from 'react'
import { cn } from "@/lib/utils"
import { Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

type Company = {
  name: string
  role: string
  period: string
  location: string
  achievements: string[]
}

const companies: Company[] = [
    {
        name: "TNC Group",
        role: "UI/UX Designer",
        period: "Sep 2021 - Jan 2023",
        location: "Dubai, United Arab Emirates",
        achievements: ["Collaborate closely with developers, and content writers", 
            "Stay updated with the latest changes in industry's standards.",
            "Optimize user inter faces for per formance and accessibility.",
            "Creates and delivers design assets for product integration."
        ]
      },
      {
        name: "Jazenet",
        role: "UI/UX Designer",
        period: "Feb 2019 - Sep 2021",
        location: "Jumeirah Lakes Towers, Dubai, United Arab Emirates",
        achievements: ["s"]
      },
      {
        name: "Be Media Group",
        role: "Senior Graphic & Web Designer",
        period: "Mar 2018 - Feb 2019",
        location: "Australia",
        achievements: ["s"]
      },
      {
        name: "The Nail Spa",
        role: "Graphic Designer",
        period: "Nov 2017 - Jan 2018",
        location: "Dubai, United Arab Emirates",
        achievements: ["s"]
      },
      {
        name: "Tata Consultancy Services",
        role: "Web Designer",
        period: "Jun 2015 - Jan 2017",
        location: "Bonifacio Global City",
        achievements: ["s"]
      },
      {
        name: "Hibu",
        role: "Web Designer",
        period: "Apr 2013 - Jun 2015",
        location: "Bonifacio Global City",
        achievements: ["s"]
      },
      {
        name: "CIM Technologies, Inc.",
        role: "Graphic Designer / Web Designer",
        period: "Feb 2012 - Feb 2013",
        location: "Makati City",
        achievements: ["s"]
      },
      {
        name: "Lenotech Corporation",
        role: "Graphic Artist",
        period: "Jul 2011 - Jan 2012",
        location: "Sta. Mesa, Manila",
        achievements: ["s"]
      }
]

export function ExperienceSection() {
  const [activeCompany, setActiveCompany] = useState(companies[0])

  return (
    <motion.div 
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }}
      className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2 mt-20 max-w-2xl mx-auto"
    >
      {/* Company Tabs */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.6, -0.05, 0.01, 0.99]
        }}
        className="flex flex-row md:flex-col relative overflow-x-auto md:overflow-x-visible"
      >
        {companies.map((company, index) => (
          <motion.div 
            key={company.name} 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.3 + index * 0.1,
              ease: "easeOut"
            }}
            className="relative my-2"
          >
            <button 
              onClick={() => setActiveCompany(company)}
              className={cn(
                "px-4 py-2 relative z-20 min-w-28 w-full",
                "text-left rounded-md",
                "transition-colors",
                activeCompany.name === company.name 
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted/50"
              )}
            >
              {company.name}
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Experience Details */}
      <div className="md:pl-10 flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCompany.name}
            initial={{ 
              x: 20, 
              opacity: 0,
              filter: "blur(10px)"
            }}
            animate={{ 
              x: 0, 
              opacity: 1,
              filter: "blur(0px)"
            }}
            exit={{ 
              x: -20, 
              opacity: 0,
              filter: "blur(10px)"
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut"
            }}
            className="flex flex-col space-y-4"
          >
            <div className="flex flex-col space-y-2">
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-xl font-bold text-foreground"
              >
                {activeCompany.role} <span className="text-primary">@ {activeCompany.name}</span>
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-muted-foreground text-sm tracking-widest"
              >
                {activeCompany.period}
              </motion.div>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-muted-foreground text-sm"
              >
                {activeCompany.location}
              </motion.p>
              <div>
                {activeCompany.achievements.map((achievement, index) => (
                  <motion.div 
                    key={achievement}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.5 + index * 0.1,
                      ease: "easeOut"
                    }}
                    className="flex flex-row space-x-2 items-start my-2"
                  >
                    <Check className="text-primary mt-[3px] flex-shrink-0 h-4 w-4" />
                    <span className="text-muted-foreground text-sm">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  )
} 