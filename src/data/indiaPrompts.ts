import type { PromptItem } from "@/lib/types";
import { withHouseModel } from "./houseModel";

const indiaPromptsRaw: PromptItem[] = [
  {
    id: "eighty-album-india",
    title: "80s Family Album",
    imageUrl: "/prompts/pack01-vaporwave-atrium.png",
    prompt:
      "Turn this photo into a late-1980s Indian family album portrait. Kodak Gold film grain, slightly faded warm colours, soft flash, dated studio backdrop with painted curtains, big permed hair or side-part with oil sheen, printed polyester shirt or silk saree with gold border, thin gold chain, modest smile, pre-smartphone era, photoreal analog photograph, no modern phones, no LED lights.",
    negativePrompt: "modern smartphone, airpods, LED panel, HDR, plastic skin, watermark, text",
    model: "ChatGPT Image",
    tags: ["india", "viral", "retro", "portrait", "80s"],
    aspectRatio: "3:4",
    trending: true,
  },
  {
    id: "ganesh-visarjan",
    title: "Ganesh Visarjan Night",
    imageUrl: "/prompts/archive-neon-alley.png",
    prompt:
      "Cinematic night photograph of Ganesh Chaturthi visarjan in Mumbai, towering eco-friendly Ganpati idol covered in marigold and red hibiscus, devotees dancing with dhol-tasha, saffron flags, rain-slick streets reflecting fairy lights, Lalbaug energy, photoreal, 35mm, warm gold and vermillion grade --ar 16:9 --stylize 180 --v 6.1",
    negativePrompt: "daylight, empty street, western carnival, cartoon, watermark",
    model: "Midjourney v6.1",
    tags: ["india", "viral", "festival", "mumbai", "cinematic"],
    aspectRatio: "16:9",
    trending: true,
  },
  {
    id: "banarasi-bride",
    title: "Banarasi Bridal Edit",
    imageUrl: "/prompts/pack01-velvet-noir-muse.png",
    prompt:
      "Editorial bridal portrait of an Indian bride in a crimson Banarasi silk lehenga with heavy zari and uncut polki jewellery, maang tikka, nath, fresh mogra in hair, soft window light in a haveli courtyard, photoreal skin, Vogue India cover energy, 85mm --ar 3:4 --stylize 200 --style raw",
    negativePrompt: "white wedding gown, western veil, plastic jewellery, selfie, watermark",
    model: "Flux.1 Pro",
    tags: ["india", "fashion", "portrait", "bridal", "viral"],
    aspectRatio: "3:4",
    trending: true,
  },
  {
    id: "blue-city-jodhpur",
    title: "Jodhpur Blue Hour",
    imageUrl: "/prompts/archive-desert-monolith.png",
    prompt:
      "Golden-hour aerial of Jodhpur blue city stacked under Mehrangarh Fort, indigo-washed houses, honey light on sandstone, desert haze, photoreal travel still, National Geographic India --ar 3:4 --v 6",
    negativePrompt: "snow, neon cyberpunk, empty CGI, watermark",
    model: "Midjourney v6",
    tags: ["india", "rajasthan", "landscape", "cinematic"],
    aspectRatio: "3:4",
    trending: true,
  },
  {
    id: "pani-puri-night",
    title: "Pani Puri Stall",
    imageUrl: "/prompts/archive-midnight-diner.png",
    prompt:
      "Photoreal night street-food stall in India, brass and steel bowls of pani puri, coriander-mint water, steam, fairy lights, vendor in checked shirt, hungry crowd in bokeh, warm tungsten vs cool monsoon air, 35mm documentary --ar 16:9 --style raw",
    negativePrompt: "fine dining, empty kitchen, western hotdog stand, cartoon",
    model: "Flux.1 Pro",
    tags: ["india", "street", "food", "viral", "photoreal"],
    aspectRatio: "16:9",
    trending: true,
  },
  {
    id: "hanuman-ansh-look",
    title: "Hanuman Ansh Poster",
    imageUrl: "/prompts/archive-mech-samurai.png",
    prompt:
      "Cinematic mythological film still, young warrior in saffron and copper armour with a glowing gada silhouette behind him, storm clouds over ancient Indian temple ghats, fireflies of embers, IMAX scale, Hanuman-inspired devotion without copying any actor face --ar 3:4 --stylize 220 --v 6.1",
    negativePrompt: "comic book, cute chibi, modern gym body, watermark, celebrity likeness",
    model: "Midjourney v6.1",
    tags: ["india", "devotional", "cinematic", "character", "viral"],
    aspectRatio: "3:4",
    trending: true,
  },
  {
    id: "garba-navratri",
    title: "Navratri Garba Circle",
    imageUrl: "/prompts/pack01-hologram-idol.png",
    prompt:
      "Wide night shot of a Navratri garba circle in Gujarat, women in mirror-work chaniya choli spinning with dandiya, men in kediyu, layered fairy lights and dhol, motion blur on skirts, photoreal festival energy --ar 16:9 --stylize 160",
    negativePrompt: "club rave, EDM lasers, empty hall, cartoon",
    model: "Midjourney v6.1",
    tags: ["india", "festival", "fashion", "viral", "night"],
    aspectRatio: "16:9",
    trending: true,
  },
  {
    id: "thar-dune-drive",
    title: "Thar Dune Drive",
    imageUrl: "/prompts/archive-solar-punk-bridge.png",
    prompt:
      "Photoreal dusk on the Thar desert near Jaisalmer, matte-black SUV cresting a sand dune, long shadow, wind-carved ripples, saffron sky, responsible off-road mood not reckless racing, cinematic 70mm --ar 16:9",
    negativePrompt: "crash, stunt jump, crowded highway, cartoon, logo brands",
    model: "Flux.1 Pro",
    tags: ["india", "rajasthan", "cinematic", "viral", "landscape"],
    aspectRatio: "16:9",
    trending: true,
  },
  {
    id: "india-jersey-night",
    title: "Stadium Blue Night",
    imageUrl: "/prompts/pack01-starlit-courier.png",
    prompt:
      "Cinematic cricket night in India, packed stadium in blue, floodlights cutting monsoon haze, close-up of a batter in India blue kit mid-shot, crowd of tricolour faces, sweat and grit, sports documentary still --ar 16:9 --style raw",
    negativePrompt: "empty stands, soccer, american football, cartoon, watermark",
    model: "Flux.1 Pro",
    tags: ["india", "cricket", "cinematic", "viral", "night"],
    aspectRatio: "16:9",
    trending: true,
  },
  {
    id: "chhath-ghat-sunrise",
    title: "Chhath Ghat Sunrise",
    imageUrl: "/prompts/archive-biolum-tide.png",
    prompt:
      "Dawn at a Chhath Puja ghat, devotees standing in the river offering soop baskets of fruit to the rising sun, marigold garlands, copper vessels, golden mist, reverent documentary photograph, photoreal --ar 16:9 --v 6.1",
    negativePrompt: "party, nightclub, disrespectful pose, cartoon, watermark",
    model: "Midjourney v6.1",
    tags: ["india", "festival", "devotional", "photoreal"],
    aspectRatio: "16:9",
    trending: true,
  },
  {
    id: "safa-groom",
    title: "Safa Groom Portrait",
    imageUrl: "/prompts/pack01-porcelain-blade.png",
    prompt:
      "Regal Rajasthani groom portrait, bright bandhani safa with jeweled sarpech, sherwani in ivory and gold, kohl-lined eyes, palace jharokha behind, hard desert sidelight, photoreal editorial --ar 3:4 --stylize 180 --style raw",
    negativePrompt: "tuxedo, western tux, selfie, plastic skin, watermark",
    model: "Midjourney v6.1",
    tags: ["india", "rajasthan", "fashion", "portrait", "bridal"],
    aspectRatio: "3:4",
    trending: true,
  },
  {
    id: "local-monsoon",
    title: "Mumbai Local Monsoon",
    imageUrl: "/prompts/archive-obsidian-wave.png",
    prompt:
      "Mumbai local train doors open in peak monsoon, commuters pressed together, rain slashing across the platform, yellow-and-brown rakes, chai stall bokeh, honest documentary, 28mm photoreal --ar 3:4 --style raw",
    negativePrompt: "empty station, Tokyo subway, cartoon, luxury lounge",
    model: "Flux.1 Dev",
    tags: ["india", "mumbai", "street", "cinematic", "viral"],
    aspectRatio: "3:4",
    trending: true,
  },
];

const INDIA_HOUSE_MODEL_IDS = new Set([
  "eighty-album-india",
  "banarasi-bride",
  "garba-navratri",
]);

export const indiaPrompts: PromptItem[] = indiaPromptsRaw.map((p) =>
  INDIA_HOUSE_MODEL_IDS.has(p.id) ? withHouseModel(p) : p
);
