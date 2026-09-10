import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ctp-border/60 bg-ctp-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 text-sm font-bold text-black shadow-lg shadow-violet-500/20">
            C
          </span>
          <span className="text-lg font-semibold tracking-tight">
            Copy
            <span className="gradient-text">The</span>
            Prompt
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/"
            className="rounded-lg px-3 py-2 text-sm text-ctp-muted transition hover:bg-ctp-elevated hover:text-ctp-text"
          >
            Gallery
          </Link>
          <Link
            href="/#how-it-works"
            className="rounded-lg px-3 py-2 text-sm text-ctp-muted transition hover:bg-ctp-elevated hover:text-ctp-text"
          >
            How it works
          </Link>
          <Link
            href="/about"
            className="rounded-lg px-3 py-2 text-sm text-ctp-muted transition hover:bg-ctp-elevated hover:text-ctp-text"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
