"use client"

import { useState } from "react"
import { Home, Search, PlusSquare, Heart, User } from "lucide-react"

interface BottomNavProps {
  onContactClick: () => void
}

const navItems = [
  { label: "Home", icon: Home },
  { label: "Search", icon: Search },
  { label: "Add", icon: PlusSquare },
  { label: "Contact", icon: Heart },
  { label: "Profile", icon: User },
]

export function BottomNav({ onContactClick }: BottomNavProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const indicatorPosition = `${(activeIndex + 0.5) * 20}%`

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-card md:hidden"
    >
      <div className="relative flex py-2">
        <span
          aria-hidden="true"
          className="bottom-nav-spotlight"
          style={{ left: indicatorPosition }}
        />
        <span
          aria-hidden="true"
          className="bottom-nav-indicator"
          style={{ left: indicatorPosition }}
        />
        {navItems.map(({ label, icon: Icon }, index) => {
          const isActive = activeIndex === index

          return (
            <button
              key={label}
              type="button"
              aria-label={label}
              aria-current={isActive ? "page" : undefined}
              onClick={() => {
                setActiveIndex(index)
                if (label === "Contact") onContactClick()
              }}
              className="relative z-10 flex flex-1 items-center justify-center rounded-xl py-2 transition-transform duration-300 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <Icon
                aria-hidden="true"
                className={`h-6 w-6 transition-all duration-300 ${
                  isActive ? "scale-110 text-primary" : "text-muted-foreground"
                }`}
              />
            </button>
          )
        })}
      </div>
    </nav>
  )
}
