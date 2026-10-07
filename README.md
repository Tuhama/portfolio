# Tuhama Qlyshi — Portfolio

Personal site for Tuhama Qlyshi, a senior frontend engineer. Live at [tuhama.vercel.app](https://tuhama.vercel.app).

The site covers experience, skills, featured projects, and contact, in English, Arabic, and German.

## Stack

- [Next.js](https://nextjs.org) App Router and React
- [next-intl](https://next-intl.dev) for English, Arabic, and German
- Tailwind CSS and [next-themes](https://github.com/pacocoursey/next-themes)
- Vitest and Testing Library
- Deployed on Vercel through GitHub Actions

## Getting started

Requires Node.js 24 and pnpm 10.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Arabic is at `/ar` and German is at `/de`. English is served at `/`.

## Scripts

| Command | What it does |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run ESLint |
| `pnpm test:unit` | Run unit tests once |
| `pnpm test:watch` | Run unit tests in watch mode |
| `pnpm test:coverage` | Run unit tests with coverage |

## Site URL

Canonical links default to `https://tuhama.vercel.app`. Set `NEXT_PUBLIC_SITE_URL` to override that (for example in a preview). On Vercel production, `VERCEL_PROJECT_PRODUCTION_URL` is used when the public URL is unset.
