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
    <div className="border-b border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-5 md:py-7">
        <div className="mb-4 flex items-center justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Core toolkit</p>
          <p className="hidden text-xs text-muted-foreground sm:block">Built for production</p>
        </div>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1">
          {highlights.map((highlight, index) => (
            <button
              key={highlight.id}
              onClick={() => onHighlightClick(highlight.id)}
              className="flex min-w-fit flex-col items-center gap-2 group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div
                className={cn(
                  "rounded-xl p-px transition-all duration-300",
                  activeHighlight === highlight.id
                    ? "bg-linear-to-tr from-accent via-primary to-accent shadow-lg shadow-primary/25"
                    : "bg-linear-to-tr from-border to-muted-foreground/30 group-hover:from-primary/50 group-hover:to-accent/50",
                )}
              >
                <div
                  className={cn(
                    "flex h-14 w-20 items-center justify-center rounded-[11px] bg-card font-mono text-sm font-bold text-primary transition-transform duration-300",
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
