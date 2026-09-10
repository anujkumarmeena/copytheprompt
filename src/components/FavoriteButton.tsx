"use client";

import { useEffect, useState } from "react";
import { getFavorites, toggleFavorite } from "@/lib/favorites";

type FavoriteButtonProps = {
  id: string;
  className?: string;
};

export function FavoriteButton({ id, className = "" }: FavoriteButtonProps) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(getFavorites().includes(id));
  }, [id]);

  return (
    <button
      type="button"
      aria-label={active ? "Remove from favorites" : "Save to favorites"}
      title="Favorites (saved locally)"
      onClick={(e) => {
        e.stopPropagation();
        const next = toggleFavorite(id);
        setActive(next.includes(id));
      }}
      className={`rounded-full border border-ctp-border/80 bg-ctp-bg/70 p-2 text-ctp-muted backdrop-blur transition hover:text-rose-300 ${className}`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={active ? "currentColor" : "none"}
        className={active ? "text-rose-400" : ""}
        aria-hidden
      >
        <path
          d="M12 21s-7.2-4.35-9.6-8.4C.6 9.3 2.1 6 5.4 6c1.8 0 3.3 1.05 3.9 2.55C10.0 7.05 11.4 6 13.2 6c3.3 0 4.8 3.3 3 6.6C19.2 16.65 12 21 12 21z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
