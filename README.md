# Buehler Capital Funding

Marketing site + employee portal for Buehler Capital Funding LLC — a private money / hard money / commercial / business lender based in Snohomish, WA.

**Live:** https://buehler-capital.vercel.app

## What's in here

- Marketing site (Home, About, Services, Contact)
- Application intake at `/apply` — PDF download hub (no auto-prequalification — every lead goes to Fritz)
- Employee portal at `/portal` — sign in with anything, demo only
- Admin dashboard at `/portal/dashboard` with Owner / Employee view toggle, deal tracker, file uploads, audit log

## Stack

Vite · React 19 · TypeScript · Tailwind v4 · Framer Motion · Lucide · React Router

## Run

```bash
npm install
npm run dev
npm run build
```

## Deploy

Auto-deploys to Vercel on push to `main` once the GitHub repo is connected via the Vercel dashboard. Until then, manual: `vercel --prod`.
