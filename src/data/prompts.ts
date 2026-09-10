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
  trending: true,
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
  trending: true,
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
  trending: true,
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
  trending: true,
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
  trending: true,
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
  trending: true,
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
  trending: true,
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
  trending: true,
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
  trending: true,
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
    trending: true,
  },
{
    id: "nebula-cathedral",
    title: "Nebula Cathedral",
    imageUrl: "/prompts/archive-nebula-cathedral.png",
    prompt:
      "vast gothic cathedral exterior with twin spires and rose window standing under a violet purple nebula sky, stained glass glowing, volumetric cosmic light, ultra detailed stone carvings, cinematic low-angle establishing shot, ethereal atmosphere --ar 4:5 --stylize 250 --v 6.1",
    negativePrompt: "blurry, lowres, watermark, text, people, crowded",
    model: "Midjourney v6.1",
    tags: ["fantasy", "architecture", "space", "cinematic"],
    aspectRatio: "4:5",
  },
  {
    id: "chrome-koi",
    title: "Chrome Koi Pond",
    imageUrl: "/prompts/archive-chrome-koi.png",
    prompt:
      "liquid chrome silver koi with reflective mercury-metal body and translucent electric-blue fins swimming through a tranquil zen pond, soft lotus blooms, shallow depth of field, photorealistic, 85mm lens --ar 16:9 --style raw",
    negativePrompt: "cartoon, illustration, oversaturated, noise",
    model: "Flux.1 Pro",
    tags: ["nature", "surreal", "photoreal", "japan"],
    aspectRatio: "16:9",
  },
  {
    id: "desert-monolith",
    title: "Desert Monolith",
    imageUrl: "/prompts/archive-desert-monolith.png",
    prompt:
      "towering black monolith in endless ochre dunes, harsh noon sun, long hard shadows, minimal composition, 70mm, film grain, anamorphic flares, mysterious atmosphere --ar 3:4 --v 6",
    model: "Midjourney v6",
    tags: ["landscape", "minimal", "cinematic", "surreal"],
    aspectRatio: "3:4",
  },
  {
    id: "neon-alley",
    title: "Rainy Neon Alley",
    imageUrl: "/prompts/archive-neon-alley.png",
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
    imageUrl: "/prompts/archive-paper-crane-forest.png",
    prompt:
      "thousands of origami paper cranes suspended on strings in a misty bamboo forest, soft morning light, pastel pinks and ivory folded paper birds clearly filling the canopy, dreamy bokeh, delicate paper texture, whimsical fantasy --ar 4:5",
    model: "Flux.1 Dev",
    tags: ["fantasy", "nature", "whimsical", "soft"],
    aspectRatio: "4:5",
  },
  {
    id: "arctic-glasshouse",
    title: "Arctic Glasshouse",
    imageUrl: "/prompts/archive-arctic-glasshouse.png",
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
    imageUrl: "/prompts/archive-biolum-tide.png",
    prompt:
      "bioluminescent waves crashing on a black sand beach, glowing plankton trails, starry sky, long exposure look, deep blues and electric cyan, ultra realistic --ar 16:9 --style raw",
    model: "Flux.1 Pro",
    tags: ["nature", "night", "ocean", "photoreal"],
    aspectRatio: "16:9",
  },
  {
    id: "mech-samurai",
    title: "Mech Samurai Portrait",
    imageUrl: "/prompts/archive-mech-samurai.png",
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
    imageUrl: "/prompts/archive-library-of-clouds.png",
    prompt:
      "infinite library carved into soft cumulus clouds, floating spiral staircases, leather-bound books, shafts of sunlight, baroque architecture meets surrealism, soft pastel palette --ar 4:5",
    model: "Midjourney v6.1",
    tags: ["surreal", "architecture", "fantasy", "soft"],
    aspectRatio: "4:5",
  },
  {
    id: "obsidian-wave",
    title: "Obsidian Wave",
    imageUrl: "/prompts/archive-obsidian-wave.png",
    prompt:
      "giant wave suggested as polished black obsidian glass facets mid-crash, sharp geometric volcanic glass plates catching golden hour rim light on textured gold field, hyperreal materials, dynamic angular motion, studio-quality surreal minimal render --ar 16:9",
    negativePrompt: "water splash, foam, cartoon, low detail",
    model: "Flux.1 Pro",
    tags: ["surreal", "abstract", "cinematic", "minimal"],
    aspectRatio: "16:9",
  },
  {
    id: "tea-ceremony-bot",
    title: "Tea Ceremony Android",
    imageUrl: "/prompts/archive-tea-ceremony-bot.png",
    prompt:
      "elegant humanoid android performing a traditional tea ceremony, porcelain white chassis with gold inlays, tatami room, soft window light, quiet reverence, photoreal --ar 3:4 --style raw",
    model: "Flux.1 Dev",
    tags: ["sci-fi", "japan", "character", "photoreal"],
    aspectRatio: "3:4",
  },
  {
    id: "mushroom-metropolis",
    title: "Mushroom Metropolis",
    imageUrl: "/prompts/archive-mushroom-metropolis.png",
    prompt:
      "miniature city built atop giant glowing mushrooms in a twilight forest, tiny windows lit warm, mossy pathways, storybook fantasy, isometric-ish wide view --ar 1:1 --stylize 300",
    model: "Midjourney v6.1",
    tags: ["fantasy", "whimsical", "nature", "architecture"],
    aspectRatio: "1:1",
  },
  {
    id: "solar-punk-bridge",
    title: "Solarpunk Bridge",
    imageUrl: "/prompts/archive-solar-punk-bridge.png",
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
    imageUrl: "/prompts/archive-ink-dragon.png",
    prompt:
      "eastern dragon emerging from black ink wash on rice paper, traditional sumi-e style with modern digital refinement, negative space, elegant brush strokes, misty mountains --ar 2:3",
    model: "Flux.1 Dev",
    tags: ["fantasy", "illustration", "japan", "minimal"],
    aspectRatio: "2:3",
  },
  {
    id: "midnight-diner",
    title: "Midnight Diner",
    imageUrl: "/prompts/archive-midnight-diner.png",
    prompt:
      "lonely American diner at 2am on an empty highway, neon OPEN sign buzzing, warm interior vs cold blue night, Edward Hopper meets cinema still, rain-slick parking lot --ar 16:9 --style raw",
    model: "Midjourney v6.1",
    tags: ["urban", "night", "cinematic", "photoreal"],
    aspectRatio: "16:9",
  },
  {
    id: "crystal-stag",
    title: "Crystal Stag",
    imageUrl: "/prompts/archive-crystal-stag.png",
    prompt:
      "majestic stag portrait with antlers of translucent crystal quartz refracting ice-blue and emerald light, soft forest bokeh, frost on fur, magical realism, National Geographic meets fantasy --ar 3:4",
    negativePrompt: "cartoon, cute, anthropomorphic, text",
    model: "Flux.1 Pro",
    tags: ["nature", "fantasy", "animals", "photoreal"],
    aspectRatio: "3:4",
  },
  {
    id: "retro-console",
    title: "Retro Console Still Life",
    imageUrl: "/prompts/archive-retro-console.png",
    prompt:
      "product still life of a pastel translucent retro game console with controller, soft studio lighting, subtle reflections, 90s nostalgia, clean backdrop, commercial photography --ar 1:1",
    model: "Flux.1 Pro",
    tags: ["product", "retro", "photoreal", "minimal"],
    aspectRatio: "1:1",
  },
  {
    id: "underwater-ruins",
    title: "Underwater Ruins",
    imageUrl: "/prompts/archive-underwater-ruins.png",
    prompt:
      "ancient marble temple ruins deep underwater, shafts of light penetrating blue water, schools of tropical fish, coral overtaking columns, serene and mysterious --ar 16:9 --v 6.1",
    model: "Midjourney v6.1",
    tags: ["fantasy", "ocean", "architecture", "cinematic"],
    aspectRatio: "16:9",
  },
  {
    id: "fashion-avatar",
    title: "Iridescent Fashion Avatar",
    imageUrl: "/prompts/archive-fashion-avatar.png",
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
    imageUrl: "/prompts/archive-lava-garden.png",
    prompt:
      "zen rock garden where the sand is flowing lava and the stones are cooled basalt, cherry trees somehow thriving, surreal juxtaposition, cinematic dusk light --ar 4:5",
    model: "Flux.1 Dev",
    tags: ["surreal", "nature", "japan", "fantasy"],
    aspectRatio: "4:5",
  },
  {
    id: "orbital-greenhouse",
    title: "Orbital Greenhouse",
    imageUrl: "/prompts/archive-orbital-greenhouse.png",
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
    imageUrl: "/prompts/archive-shadow-puppet.png",
    prompt:
      "traditional shadow puppet theater silhouettes of mythical beasts on a glowing silk screen, warm lantern light, intricate cutouts, atmospheric smoke, cinematic close-up --ar 1:1",
    model: "Midjourney v6.1",
    tags: ["illustration", "fantasy", "cinematic", "whimsical"],
    aspectRatio: "1:1",
  },
];

/** Pack 001 and future trend packs — featured on home. */
export const trendingPrompts: PromptItem[] = prompts.filter((p) => p.trending);

export const allTags: string[] = Array.from(
  new Set(prompts.flatMap((p) => p.tags))
).sort();

export function getPromptById(id: string): PromptItem | undefined {
  return prompts.find((p) => p.id === id);
}
