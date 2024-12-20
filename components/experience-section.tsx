'use client'

import { useState } from 'react'
import { cn } from "@/lib/utils"
import { Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

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
            "Stay updated with the latest changes in industry&apos;s standards.",
            "Create and use wireframes, prototypes, style guides, and user flows to communicate interaction ideas.",
            "Optimize user interfaces for performance and accessibility.",
            "Creates and delivers design assets for product integration."
        ]
      },
      {
        name: "Jazenet",
        role: "UI/UX Designer",
        period: "Feb 2019 - Sep 2021",
        location: "Jumeirah Lakes Towers, Dubai, United Arab Emirates",
        achievements: ["Gather and evaluate user requirements in collaboration with the product managers, engineers.",
          "Develop UI mockups and prototypes with fluent interaction design that clearly illustrate how sites function and look like to satisfy user needs.",
          "Work closely with the owner to conceptualize and create branding materials, marketing collateral, and user interface designs for mobile applications.",
          "Collaborate closely with the development team to iterate on designs and maintain brand consistency across platforms."
        ]
      },
      {
        name: "Be Media Group",
        role: "Senior Graphic & Web Designer",
        period: "Mar 2018 - Feb 2019",
        location: "Perth,Australia (Remote)",
        achievements: ["Produce effective, brand-aligned creative layouts for deployment across a range of print and digital applications.", 
            "Design web and mobile products from concept to fully thought-through visual designs.", 
            "Produce UI concepts, mock-ups, prototypes, test variants and final designs.", 
            "Collab orates effectively with copy writers, digital content producers, brand, marketing, product owners, business analysts and developers."
        ]
      },
      {
        name: "The Nail Spa",
        role: "Graphic Designer",
        period: "Nov 2017 - Jan 2018",
        location: "Dubai, United Arab Emirates (Remote)",
        achievements: ["Design creative assets for multi-channel marketing campaigns and initiatives, including websites, EDMs, social media content , banners and other projects.", 
          "Checks and provides technical feedback on artwork of other team members", 
          "Creates excellent typography and lay-out skills will benefit the creation of artwork."]
      },
      {
        name: "Hyper6",
        role: "Graphic & Web Designer",
        period: "Aug 2016 - Aug 2017",
        location: "Panama City, Panama (Remote)",
        achievements: ["Create mock-ups and digital design assets for websites and digitalplatforms.",
          "Responsible in responsive design; working to browser and mobile standards and limitations.",
          "Create ads, landing pages, and emails that draw customer attention and drive click-through and conversion.",
          "Works with Develop ers to create digital solutions for both external clients and internal projects.",
          "Iterate on designs based on client feedback and project requirements, maintaining a high standard of quality and creativity."
        ]
      },
      {
        name: "Tata Consultancy Services",
        role: "Web Designer",
        period: "Jun 2013 - Aug 2016",
        location: "Bonifacio Global City",
        achievements: ["Ensures website function and stability across different devices including desktop, tablet and mobile.",
          "Maintaining high standards and ensuring only the best work is released.",
          "Develop UI mockups and prototypes that clearly illustrate how sites function and look like.",
          "Adhere to style standards on fonts, colors and images"
        ]
      },
      {
        name: "CIM Technologies, Inc.",
        role: "Graphic Designer / Web Designer",
        period: "Feb 2012 - Feb 2013",
        location: "Makati City",
        achievements: ["Create the website architecture.",
          "Design and production of digital communications including static and animated content for digital brand assets and external media.",
          "Collab orate with events and marketing team to create digital and print art work for events and marketing campaigns.",
          "Develop visually compelling marketing materials, including digital and print assets, to promote software and hardware solutions, project management tools, and education services.",
          "Ensure brand consistency and effectively communicate complex technical concepts to diverse audiences.",
        ]
      },
      {
        name: "Lenotech Corporation",
        role: "Graphic Artist",
        period: "Jul 2011 - Jan 2012",
        location: "Sta. Mesa, Manila",
        achievements: ["Create visually captivating marketing materials, including digital and print assets, to promote computer furniture products and A4tech distributorship.",
          "Collaborate with dealers and stakeholders to maintain brand consistency and effectively communicate product features and benefits to target audiences in the IT industry.",
          "Continuously innovate designs to stay ahead in the competitive market and enhance brand visibility."
        ]
      }
]

export function ExperienceSection() {
  const [activeCompany, setActiveCompany] = useState(companies[0])

  return (
    <div className="space-y-8 w-full">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut"
        }}
        className="text-center md:text-left"
      >
        <span className="text-primary text-sm font-medium tracking-widest uppercase">
          Experience
        </span>
        <h2 className="text-3xl font-bold text-foreground mt-2 w-full">
          Places I&apos;ve Worked
        </h2>
        <p className="text-muted-foreground mt-2">
          A collection of my professional experiences and contributions across different companies.
        </p>
      </motion.div>

      {/* Experience Content */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.6, -0.05, 0.01, 0.99]
        }}
        className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2 mt-12 w-full"
      >
        {/* Company Tabs */}
        <ScrollArea className="w-full md:w-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.6, -0.05, 0.01, 0.99]
            }}
            className="flex flex-row md:flex-col relative pb-4 md:pb-0"
          >
            <div className="flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2">
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
                  className="relative flex-shrink-0"
                >
                  <button 
                    onClick={() => setActiveCompany(company)}
                    className={cn(
                      "px-4 py-2 relative z-20 whitespace-nowrap",
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
            </div>
          </motion.div>
          <ScrollBar orientation="horizontal" className="md:hidden" />
        </ScrollArea>

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
    </div>
  )
} 