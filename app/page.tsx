"use client"

import { useState } from "react"
import { ProfileHeader } from "@/components/profile-header"
import { StoriesStrip } from "@/components/stories-strip"
import { SkillsSection } from "@/components/skills-section"
import { TabsBar, type TabType } from "@/components/tabs-bar"
import { PostsFeed } from "@/components/posts-feed"
import { PostDetailModal } from "@/components/post-detail-modal"
import { ContactModal } from "@/components/contact-modal"
import { BottomNav } from "@/components/bottom-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import type { Post } from "@/components/post-card"

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<TabType>("all")
  const [activeHighlight, setActiveHighlight] = useState<string | null>(null)
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)
  const [isContactOpen, setIsContactOpen] = useState(false)

  const handleHighlightClick = (id: string) => {
    setActiveHighlight(activeHighlight === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      {/* Profile Header */}
      <ProfileHeader onContactClick={() => setIsContactOpen(true)} />

      {/* Stories/Highlights Strip */}
      <StoriesStrip activeHighlight={activeHighlight} onHighlightClick={handleHighlightClick} />

      {/* Technical Skills */}
      <SkillsSection />

      {/* Tabs */}
      <TabsBar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Posts Feed */}
      <main className="bg-background">
        <PostsFeed activeTab={activeTab} onPostClick={setSelectedPost} />
      </main>

      {/* Post Detail Modal */}
      <PostDetailModal post={selectedPost} onClose={() => setSelectedPost(null)} />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* Mobile Bottom Navigation */}
      <BottomNav onContactClick={() => setIsContactOpen(true)} />

      <ThemeToggle />
    </div>
  )
}
