# AGENTS.md

## Project

Personal portfolio CV site for Simón Rodil. Bilingual (EN/ES), deployed to GitHub Pages.

## Stack

React 19, Vite 8, Tailwind CSS v4, Framer Motion, OGL (WebGL). ESLint for linting only (no test suite, no typecheck).

## Branching / Deploy

- **`v2`** is the active development branch. Pushing to `v2` triggers GitHub Actions to build and deploy to `main`.
- `main` is the deploy target — do not edit directly.
- `v1` is archived legacy.

## Commands

```bash
npm install        # install deps (needs Node, npm)
npm run dev        # dev server (Vite --host, binds 0.0.0.0)
npm run build      # production build to dist/
npm run preview    # preview built site
npm run lint       # ESLint (JS/JSX files, ignores dist/)
npm run deploy     # gh-pages manual deploy (rarely used)
```

No test command. No typecheck command.

## Content Editing

All resume/CV content lives in `src/data/resume.en.js` and `src/data/resume.es.js`. PDFs in `public/resume-en.pdf` and `public/resume-es.pdf`.

## Architecture Notes

- `src/App.jsx` is the single-page app entrypoint. Layout: Header → Hero → Sidebar + main content grid → Footer.
- Language switching via `src/context/LanguageContext.jsx` (React context).
- Background effects: `HeroBackground/` (OGL universe) + `SideRays` (desktop). Mobile uses a static radial gradient.
- Custom Vite plugin in `vite.config.js` generates a circular profile image (`dist/profile.png`) from `public/avatar_v2.jpg` using `sharp` at build time and as a dev-server middleware.
- `public/` contains static assets (icons, project images, PDFs, SEO files).

## Conventions

- Components in `src/components/`, hooks in `src/hooks/`.
- Named exports (not default) for components, except `App` and `SideRays`.
- Tailwind CSS v4 (no `tailwind.config.js` — uses `@tailwindcss/vite` plugin).
- No TypeScript. All files are `.js` / `.jsx`.
