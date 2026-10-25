---
name: restyle-portfolio
description: Restyle the portfolio to the quiet editorial visual language. Use when the user asks to restyle, redesign, or change the visual design, or when the site looks templated.
---

# Restyle portfolio

Follow `.cursor/rules/visual-language.mdc`, `.cursor/rules/design-tokens.mdc`, and `.cursor/rules/component-styling.mdc`. Change appearance only. Leave copy, catalog, identity, metadata, and JSON-LD alone.

## Checklist

1. Read `src/app/globals.css`, `src/components/ui/button.tsx`, `src/components/ui/card.tsx`, and `src/components/SectionHeading.tsx` before editing a section.
2. Change tokens, then primitives, then sections. Load Source Serif 4 in `src/app/[locale]/layout.tsx` for Latin headings only. Arabic headings stay on Noto Sans Arabic.
3. Remove the effect utilities and every section class that calls them in the same change: `glass-morphism`, `premium-gradient`, `text-gradient`, `hero-glow`, `shadow-premium`, `enter-*`, `reveal-*`, `scroll-reveal`.
4. Check `/`, `/ar`, and `/de`, in light and dark, at desktop and mobile width. Cover the header, hero, one experience entry, one project card, skills, contact, and the mobile nav.
5. Confirm `prefers-reduced-motion` in `src/app/globals.css` still stops animation.
6. Run `pnpm test:unit`.
