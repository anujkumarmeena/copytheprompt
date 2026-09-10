"use client";

import { useMemo, useState } from "react";
import type { PromptItem } from "@/lib/types";
import { FilterChips } from "./FilterChips";
import { GalleryCard } from "./GalleryCard";
import { DetailModal } from "./DetailModal";

type GalleryBrowserProps = {
  items: PromptItem[];
  tags: string[];
};

export function GalleryBrowser({ items, tags }: GalleryBrowserProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [selected, setSelected] = useState<PromptItem | null>(null);

  const filtered = useMemo(() => {
    if (!activeTag) return items;
    return items.filter((item) => item.tags.includes(activeTag));
  }, [items, activeTag]);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Prompt gallery
          </h2>
          <p className="mt-1 text-sm text-ctp-muted">
            {filtered.length} prompt{filtered.length === 1 ? "" : "s"}
            {activeTag ? ` tagged “${activeTag}”` : ""}
          </p>
        </div>
        <FilterChips tags={tags} active={activeTag} onChange={setActiveTag} />
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-ctp-border bg-ctp-surface/50 px-6 py-16 text-center text-ctp-muted">
          No prompts match this filter. Try another tag.
        </div>
      ) : (
        <div className="masonry">
          {filtered.map((item) => (
            <GalleryCard key={item.id} item={item} onOpen={setSelected} />
          ))}
        </div>
      )}

      <DetailModal item={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
