// Shared config reader with 30s in-memory cache
let cache = null;
let cacheTime = 0;
const CACHE_TTL = 30_000;

export async function getConfig(db) {
  const now = Date.now();
  if (cache && now - cacheTime < CACHE_TTL) return cache;

  const rows = await db.prepare('SELECT key, value FROM config').all();
  cache = {};
  for (const row of rows.results) {
    const v = row.value;
    if (v === 'true') cache[row.key] = true;
    else if (v === 'false') cache[row.key] = false;
    else if (/^\d+$/.test(v)) cache[row.key] = parseInt(v, 10);
    else cache[row.key] = v;
  }
  cacheTime = now;
  return cache;
}
