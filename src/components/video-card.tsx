import Image from "next/image";
import Link from "next/link";
import { formatViews, type Video } from "@/lib/data";

export function VideoCard({ video }: { video: Video }) {
  return (
    <Link
      href={`/video/${video.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-md"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16.66vw"
        />
        {/* Duration badge */}
        <span className="absolute bottom-1.5 right-1.5 rounded bg-foreground/80 px-1.5 py-0.5 text-[10px] font-medium text-background">
          {video.duration}
        </span>
        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-colors group-hover:bg-foreground/10">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/90 opacity-0 transition-opacity group-hover:opacity-100">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 text-primary-foreground">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1 p-2.5">
        <span className="w-fit rounded-sm bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium text-primary">
          {video.category}
        </span>
        <h3 className="line-clamp-2 text-xs font-semibold leading-snug text-foreground group-hover:text-primary">
          {video.titleBurmese}
        </h3>
        <p className="text-[10px] text-muted-foreground">
          {formatViews(video.views)} views
        </p>
      </div>
    </Link>
  );
}
