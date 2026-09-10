export type PromptItem = {
  id: string;
  title: string;
  imageUrl: string;
  prompt: string;
  negativePrompt?: string;
  model: string;
  tags: string[];
  aspectRatio?: string;
  /** Featured on home Trending rail; badge in full collection. */
  trending?: boolean;
};

export type TagFilter = string;
