export type PromptItem = {
  id: string;
  title: string;
  imageUrl: string;
  prompt: string;
  negativePrompt?: string;
  model: string;
  tags: string[];
  aspectRatio?: string;
};

export type TagFilter = string;
