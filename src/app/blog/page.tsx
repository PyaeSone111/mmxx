import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { AdSlot } from "@/components/ad-slot";

export const metadata: Metadata = {
  title: "Blog",
  description: "Tips, guides, and news about video downloading, formats, and Myanmar entertainment.",
};

const allTags = Array.from(new Set(blogPosts.flatMap((p) => p.tags)));

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string; q?: string }>;
}) {
  const { tag, q } = await searchParams;

  let filtered = blogPosts;
  if (tag) {
    filtered = filtered.filter((p) => p.tags.includes(tag));
  }
  if (q) {
    const query = q.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.excerpt.toLowerCase().includes(query)
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Blog</h1>
        <p className="mt-2 text-muted-foreground">
          Tips, guides, and news about video entertainment.
        </p>
      </div>

      {/* Search */}
      <form className="mb-6" action="/blog" method="GET">
        <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="text"
            name="q"
            defaultValue={q || ""}
            placeholder="Search articles..."
            className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
          <button
            type="submit"
            className="rounded-md bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Search
          </button>
        </div>
      </form>

      {/* Tags */}
      <div className="mb-6 flex flex-wrap gap-2">
        <Link
          href="/blog"
          className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
            !tag
              ? "bg-primary text-primary-foreground"
              : "border border-border bg-card text-muted-foreground hover:bg-secondary"
          }`}
        >
          All
        </Link>
        {allTags.map((t) => (
          <Link
            key={t}
            href={`/blog?tag=${encodeURIComponent(t)}`}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
              tag === t
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-card text-muted-foreground hover:bg-secondary"
            }`}
          >
            {t}
          </Link>
        ))}
      </div>

      <AdSlot size="leaderboard" className="hidden md:flex" />
      <AdSlot size="mobile-banner" className="md:hidden" />

      {/* Posts list */}
      <div className="mt-6 flex flex-col gap-6">
        {filtered.map((post, idx) => (
          <article key={post.id}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-4 transition-shadow hover:shadow-md sm:flex-row"
            >
              <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-lg bg-muted sm:w-48">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 192px"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-semibold text-foreground group-hover:text-primary">
                  {post.title}
                </h2>
                <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <span className="text-border">|</span>
                  <span>{post.author}</span>
                  {post.tags.map((t) => (
                    <span key={t} className="rounded-sm bg-secondary px-1.5 py-0.5 text-xs font-medium text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
            {/* Insert ad after 2nd post */}
            {idx === 1 && <AdSlot size="in-feed" className="mt-4" />}
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16">
          <p className="text-muted-foreground">No articles found.</p>
        </div>
      )}

      <AdSlot size="leaderboard" className="mt-8 hidden md:flex" />
    </div>
  );
}
