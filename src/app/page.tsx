import Link from "next/link";
import { GalleryBrowser } from "@/components/GalleryBrowser";
import { allTags, trendingPrompts } from "@/data/prompts";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-ctp-border/50">
        <div className="mx-auto max-w-7xl px-3 pb-6 pt-8 sm:px-5 sm:pb-8 sm:pt-10 lg:px-6">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            See the image. <span className="gradient-text">Copy the prompt.</span>
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ctp-muted sm:text-base">
            Curated AI images with the exact Midjourney and Flux prompts that made
            them — browse, open, one-tap copy.
          </p>
        </div>
      </section>

      <div id="trending" className="py-8 sm:py-10">
        <GalleryBrowser
          items={trendingPrompts}
          tags={allTags}
          title="Trending"
          subtitle={`${trendingPrompts.length} new this week · scroll-stoppers`}
        />
        <div className="mx-auto mt-8 max-w-7xl px-3 text-center sm:px-5 lg:px-6">
          <Link
            href="/gallery"
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:brightness-110"
          >
            Browse full collection
          </Link>
        </div>
      </div>

      <section
        id="how-it-works"
        className="border-t border-ctp-border/50 bg-ctp-surface/30"
      >
        <div className="mx-auto grid max-w-7xl gap-4 px-3 py-10 sm:grid-cols-3 sm:px-5 lg:px-6">
          {[
            {
              step: "01",
              title: "Browse",
              body: "Trending on home, full collection inside — cinematic, fashion, product, and more.",
            },
            {
              step: "02",
              title: "Inspect",
              body: "Open any tile for the full prompt, optional negative, model, and tags.",
            },
            {
              step: "03",
              title: "Copy & create",
              body: "One tap copies the prompt. Paste into Midjourney, Flux, or any compatible tool.",
            },
          ].map((card) => (
            <div
              key={card.step}
              className="rounded-[14px] border border-ctp-border bg-ctp-bg/60 p-5"
            >
              <p className="text-xs font-semibold tracking-widest text-violet-300">
                {card.step}
              </p>
              <h2 className="mt-2 text-lg font-semibold">{card.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ctp-muted">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
