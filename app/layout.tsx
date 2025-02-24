import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "icandrew",
  description: "icandrew's personal website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}