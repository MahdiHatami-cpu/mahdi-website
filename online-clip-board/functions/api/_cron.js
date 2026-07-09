export async function onRequestScheduled(event, env, ctx) {
  try {
    // Find expired items with files
    const { results } = await env.DB.prepare(
      "SELECT id, file_key FROM clipboard_items WHERE expires_at <= datetime('now')"
    ).all();

    // Delete R2 objects for expired files
    for (const item of results) {
      if (item.file_key) {
        try {
          await env.FILES.delete(item.file_key);
        } catch (err) {
          console.error(`Failed to delete R2 object ${item.file_key}:`, err);
        }
      }
    }

    // Delete expired rows
    const { meta } = await env.DB.prepare(
      "DELETE FROM clipboard_items WHERE expires_at <= datetime('now')"
    ).run();

    console.log(`Cleanup: removed ${meta.changes} expired items`);
  } catch (err) {
    console.error('Cron cleanup error:', err);
  }
}
