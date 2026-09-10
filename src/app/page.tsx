import { GalleryBrowser } from "@/components/GalleryBrowser";
import { allTags, prompts } from "@/data/prompts";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-ctp-border/50">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.22),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.12),transparent_45%)]"
        />
        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-ctp-border bg-ctp-surface/70 px-3 py-1 text-xs font-medium text-ctp-muted backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Public gallery · No signup required
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            See the image.{" "}
            <span className="gradient-text">Copy the prompt.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ctp-muted sm:text-lg">
            CopyThePrompt is a curated gallery of AI-generated images paired with
            the exact Midjourney and Flux prompts that made them. Browse styles,
            open a piece, and one-click copy the prompt into your favorite
            generator.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#gallery"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:brightness-110"
            >
              Browse gallery
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-xl border border-ctp-border bg-ctp-elevated px-5 py-2.5 text-sm font-medium text-ctp-text transition hover:border-violet-400/40"
            >
              How it works
            </a>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="border-b border-ctp-border/50 bg-ctp-surface/30"
      >
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            {
              step: "01",
              title: "Browse",
              body: "Explore a masonry gallery of AI images across styles — cinematic, fantasy, photoreal, cyberpunk, and more.",
            },
            {
              step: "02",
              title: "Inspect",
              body: "Open any piece to see the full prompt, optional negative prompt, model, and tags in a polished detail panel.",
            },
            {
              step: "03",
              title: "Copy & create",
              body: "One click copies the prompt to your clipboard. Paste it into Midjourney, Flux, or any compatible tool.",
            },
          ].map((card) => (
            <div
              key={card.step}
              className="rounded-2xl border border-ctp-border bg-ctp-bg/60 p-6"
            >
              <p className="text-xs font-semibold tracking-widest text-violet-300">
                {card.step}
              </p>
              <h2 className="mt-2 text-xl font-semibold">{card.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ctp-muted">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div id="gallery" className="py-14 sm:py-16">
        <GalleryBrowser items={prompts} tags={allTags} />
      </div>
    </>
  );
}
