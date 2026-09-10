"use client";

type FilterChipsProps = {
  tags: string[];
  active: string | null;
  onChange: (tag: string | null) => void;
};

export function FilterChips({ tags, active, onChange }: FilterChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => onChange(null)}
        className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
          active === null
            ? "bg-amber-500/20 text-amber-100 ring-1 ring-amber-400/50"
            : "bg-ctp-elevated text-ctp-muted ring-1 ring-ctp-border hover:text-ctp-text"
        }`}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          onClick={() => onChange(active === tag ? null : tag)}
          className={`rounded-full px-3.5 py-1.5 text-xs font-medium capitalize transition ${
            active === tag
              ? "bg-orange-500/15 text-orange-100 ring-1 ring-orange-400/50"
              : "bg-ctp-elevated text-ctp-muted ring-1 ring-ctp-border hover:text-ctp-text"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
