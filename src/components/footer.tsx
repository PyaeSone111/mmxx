import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
              <span className="text-base font-bold text-foreground">MMXX</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Your go-to destination for Myanmar entertainment. Watch, download, and enjoy quality video content.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div>
              <h3 className="mb-3 text-sm font-semibold text-foreground">Pages</h3>
              <ul className="flex flex-col gap-2">
                <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary">Home</Link></li>
                <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold text-foreground">Categories</h3>
              <ul className="flex flex-col gap-2">
                <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary">Entertainment</Link></li>
                <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary">Music</Link></li>
                <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary">Education</Link></li>
                <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary">Comedy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold text-foreground">Legal</h3>
              <ul className="flex flex-col gap-2">
                <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Terms of Use</Link></li>
                <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">DMCA</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-border pt-6">
          <p className="text-center text-xs text-muted-foreground">
            {'© 2026 MMXX. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
