import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { FAQ } from "@/components/faq";
import { AdSlot } from "@/components/ad-slot";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the MMXX team. Find answers to common questions and reach out for support.",
};

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="m22 2-7 20-4-9-9-4zm0 0L9.2 13.2" />
      </svg>
    ),
  },
  {
    name: "Viber",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:contact@mmxx.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-foreground">Contact Us</h1>
        <p className="mt-2 text-muted-foreground">
          Have a question or feedback? We{"'"}d love to hear from you.
        </p>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Form */}
        <div className="flex-1">
          <ContactForm />
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-72">
          {/* Social links */}
          <div className="rounded-xl border border-border bg-card p-5">
            <h2 className="mb-4 text-base font-semibold text-foreground">Connect With Us</h2>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-primary">{link.icon}</span>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <AdSlot size="sidebar" className="mt-4" />
        </aside>
      </div>

      <AdSlot size="leaderboard" className="mt-8 hidden md:flex" />
      <AdSlot size="mobile-banner" className="mt-6 md:hidden" />

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="mb-6 text-center text-2xl font-bold text-foreground">
          Frequently Asked Questions
        </h2>
        <FAQ />
      </section>

      <AdSlot size="leaderboard" className="mt-8 hidden md:flex" />
    </div>
  );
}
