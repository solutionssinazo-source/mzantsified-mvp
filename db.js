// Shared Neon Postgres connection for Mzantsified serverless API routes.
// Uses the Neon serverless driver (HTTP-based, works in Vercel's edge/node runtimes
// without needing a persistent TCP pool). Requires DATABASE_URL to be set in the
// Vercel project's Environment Variables (Production + Preview) — see
// /api/README.md for the exact value and where it comes from.
const { neon } = require('@neondatabase/serverless');

let sql = null;

function db() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not set in this environment.');
  }
  if (!sql) {
    sql = neon(process.env.DATABASE_URL);
  }
  return sql;
}

module.exports = { db };
