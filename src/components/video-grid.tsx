"use client";

import { useState, useMemo } from "react";
import { videos, categories } from "@/lib/data";
import { VideoCard } from "./video-card";
import { AdSlot } from "./ad-slot";
import { KanoteCorner } from "./kanote";

export function VideoGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    let result = videos;
    if (activeCategory !== "All") {
      result = result.filter((v) => v.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (v) =>
          v.title.toLowerCase().includes(q) ||
          v.titleBurmese.includes(q) ||
          v.category.toLowerCase().includes(q)
      );
    }
    return result;
  }, [activeCategory, searchQuery]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-6">
      {/* Search and Filter Bar with kanote frame */}
      <div className="relative mb-6 rounded-xl border border-border bg-card p-5">
        {/* Corner ornaments */}
        <KanoteCorner position="top-left" className="absolute -left-1 -top-1 text-kanote" size={28} color="currentColor" />
        <KanoteCorner position="top-right" className="absolute -right-1 -top-1 text-kanote" size={28} color="currentColor" />
        <KanoteCorner position="bottom-left" className="absolute -bottom-1 -left-1 text-kanote" size={28} color="currentColor" />
        <KanoteCorner position="bottom-right" className="absolute -bottom-1 -right-1 text-kanote" size={28} color="currentColor" />

        <div className="flex flex-col gap-4">
          {/* Search Input */}
          <div className="relative">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search videos by title, category..."
              className="w-full rounded-lg border border-border bg-secondary/50 py-3 pl-12 pr-4 text-sm text-foreground shadow-sm outline-none transition-shadow placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label="Clear search"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Category Filter - kanote-styled tags */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none" role="tablist" aria-label="Filter by category">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "border border-primary bg-primary text-primary-foreground"
                    : "border border-kanote/30 bg-kanote/5 text-foreground hover:border-kanote/50 hover:bg-kanote/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="text-sm text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "video" : "videos"} found
            {searchQuery && (
              <span>
                {' for "'}{searchQuery}{'"'}
              </span>
            )}
          </p>
        </div>
      </div>

      {/* Video Grid - 6 columns */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {filtered.map((video, index) => {
          const items = [];
          items.push(<VideoCard key={video.id} video={video} />);

          if ((index + 1) % 6 === 0 && index < filtered.length - 1) {
            items.push(
              <div key={`ad-${index}`} className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 xl:col-span-6">
                <AdSlot size="in-feed" />
              </div>
            );
          }

          return items;
        })}
      </div>

      {filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mb-4 text-muted-foreground">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <p className="text-lg font-medium text-foreground">No videos found</p>
          <p className="mt-1 text-sm text-muted-foreground">Try adjusting your search or filter.</p>
        </div>
      )}
    </section>
  );
}
