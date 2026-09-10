"use client";

import Image from "next/image";
import type { PromptItem } from "@/lib/types";
import { FavoriteButton } from "./FavoriteButton";

type GalleryCardProps = {
  item: PromptItem;
  onOpen: (item: PromptItem) => void;
  showTrendingBadge?: boolean;
};

function aspectClass(aspectRatio?: string) {
  switch (aspectRatio) {
    case "1:1":
      return "aspect-square";
    case "16:9":
      return "aspect-video";
    case "9:16":
      return "aspect-[9/16]";
    case "3:4":
      return "aspect-[3/4]";
    case "4:5":
      return "aspect-[4/5]";
    case "2:3":
      return "aspect-[2/3]";
    case "3:2":
      return "aspect-[3/2]";
    default:
      return "aspect-[4/5]";
  }
}

export function GalleryCard({
  item,
  onOpen,
  showTrendingBadge = false,
}: GalleryCardProps) {
  return (
    <article className="masonry-item group relative">
      <button
        type="button"
        onClick={() => onOpen(item)}
        className="relative w-full overflow-hidden rounded-[14px] bg-ctp-surface text-left transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
      >
        <div
          className={`relative w-full overflow-hidden bg-ctp-elevated ${aspectClass(item.aspectRatio)}`}
        >
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="object-cover object-center transition duration-300 ease-out group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 transition group-hover:opacity-90" />
          {showTrendingBadge && item.trending ? (
            <span className="absolute left-3 top-3 rounded-full bg-violet-500/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white shadow">
              Trending
            </span>
          ) : (
            <span className="absolute left-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-white/90 backdrop-blur">
              {item.model.split(" ")[0]}
            </span>
          )}
          <div className="absolute inset-x-0 bottom-0 p-3.5">
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
        </div>
      </button>
      <div className="absolute right-3 top-3 z-10 opacity-100 sm:opacity-0 sm:transition sm:group-hover:opacity-100">
        <FavoriteButton id={item.id} />
      </div>
    </article>
  );
}
