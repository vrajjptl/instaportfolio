"use client"

import { useState } from "react"
import { X, Heart, Bookmark, ExternalLink, MapPin, Calendar, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { Post, ProjectPost, ExperiencePost, EducationPost } from "@/components/post-card"

interface PostDetailModalProps {
  post: Post | null
  onClose: () => void
}

export function PostDetailModal({ post, onClose }: PostDetailModalProps) {
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)

  if (!post) return null

  const isProject = (p: Post): p is ProjectPost => p.type === "project"
  const isExperience = (p: Post): p is ExperiencePost => p.type === "experience"
  const isEducation = (p: Post): p is EducationPost => p.type === "education"

  return (
    <div className="ui-enter-backdrop fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" onClick={onClose}>
      <div
        className="ui-enter-panel fixed inset-x-4 top-[5%] bottom-[5%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-4xl bg-card rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-full bg-foreground/10 p-2 hover:bg-foreground/20 transition-colors"
        >
          <X className="h-5 w-5 text-foreground" />
        </button>

        {/* Image Section */}
        <div className="relative flex min-h-56 w-full items-end overflow-hidden bg-linear-to-br from-primary via-primary/70 to-accent p-6 md:min-h-0 md:w-1/2">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] bg-size-[28px_28px] opacity-40" />
          <div className="relative text-white">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/70">{post.type}</p>
            <p className="mt-2 text-3xl font-bold leading-tight">{isProject(post) ? post.title : isExperience(post) ? post.role : post.degree}</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col overflow-hidden md:w-1/2">
          {/* Header */}
          <div className="border-b border-border p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-tr from-accent to-primary text-primary-foreground font-bold">
                {post.type === "project" ? "P" : post.type === "experience" ? "E" : "🎓"}
              </div>
              <div>
                <p className="font-semibold">
                  {isProject(post) ? post.title : isExperience(post) ? post.role : post.degree}
                </p>
                <p className="text-sm text-muted-foreground">
                  {isProject(post) ? post.company : isExperience(post) ? post.company : `Class of ${post.year}`}
                </p>
              </div>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-4">
            {/* Meta Info */}
            <div className="flex flex-wrap gap-2 mb-4">
              {isExperience(post) && (
                <>
                  <Badge variant="outline" className="gap-1">
                    <MapPin className="h-3 w-3" />
                    {post.location}
                  </Badge>
                  <Badge variant="outline" className="gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.period}
                  </Badge>
                </>
              )}
              {isEducation(post) && (
                <Badge variant="outline" className="gap-1">
                  <Award className="h-3 w-3" />
                  {post.score}
                </Badge>
              )}
              {isProject(post) && post.featured && (
                <Badge className="bg-accent text-accent-foreground">Featured Project</Badge>
              )}
            </div>

            {/* Description */}
            <div className="mb-4">
              <h3 className="font-semibold mb-2">About</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {isProject(post)
                  ? post.details
                  : isExperience(post)
                    ? post.description
                    : `Graduated with ${post.score} in ${post.degree}`}
              </p>
            </div>

            {/* Responsibilities (Experience only) */}
            {isExperience(post) && (
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Key Responsibilities</h3>
                <ul className="space-y-2">
                  {post.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            {(isProject(post) || isExperience(post)) && (
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {post.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Live Link (Project only) */}
            {isProject(post) && post.liveUrl && (
              <Button asChild className="w-full mt-2">
                <a href={post.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Live Project
                </a>
              </Button>
            )}
          </div>

          {/* Actions Footer */}
          <div className="border-t border-border p-4">
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <button onClick={() => setLiked(!liked)} className="transition-transform active:scale-125">
                  <Heart
                    className={cn("h-6 w-6 transition-colors", liked ? "fill-red-500 text-red-500" : "text-foreground")}
                  />
                </button>
              </div>
              <button onClick={() => setSaved(!saved)}>
                <Bookmark
                  className={cn(
                    "h-6 w-6 transition-colors",
                    saved ? "fill-foreground text-foreground" : "text-foreground",
                  )}
                />
              </button>
            </div>
            <p className="mt-2 text-sm font-semibold">{post.likes.toLocaleString()} likes</p>
          </div>
        </div>
      </div>
    </div>
  )
}
