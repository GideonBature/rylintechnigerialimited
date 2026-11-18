# Rylin Tech Nigeria Limited — Website

Static Next.js 16 + Tailwind 4 site (construction, consultancy, computer IT/ICT, general supplies and general contracts, Kaduna). Deploys to GitHub Pages via `.github/workflows/pages.yml`-style workflow in `.github/workflows/`.

- `npm install && npm run dev` — local dev
- `npm run build` — static export to `out/`
- Contact form opens a pre-filled email (mailto, with a Gmail fallback link); no backend needed.
- Company data lives in `src/lib/site.ts`. Logo and favicons were extracted from the company letterhead (`RYLIN TECH LH.pdf`) into `public/`.
- Photos in `public/images/` come from `Rylin Profile 2026 UPDATED.pdf`.
