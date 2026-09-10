"use client";

import Image from "next/image";
import type { PromptItem } from "@/lib/types";
import { FavoriteButton } from "./FavoriteButton";

type GalleryCardProps = {
  item: PromptItem;
  onOpen: (item: PromptItem) => void;
};

export function GalleryCard({ item, onOpen }: GalleryCardProps) {
  return (
    <article className="masonry-item group relative">
      <button
        type="button"
        onClick={() => onOpen(item)}
        className="relative w-full overflow-hidden rounded-2xl border border-ctp-border/70 bg-ctp-surface text-left shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:border-violet-400/40 hover:shadow-violet-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-ctp-elevated">
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 transition group-hover:opacity-90" />
          <div className="absolute inset-x-0 bottom-0 p-4">
            <p className="text-[11px] font-medium uppercase tracking-wider text-white/60">
              {item.model}
            </p>
            <h3 className="mt-0.5 text-base font-semibold text-white">
              {item.title}
            </h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {item.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] capitalize text-white/80 backdrop-blur"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <span className="absolute left-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-medium text-white/90 opacity-0 backdrop-blur transition group-hover:opacity-100">
            View prompt
          </span>
        </div>
      </button>
      <div className="absolute right-3 top-3 z-10 opacity-100 sm:opacity-0 sm:transition sm:group-hover:opacity-100">
        <FavoriteButton id={item.id} />
      </div>
    </article>
  );
}
