---
name: restyle-portfolio
description: Restyle the portfolio to the professional brief visual language. Use when the user asks to restyle, redesign, or change the visual design, or when the site looks templated.
---

# Restyle portfolio

Follow `.cursor/rules/visual-language.mdc`, `.cursor/rules/design-tokens.mdc`, and `.cursor/rules/component-styling.mdc`. Change appearance only. Leave copy, catalog, identity, metadata, and JSON-LD alone.

## Checklist

1. Read `src/app/globals.css`, `src/components/ui/button.tsx`, `src/components/ui/card.tsx`, and `src/components/SectionHeading.tsx` before editing a section.
2. Change tokens, then `Button`, `Card`, and `SectionHeading`, then the sections. Load Source Serif 4 in `src/app/[locale]/layout.tsx` for Latin headings only. Arabic headings stay on Noto Sans Arabic.
3. The accent is a deep blue or a dark green, different from body text in light and dark. It appears on links, focus, and the CV button only. Experience is a list without `Card`. Skills are plain words without `Card`. Projects are an image and a short caption.
4. Remove the effect utilities and every section class that calls them in the same change: `glass-morphism`, `premium-gradient`, `text-gradient`, `hero-glow`, `shadow-premium`, `enter-*`, `reveal-*`, `scroll-reveal`.
5. Check `/`, `/ar`, and `/de`, in light and dark, at desktop and mobile width. Cover the header, the first screen (name, role, availability, CV), one experience entry, one project, skills, contact, and the mobile nav.
6. Confirm `prefers-reduced-motion` in `src/app/globals.css` still stops animation.
7. Run `pnpm test:unit`.
