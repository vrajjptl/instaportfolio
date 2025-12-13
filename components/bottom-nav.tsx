"use client"

import { Home, Search, PlusSquare, Heart, User } from "lucide-react"

interface BottomNavProps {
  onContactClick: () => void
}

export function BottomNav({ onContactClick }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-card border-t border-border z-40">
      <div className="flex justify-around py-2">
        <button className="flex flex-col items-center gap-0.5 p-2">
          <Home className="h-6 w-6 text-foreground" />
        </button>
        <button className="flex flex-col items-center gap-0.5 p-2">
          <Search className="h-6 w-6 text-muted-foreground" />
        </button>
        <button className="flex flex-col items-center gap-0.5 p-2">
          <PlusSquare className="h-6 w-6 text-muted-foreground" />
        </button>
        <button onClick={onContactClick} className="flex flex-col items-center gap-0.5 p-2">
          <Heart className="h-6 w-6 text-muted-foreground" />
        </button>
        <button className="flex flex-col items-center gap-0.5 p-2">
          <User className="h-6 w-6 text-muted-foreground" />
        </button>
      </div>
    </nav>
  )
}
