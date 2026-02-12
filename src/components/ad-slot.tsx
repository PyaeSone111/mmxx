"use client";

type AdSize = "leaderboard" | "mobile-banner" | "sidebar" | "in-feed";

const sizeMap: Record<AdSize, { width: string; height: string; label: string }> = {
  leaderboard: { width: "w-full max-w-[728px]", height: "h-[90px]", label: "728 x 90" },
  "mobile-banner": { width: "w-full max-w-[320px]", height: "h-[50px]", label: "320 x 50" },
  sidebar: { width: "w-full max-w-[300px]", height: "h-[250px]", label: "300 x 250" },
  "in-feed": { width: "w-full", height: "min-h-[120px]", label: "Native Ad" },
};

export function AdSlot({ size, className = "" }: { size: AdSize; className?: string }) {
  const config = sizeMap[size];

  if (size === "in-feed") {
    return (
      <div className={`my-4 ${className}`} aria-label="Sponsored content">
        <div className="rounded-lg border border-border bg-card p-4">
          <span className="mb-2 inline-block rounded-sm bg-accent/15 px-2 py-0.5 text-xs font-medium text-accent">
            Sponsored
          </span>
          <div className={`${config.width} ${config.height} flex items-center justify-center rounded-md bg-muted`}>
            <p className="text-sm text-muted-foreground">Ad Space - {config.label}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`my-4 flex justify-center ${className}`} aria-label="Advertisement">
      <div className="flex flex-col items-center">
        <span className="mb-1 text-[10px] uppercase tracking-wider text-muted-foreground">
          Advertisement
        </span>
        <div
          className={`${config.width} ${config.height} flex items-center justify-center rounded-md border border-border bg-card`}
        >
          <p className="text-xs text-muted-foreground">Ad Space - {config.label}</p>
        </div>
      </div>
    </div>
  );
}
