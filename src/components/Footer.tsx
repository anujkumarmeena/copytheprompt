import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-ctp-border/60 bg-ctp-surface/50">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-semibold tracking-tight">
            Copy<span className="gradient-text">The</span>Prompt
          </p>
          <p className="mt-1 text-sm text-ctp-muted">
            India edition — viral looks, copy-ready prompts.
          </p>
        </div>
        <div className="flex gap-4 text-sm text-ctp-muted">
          <Link href="/" className="transition hover:text-ctp-text">
            Home
          </Link>
          <Link href="/gallery" className="transition hover:text-ctp-text">
            Gallery
          </Link>
          <Link href="/about" className="transition hover:text-ctp-text">
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}
