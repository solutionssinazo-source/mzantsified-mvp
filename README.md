# Mzantsified backend — status (23 Sept 2026)

This `/api` directory is the first real backend infrastructure for Mzantsified.
Until now the live build had **no server-side data store at all** — everything
lived only in browser `localStorage`. This is the start of fixing that, per
Sinazo's instruction: "Data is the real currency, so we're not leaving it behind."

## What exists right now

- **Database:** a Neon Postgres project called `Mzantsified` (project id
  `dry-sea-31738713`), provisioned today. Schema is live: `profiles`,
  `business_profiles` (capped at 3 per profile via a CHECK constraint, matching
  the confirmed 3-profile business rule), `plugs`, `listing_deliveries` (the
  daily top-10 sent to a profile), `listing_events` (view/click), `referral_links`
  and `referral_conversions` (share-tracking).
- **API:** `POST /api/events` — records a view or click against a delivered
  listing. This is the one working endpoint so far.
- **lib/db.js** — shared Neon connection helper, used by any future `/api/*`
  route.

## What is NOT done yet (do not assume otherwise)

- **`DATABASE_URL` is not yet set in Vercel.** Setting a production environment
  secret was blocked by this session's own approval controls (the same class of
  restriction that has blocked direct production deploys before). Sinazo (or
  whoever holds the Vercel dashboard) needs to add it herself:
  Project Settings → Environment Variables → `DATABASE_URL` → apply to
  Production + Preview. The connection string itself is deliberately **not**
  committed here — it was relayed directly in chat, and is also retrievable
  any time from the Neon console (project "Mzantsified", id
  `dry-sea-31738713` → Connection Details). Never commit a live database
  credential into this repo.

- **No delivery-selection endpoint yet** (the actual top-10-per-profile ranking
  logic). This first pass only covers recording events against deliveries that
  already exist in `listing_deliveries` — populating that table (from the
  catalogue + a ranking algorithm) is the next real piece of work, not yet built.
- **No referral endpoints yet** — `referral_links` / `referral_conversions`
  tables exist but nothing writes to them yet.
- **The live front-end does not call `/api/events` yet.** `index.html` still
  only writes to `localStorage`. Wiring the client to actually POST view/click
  events is a separate, not-yet-done step.
- **`@neondatabase/serverless` is a new dependency** — needs adding to
  `package.json` (or Vercel will fail the build). Not yet added in this pass;
  flagged so it isn't missed.

## Why it stopped here

Setting the Vercel environment variable and attempting a direct deploy both hit
this session's Vercel write-permission wall — consistent with the "same
blockage" Sinazo flagged in advance. Per her instruction, work stops here for
tonight; the two items above (set `DATABASE_URL`, add the npm dependency) are
what's needed from her side before this can go live.
