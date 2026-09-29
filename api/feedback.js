// POST /api/feedback
// Stores beta / demo feedback for Mzantsified and Ad//Intel in the Neon table
// feedback_responses (created 29 Sept 2026, Linear SOL-7 / SOL-8).
// Ad//Intel has no backend of its own, so its Feedback tab posts here too
// (cross-origin, hence the CORS allow-list below).
const { db } = require('../lib/db');

const ALLOWED_ORIGINS = [
  'https://mzantsified.co.za',
  'https://www.mzantsified.co.za',
  'https://mzantsified-mvp.vercel.app',
  'https://adintel-platform.vercel.app',
];
const PRODUCTS = ['mzantsified', 'adintel'];
const MODELS = ['as_is_once_off', 'monthly_subscription', 'both', 'unsure'];

function clip(v, max) {
  if (v === undefined || v === null) return null;
  const s = String(v).trim();
  return s ? s.slice(0, max) : null;
}

module.exports = async function handler(req, res) {
  const origin = req.headers.origin;
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }
  if (req.method === 'OPTIONS') { res.status(204).end(); return; }
  if (req.method !== 'POST') { res.status(405).json({ error: 'method not allowed' }); return; }

  let b = req.body;
  if (typeof b === 'string') { try { b = JSON.parse(b); } catch { b = {}; } }
  b = b || {};

  // Honeypot: real people never fill the hidden "website" field.
  if (b.website) { res.status(201).json({ ok: true }); return; }

  const product = PRODUCTS.includes(b.product) ? b.product : null;
  if (!product) { res.status(400).json({ error: 'product must be "mzantsified" or "adintel"' }); return; }

  const rating = Number.isInteger(b.rating) && b.rating >= 1 && b.rating <= 5 ? b.rating : null;
  const preferredModel = MODELS.includes(b.preferredModel) ? b.preferredModel : null;
  const price = Number.isFinite(Number(b.willingToPayZar)) && b.willingToPayZar !== '' && b.willingToPayZar !== null
    ? Math.max(0, Math.min(1000000, Math.round(Number(b.willingToPayZar)))) : null;
  const recommend = typeof b.wouldRecommend === 'boolean' ? b.wouldRecommend : null;
  const name = clip(b.name, 120);
  const contact = clip(b.contact, 160);
  const label = [name, contact].filter(Boolean).join(' | ') || null;

  const whatWorks = clip(b.whatWorks, 4000);
  const whatFails = clip(b.whatFails, 4000);
  const comments = clip(b.comments, 4000);

  if (!rating && !whatWorks && !whatFails && !comments) {
    res.status(400).json({ error: 'please give a rating or a comment' });
    return;
  }

  try {
    const sql = db();
    const rows = await sql`
      insert into feedback_responses
        (product, respondent_label, rating, what_works, what_fails, would_recommend,
         preferred_model, willing_to_pay_zar, comments)
      values
        (${product}, ${label}, ${rating}, ${whatWorks}, ${whatFails}, ${recommend},
         ${preferredModel}, ${price}, ${comments})
      returning id, created_at
    `;
    res.status(201).json({ ok: true, id: rows[0].id });
  } catch (err) {
    res.status(500).json({ error: 'could not save feedback' });
  }
};
