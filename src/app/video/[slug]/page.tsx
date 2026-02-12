import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getVideoBySlug, getRelatedVideos, formatViews, videos } from "@/lib/data";
import { DownloadBox } from "@/components/download-box";
import { VideoCard } from "@/components/video-card";
import { AdSlot } from "@/components/ad-slot";

export async function generateStaticParams() {
  return videos.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const video = getVideoBySlug(slug);
  if (!video) return { title: "Video Not Found" };
  return {
    title: video.title,
    description: video.description,
    openGraph: {
      title: video.title,
      description: video.description,
      images: [video.thumbnail],
    },
  };
}

export default async function VideoDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const video = getVideoBySlug(slug);
  if (!video) notFound();

  const related = getRelatedVideos(video.id, 4);

  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      {/* Top ad */}
      <AdSlot size="leaderboard" className="hidden md:flex" />
      <AdSlot size="mobile-banner" className="md:hidden" />

      <div className="mt-4 flex flex-col gap-6 lg:flex-row">
        {/* Main content */}
        <div className="flex-1">
          {/* Player placeholder */}
          <div className="relative aspect-video overflow-hidden rounded-xl bg-foreground">
            <Image
              src={video.thumbnail}
              alt={video.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 66vw"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/90 shadow-lg">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="ml-1 text-primary-foreground">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </div>
            <span className="absolute bottom-3 right-3 rounded-md bg-foreground/80 px-2.5 py-1 text-sm font-medium text-background">
              {video.duration}
            </span>
          </div>

          {/* Video info */}
          <div className="mt-4 flex flex-col gap-2">
            <span className="w-fit rounded-md bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {video.category}
            </span>
            <h1 className="text-2xl font-bold text-foreground">{video.titleBurmese}</h1>
            <p className="text-sm text-muted-foreground">{video.title}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{formatViews(video.views)} views</span>
              <span>{video.uploadDate}</span>
            </div>
            <p className="mt-2 leading-relaxed text-muted-foreground">{video.description}</p>
          </div>

          {/* Ad between player and download (mobile) */}
          <div className="mt-4 lg:hidden">
            <AdSlot size="mobile-banner" />
          </div>

          {/* Download box (mobile) */}
          <div className="mt-4 lg:hidden">
            <DownloadBox videoTitle={video.titleBurmese} />
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-80">
          {/* Download box (desktop) */}
          <div className="hidden lg:block">
            <DownloadBox videoTitle={video.titleBurmese} />
          </div>

          {/* Sidebar ad */}
          <div className="mt-4">
            <AdSlot size="sidebar" />
          </div>
        </aside>
      </div>

      {/* Related videos */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-foreground">Related Videos</h2>
        <AdSlot size="leaderboard" className="mb-4 hidden md:flex" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      </section>

      {/* Bottom ad */}
      <AdSlot size="leaderboard" className="mt-6 hidden md:flex" />
      <AdSlot size="mobile-banner" className="mt-6 md:hidden" />
    </div>
  );
}
