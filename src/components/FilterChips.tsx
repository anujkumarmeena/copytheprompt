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
            ? "bg-violet-500/20 text-violet-200 ring-1 ring-violet-400/50"
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
              ? "bg-cyan-500/15 text-cyan-200 ring-1 ring-cyan-400/50"
              : "bg-ctp-elevated text-ctp-muted ring-1 ring-ctp-border hover:text-ctp-text"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
