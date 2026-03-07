# Portfolio — Krish Arora

Personal portfolio site built with React Router v7 (Remix-based), TypeScript, TailwindCSS v4, Three.js, and Vite. Deployed on Vercel.

## Project Structure

```
app/
  root.tsx            — Layout, loading screen, error boundary
  routes.ts           — Single route: routes/home.tsx
  routes/home.tsx     — Renders Welcome component
  welcome/
    welcome.tsx       — Main page: nav, 3D cars, about section, social links
    F90.tsx, E39.tsx, R34.tsx — Three.js 3D car models (BMW M5 F90, BMW M5 E39, Nissan GTR R34)
    ImageGallery.tsx  — Project carousel with auto-scroll, links to deployed projects
    SkillsHoneycomb.tsx — Hexagonal skill grid, highlights skills for active project
    *.css             — Component-level stylesheets
public/assets/        — Images, logos, icons (including local SVGs for icons removed from CDNs)
```

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run typecheck` — Generate routes + run tsc
- `npm run start` — Serve production build

## Key Patterns

- **ImageGallery ↔ SkillsHoneycomb**: Gallery emits skill names via `onProjectChange`; honeycomb highlights matching hexagons. Skill names must match exactly between the two components.
- **Honeycomb layout**: Uses `rowSizes = [4, 3, 4, 3, 4, 2]` with alternating row counts. Centering provides natural honeycomb offset for rows differing by 1 item. The 2-item last row requires a `translateX` correction (desktop: -44px, mobile: -35px) because centering over-offsets it by a full hex width instead of half.
- **Both ImageGallery and SkillsHoneycomb are `position: fixed`** on the right side of the viewport. Gallery uses `top`, honeycomb uses `bottom`. On short screens they can overlap — adjust `bottom` values if this recurs.
- **Three.js components**: Each car (F90, E39, R34) is a self-contained Three.js canvas. Do not modify geometry/material code without understanding the 3D model structure.
- **SSR enabled**: `react-router.config.ts` has `ssr: true`. Components must be SSR-safe.
- **Path alias**: `~/*` maps to `./app/*` (tsconfig paths).
- **No test suite**: No tests configured. Rely on `typecheck` and visual verification.

## Style Guide

- Functional components with TypeScript interfaces for props
- CSS files per component (not CSS modules, not styled-components)
- Font Awesome icons loaded via CDN in welcome.tsx
- react-icons for brand icons (e.g., SiVercel)
- Skill icons: prefer `cdn.simpleicons.org` for brand icons; fall back to local SVGs in `public/assets/` when CDN icons are unavailable (e.g., OpenAI was removed from Simple Icons)

## Deployment

Deployed to Vercel. Use `/deploy` skill or `vercel` CLI.
