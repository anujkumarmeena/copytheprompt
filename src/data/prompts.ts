import type { PromptItem } from "@/lib/types";

export const prompts: PromptItem[] = [
  {
    id: "porcelain-blade",
    title: "Porcelain Blade",
    imageUrl: "/prompts/pack01-porcelain-blade.png",
    prompt:
      "cinematic editorial portrait, subject with thick porcelain-white face paint like a ceramic mask, bold metallic gold brushstroke across forehead as kintsugi, black ink accent under one eye, short dark hair, sharp golden quill accessory, concrete gray backdrop, Rembrandt lighting, high fashion avant-garde --ar 3:4 --stylize 200 --v 6.1 --style raw",
    negativePrompt: "cartoon, anime screenshot, smiling selfie, daylight beach, low detail, watermark, text",
    model: "Midjourney v6.1",
    tags: ["cinematic", "character", "portrait", "fashion", "japan"],
    aspectRatio: "3:4",
  },
  {
    id: "liquid-chrome-gown",
    title: "Liquid Chrome Gown",
    imageUrl: "/prompts/pack01-liquid-chrome-gown.png",
    prompt:
      "high fashion editorial, model in a floor-length liquid chrome couture gown that behaves like mercury, reflective metal fabric cascading, concrete column fashion set, single hard spotlight, Vogue cover energy, photoreal, 85mm, ultra sharp fabric reflections",
    negativePrompt: "casual clothes, wrinkled fabric, crowd, logo, text, plastic look",
    model: "Flux.1 Pro",
    tags: ["fashion", "portrait", "futuristic", "photoreal", "character"],
    aspectRatio: "3:4",
  },
  {
    id: "auric-serum",
    title: "Auric Serum Still",
    imageUrl: "/prompts/pack01-auric-serum.png",
    prompt:
      "luxury beauty product still life, single cylindrical glass serum bottle with matte black tall cap, filled with translucent molten amber-gold liquid, centered on shimmering metallic gold micro-glitter surface, hard studio light, long sharp shadow, commercial skincare campaign, minimalist",
    model: "Flux.1 Pro",
    tags: ["product", "photoreal", "minimal", "fashion", "soft"],
    aspectRatio: "1:1",
  },
  {
    id: "liminal-pool",
    title: "Liminal Midnight Pool",
    imageUrl: "/prompts/pack01-liminal-pool.png",
    prompt:
      "viral liminal space aesthetic, empty indoor hotel pool, glowing turquoise water perfectly still, fluorescent ceiling lights, dark maroon wall panels with warm recessed windows, wet beige deck, no people, uncanny calm --ar 16:9 --stylize 120 --v 6.1",
    negativePrompt: "crowded, party, daylight tropical resort, cartoon, text",
    model: "Midjourney v6.1",
    tags: ["surreal", "night", "cinematic", "urban", "minimal"],
    aspectRatio: "16:9",
  },
  {
    id: "glass-skin-oracle",
    title: "Glass Skin Oracle",
    imageUrl: "/prompts/pack01-glass-skin-oracle.png",
    prompt:
      "extreme beauty close-up portrait, hyperreal skin with constellation freckles, shimmering gold eyeshadow, dark expressive eyes, soft parted lips, linen fabric framing the face, dewy glass-skin finish, softbox beauty lighting, editorial oracle mood, 90mm macro --ar 3:4 --stylize 180 --v 6",
    negativePrompt: "heavy cake makeup, plastic doll, watermark, text, harsh acne filters",
    model: "Midjourney v6",
    tags: ["portrait", "fashion", "soft", "photoreal", "character"],
    aspectRatio: "3:4",
  },
  {
    id: "hologram-idol",
    title: "Hologram Idol",
    imageUrl: "/prompts/pack01-hologram-idol.png",
    prompt:
      "stylized holographic pop idol character, long magenta hair, large blue eyes, iridescent holographic crop top and flared skirt with gold trim, neon glow aura, cyan magenta yellow vaporwave lighting, vertical poster composition, future-funk concert energy",
    model: "Flux.1 Dev",
    tags: ["character", "fashion", "neon", "futuristic", "illustration"],
    aspectRatio: "9:16",
  },
  {
    id: "jellycore-kicks",
    title: "Jellycore Kicks",
    imageUrl: "/prompts/pack01-jellycore-kicks.png",
    prompt:
      "viral product photography of translucent jelly sneakers, soft lilac-pink rubbery uppers, glowing violet chunky soles, candy-pink laces, floating over glittery purple metallic surface, soft studio gels, Y2K candy-core aesthetic, commercial sneaker ad",
    negativePrompt: "dirty shoes, worn out, feet inside, text, brand logo names, cluttered",
    model: "Flux.1 Pro",
    tags: ["product", "fashion", "whimsical", "photoreal", "retro"],
    aspectRatio: "1:1",
  },
  {
    id: "velvet-noir-muse",
    title: "Velvet Noir Muse",
    imageUrl: "/prompts/pack01-velvet-noir-muse.png",
    prompt:
      "cinematic fashion portrait, muse in floor-length gown mixing crushed black velvet and deep crimson satin, dark textured collar, standing centered in a bright symmetrical pillar corridor, soft blurred face, high-contrast ethereal light pools, luxurious texture --ar 3:4 --stylize 220 --v 6.1 --style raw",
    model: "Midjourney v6.1",
    tags: ["fashion", "portrait", "cinematic", "character", "surreal"],
    aspectRatio: "3:4",
  },
  {
    id: "vaporwave-atrium",
    title: "Vaporwave Atrium",
    imageUrl: "/prompts/pack01-vaporwave-atrium.png",
    prompt:
      "viral vaporwave liminal aesthetic, abandoned 80s shopping mall atrium, bubblegum pink columns, pale lemon balcony rails, empty storefronts, polished tile reflections, long skylight with blue sky, deserted nostalgic dreamcore, wide establishing shot --ar 16:9 --stylize 250 --v 6",
    negativePrompt: "crowded shoppers, modern glass megamall, cyberpunk rain, neon kanji alley",
    model: "Midjourney v6",
    tags: ["retro", "surreal", "urban", "soft", "cinematic"],
    aspectRatio: "16:9",
  },
  {
    id: "starlit-courier",
    title: "Starlit Courier",
    imageUrl: "/prompts/pack01-starlit-courier.png",
    prompt:
      "cinematic top-down shot of a space courier freefalling toward a neon megacity at night, dark tactical flight suit with glowing cyan visor helmet, LED harness lines, amber city grid and cyan waterfront neon below, dramatic scale, photoreal sci-fi action",
    model: "Flux.1 Pro",
    tags: ["sci-fi", "character", "cinematic", "futuristic", "night"],
    aspectRatio: "16:9",
  },
];

export const allTags: string[] = Array.from(
  new Set(prompts.flatMap((p) => p.tags))
).sort();

export function getPromptById(id: string): PromptItem | undefined {
  return prompts.find((p) => p.id === id);
}
