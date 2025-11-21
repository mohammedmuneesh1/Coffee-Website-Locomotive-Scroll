"use client"
import type React from "react"
import { createContext, useContext, useState } from "react"

interface ScrollReadyContextType {
  isScrollReady: boolean
  setScrollReady: (ready: boolean) => void
}

const ScrollReadyContext = createContext<ScrollReadyContextType | undefined>(undefined)

export function ScrollReadyProvider({ children }: { children: React.ReactNode }) {
  const [isScrollReady, setScrollReady] = useState(false)

  return <ScrollReadyContext.Provider value={{ isScrollReady, setScrollReady }}>{children}</ScrollReadyContext.Provider>
}

export function useScrollReady() {
  const context = useContext(ScrollReadyContext)
  if (context === undefined) {
    throw new Error("useScrollReady must be used within ScrollReadyProvider")
  }
  return context
}
