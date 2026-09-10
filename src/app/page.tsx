import Link from "next/link";
import { GalleryBrowser } from "@/components/GalleryBrowser";
import { allTags, trendingPrompts } from "@/data/prompts";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-ctp-border/50">
        <div className="mx-auto max-w-7xl px-3 pb-6 pt-8 sm:px-5 sm:pb-8 sm:pt-10 lg:px-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-amber-300/90">
            India edition · Sept 2026
          </p>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Jo chal raha hai India mein.{" "}
            <span className="gradient-text">Prompt copy karo.</span>
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ctp-muted sm:text-base">
            Viral AI looks Indians are making this week — 80s family album,
            Ganeshotsav, bridal lehenga, ghat sunrises, cricket nights. Image
            dekho, exact Midjourney / Flux / ChatGPT prompt copy karo.
          </p>
        </div>
      </section>

      <div id="trending" className="py-8 sm:py-10">
        <GalleryBrowser
          items={trendingPrompts}
          tags={allTags}
          title="India mein viral"
          subtitle={`${trendingPrompts.length} looks · 80s AI, Ganesh, shaadi, streets`}
        />
        <div className="mx-auto mt-8 max-w-7xl px-3 text-center sm:px-5 lg:px-6">
          <Link
            href="/gallery"
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-5 py-2.5 text-sm font-semibold text-black transition hover:brightness-110"
          >
            Poori gallery dekho
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
              body: "Jo India mein chal raha hai — retro album, festive, fashion, streets, cricket.",
            },
            {
              step: "02",
              title: "Inspect",
              body: "Tile kholo: full prompt, negative, model, tags. Remix ke liye ready.",
            },
            {
              step: "03",
              title: "Copy & create",
              body: "Ek tap. ChatGPT, Midjourney, Flux — jahan bani ho image, paste.",
            },
          ].map((card) => (
            <div
              key={card.step}
              className="rounded-[14px] border border-ctp-border bg-ctp-bg/60 p-5"
            >
              <p className="text-xs font-semibold tracking-widest text-amber-300">
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
