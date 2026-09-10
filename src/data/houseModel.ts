import type { PromptItem } from "@/lib/types";

/** Shared face lock for CopyThePrompt house model (Anuj reference). */
export const HOUSE_MODEL_IMAGE = "/model/house-model.png";

export const HOUSE_MODEL_DESC =
  "featuring the CopyThePrompt house model: young South Asian woman, warm natural skin, heart-shaped face, thick dark feathered eyebrows, large dark brown eyes with soft lids, full soft nude-pink lips slightly parted, long voluminous dark wavy hair draped over both shoulders, serene neutral expression looking at camera";

/** Lock face identity into prompt text only — keep unique scene imageUrl. */
export function withHouseModel(item: PromptItem): PromptItem {
  const prompt = item.prompt.includes("CopyThePrompt house model")
    ? item.prompt
    : `${HOUSE_MODEL_DESC}, ${item.prompt}`;
  return {
    ...item,
    prompt,
  };
}
