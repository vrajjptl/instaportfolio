"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Heart,
  MessageCircle,
  Bookmark,
  MoreHorizontal,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Code2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface BasePost {
  id: string
  type: string
  image: string
  likes: number
}

interface ProjectPost extends BasePost {
  type: "project"
  title: string
  company: string
  description: string
  details: string
  techStack: string[]
  liveUrl: string
  featured?: boolean
}

interface ExperiencePost extends BasePost {
  type: "experience"
  company: string
  role: string
  location: string
  period: string
  description: string
  responsibilities: string[]
  techStack: string[]
}

interface EducationPost extends BasePost {
  type: "education"
  degree: string
  score: string
  year: string
}

type Post = ProjectPost | ExperiencePost | EducationPost

interface PostCardProps {
  post: Post
  onPostClick: (post: Post) => void
}

export function PostCard({ post, onPostClick }: PostCardProps) {
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)
  const [likesCount, setLikesCount] = useState(post.likes)

  const handleLike = () => {
    setLiked(!liked)
    setLikesCount(liked ? likesCount - 1 : likesCount + 1)
  }

  const getTitle = () => {
    if (post.type === "project") return post.title
    if (post.type === "experience") return post.role
    return post.degree
  }

  const getSubtitle = () => {
    if (post.type === "project") return post.company
    if (post.type === "experience") return `${post.company} • ${post.period}`
    return `Class of ${post.year} • ${post.score}`
  }

  const getDescription = () => {
    if (post.type === "project") return post.description
    if (post.type === "experience") return post.description
    return `Graduated with ${post.score} in ${post.degree}`
  }

  const getTechStack = () => {
    if (post.type === "education") return []
    return post.techStack.slice(0, 4)
  }

  const getTypeIcon = () => {
    if (post.type === "project") return <Code2 className="h-4 w-4" />
    if (post.type === "experience") return <Briefcase className="h-4 w-4" />
    return <GraduationCap className="h-4 w-4" />
  }

  const getTypeGradient = () => {
    if (post.type === "project") return "from-primary to-accent"
    if (post.type === "experience") return "from-emerald-500 to-teal-500"
    return "from-amber-500 to-orange-500"
  }

  return (
    <article className="border border-border bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr text-white shadow-md",
              getTypeGradient(),
            )}
          >
            {getTypeIcon()}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold truncate">{getTitle()}</p>
            <p className="text-xs text-muted-foreground truncate">{getSubtitle()}</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </div>

      <button
        onClick={() => onPostClick(post)}
        className="relative w-full aspect-square cursor-pointer overflow-hidden"
      >
        <Image
          src={post.image || "/placeholder.svg"}
          alt={getTitle()}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm bg-black/50 px-3 py-1.5 rounded-full">
            View Details
          </span>
        </div>
        {post.type === "project" && post.featured && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-gradient-to-r from-accent to-primary text-white border-0 shadow-lg">Featured</Badge>
          </div>
        )}
      </button>

      {/* Actions */}
      <div className="px-4 pt-3">
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <button onClick={handleLike} className="transition-all duration-200 active:scale-125 hover:scale-110">
              <Heart
                className={cn(
                  "h-6 w-6 transition-all",
                  liked ? "fill-red-500 text-red-500 animate-pulse" : "text-foreground hover:text-red-500",
                )}
              />
            </button>
            <button onClick={() => onPostClick(post)} className="hover:scale-110 transition-transform">
              <MessageCircle className="h-6 w-6 text-foreground hover:text-primary transition-colors" />
            </button>
            {post.type === "project" && (
              <a
                href={post.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <ExternalLink className="h-6 w-6 text-foreground hover:text-primary transition-colors" />
              </a>
            )}
          </div>
          <button onClick={() => setSaved(!saved)} className="hover:scale-110 transition-transform">
            <Bookmark
              className={cn(
                "h-6 w-6 transition-all",
                saved ? "fill-primary text-primary" : "text-foreground hover:text-primary",
              )}
            />
          </button>
        </div>

        {/* Likes */}
        <p className="mt-2 text-sm font-semibold">{likesCount.toLocaleString()} likes</p>

        {/* Caption */}
        <div className="mt-1">
          <p className="text-sm line-clamp-2">
            <span className="font-semibold">{getTitle()}</span>{" "}
            <span className="text-muted-foreground">{getDescription()}</span>
          </p>
        </div>

        {getTechStack().length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {getTechStack().map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs font-medium bg-secondary/80 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}

        {/* View More */}
        <button
          onClick={() => onPostClick(post)}
          className="mt-2 text-sm text-primary hover:text-primary/80 font-medium"
        >
          View all details
        </button>

        <p className="mt-2 pb-4 text-xs uppercase text-muted-foreground tracking-wide">
          {post.type === "experience" ? post.period : post.type === "education" ? post.year : "Featured Project"}
        </p>
      </div>
    </article>
  )
}

export type { Post, ProjectPost, ExperiencePost, EducationPost }
