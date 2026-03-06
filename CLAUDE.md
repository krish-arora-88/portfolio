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
public/assets/        — Images, logos, icons
```

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run typecheck` — Generate routes + run tsc
- `npm run start` — Serve production build

## Key Patterns

- **ImageGallery ↔ SkillsHoneycomb**: Gallery emits skill names via `onProjectChange`; honeycomb highlights matching hexagons. Skill names must match exactly between the two components.
- **Three.js components**: Each car (F90, E39, R34) is a self-contained Three.js canvas. Do not modify geometry/material code without understanding the 3D model structure.
- **SSR enabled**: `react-router.config.ts` has `ssr: true`. Components must be SSR-safe.
- **Path alias**: `~/*` maps to `./app/*` (tsconfig paths).
- **No test suite**: No tests configured. Rely on `typecheck` and visual verification.

## Style Guide

- Functional components with TypeScript interfaces for props
- CSS files per component (not CSS modules, not styled-components)
- Font Awesome icons loaded via CDN in welcome.tsx
- react-icons for brand icons (e.g., SiVercel)

## Deployment

Deployed to Vercel. Use `/deploy` skill or `vercel` CLI.
