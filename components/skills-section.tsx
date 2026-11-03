import { Database, Layers3, MonitorCog, Terminal, Wrench, Workflow } from "lucide-react"
import { resumeData } from "@/lib/resume-data"

const skillGroups = [
  { key: "languages", label: "Languages", icon: Terminal },
  { key: "frameworks", label: "Frameworks & Libraries", icon: Layers3 },
  { key: "databases", label: "Data", icon: Database },
  { key: "tools", label: "Tools & Testing", icon: Wrench },
  { key: "dataEngineering", label: "APIs & Engineering", icon: Workflow },
  { key: "browserExtensions", label: "Browser Extensions", icon: MonitorCog },
] as const

export function SkillsSection() {
  const skills = resumeData.skills

  return (
    <section className="border-b border-border bg-card" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-10">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Technical toolkit</p>
            <h2 id="skills-heading" className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
              Backend engineering toolkit
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm leading-relaxed text-muted-foreground md:block">
            From API design and secure integrations to testing, data, and deployment.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {skillGroups.map((group) => {
            const Icon = group.icon
            const items = skills[group.key]

            return (
              <div key={group.key} className="rounded-2xl border border-border bg-background/70 p-4">
                <div className="mb-4 flex items-center gap-2 text-primary">
                  <Icon className="h-4 w-4" />
                  <h3 className="text-sm font-semibold text-foreground">{group.label}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-card px-2 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}