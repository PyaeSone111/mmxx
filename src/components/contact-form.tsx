"use client";

import { useState } from "react";
import { KanoteCorner } from "./kanote";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="relative flex flex-col items-center justify-center rounded-xl border border-primary/30 bg-primary/5 p-10 text-center">
        <KanoteCorner position="top-left" className="absolute -left-1 -top-1 text-kanote" size={24} color="currentColor" />
        <KanoteCorner position="top-right" className="absolute -right-1 -top-1 text-kanote" size={24} color="currentColor" />
        <KanoteCorner position="bottom-left" className="absolute -bottom-1 -left-1 text-kanote" size={24} color="currentColor" />
        <KanoteCorner position="bottom-right" className="absolute -bottom-1 -right-1 text-kanote" size={24} color="currentColor" />
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-4 text-primary">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="m9 11 3 3L22 4" />
        </svg>
        <h3 className="text-lg font-semibold text-foreground">Message Sent!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thank you for reaching out. We{"'"}ll get back to you soon.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 rounded-lg border border-primary bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative rounded-xl border border-border bg-card p-6">
      {/* Kanote corner ornaments */}
      <KanoteCorner position="top-left" className="absolute -left-1 -top-1 text-kanote" size={24} color="currentColor" />
      <KanoteCorner position="top-right" className="absolute -right-1 -top-1 text-kanote" size={24} color="currentColor" />
      <KanoteCorner position="bottom-left" className="absolute -bottom-1 -left-1 text-kanote" size={24} color="currentColor" />
      <KanoteCorner position="bottom-right" className="absolute -bottom-1 -right-1 text-kanote" size={24} color="currentColor" />

      <h2 className="mb-4 text-lg font-semibold text-foreground">Send a Message</h2>

      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full rounded-lg border border-border bg-secondary/50 px-3 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-lg border border-border bg-secondary/50 px-3 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
          />
        </div>

        <div>
          <label htmlFor="subject" className="mb-1 block text-sm font-medium text-foreground">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            required
            placeholder="What is this about?"
            className="w-full rounded-lg border border-border bg-secondary/50 px-3 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            placeholder="Your message..."
            className="w-full resize-none rounded-lg border border-border bg-secondary/50 px-3 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
          />
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-lg border border-primary bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m22 2-7 20-4-9-9-4z" />
          </svg>
          Send Message
        </button>
      </div>
    </form>
  );
}
