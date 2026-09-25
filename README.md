# Kian Morgan Hill / dev-kins

Static personal portfolio using HTML, CSS, and JavaScript. No build step or dependencies.

## Preview

Run `python -m http.server 4173 --bind 127.0.0.1` from this directory and visit http://127.0.0.1:4173.

## Files

- `index.html`: portfolio copy, projects, screenshot galleries, and contact links.
- `styles.css`: responsive layout and light/dark themes.
- `script.js`: progressive enhancements for navigation, theme, and screenshot dialog.
- `404.html`: missing-page fallback for static hosting.
- `PORTFOLIO_REVIEW.md`: audit, evidence, changes, verification, and follow-up content needs.
- `assets/`: existing project images, portrait, icons, and résumé PDF.

## Content maintenance

Keep project status explicit. A working local feature, a LAN demonstration, a reachable homepage, and a verified deployed workflow are different claims. Add public demo or source links only once confirmed. ClientPilot's AI features are planned, not completed.

Contact is a direct email link, not a hosted form. The résumé is an existing PDF and needs separate updates when its facts change. Core content, navigation, screenshot links, and gallery disclosures work without JavaScript.

## Checks

`node --check script.js`

`git diff --check`

Also check mobile navigation, keyboard access to screenshots (Tab, Escape, focus return), themes, all anchors/assets, and layouts at 320, 390, 768, and 1440 pixels. Inspect `404.html` directly; Python's development server uses its own response for unknown paths, while Vercel serves the custom 404 page.

## Deployment

Publish the repository root as a static site. Preserve `vercel.json`. Local edits do not change the live site until deployed.
