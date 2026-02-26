# Mostly Strategic

Minimal Next.js + Tailwind website for Mostly Strategic.

## Environment variables

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_SITE_URL`
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

## Run locally

```bash
npm install
npm run dev
```

## Deployment

Deploy to Vercel and configure the same environment variables in project settings.

## Vercel troubleshooting

If Vercel still reports `next.config.ts` errors:

1. Confirm the deployment is using the latest commit from this repo.
2. In Vercel Project Settings, make sure the **Root Directory** is this project folder.
3. Trigger **Redeploy** with **Clear build cache** enabled.
4. A prebuild guard now auto-removes a root `next.config.ts` if it appears unexpectedly.
5. Verify the deployed source uses `next.config.mjs` (or `next.config.js`).
