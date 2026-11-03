"use client"

import { useState, type TouchEvent } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, MapPin, Mail, Github } from "lucide-react"
import { resumeData } from "@/lib/resume-data"

interface ProfileHeaderProps {
  onContactClick: () => void
}

export function ProfileHeader({ onContactClick }: ProfileHeaderProps) {
  const { profile } = resumeData
  const [activeImage, setActiveImage] = useState(0)
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({})
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const gallery = profile.gallery
  const currentImage = gallery[activeImage]
  const imageSource = failedImages[currentImage.src] ? profile.avatar : currentImage.src

  const goToImage = (direction: number) => {
    setActiveImage((current) => (current + direction + gallery.length) % gallery.length)
  }

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setTouchStart(event.touches[0].clientX)
  }

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStart === null) return
    const distance = event.changedTouches[0].clientX - touchStart
    if (Math.abs(distance) > 40) goToImage(distance < 0 ? 1 : -1)
    setTouchStart(null)
  }

  return (
    <header className="relative overflow-hidden border-b border-border bg-card">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute left-1/3 top-0 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 py-8 md:py-12">
        {/* Mobile Layout */}
        <div className="flex items-start gap-6 md:gap-10 lg:gap-14">
          <div
            className="relative shrink-0 group"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-primary via-accent to-primary opacity-70 blur-md group-hover:blur-lg transition-[filter] duration-300 ease-out" />
            <div className="relative rounded-2xl bg-linear-to-tr from-accent to-primary p-1 rotate-3 group-hover:rotate-0 transition-transform duration-300 ease-out">
              <Avatar className="h-24 w-24 md:h-36 md:w-36 lg:h-44 lg:w-44 rounded-xl border-4 border-card -rotate-3 group-hover:rotate-0 transition-transform duration-300 ease-out">
                <AvatarImage
                  key={imageSource}
                  src={imageSource || "/placeholder.svg"}
                  alt={`${profile.name} - ${currentImage.label}`}
                  className="object-cover"
                  onError={() => setFailedImages((images) => ({ ...images, [currentImage.src]: true }))}
                />
                <AvatarFallback className="text-xl md:text-3xl font-semibold bg-muted">
                  {profile.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </div>
            {gallery.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous profile photo"
                  onClick={() => goToImage(-1)}
                  className="absolute left-1 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/35 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next profile photo"
                  onClick={() => goToImage(1)}
                  className="absolute right-1 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/35 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
                <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                  {gallery.map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      aria-label={`Show ${image.label}`}
                      onClick={() => setActiveImage(index)}
                      className={`h-1.5 rounded-full transition-all ${index === activeImage ? "w-4 bg-white" : "w-1.5 bg-white/60"}`}
                    />
                  ))}
                </div>
              </>
            )}
            <div className="absolute -bottom-2 -right-2 md:bottom-2 md:right-2 rounded-full border-4 border-card bg-emerald-500 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
              Open
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 min-w-0">
            {/* Name and Actions Row */}
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
              <div>
                <p className="mb-1 font-mono text-xs uppercase tracking-[0.22em] text-primary">@{profile.username}</p>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight truncate">{profile.name}</h1>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={onContactClick}
                  size="sm"
                  className="bg-foreground text-background hover:bg-primary hover:text-primary-foreground shadow-md transition-all"
                >
                  <Mail className="h-4 w-4 mr-1.5" />
                  Contact
                </Button>
                <Button variant="outline" size="sm" className="border-2 hover:bg-secondary bg-transparent" asChild>
                  <a href={profile.contact.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-1.5" />
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
                <span className="text-muted-foreground ml-1.5">years experience</span>
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
              <p className="font-mono text-sm uppercase tracking-widest text-primary">{profile.role}</p>
              <p className="text-muted-foreground text-sm flex items-center gap-1.5 mt-1.5">
                <MapPin className="h-4 w-4" />
                {profile.location}
              </p>
              <p className="text-base mt-4 leading-relaxed max-w-2xl text-muted-foreground">{profile.bio}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["APIs", "Data systems", "Cloud native"].map((item) => (
                  <span key={item} className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bio - Mobile */}
        <div className="md:hidden mt-4">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">{profile.role}</p>
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
            <p className="text-xs text-muted-foreground">years experience</p>
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
