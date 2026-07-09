import { json, hashIP, checkRateLimit } from './_middleware.js';
import { getConfig } from './_config.js';

export async function onRequestPost(context) {
  try {
    const ip = context.request.headers.get('CF-Connecting-IP') || '0.0.0.0';
    const ipHash = await hashIP(ip);
    const config = await getConfig(context.env.DB);

    // Rate limit
    const allowed = await checkRateLimit(
      context.env.RATE_LIMITS, `rl:retrieve:${ipHash}`, config.retrieve_rate_limit ?? 30
    );
    if (!allowed) return json({ error: 'Rate limit exceeded. Try again later.' }, 429);

    // Retrieve enabled check
    if (config.retrieve_enabled === false) {
      return json({ error: 'Retrievals are currently disabled' }, 503);
    }

    const body = await context.request.json();
    const code = body.code;

    if (!code || !/^\d{5}$/.test(code)) {
      return json({ error: 'Invalid code. Must be exactly 5 digits.' }, 400);
    }

    const item = await context.env.DB.prepare(
      `SELECT * FROM clipboard_items WHERE code = ? AND expires_at > datetime('now')`
    ).bind(code).first();

    if (!item) {
      return json({ error: 'Not found or expired' }, 404);
    }

    // Increment download count
    await context.env.DB.prepare(
      'UPDATE clipboard_items SET download_count = download_count + 1 WHERE id = ?'
    ).bind(item.id).run();

    await context.env.DB.prepare(
      'UPDATE statistics SET total_downloads = total_downloads + 1'
    ).run();

    return json({
      id: item.id,
      type: item.type,
      text_content: item.text_content,
      file_name: item.file_name,
      mime_type: item.mime_type,
      file_size: item.file_size,
      download_count: item.download_count + 1,
      created_at: item.created_at,
      expires_at: item.expires_at,
    });
  } catch (err) {
    console.error('Retrieve error:', err);
    return json({ error: 'Retrieve failed' }, 500);
  }
}
