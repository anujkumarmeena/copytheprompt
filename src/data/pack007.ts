import type { PromptItem } from "@/lib/types";
import { withHouseModel } from "./houseModel";

/** Pack 007 — 80s Studio Flash / Instant Film Memories (original scenes). */
const pack007PromptsRaw: PromptItem[] = [
  {
    id: "warm-flash-studio-glam",
    title: "Warm Flash Studio Glam",
    imageUrl: "/prompts/pack07-warm-flash-studio-glam.png",
    prompt:
      "late-1980s private photo-studio glam portrait, hard warm on-camera flash bleaching cheekbones, soft red velvet backdrop, gold hoop earrings, satin blouse with shoulder pads, big soft hair volume, instant-film color cast, photoreal analog --ar 3:4 --stylize 200 --v 6.1 --style raw",
    negativePrompt:
      "blurry, lowres, watermark, text, logo, celebrity likeness, Garba, Navratri, painted scenic curtain backdrop, modern smartphone, LED panel, deformed, bad anatomy, NSFW",
    model: "Midjourney v6.1",
    tags: ["80s", "studio", "flash", "portrait", "glam", "retro"],
    aspectRatio: "3:4",
    trending: true,
  },
  {
    id: "disco-rim-night",
    title: "Disco Rim Night",
    imageUrl: "/prompts/pack07-disco-rim-night.png",
    prompt:
      "1980s disco portrait with mirrored ball rim-light rainbow speckles on hair and shoulders, deep navy club shadow, warm fill flash on face, metallic eyeshadow, sequin top, photoreal nightlife glam --ar 3:4 --stylize 210 --v 6.1",
    negativePrompt:
      "blurry, lowres, watermark, text, logo, celebrity likeness, Garba, modern club LED wall, deformed, bad anatomy, NSFW",
    model: "Midjourney v6.1",
    tags: ["80s", "disco", "flash", "portrait", "night", "retro"],
    aspectRatio: "3:4",
    trending: true,
  },
  {
    id: "living-room-album-sofa",
    title: "Living-Room Album Sofa",
    imageUrl: "/prompts/pack07-living-room-album-sofa.png",
    prompt:
      "candid living-room album photograph on a floral sofa, warm bounce flash, wood-paneled wall, CRT television soft glow in background, patterned curtains, knit cardigan over dress, cozy domestic 80s nostalgia, photoreal Kodak-era print --ar 3:4 --stylize 180 --v 6",
    negativePrompt:
      "blurry, lowres, watermark, text, logo, celebrity likeness, painted studio curtain set, Garba, modern smartphone, deformed, bad anatomy, NSFW",
    model: "Midjourney v6",
    tags: ["80s", "album", "living-room", "flash", "portrait", "retro"],
    aspectRatio: "3:4",
    trending: true,
  },
  {
    id: "polaroid-edge-muse",
    title: "Polaroid Edge Muse",
    imageUrl: "/prompts/pack07-polaroid-edge-muse.png",
    prompt:
      "square instant-film beauty crop with thick white Polaroid border mood, harsh white flash, soft overexposed highlights, pastel bedroom wall, 80s fashion earrings, photoreal instant snapshot",
    negativePrompt:
      "blurry, lowres, watermark, text, logo, celebrity likeness, brand name, deformed, bad anatomy, NSFW",
    model: "Flux.1 Pro",
    tags: ["80s", "polaroid", "flash", "portrait", "instant", "retro"],
    aspectRatio: "1:1",
    trending: true,
  },
  {
    id: "satin-flash-closeup",
    title: "Satin Flash Closeup",
    imageUrl: "/prompts/pack07-satin-flash-closeup.png",
    prompt:
      "extreme beauty close-up lit by single warm flash, satin skin sheen, soft pink lips, feathered brows catching light, pearl stud earrings, dark studio void background, 1980s magazine beauty page energy, photoreal 90mm macro --ar 3:4 --stylize 190 --v 6.1 --style raw",
    negativePrompt:
      "blurry, lowres, watermark, text, logo, celebrity likeness, heavy cake makeup doll, deformed, bad anatomy, NSFW",
    model: "Midjourney v6.1",
    tags: ["80s", "beauty", "flash", "portrait", "studio", "retro"],
    aspectRatio: "3:4",
    trending: true,
  },
  {
    id: "mirror-vanity-flash",
    title: "Mirror Vanity Flash",
    imageUrl: "/prompts/pack07-mirror-vanity-flash.png",
    prompt:
      "80s vanity mirror portrait, circular bulb frame soft glow plus on-camera flash bounce, perfume bottles and lipstick on marble tray, feathered hair, silk robe, warm tungsten mix, photoreal glamorous getting-ready still --ar 3:4 --stylize 200 --v 6.1",
    negativePrompt:
      "blurry, lowres, watermark, text, logo, celebrity likeness, brand logos on bottles, deformed, bad anatomy, NSFW",
    model: "Midjourney v6.1",
    tags: ["80s", "vanity", "flash", "portrait", "glam", "retro"],
    aspectRatio: "3:4",
    trending: true,
  },
  {
    id: "balcony-night-flash",
    title: "Balcony Night Flash",
    imageUrl: "/prompts/pack07-balcony-night-flash.png",
    prompt:
      "night balcony snapshot with hard direct flash, city lights bokeh behind, railing and potted plant, wind-tossed dark wavy hair, denim jacket over dress, instant-film greenish shadow cast, photoreal candid 80s night out --ar 2:3 --stylize 200 --v 6",
    negativePrompt:
      "blurry, lowres, watermark, text, logo, celebrity likeness, modern smartphone selfie stick, deformed, bad anatomy, NSFW",
    model: "Midjourney v6",
    tags: ["80s", "night", "flash", "portrait", "candid", "retro"],
    aspectRatio: "2:3",
    trending: true,
  },
  {
    id: "red-curtain-glam-shot",
    title: "Red Curtain Glam Shot",
    imageUrl: "/prompts/pack07-red-curtain-glam-shot.png",
    prompt:
      "glamorous 80s studio flash against deep red velvet curtains, standing three-quarter pose, gold chain and statement earrings, power-shoulder jacket, warm flash falloff, photoreal album-cover energy --ar 3:4 --stylize 220 --v 6.1 --style raw",
    negativePrompt:
      "blurry, lowres, watermark, text, logo, celebrity likeness, painted scenic backdrop, Garba, deformed, bad anatomy, NSFW",
    model: "Midjourney v6.1",
    tags: ["80s", "studio", "flash", "fashion", "portrait", "retro"],
    aspectRatio: "3:4",
    trending: true,
  },
  {
    id: "polaroid-collage-table",
    title: "Polaroid Collage Table",
    imageUrl: "/prompts/pack07-polaroid-collage-table.png",
    prompt:
      "flat-lay product still of a scattered Polaroid collage on a teak dining table, instant prints with white borders showing anonymous 80s living-room and studio memories, flashcube camera, dried flowers, warm tungsten lamp edge light, photoreal nostalgic arrangement",
    negativePrompt:
      "blurry, lowres, watermark, text, logo, brand name, celebrity likeness, readable faces, deformed, NSFW",
    model: "Flux.1 Pro",
    tags: ["80s", "polaroid", "collage", "product", "instant", "retro"],
    aspectRatio: "1:1",
    trending: true,
  },
  {
    id: "flashcube-camera-still",
    title: "Flashcube Camera Still",
    imageUrl: "/prompts/pack07-flashcube-camera-still.png",
    prompt:
      "commercial product photograph of a vintage instant camera with flashcube attachment on glossy black acrylic, hard studio flash, long sharp reflection, 80s consumer electronics nostalgia, photoreal, ultra sharp plastic and glass",
    negativePrompt:
      "blurry, lowres, watermark, text, logo, brand name, modern DSLR, smartphone, deformed, NSFW",
    model: "Flux.1 Pro",
    tags: ["80s", "product", "camera", "flash", "instant", "minimal"],
    aspectRatio: "1:1",
    trending: true,
  },
  {
    id: "crt-living-room-glow",
    title: "CRT Living-Room Glow",
    imageUrl: "/prompts/pack07-crt-living-room-glow.png",
    prompt:
      "empty 1980s living room at night, floral sofa, wood paneling, glowing CRT television casting blue-cyan light, warm table lamp, photo album open on coffee table with instant prints, nostalgic cinematic establishing shot, photoreal, no people --ar 16:9 --stylize 220 --v 6.1",
    negativePrompt:
      "blurry, lowres, watermark, text, logo, people, modern flat-screen TV, deformed, NSFW",
    model: "Midjourney v6.1",
    tags: ["80s", "living-room", "album", "cinematic", "retro", "night"],
    aspectRatio: "16:9",
    trending: true,
  },
  {
    id: "disco-ball-empty-floor",
    title: "Disco Ball Empty Floor",
    imageUrl: "/prompts/pack07-disco-ball-empty-floor.png",
    prompt:
      "empty 80s disco dance floor after closing, rotating mirrored ball casting rainbow flecks across checkered tiles, warm amber wall sconces, soft haze, cinematic wide shot, photoreal nightlife nostalgia, no people --ar 16:9 --stylize 240 --v 6.1",
    negativePrompt:
      "blurry, lowres, watermark, text, logo, crowd, modern EDM festival, deformed, NSFW",
    model: "Midjourney v6.1",
    tags: ["80s", "disco", "cinematic", "night", "retro", "surreal"],
    aspectRatio: "16:9",
    trending: true,
  },
  {
    id: "photo-album-scrapbook",
    title: "Photo Album Scrapbook",
    imageUrl: "/prompts/pack07-photo-album-scrapbook.png",
    prompt:
      "overhead still life of an open leather photo album spread, corner-mounted instant prints and faded color photos of anonymous 80s studio flash memories, dried marigold bookmark, warm desk lamp, photoreal scrapbook nostalgia",
    negativePrompt:
      "blurry, lowres, watermark, text, logo, brand name, celebrity likeness, readable faces, deformed, NSFW",
    model: "Flux.1 Pro",
    tags: ["80s", "album", "polaroid", "product", "instant", "retro"],
    aspectRatio: "1:1",
    trending: true,
  },
  {
    id: "studio-softbox-rehearsal",
    title: "Studio Softbox Rehearsal",
    imageUrl: "/prompts/pack07-studio-softbox-rehearsal.png",
    prompt:
      "behind-the-scenes 1980s photo studio empty set, softbox and umbrella lights, red velvet seamless paper roll, stool with feather boa, Polaroid prints clipped on a wire, warm tungsten practicals, cinematic wide establishing, photoreal, no people --ar 16:9 --stylize 210 --v 6",
    negativePrompt:
      "blurry, lowres, watermark, text, logo, people, modern LED soft panel wall, deformed, NSFW",
    model: "Midjourney v6",
    tags: ["80s", "studio", "flash", "cinematic", "retro", "minimal"],
    aspectRatio: "16:9",
    trending: true,
  },
];

const PACK007_HOUSE_MODEL_IDS = new Set([
  "warm-flash-studio-glam",
  "disco-rim-night",
  "living-room-album-sofa",
  "polaroid-edge-muse",
  "satin-flash-closeup",
  "mirror-vanity-flash",
  "balcony-night-flash",
  "red-curtain-glam-shot",
]);

export const pack007Prompts: PromptItem[] = pack007PromptsRaw.map((p) =>
  PACK007_HOUSE_MODEL_IDS.has(p.id) ? withHouseModel(p) : p
);
