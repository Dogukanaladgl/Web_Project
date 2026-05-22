"use client"

import * as React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollResetOnLoad } from "@/components/scroll-reset-on-load"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <ScrollResetOnLoad />
      {children}
    </ThemeProvider>
  )
}
