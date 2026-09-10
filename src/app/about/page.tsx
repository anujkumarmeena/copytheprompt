import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how CopyThePrompt helps creators reuse high-quality AI image prompts.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-widest text-violet-300">
        About
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">
        Prompts worth stealing (nicely)
      </h1>
      <div className="mt-8 space-y-5 text-base leading-relaxed text-ctp-muted">
        <p>
          <strong className="text-ctp-text">CopyThePrompt</strong> is a public
          gallery of AI-generated images paired with the exact prompts that
          produced them. Click an image, read the full Midjourney, Flux, or
          ChatGPT-style prompt, and copy it in one click.
        </p>
        <p>
          The gallery includes looks circulating in India right now — 1980s
          family-album edits, Ganeshotsav nights, bridal portraits, street food,
          cricket floodlights — alongside the original cinematic and fashion set.
        </p>
        <p>
          This site does not generate images. There are no generation APIs and
          no paid auth for v1. Favorites are stored in your browser via
          localStorage only.
        </p>
      </div>
      <Link
        href="/#trending"
        className="mt-10 inline-flex rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:brightness-110"
      >
        Back to gallery
      </Link>
    </div>
  );
}
