"use client";

import { useState } from "react";
import { KanoteCorner } from "./kanote";

const faqs = [
  {
    question: "How do I download videos?",
    answer:
      "Navigate to any video page and use the Download box on the right side (or below the video on mobile). Select your preferred quality and click Download.",
  },
  {
    question: "What video formats are supported?",
    answer:
      "Most videos are available in MP4 format which works on all devices. Some videos may also be available in WebM format for web browsers.",
  },
  {
    question: "Is downloading free?",
    answer:
      "Yes, all video downloads are completely free. The site is supported by advertisements.",
  },
  {
    question: "Why is the download slow?",
    answer:
      "Download speed depends on your internet connection. Try downloading during off-peak hours or select a lower quality for faster downloads.",
  },
  {
    question: "Can I request specific content?",
    answer:
      "Yes! Use the contact form above to submit content requests. We review all requests and try to add popular content.",
  },
  {
    question: "How do I report a broken link?",
    answer:
      "If you find a broken link or non-working video, please use the contact form to let us know. Include the video title and URL.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="relative mx-auto max-w-2xl">
      {/* Decorative corners on the FAQ section */}
      <KanoteCorner position="top-left" className="absolute -left-4 -top-4 text-kanote opacity-40" size={32} color="currentColor" />
      <KanoteCorner position="top-right" className="absolute -right-4 -top-4 text-kanote opacity-40" size={32} color="currentColor" />

      <div className="flex flex-col gap-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-lg border border-border bg-card"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between px-5 py-4 text-left"
              aria-expanded={openIndex === index}
            >
              <span className="pr-4 text-sm font-semibold text-foreground">
                {faq.question}
              </span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`shrink-0 text-muted-foreground transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="border-t border-border px-5 py-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
