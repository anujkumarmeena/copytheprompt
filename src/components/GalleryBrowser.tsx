"use client";

import { useMemo, useState } from "react";
import type { PromptItem } from "@/lib/types";
import { FilterChips } from "./FilterChips";
import { GalleryCard } from "./GalleryCard";
import { DetailModal } from "./DetailModal";

type GalleryBrowserProps = {
  items: PromptItem[];
  tags: string[];
  title?: string;
  subtitle?: string;
  showTrendingBadge?: boolean;
  showTrendingFilter?: boolean;
};

export function GalleryBrowser({
  items,
  tags,
  title = "Prompt gallery",
  subtitle,
  showTrendingBadge = false,
  showTrendingFilter = false,
}: GalleryBrowserProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [trendingOnly, setTrendingOnly] = useState(false);
  const [selected, setSelected] = useState<PromptItem | null>(null);

  const filtered = useMemo(() => {
    let list = items;
    if (trendingOnly) list = list.filter((item) => item.trending);
    if (activeTag) list = list.filter((item) => item.tags.includes(activeTag));
    return list;
  }, [items, activeTag, trendingOnly]);

  const countLabel =
    subtitle ??
    `${filtered.length} prompt${filtered.length === 1 ? "" : "s"}${
      activeTag ? ` tagged “${activeTag}”` : ""
    }${trendingOnly ? " · trending" : ""}`;

  return (
    <section className="mx-auto max-w-7xl px-3 sm:px-5 lg:px-6">
      <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          <p className="mt-1 text-sm text-ctp-muted">{countLabel}</p>
        </div>
        <div className="flex flex-col gap-3">
          {showTrendingFilter ? (
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setTrendingOnly(false)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                  !trendingOnly
                    ? "bg-violet-500/20 text-violet-200 ring-1 ring-violet-400/50"
                    : "bg-ctp-elevated text-ctp-muted ring-1 ring-ctp-border hover:text-ctp-text"
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setTrendingOnly(true)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                  trendingOnly
                    ? "bg-cyan-500/15 text-cyan-200 ring-1 ring-cyan-400/50"
                    : "bg-ctp-elevated text-ctp-muted ring-1 ring-ctp-border hover:text-ctp-text"
                }`}
              >
                Trending
              </button>
            </div>
          ) : null}
          <FilterChips tags={tags} active={activeTag} onChange={setActiveTag} />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-[14px] border border-dashed border-ctp-border bg-ctp-surface/50 px-6 py-16 text-center text-ctp-muted">
          No prompts match this filter. Try another tag.
        </div>
      ) : (
        <div className="masonry">
          {filtered.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
              onOpen={setSelected}
              showTrendingBadge={showTrendingBadge}
            />
          ))}
        </div>
      )}

      <DetailModal item={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
