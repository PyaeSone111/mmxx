import Image from "next/image";
import Link from "next/link";
import { videos } from "@/lib/data";

export function Hero() {
  const featured = videos[6]; // Golden Heart drama - highest views

  return (
    <section className="relative overflow-hidden bg-foreground">
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
          {/* Thumbnail */}
          <Link
            href={`/video/${featured.slug}`}
            className="group relative aspect-video w-full overflow-hidden rounded-xl md:w-3/5"
          >
            <Image
              src={featured.thumbnail}
              alt={featured.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 60vw"
              priority
            />
            {/* Play overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 shadow-lg transition-transform group-hover:scale-110">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="ml-1 text-primary-foreground">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </div>
            {/* Duration badge */}
            <span className="absolute bottom-3 right-3 rounded-md bg-foreground/80 px-2.5 py-1 text-xs font-medium text-background">
              {featured.duration}
            </span>
          </Link>

          {/* Info */}
          <div className="flex flex-col gap-4 md:w-2/5">
            <span className="w-fit rounded-md bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
              Featured
            </span>
            <h1 className="text-2xl font-bold leading-tight text-background md:text-3xl">
              {featured.titleBurmese}
            </h1>
            <p className="text-sm leading-relaxed text-background/70">
              {featured.description}
            </p>
            <div className="flex items-center gap-4 text-sm text-background/60">
              <span className="rounded-sm bg-primary/20 px-2 py-0.5 text-xs font-medium text-primary-foreground">
                {featured.category}
              </span>
              <span>156K views</span>
            </div>
            <Link
              href={`/video/${featured.slug}`}
              className="mt-2 flex w-fit items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-primary-foreground">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Watch Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
