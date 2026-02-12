"use client";

import { useState } from "react";
import { getVideosByCategory } from "@/lib/data";
import { VideoCard } from "./video-card";
import { CategoryFilter } from "./category-filter";
import { AdSlot } from "./ad-slot";

export function VideoGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = getVideosByCategory(activeCategory);

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-xl font-bold text-foreground">Latest Videos</h2>
        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((video, index) => {
          const items = [];

          items.push(<VideoCard key={video.id} video={video} />);

          {/* Insert in-feed ad after every 3rd video */}
          if ((index + 1) % 3 === 0 && index < filtered.length - 1) {
            items.push(
              <div key={`ad-${index}`} className="sm:col-span-2 lg:col-span-3">
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
          <p className="text-muted-foreground">No videos found in this category.</p>
        </div>
      )}
    </section>
  );
}
