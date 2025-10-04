# AI Assistant Instructions for whoami

## Project Overview
This is a Next.js 15.x application using the App Router pattern and TypeScript. The project serves as a portfolio website with modern web development practices.

### Key Technologies
- Next.js 15.x with App Router
- TypeScript
- TailwindCSS
- Framer Motion for animations
- ESLint for code quality
- Turbopack for builds

## Project Structure
- `src/app/`: Core application directory (Next.js 13+ structure)
  - `layout.tsx`: Root layout with Geist font setup and metadata
  - `page.tsx`: Main landing page component
  - `globals.css`: Global styles and Tailwind imports

## Development Workflow

### Local Development
```bash
# Start development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

### Key Patterns

1. **Theme System**
   - Uses CSS variables for theming in `globals.css`
   - Supports light/dark modes via `prefers-color-scheme`
   - Example: `var(--background)`, `var(--foreground)`

2. **Typography**
   - Uses Geist and Geist Mono fonts via `next/font/google`
   - Font variables: `--font-geist-sans`, `--font-geist-mono`

3. **Responsive Design**
   - Mobile-first approach using Tailwind breakpoints
   - Example from `page.tsx`: 
     ```tsx
     className="gap-16 sm:p-20"
     ```

4. **Image Optimization**
   - Uses Next.js Image component with proper attributes
   - Example pattern:
     ```tsx
     <Image
       src="/next.svg"
       alt="Next.js logo"
       width={180}
       height={38}
       priority
     />
     ```

## Build & Deployment
- Uses Turbopack for faster builds (`--turbopack` flag)
- Ready for Vercel deployment
- TypeScript strict mode is disabled (see `tsconfig.json`)

## Common Tasks
1. Adding new pages: Create new file in `src/app` directory
2. Styling: Add Tailwind classes or extend globals.css
3. Images: Place in `public/` directory and use `next/image`

## Configuration Files
- `next.config.ts`: Next.js configuration (currently minimal)
- `eslint.config.mjs`: ESLint setup with Next.js recommended rules
- `postcss.config.mjs`: PostCSS config for Tailwind
- `tsconfig.json`: TypeScript configuration