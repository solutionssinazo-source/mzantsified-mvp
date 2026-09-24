// POST /api/events
// Records a view or click against a specific delivered listing.
// Body: { deliveryId: string (uuid), type: "view" | "click" }
//
// This is the first real piece of the behavioural-signal architecture agreed
// with Sinazo on 22 Sept 2026 (see "30 — Mzantsified" Notion page, CORRECTION
// entry): view/click events feed the derived return/relevance signal that
// re-ranks each profile's daily top-10, since onboarding itself is thin.
//
// Deliberately minimal: no auth beyond the deliveryId itself (it is an opaque
// uuid handed to one profile, not guessable), no PII collected. Rate limiting
// and dedup (e.g. one view per delivery per session) are not yet implemented —
// flagged as outstanding, not silently assumed solved.
const { db } = require('../lib/db');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'method not allowed' });
    return;
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  const { deliveryId, type } = body || {};

  if (!deliveryId || !['view', 'click'].includes(type)) {
    res.status(400).json({ error: 'deliveryId and type ("view"|"click") are required' });
    return;
  }

  try {
    const sql = db();
    const rows = await sql`
      insert into listing_events (delivery_id, event_type)
      values (${deliveryId}, ${type})
      returning id, occurred_at
    `;
    res.status(201).json({ ok: true, event: rows[0] });
  } catch (err) {
    // Foreign-key failure (unknown deliveryId) surfaces as a 400, not a 500 —
    // callers may retry with a bad/stale id and should get a clear signal.
    const isFkError = /foreign key|violates/i.test(String(err.message || ''));
    res.status(isFkError ? 400 : 500).json({ error: isFkError ? 'unknown deliveryId' : 'internal error' });
  }
};
