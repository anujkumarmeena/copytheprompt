# CopyThePrompt

Gallery of AI-generated images with one-click copyable prompts for Midjourney, Flux, and similar tools.

**Brand:** CopyThePrompt
**Domain (planned):** [copytheprompt.com](https://copytheprompt.com)

This is a website-only product. There are **no image generation APIs**.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Features

- Premium dark-mode UI with masonry-style gallery
- Click an image to open a detail modal with full prompt + optional negative prompt
- One-click **Copy prompt** with toast confirmation
- Tag/style filter chips
- About + how-it-works sections
- Favorites stub (localStorage only; no auth)
- 22 seeded sample items (`src/data/prompts.ts`)

## Local development

```bash
cd copytheprompt
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

The production build must exit successfully before deploy.

## Project structure

```
src/
  app/              # App Router pages (/, /about)
  components/       # Gallery, modal, copy button, filters, etc.
  data/prompts.ts   # Typed seed gallery data
  lib/              # Types + localStorage favorites helper
```

## Routes

| Route    | Description                          |
|----------|--------------------------------------|
| `/`      | Home hero, how-it-works, gallery     |
| `/about` | Product blurb and positioning        |

## Deploy to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import the project in [Vercel](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected). Build command: `npm run build`. Output: default `.next`.
4. Deploy. You will get a `*.vercel.app` URL.

### Custom domain: copytheprompt.com

In the Vercel project go to **Settings → Domains** and add `copytheprompt.com` plus `www.copytheprompt.com`.

At your DNS provider, point the domain as Vercel instructs (typical setup):

| Type  | Name | Value                         | Notes                          |
|-------|------|-------------------------------|--------------------------------|
| A     | `@`  | `76.76.21.21`                 | Apex to Vercel                 |
| CNAME | `www`| `cname.vercel-dns.com`        | www subdomain                  |

Exact target values are shown in the Vercel Domains UI — always prefer those if they differ.

After DNS propagates, Vercel issues HTTPS certificates automatically.

## Notes / caveats

- Placeholder images use `picsum.photos` with unique seeds (not real Midjourney outputs).
- Favorites are browser-local only and not synced across devices.
- No accounts, payments, or generation endpoints in v1.
