import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, blogPosts } from "@/lib/data";
import { AdSlot } from "@/components/ad-slot";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.thumbnail],
    },
  };
}

function renderMarkdown(content: string) {
  return content.split("\n\n").map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="mb-3 mt-6 text-xl font-bold text-foreground">
          {block.replace("## ", "")}
        </h2>
      );
    }
    return (
      <p key={i} className="mb-4 leading-relaxed text-muted-foreground">
        {block}
      </p>
    );
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <AdSlot size="leaderboard" className="hidden md:flex" />
      <AdSlot size="mobile-banner" className="md:hidden" />

      {/* Breadcrumb */}
      <nav className="mb-6 mt-4 flex items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
        <Link href="/blog" className="hover:text-primary">Blog</Link>
        <span>/</span>
        <span className="text-foreground">{post.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <Link
              key={t}
              href={`/blog?tag=${encodeURIComponent(t)}`}
              className="rounded-sm bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary hover:bg-primary/20"
            >
              {t}
            </Link>
          ))}
        </div>
        <h1 className="text-3xl font-bold leading-tight text-foreground">{post.title}</h1>
        <div className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
          <span>{post.author}</span>
          <span className="text-border">|</span>
          <time dateTime={post.date}>{post.date}</time>
        </div>
      </header>

      {/* Featured image */}
      <div className="relative mb-6 aspect-[2/1] overflow-hidden rounded-xl bg-muted">
        <Image
          src={post.thumbnail}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
      </div>

      {/* Content */}
      <article className="prose-custom">
        {renderMarkdown(post.content)}
      </article>

      <AdSlot size="in-feed" className="mt-8" />

      {/* More posts */}
      <section className="mt-10 border-t border-border pt-8">
        <h2 className="mb-4 text-lg font-bold text-foreground">More Articles</h2>
        <div className="flex flex-col gap-4">
          {otherPosts.map((p) => (
            <Link
              key={p.id}
              href={`/blog/${p.slug}`}
              className="group flex items-center gap-4 rounded-lg border border-border bg-card p-3 transition-shadow hover:shadow-md"
            >
              <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-md bg-muted">
                <Image
                  src={p.thumbnail}
                  alt={p.title}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary">
                  {p.title}
                </h3>
                <p className="mt-0.5 text-xs text-muted-foreground">{p.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <AdSlot size="leaderboard" className="mt-8 hidden md:flex" />
    </div>
  );
}
