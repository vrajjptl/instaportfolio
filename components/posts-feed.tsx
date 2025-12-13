"use client"

import { resumeData } from "@/lib/resume-data"
import { PostCard, type Post } from "@/components/post-card"
import type { TabType } from "@/components/tabs-bar"

interface PostsFeedProps {
  activeTab: TabType
  onPostClick: (post: Post) => void
}

export function PostsFeed({ activeTab, onPostClick }: PostsFeedProps) {
  const getAllPosts = (): Post[] => {
    const posts: Post[] = []

    // Add featured projects first
    resumeData.projects.forEach((project) => {
      if (project.featured) {
        posts.push(project as Post)
      }
    })

    // Add experience
    resumeData.experience.forEach((exp) => {
      posts.push(exp as Post)
    })

    // Add non-featured projects
    resumeData.projects.forEach((project) => {
      if (!project.featured) {
        posts.push(project as Post)
      }
    })

    // Add education
    resumeData.education.forEach((edu) => {
      posts.push(edu as Post)
    })

    return posts
  }

  const getFilteredPosts = (): Post[] => {
    const allPosts = getAllPosts()

    switch (activeTab) {
      case "projects":
        return allPosts.filter((p) => p.type === "project")
      case "experience":
        return allPosts.filter((p) => p.type === "experience")
      case "education":
        return allPosts.filter((p) => p.type === "education")
      default:
        return allPosts
    }
  }

  const posts = getFilteredPosts()

  if (posts.length === 0) {
    return (
      <div className="py-20 text-center text-muted-foreground">
        <p>No posts in this category yet.</p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} onPostClick={onPostClick} />
        ))}
      </div>
    </div>
  )
}
