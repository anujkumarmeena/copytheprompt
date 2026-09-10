import type { PromptItem } from "@/lib/types";

export const prompts: PromptItem[] = [
  {
    id: "nebula-cathedral",
    title: "Nebula Cathedral",
    imageUrl: "https://picsum.photos/seed/ctp-nebula/800/1000",
    prompt:
      "vast gothic cathedral floating inside a violet nebula, stained glass refracting cosmic dust, volumetric god rays, ultra detailed stone carvings, cinematic wide shot, ethereal atmosphere --ar 4:5 --stylize 250 --v 6.1",
    negativePrompt: "blurry, lowres, watermark, text, people, crowded",
    model: "Midjourney v6.1",
    tags: ["fantasy", "architecture", "space", "cinematic"],
    aspectRatio: "4:5",
  },
  {
    id: "chrome-koi",
    title: "Chrome Koi Pond",
    imageUrl: "https://picsum.photos/seed/ctp-koi/900/700",
    prompt:
      "liquid chrome koi swimming through a tranquil zen pond at dusk, reflective metal scales, soft sakura petals, shallow depth of field, photorealistic, 85mm lens --ar 16:9 --style raw",
    negativePrompt: "cartoon, illustration, oversaturated, noise",
    model: "Flux.1 Pro",
    tags: ["nature", "surreal", "photoreal", "japan"],
    aspectRatio: "16:9",
  },
  {
    id: "desert-monolith",
    title: "Desert Monolith",
    imageUrl: "https://picsum.photos/seed/ctp-desert/700/900",
    prompt:
      "towering black monolith in endless ochre dunes, harsh noon sun, long hard shadows, minimal composition, 70mm, film grain, anamorphic flares, mysterious atmosphere --ar 3:4 --v 6",
    model: "Midjourney v6",
    tags: ["landscape", "minimal", "cinematic", "surreal"],
    aspectRatio: "3:4",
  },
  {
    id: "neon-alley",
    title: "Rainy Neon Alley",
    imageUrl: "https://picsum.photos/seed/ctp-neon/800/800",
    prompt:
      "cyberpunk alley at night after rain, neon kanji reflections on wet asphalt, steam rising from vents, lone figure with umbrella, teal and magenta color grade, blade runner mood --ar 1:1 --stylize 150",
    negativePrompt: "daylight, sunny, clean streets, cartoon",
    model: "Midjourney v6.1",
    tags: ["cyberpunk", "urban", "night", "neon"],
    aspectRatio: "1:1",
  },
  {
    id: "paper-crane-forest",
    title: "Paper Crane Forest",
    imageUrl: "https://picsum.photos/seed/ctp-crane/750/950",
    prompt:
      "thousands of origami paper cranes suspended in a misty bamboo forest, soft morning light, pastel pinks and ivory, dreamy bokeh, delicate paper texture, whimsical fantasy --ar 4:5",
    model: "Flux.1 Dev",
    tags: ["fantasy", "nature", "whimsical", "soft"],
    aspectRatio: "4:5",
  },
  {
    id: "arctic-glasshouse",
    title: "Arctic Glasshouse",
    imageUrl: "https://picsum.photos/seed/ctp-arctic/900/600",
    prompt:
      "ornate Victorian glasshouse buried in arctic snow, warm golden interior glow contrasting icy exterior, aurora borealis overhead, hyper detailed architecture, cinematic still --ar 3:2 --v 6.1",
    negativePrompt: "ruins, broken glass, people, vehicles",
    model: "Midjourney v6.1",
    tags: ["architecture", "winter", "cinematic", "fantasy"],
    aspectRatio: "3:2",
  },
  {
    id: "biolum-tide",
    title: "Bioluminescent Tide",
    imageUrl: "https://picsum.photos/seed/ctp-tide/850/650",
    prompt:
      "bioluminescent waves crashing on a black sand beach, glowing plankton trails, starry sky, long exposure look, deep blues and electric cyan, ultra realistic --ar 16:9 --style raw",
    model: "Flux.1 Pro",
    tags: ["nature", "night", "ocean", "photoreal"],
    aspectRatio: "16:9",
  },
  {
    id: "mech-samurai",
    title: "Mech Samurai Portrait",
    imageUrl: "https://picsum.photos/seed/ctp-mech/700/900",
    prompt:
      "close-up portrait of a samurai wearing intricate mecha armor, brushed titanium and lacquered red, cherry blossom petals in wind, dramatic Rembrandt lighting, 8k detail --ar 3:4 --stylize 200",
    negativePrompt: "helmet off, soft focus, anime screenshot",
    model: "Midjourney v6",
    tags: ["portrait", "sci-fi", "japan", "character"],
    aspectRatio: "3:4",
  },
  {
    id: "library-of-clouds",
    title: "Library of Clouds",
    imageUrl: "https://picsum.photos/seed/ctp-library/800/1000",
    prompt:
      "infinite library carved into soft cumulus clouds, floating spiral staircases, leather-bound books, shafts of sunlight, baroque architecture meets surrealism, soft pastel palette --ar 4:5",
    model: "Midjourney v6.1",
    tags: ["surreal", "architecture", "fantasy", "soft"],
    aspectRatio: "4:5",
  },
  {
    id: "obsidian-wave",
    title: "Obsidian Wave",
    imageUrl: "https://picsum.photos/seed/ctp-obsidian/900/700",
    prompt:
      "giant wave made of polished black obsidian mid-crash, sharp glass facets catching golden hour light, hyperreal materials, dynamic motion, studio-quality render --ar 16:9",
    negativePrompt: "water splash, foam, cartoon, low detail",
    model: "Flux.1 Pro",
    tags: ["surreal", "abstract", "cinematic", "minimal"],
    aspectRatio: "16:9",
  },
  {
    id: "tea-ceremony-bot",
    title: "Tea Ceremony Android",
    imageUrl: "https://picsum.photos/seed/ctp-tea/750/950",
    prompt:
      "elegant humanoid android performing a traditional tea ceremony, porcelain white chassis with gold inlays, tatami room, soft window light, quiet reverence, photoreal --ar 3:4 --style raw",
    model: "Flux.1 Dev",
    tags: ["sci-fi", "japan", "character", "photoreal"],
    aspectRatio: "3:4",
  },
  {
    id: "mushroom-metropolis",
    title: "Mushroom Metropolis",
    imageUrl: "https://picsum.photos/seed/ctp-mushroom/800/800",
    prompt:
      "miniature city built atop giant glowing mushrooms in a twilight forest, tiny windows lit warm, mossy pathways, storybook fantasy, isometric-ish wide view --ar 1:1 --stylize 300",
    model: "Midjourney v6.1",
    tags: ["fantasy", "whimsical", "nature", "architecture"],
    aspectRatio: "1:1",
  },
  {
    id: "solar-punk-bridge",
    title: "Solarpunk Bridge",
    imageUrl: "https://picsum.photos/seed/ctp-solar/900/650",
    prompt:
      "lush solarpunk city bridge covered in vertical gardens and solar sails, clean white architecture, people cycling, bright optimistic daylight, utopian future --ar 16:9 --v 6",
    negativePrompt: "pollution, dystopia, neon, night, ruins",
    model: "Midjourney v6",
    tags: ["urban", "nature", "futuristic", "architecture"],
    aspectRatio: "16:9",
  },
  {
    id: "ink-dragon",
    title: "Ink Wash Dragon",
    imageUrl: "https://picsum.photos/seed/ctp-dragon/700/1000",
    prompt:
      "eastern dragon emerging from black ink wash on rice paper, traditional sumi-e style with modern digital refinement, negative space, elegant brush strokes, misty mountains --ar 2:3",
    model: "Flux.1 Dev",
    tags: ["fantasy", "illustration", "japan", "minimal"],
    aspectRatio: "2:3",
  },
  {
    id: "midnight-diner",
    title: "Midnight Diner",
    imageUrl: "https://picsum.photos/seed/ctp-diner/850/650",
    prompt:
      "lonely American diner at 2am on an empty highway, neon OPEN sign buzzing, warm interior vs cold blue night, Edward Hopper meets cinema still, rain-slick parking lot --ar 16:9 --style raw",
    model: "Midjourney v6.1",
    tags: ["urban", "night", "cinematic", "photoreal"],
    aspectRatio: "16:9",
  },
  {
    id: "crystal-stag",
    title: "Crystal Stag",
    imageUrl: "https://picsum.photos/seed/ctp-stag/750/950",
    prompt:
      "majestic stag with antlers of translucent crystal standing in a foggy pine forest, soft volumetric light, frost on fur, magical realism, National Geographic meets fantasy --ar 3:4",
    negativePrompt: "cartoon, cute, anthropomorphic, text",
    model: "Flux.1 Pro",
    tags: ["nature", "fantasy", "animals", "photoreal"],
    aspectRatio: "3:4",
  },
  {
    id: "retro-console",
    title: "Retro Console Still Life",
    imageUrl: "https://picsum.photos/seed/ctp-console/800/800",
    prompt:
      "product still life of a pastel translucent retro game console with controller, soft studio lighting, subtle reflections, 90s nostalgia, clean backdrop, commercial photography --ar 1:1",
    model: "Flux.1 Pro",
    tags: ["product", "retro", "photoreal", "minimal"],
    aspectRatio: "1:1",
  },
  {
    id: "underwater-ruins",
    title: "Underwater Ruins",
    imageUrl: "https://picsum.photos/seed/ctp-ruins/900/700",
    prompt:
      "ancient marble temple ruins deep underwater, shafts of light penetrating blue water, schools of tropical fish, coral overtaking columns, serene and mysterious --ar 16:9 --v 6.1",
    model: "Midjourney v6.1",
    tags: ["fantasy", "ocean", "architecture", "cinematic"],
    aspectRatio: "16:9",
  },
  {
    id: "fashion-avatar",
    title: "Iridescent Fashion Avatar",
    imageUrl: "https://picsum.photos/seed/ctp-fashion/700/1000",
    prompt:
      "high fashion editorial portrait, model wearing iridescent holographic couture, shaved head, dramatic studio lighting, Vogue cover energy, ultra sharp detail --ar 2:3 --stylize 180",
    negativePrompt: "casual clothes, selfie, low quality, watermark",
    model: "Midjourney v6",
    tags: ["portrait", "fashion", "character", "futuristic"],
    aspectRatio: "2:3",
  },
  {
    id: "lava-garden",
    title: "Lava Garden",
    imageUrl: "https://picsum.photos/seed/ctp-lava/800/900",
    prompt:
      "zen rock garden where the sand is flowing lava and the stones are cooled basalt, cherry trees somehow thriving, surreal juxtaposition, cinematic dusk light --ar 4:5",
    model: "Flux.1 Dev",
    tags: ["surreal", "nature", "japan", "fantasy"],
    aspectRatio: "4:5",
  },
  {
    id: "orbital-greenhouse",
    title: "Orbital Greenhouse",
    imageUrl: "https://picsum.photos/seed/ctp-orbit/900/600",
    prompt:
      "cylindrical space station greenhouse filled with lush greenery, Earth visible through panoramic windows, soft artificial daylight, hard sci-fi realism, wide establishing shot --ar 3:2 --style raw",
    negativePrompt: "aliens, cartoon, oversaturated neon",
    model: "Flux.1 Pro",
    tags: ["sci-fi", "space", "architecture", "photoreal"],
    aspectRatio: "3:2",
  },
  {
    id: "shadow-puppet",
    title: "Shadow Puppet Theater",
    imageUrl: "https://picsum.photos/seed/ctp-shadow/800/800",
    prompt:
      "traditional shadow puppet theater silhouettes of mythical beasts on a glowing silk screen, warm lantern light, intricate cutouts, atmospheric smoke, cinematic close-up --ar 1:1",
    model: "Midjourney v6.1",
    tags: ["illustration", "fantasy", "cinematic", "whimsical"],
    aspectRatio: "1:1",
  },
];

export const allTags: string[] = Array.from(
  new Set(prompts.flatMap((p) => p.tags))
).sort();

export function getPromptById(id: string): PromptItem | undefined {
  return prompts.find((p) => p.id === id);
}
