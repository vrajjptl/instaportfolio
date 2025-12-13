"use client"

import { resumeData } from "@/lib/resume-data"
import { cn } from "@/lib/utils"

interface StoriesStripProps {
  activeHighlight: string | null
  onHighlightClick: (id: string) => void
}

export function StoriesStrip({ activeHighlight, onHighlightClick }: StoriesStripProps) {
  const { highlights } = resumeData

  return (
    <div className="border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-5 md:py-6">
        <div className="flex gap-5 md:gap-6 lg:gap-8 overflow-x-auto md:overflow-visible md:flex-wrap md:justify-center scrollbar-hide pb-1">
          {highlights.map((highlight, index) => (
            <button
              key={highlight.id}
              onClick={() => onHighlightClick(highlight.id)}
              className="flex flex-col items-center gap-2 min-w-fit group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div
                className={cn(
                  "rounded-full p-0.5 transition-all duration-300",
                  activeHighlight === highlight.id
                    ? "bg-gradient-to-tr from-accent via-primary to-accent shadow-lg shadow-primary/25"
                    : "bg-gradient-to-tr from-border to-muted-foreground/30 group-hover:from-primary/50 group-hover:to-accent/50",
                )}
              >
                <div
                  className={cn(
                    "flex h-16 w-16 md:h-18 md:w-18 lg:h-20 lg:w-20 items-center justify-center rounded-full bg-card text-2xl md:text-3xl transition-transform duration-300",
                    "group-hover:scale-105",
                  )}
                >
                  {highlight.icon}
                </div>
              </div>
              <span
                className={cn(
                  "text-xs md:text-sm font-medium transition-colors",
                  activeHighlight === highlight.id
                    ? "text-primary"
                    : "text-muted-foreground group-hover:text-foreground",
                )}
              >
                {highlight.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
