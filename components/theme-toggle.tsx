"use client"

import { useEffect, useSyncExternalStore } from "react"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

const themeChangeEvent = "instaportfolio:theme-change"

function subscribeToTheme(onChange: () => void) {
  window.addEventListener("storage", onChange)
  window.addEventListener(themeChangeEvent, onChange)
  return () => {
    window.removeEventListener("storage", onChange)
    window.removeEventListener(themeChangeEvent, onChange)
  }
}

function getThemeSnapshot() {
  const stored = localStorage.getItem("theme")
  return stored ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, () => "server")
  const isDark = theme === "dark"

  useEffect(() => {
    if (theme !== "server") {
      document.documentElement.classList.toggle("dark", isDark)
    }
  }, [isDark, theme])

  const toggleTheme = () => {
    const newDark = !isDark
    localStorage.setItem("theme", newDark ? "dark" : "light")
    window.dispatchEvent(new Event(themeChangeEvent))
  }

  if (theme === "server") return null

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed bottom-20 right-4 md:bottom-6 md:right-6 z-50",
        "flex h-12 w-12 md:h-14 md:w-14 items-center justify-center",
        "rounded-full shadow-lg transition-all duration-300",
        "bg-card border-2 border-border hover:border-primary",
        "hover:shadow-xl hover:scale-110 active:scale-95",
        "backdrop-blur-sm",
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative h-6 w-6 md:h-7 md:w-7">
        <Sun
          className={cn(
            "absolute inset-0 h-full w-full text-amber-500 transition-all duration-300",
            isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100",
          )}
        />
        <Moon
          className={cn(
            "absolute inset-0 h-full w-full text-primary transition-all duration-300",
            isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0",
          )}
        />
      </div>
    </button>
  )
}
