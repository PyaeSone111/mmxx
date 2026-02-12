"use client";

import { useState } from "react";

const qualities = ["1080p (HD)", "720p", "480p", "360p"];

export function DownloadBox({ videoTitle }: { videoTitle: string }) {
  const [quality, setQuality] = useState("720p");
  const [copied, setCopied] = useState(false);
  const [tipsOpen, setTipsOpen] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(window.location.href).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="rounded-xl border-2 border-primary/20 bg-card p-5">
      <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-foreground">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
        Download Video
      </h2>

      {/* Quality selector */}
      <label className="mb-1 block text-sm font-medium text-foreground" htmlFor="quality-select">
        Quality
      </label>
      <select
        id="quality-select"
        value={quality}
        onChange={(e) => setQuality(e.target.value)}
        className="mb-4 w-full rounded-lg border border-border bg-secondary px-3 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
      >
        {qualities.map((q) => (
          <option key={q} value={q}>{q}</option>
        ))}
      </select>

      {/* Download button */}
      <button
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90 active:scale-[0.98]"
        aria-label={`Download ${videoTitle} in ${quality}`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
        Download ({quality})
      </button>

      {/* Copy link */}
      <button
        onClick={handleCopy}
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
        {copied ? "Copied!" : "Copy Link"}
      </button>

      {/* Tips accordion */}
      <div className="mt-4 border-t border-border pt-4">
        <button
          onClick={() => setTipsOpen(!tipsOpen)}
          className="flex w-full items-center justify-between text-sm font-medium text-foreground"
          aria-expanded={tipsOpen}
        >
          How to download
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform ${tipsOpen ? "rotate-180" : ""}`}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
        {tipsOpen && (
          <div className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
            <p>1. Select your preferred quality from the dropdown above.</p>
            <p>2. Click the Download button to start the download.</p>
            <p>3. If the download doesn{"'"}t start, try right-clicking and selecting {"\""}Save As{"\""}.</p>
            <p>4. For mobile, tap and hold the Download button, then select {"\""}Download Link{"\""}.</p>
          </div>
        )}
      </div>
    </div>
  );
}
