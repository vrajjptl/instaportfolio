"use client"

import { cn } from "@/lib/utils"
import { Grid3X3, Briefcase, GraduationCap, Code } from "lucide-react"

type TabType = "all" | "projects" | "experience" | "education"

interface TabsBarProps {
  activeTab: TabType
  onTabChange: (tab: TabType) => void
}

export function TabsBar({ activeTab, onTabChange }: TabsBarProps) {
  const tabs = [
    { id: "all" as const, label: "All", icon: Grid3X3 },
    { id: "projects" as const, label: "Projects", icon: Code },
    { id: "experience" as const, label: "Experience", icon: Briefcase },
    { id: "education" as const, label: "Education", icon: GraduationCap },
  ]

  return (
    <div className="border-b border-border bg-card sticky top-0 z-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex justify-around md:justify-center md:gap-12 lg:gap-16">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  "flex flex-1 md:flex-none items-center justify-center gap-2 py-3 md:py-4 text-sm font-medium transition-colors border-b-2",
                  activeTab === tab.id
                    ? "border-foreground text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground",
                )}
              >
                <Icon className="h-4 w-4 md:h-5 md:w-5" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export type { TabType }
