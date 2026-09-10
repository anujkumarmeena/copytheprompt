import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "CopyThePrompt India — viral AI image prompts curated for Indian creators.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-widest text-amber-300">
        About
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">
        Prompts India is actually using
      </h1>
      <div className="mt-8 space-y-5 text-base leading-relaxed text-ctp-muted">
        <p>
          <strong className="text-ctp-text">CopyThePrompt</strong> is a public
          gallery of AI images with the exact prompts behind them. This India
          edition leans into what is circulating right now: the ChatGPT 1980s
          family-album look, Ganeshotsav nights, bridal and safa portraits,
          ghat sunrises, street food, cricket floodlights.
        </p>
        <p>
          Site images generate nahi karta. No API, no login. Browse, open, copy
          — ChatGPT, Midjourney, ya Flux mein paste karo.
        </p>
        <p>Favorites stay in your browser (localStorage) only.</p>
      </div>
      <Link
        href="/#trending"
        className="mt-10 inline-flex rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-5 py-2.5 text-sm font-semibold text-black transition hover:brightness-110"
      >
        India viral dekho
      </Link>
    </div>
  );
}
