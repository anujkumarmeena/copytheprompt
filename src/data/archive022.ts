import type { PromptItem } from "@/lib/types";

/** Original archive-022 gallery restore — full-collection stock (append-only). */
export const archive022Prompts: PromptItem[] = [
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
