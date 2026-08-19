<img width="1885" height="458" alt="linkedin banner3" src="https://github.com/user-attachments/assets/8da5d793-0de5-498f-96d8-5543041147af" />



# My Portfolio

A single-page portfolio built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS**, styled to the **"Structured"** design system — a flat, editorial gallery aesthetic: putty-beige canvas, black ink accents, an oversized display serif, hairline borders, and zero gradients or shadows.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploying to Vercel

1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Next.js** (auto-detected). No environment variables are required.
4. Deploy — that's it.

Or from the CLI:

```bash
npm i -g vercel
vercel
```

## The design system

- **Palette:** Putty `#c4c3b6` (canvas), Ink `#000000`, Bone `#e7e5e4`, Chalk `#ebebeb`, Vellum `#dfdcd5` (hairlines), Graphite `#595855`, Ash `#808080`, Paper `#ffffff`. No other colors are used anywhere.
- **Type:** Playfair Display standing in for the brand's "Davinci" serif (display headings, up to a 374px hero wordmark), Inter standing in for "Helvetica Now" (body/UI, capped at 26px). Both are loaded via `next/font/google` in `app/layout.tsx`.
- **Shape language:** 9px radius on cards, 28.8px (full pill) on buttons, plus two recurring motifs — a hexagonal outline used as a pagination/nav indicator (`components/Hexagon.tsx`) and a "notched" clipped-corner card used for the flagship project and the mid-page pull-quote panel.
- **No gradients, no shadows.** Depth comes only from alternating light (Putty/Bone) and dark (Ink) full-bleed sections.
- **Imagery:** the system calls for classical-painting reproductions. Rather than hotlink third-party artwork, `components/PaintingInterlude.tsx` renders an original flat SVG landscape (ridge lines, a sun disc, cloud swashes) in the same spirit — keeping everything strictly flat and dependency-free.

## Editing content

Almost everything you'd want to change — your bio, stats, skills, projects, and focus areas — lives in **`lib/data.ts`**. Edit that one file to update copy across the whole site without touching any component markup.

- `profile` — name, role, bio paragraphs, email, social links, avatar image.
- `stats` — the numbers under the hero copy.
- `skillGroups` — the four tech-stack categories.
- `projects` — the six bento-grid project cards (title, description, tags, GitHub link).
- `focusAreas` — the three items in the dark "Areas of Focus" section.
- `pullQuote` — the quote in the mid-page notched card.

### Swapping the profile photo

The About section pulls your live GitHub avatar (`profile.avatar` in `lib/data.ts`), rendered in grayscale to stay on-palette. To use a local headshot instead:

1. Drop an image into `/public`, e.g. `/public/headshot.jpg`.
2. In `lib/data.ts`, change `avatar: "https://avatars.githubusercontent.com/..."` to `avatar: "/headshot.jpg"`.

### Wiring up the contact form

The "Send Message" form in `components/Contact.tsx` currently opens the visitor's email client with the message pre-filled (`mailto:`), so it works with zero backend. If you'd rather collect submissions server-side, swap the `handleSubmit` function for a POST request to a service like [Formspree](https://formspree.io) or [Resend](https://resend.com), or add your own [Next.js Route Handler](https://nextjs.org/docs/app/building-your-application/routing/route-handlers).

### Adding a résumé download

There's no résumé file wired up by default. To add one: drop a PDF into `/public` (e.g. `/public/resume.pdf`) and add a link/button pointing to `/resume.pdf` wherever you'd like.

## Project structure

```
app/
  layout.tsx           Root layout — Playfair Display / Inter + metadata
  page.tsx              Assembles all sections
  globals.css           Tailwind layers + pill/ghost-link/hairline utility classes
components/
  Navbar.tsx             Minimal header — logo mark + ghost text links, no chrome
  Hero.tsx                Small centered cluster + monumental serif wordmark
  About.tsx               Circular portrait vignette + museum-label bio
  PaintingInterlude.tsx   Full-bleed flat landscape + notched pull-quote card
  FocusAreas.tsx          Dark "Ink Room" — 3-column circular vignette grid
  TechStack.tsx           Flat printed-index skills layout
  Projects.tsx            Bento-grid project cards (real GitHub repos)
  Contact.tsx             Dark section — socials + minimal form
  Footer.tsx
  Hexagon.tsx             Reusable hexagonal nav-indicator SVG
  LogoMark.tsx            Circled-monogram logo mark
lib/
  data.ts                All editable content lives here
tailwind.config.ts        Structured design-system tokens
```

## Notes

- Built and production-build-tested on Next.js 16.2.12 / React 18.3.
- Uses `next/image` with `avatars.githubusercontent.com` allow-listed in `next.config.mjs` — if you swap to a different external image host, add its domain there too.
- Respects `prefers-reduced-motion` (largely moot here since the design has no animation to begin with).
