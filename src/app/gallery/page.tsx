import { GalleryBrowser } from "@/components/GalleryBrowser";
import { allTags, prompts } from "@/data/prompts";

export const metadata = {
  title: "Full collection · CopyThePrompt",
  description:
    "Browse the full CopyThePrompt gallery — every curated AI image with its reusable prompt.",
};

export default function GalleryPage() {
  return (
    <div className="py-8 sm:py-10">
      <GalleryBrowser
        items={prompts}
        tags={allTags}
        title="Full collection"
        subtitle={`${prompts.length} prompts`}
        showTrendingBadge
        showTrendingFilter
      />
    </div>
  );
}
