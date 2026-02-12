"use client";

import { categories } from "@/lib/data";

export function CategoryFilter({
  active,
  onChange,
}: {
  active: string;
  onChange: (cat: string) => void;
}) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none" role="tablist" aria-label="Filter by category">
      {categories.map((cat) => (
        <button
          key={cat}
          role="tab"
          aria-selected={active === cat}
          onClick={() => onChange(cat)}
          className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            active === cat
              ? "bg-primary text-primary-foreground"
              : "border border-border bg-card text-muted-foreground hover:bg-secondary hover:text-foreground"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
