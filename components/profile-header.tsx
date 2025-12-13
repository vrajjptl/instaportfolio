"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, ExternalLink, Sparkles } from "lucide-react"
import { resumeData } from "@/lib/resume-data"

interface ProfileHeaderProps {
  onContactClick: () => void
}

export function ProfileHeader({ onContactClick }: ProfileHeaderProps) {
  const { profile } = resumeData

  return (
    <header className="border-b border-border bg-card">
      <div className="h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />

      <div className="mx-auto max-w-6xl px-4 py-6 md:py-8">
        {/* Mobile Layout */}
        <div className="flex items-start gap-6 md:gap-10 lg:gap-14">
          <div className="relative shrink-0 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent via-primary to-accent opacity-75 blur-md group-hover:blur-lg transition-all duration-300 animate-pulse" />
            <div className="relative rounded-full bg-gradient-to-tr from-accent to-primary p-1">
              <Avatar className="h-20 w-20 md:h-36 md:w-36 lg:h-44 lg:w-44 border-4 border-card">
                <AvatarImage src={profile.avatar || "/placeholder.svg"} alt={profile.name} className="object-cover" />
                <AvatarFallback className="text-xl md:text-3xl font-semibold bg-muted">
                  {profile.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="absolute -bottom-1 -right-1 md:bottom-1 md:right-1 h-6 w-6 md:h-8 md:w-8 rounded-full bg-primary flex items-center justify-center shadow-lg">
              <Sparkles className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary-foreground" />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 min-w-0">
            {/* Name and Actions Row */}
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight truncate">{profile.name}</h1>
              <div className="flex gap-2">
                <Button
                  onClick={onContactClick}
                  size="sm"
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground shadow-md hover:shadow-lg transition-all"
                >
                  <Mail className="h-4 w-4 mr-1.5" />
                  Contact
                </Button>
                <Button variant="outline" size="sm" className="border-2 hover:bg-secondary bg-transparent" asChild>
                  <a href={profile.contact.github} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-1.5" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>

            {/* Stats - Desktop with enhanced styling */}
            <div className="hidden md:flex gap-8 lg:gap-10 mt-5">
              <div className="text-center group cursor-default">
                <span className="font-bold text-xl lg:text-2xl text-primary group-hover:scale-110 transition-transform inline-block">
                  {profile.stats.projects}
                </span>
                <span className="text-muted-foreground ml-1.5">projects</span>
              </div>
              <div className="text-center group cursor-default">
                <span className="font-bold text-xl lg:text-2xl text-primary group-hover:scale-110 transition-transform inline-block">
                  {profile.stats.experience}
                </span>
                <span className="text-muted-foreground ml-1.5">years exp</span>
              </div>
              <div className="text-center group cursor-default">
                <span className="font-bold text-xl lg:text-2xl text-primary group-hover:scale-110 transition-transform inline-block">
                  {profile.stats.techStacks}
                </span>
                <span className="text-muted-foreground ml-1.5">tech stacks</span>
              </div>
            </div>

            {/* Bio - Desktop */}
            <div className="hidden md:block mt-5">
              <p className="font-semibold text-lg">{profile.role}</p>
              <p className="text-muted-foreground text-sm flex items-center gap-1.5 mt-1.5">
                <MapPin className="h-4 w-4" />
                {profile.location}
              </p>
              <p className="text-sm mt-3 leading-relaxed max-w-xl text-muted-foreground">{profile.bio}</p>
            </div>
          </div>
        </div>

        {/* Bio - Mobile */}
        <div className="md:hidden mt-4">
          <p className="font-semibold">{profile.role}</p>
          <p className="text-muted-foreground text-sm flex items-center gap-1 mt-1">
            <MapPin className="h-3.5 w-3.5" />
            {profile.location}
          </p>
          <p className="text-sm mt-2 leading-relaxed text-muted-foreground">{profile.bio}</p>
        </div>

        {/* Stats - Mobile with enhanced styling */}
        <div className="flex md:hidden justify-around border-t border-border mt-4 pt-4">
          <div className="text-center">
            <p className="font-bold text-lg text-primary">{profile.stats.projects}</p>
            <p className="text-xs text-muted-foreground">projects</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-lg text-primary">{profile.stats.experience}</p>
            <p className="text-xs text-muted-foreground">years exp</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-lg text-primary">{profile.stats.techStacks}</p>
            <p className="text-xs text-muted-foreground">tech stacks</p>
          </div>
        </div>
      </div>
    </header>
  )
}
