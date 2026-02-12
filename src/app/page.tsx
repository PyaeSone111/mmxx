import { Hero } from "@/components/hero";
import { VideoGrid } from "@/components/video-grid";
import { AdSlot } from "@/components/ad-slot";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AdSlot size="leaderboard" className="hidden md:flex" />
      <AdSlot size="mobile-banner" className="md:hidden" />
      <VideoGrid />
      <AdSlot size="leaderboard" className="hidden md:flex" />
      <AdSlot size="mobile-banner" className="md:hidden" />
    </>
  );
}
