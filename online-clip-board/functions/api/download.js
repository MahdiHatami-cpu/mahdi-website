import { corsHeaders } from './_middleware.js';

export async function onRequestGet(context) {
  try {
    const url = new URL(context.request.url);
    const code = url.pathname.split('/api/download/')[1];

    if (!code || !/^\d{5}$/.test(code)) {
      return new Response(JSON.stringify({ error: 'Invalid code' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const item = await context.env.DB.prepare(
      `SELECT * FROM clipboard_items WHERE code = ? AND expires_at > datetime('now')`
    ).bind(code).first();

    if (!item || item.type !== 'file' || !item.file_key) {
      return new Response(JSON.stringify({ error: 'Not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const object = await context.env.FILES.get(item.file_key);
    if (!object) {
      return new Response(JSON.stringify({ error: 'File not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // Increment download count
    await context.env.DB.prepare(
      'UPDATE clipboard_items SET download_count = download_count + 1 WHERE id = ?'
    ).bind(item.id).run();

    const headers = new Headers(corsHeaders);
    headers.set('Content-Type', item.mime_type || 'application/octet-stream');
    headers.set('Content-Disposition', `attachment; filename="${item.file_name || 'file'}"`);
    if (item.file_size) headers.set('Content-Length', String(item.file_size));

    return new Response(object.body, { headers });
  } catch (err) {
    console.error('Download error:', err);
    return new Response(JSON.stringify({ error: 'Download failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
}
