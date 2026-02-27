# whoami — Personal Portfolio

A modern, fast, and minimal personal portfolio built with Next.js (App Router), TypeScript and TailwindCSS. This repository is a small, focused site showcasing web development work, built with modern tooling and best practices.

- Next.js 15.x (App Router)
- TypeScript
- TailwindCSS
- Framer Motion (animations)
- Turbopack for fast local builds
- ESLint for linting and code quality

---

## Quick demo

Open http://localhost:3000 after starting the dev server.

---

## Getting started

Requirements
- Node 18+ (recommended)
- npm / pnpm / yarn

Install dependencies:

```bash
npm install
# or
pnpm install
# or
yarn
```

Start development (Turbopack enabled for extremely fast HMR):

```bash
npm run dev          # uses turbopack in this project
# or
pnpm dev
# or
yarn dev
```

Build for production:

```bash
npm run build
npm run start
```

Lint:

```bash
npm run lint
```

---

## Project structure

- src/
  - app/              — Next.js App Router pages and layouts (root layout at `layout.tsx`)
    - page.tsx        — main landing page
    - globals.css     — global styles & Tailwind base
  - components/       — UI components (buttons, header, footer, etc.)
  - lib/              — small utilities/helpers
- public/             — static assets (images, icons)
- next.config.ts
- tsconfig.json
- postcss.config.mjs
- eslint.config.mjs

---

## Key patterns & conventions

Theme and styling
- Uses CSS variables in `globals.css` to drive theming (e.g. `--background`, `--foreground`).
- Supports color-scheme via `prefers-color-scheme` with light/dark defaults.
- TailwindCSS is used as the utility-first styling approach.

Typography
- Geist fonts are loaded via `next/font/google` and exposed as CSS variables:
  - `--font-geist-sans`
  - `--font-geist-mono`

Responsive-first
- Mobile-first Tailwind classes and layout breakpoints.
- Example in components/pages:
  ```tsx
  <div className="gap-16 sm:p-20">
    ...
  </div>
  ```

Images
- Use Next.js `Image` component for optimized serving:
  ```tsx
  import Image from "next/image"

  <Image
    src="/avatar.png"
    alt="Avatar"
    width={160}
    height={160}
    priority
  />
  ```

Routing / pages
- Add routes by creating files under `src/app`. Example `src/app/blog/page.tsx` creates `/blog`.

---

## Common tasks

Add a new page
1. Create `src/app/<route>/page.tsx`.
2. Export a default React component.

Example:
```tsx
// src/app/about/page.tsx
export default function AboutPage() {
  return <main className="p-8">Hello — this is the About page.</main>;
}
```

Add a component
- Create a file under `src/components/` and import it where needed.

Add images
- Put assets in `public/` and reference them from `next/image` or via `/path`.

Environment variables
- Add `.env.local` for local secrets. Use `process.env.MY_VAR` in server code.
- Do not commit `.env.local` to Git.

---

## Development tips

- Use the dev server for HMR and instant feedback.
- Use the `priority` prop on Image for above-the-fold images to improve Largest Contentful Paint.
- Prefer semantic HTML and accessible ARIA attributes for improved accessibility and SEO.
- Keep TypeScript types tight where it helps maintainability, but note strict mode is currently disabled in this project (see `tsconfig.json`).

---

## Troubleshooting

- My dev server fails to start: ensure Node >= 18 and deps installed. Remove node_modules and reinstall if necessary.
- Type errors on CI: run `npm run build` locally to reproduce and fix TypeScript issues.
- Tailwind classes not applied: check `globals.css` includes `@tailwind base; @tailwind components; @tailwind utilities;` and that `tailwind.config` includes the `src` paths.

---

## Author / Contact

Repository: [savlajubin/whoami](https://github.com/savlajubin/whoami)

If you'd like to reach out, open an issue or PR on the repo.
