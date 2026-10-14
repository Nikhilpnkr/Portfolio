# DevDen Labs

Portfolio and freelance studio site of Nikhil Kumar. Live at https://devdenlabs.vercel.app.

Built with Next.js 16 (App Router, Cache Components), React 19, TypeScript, Tailwind CSS v4 and MDX.
Every route is statically prerendered.

## Develop

```bash
pnpm install
pnpm dev
```

Copy `.env.example` to `.env.local` to set the WhatsApp number, contact email, freelance URL and GA4 ID.

## Checks

```bash
pnpm typecheck
pnpm lint
pnpm build
```

CI runs all three on every push.

## Content

- `src/content/profile.ts`: name, pitch, contact details and skills
- `src/content/projects.ts`: project cards and case study metadata
- `src/content/case-studies/*.mdx`: case study bodies
- `src/content/packages.ts`: service packages (must match the freelance landing page)
