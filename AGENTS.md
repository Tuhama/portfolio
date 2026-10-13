# Portfolio

Personal site for Tuhama Qlyshi. One page per locale: English at `/`, Arabic at `/ar`, German at `/de`. Sections are `#experience`, `#skills`, `#projects`, and `#contact`.

## Content

- User-facing copy lives in `messages/en.json`, `messages/ar.json`, and `messages/de.json`. Add the same keys to all three. `en.json` is the source; do not leave a locale missing a key.
- Do not hardcode names, job titles, project blurbs, or nav labels in components.
- Identity and external URLs (`name`, email, GitHub, LinkedIn, CV) live in `src/lib/site.ts`.
- Which projects, roles, and skill groups exist, plus their icons and images, lives in `src/lib/catalog.ts`. A new message key under `Projects.items`, `Experience.items`, or `Skills.groups` must be added to that catalog. The `complete()` helper fails the typecheck when a key is missing.
- Do not invent biography, employers, or projects. Edit only copy the user supplied.

## i18n and layout

- In-app links and navigation use `Link`, `useRouter`, `usePathname`, and `redirect` from `@/i18n/routing`. `next/link` and `next/navigation` are only for APIs that have no next-intl equivalent, such as `notFound`.
- English has no locale prefix (`localePrefix: "as-needed"`). Do not force `/en`.
- Arabic sets `dir="rtl"` and loads Noto Sans Arabic. New layout uses logical Tailwind utilities (`ms`, `me`, `ps`, `pe`, `start`, `end`, `text-start`) so it mirrors in Arabic.
- Server Components are the default. Add `"use client"` only for state, effects, or browser APIs.

## Code

- Import app code with the `@/` alias (`@/components/...`, `@/lib/...`).
- Shared primitives are in `src/components/ui`. Merge class names with `cn` from `@/lib/utils`.
- Page metadata goes through `pageMetadata` in `@/lib/metadata` and the `Metadata` message namespace.
- New scripts must work with the Content-Security-Policy nonce set in `src/proxy.ts`.

## Checks

- After a behavior change, run `pnpm test:unit`. Component tests render with `renderWithIntl` from `@/test/render`.
- Message key parity is already tested. A catalog or locale change should keep `pnpm test:unit` passing.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
