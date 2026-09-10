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
          produced them. Click an image, read the full Midjourney or Flux-style
          prompt, and copy it in one click — then remix it in your own workflow.
        </p>
        <p>
          This site does not generate images. There are no generation APIs and
          no paid auth for v1. It is a curated browsing and copy experience for
          creators who want inspiration they can actually reuse.
        </p>
        <p>
          Favorites are stored in your browser via localStorage only — a light
          stub for saving pieces you like while browsing.
        </p>
        <p>
          Domain planned:{" "}
          <span className="text-ctp-text">copytheprompt.com</span>
        </p>
      </div>
      <Link
        href="/#gallery"
        className="mt-10 inline-flex rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:brightness-110"
      >
        Back to gallery
      </Link>
    </div>
  );
}
