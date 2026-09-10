"use client";

import { useEffect } from "react";
import Image from "next/image";
import type { PromptItem } from "@/lib/types";
import { CopyButton } from "./CopyButton";
import { FavoriteButton } from "./FavoriteButton";

type DetailModalProps = {
  item: PromptItem | null;
  onClose: () => void;
};

export function DetailModal({ item, onClose }: DetailModalProps) {
  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="prompt-title"
    >
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-t-3xl border border-ctp-border bg-ctp-surface shadow-2xl animate-fade-in sm:mx-4 sm:rounded-3xl">
        <div className="grid max-h-[92vh] overflow-y-auto md:grid-cols-2">
          <div className="relative aspect-[4/5] bg-ctp-bg md:aspect-auto md:min-h-[420px]">
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <FavoriteButton
              id={item.id}
              className="absolute right-3 top-3"
            />
          </div>
          <div className="flex flex-col gap-5 p-5 sm:p-7">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-ctp-muted">
                  {item.model}
                  {item.aspectRatio ? ` · ${item.aspectRatio}` : ""}
                </p>
                <h2
                  id="prompt-title"
                  className="mt-1 text-2xl font-semibold tracking-tight"
                >
                  {item.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-ctp-border px-2.5 py-1.5 text-sm text-ctp-muted transition hover:bg-ctp-elevated hover:text-ctp-text"
              >
                Esc
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-ctp-elevated px-2.5 py-1 text-xs capitalize text-ctp-muted ring-1 ring-ctp-border"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div>
              <h3 className="mb-2 text-sm font-medium text-ctp-muted">Prompt</h3>
              <pre className="max-h-48 overflow-auto whitespace-pre-wrap rounded-2xl border border-ctp-border bg-ctp-bg p-4 font-mono text-[13px] leading-relaxed text-ctp-text/95">
                {item.prompt}
              </pre>
            </div>

            {item.negativePrompt ? (
              <div>
                <h3 className="mb-2 text-sm font-medium text-ctp-muted">
                  Negative prompt
                </h3>
                <pre className="overflow-auto whitespace-pre-wrap rounded-2xl border border-ctp-border/70 bg-ctp-bg/60 p-3 font-mono text-xs leading-relaxed text-ctp-muted">
                  {item.negativePrompt}
                </pre>
              </div>
            ) : null}

            <div className="mt-auto flex flex-col gap-3 sm:flex-row">
              <CopyButton text={item.prompt} className="flex-1" />
              {item.negativePrompt ? (
                <CopyButton
                  text={item.negativePrompt}
                  label="Copy negative"
                  variant="secondary"
                  className="flex-1"
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
