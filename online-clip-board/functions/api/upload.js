import { json, hashIP, checkRateLimit, generateCode } from './_middleware.js';
import { getConfig } from './_config.js';

const MIME_ALLOWLIST = new Set([
  'image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml',
  'video/mp4', 'video/webm', 'video/quicktime',
  'audio/mpeg', 'audio/wav', 'audio/ogg',
  'application/pdf', 'application/zip', 'application/x-rar-compressed',
  'text/plain', 'text/csv', 'application/json',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.ms-powerpoint',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
]);

function sanitize(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

export async function onRequestPost(context) {
  try {
    const ip = context.request.headers.get('CF-Connecting-IP') || '0.0.0.0';
    const ipHash = await hashIP(ip);
    const config = await getConfig(context.env.DB);

    // Rate limit
    const allowed = await checkRateLimit(
      context.env.RATE_LIMITS, `rl:upload:${ipHash}`, config.upload_rate_limit ?? 10
    );
    if (!allowed) return json({ error: 'Rate limit exceeded. Try again later.' }, 429);

    // Maintenance / upload enabled check
    if (config.maintenance_mode === true) {
      return json({ error: 'Uploads are temporarily disabled' }, 503);
    }
    if (config.upload_enabled === false) {
      return json({ error: 'Uploads are currently disabled' }, 503);
    }

    // Parse form data
    const formData = await context.request.formData();
    const text = formData.get('text');
    const file = formData.get('file');
    const expireMinutes = parseInt(formData.get('expire_minutes') || '15', 10);

    const validExpire = (config.available_expiration_times || '1,5,10,15,30')
      .split(',').map(Number);
    if (!validExpire.includes(expireMinutes)) {
      return json({ error: 'Invalid expiration time' }, 400);
    }

    // Must have text or file, not both
    const hasText = text && typeof text === 'string' && text.trim().length > 0;
    const hasFile = file && file instanceof File && file.size > 0;

    if (!hasText && !hasFile) {
      return json({ error: 'Text or file is required' }, 400);
    }
    if (hasText && hasFile) {
      return json({ error: 'Send text OR file, not both' }, 400);
    }

    // Text validation
    const maxTextLength = config.max_text_length ?? 2000;
    if (hasText) {
      if (text.length > maxTextLength) {
        return json({ error: `Text exceeds ${maxTextLength} character limit` }, 400);
      }
    }

    // File validation
    let fileKey = null;
    let fileName = null;
    let mimeType = null;
    let fileSize = null;

    const maxFileSize = config.max_file_size ?? 52428800;
    if (hasFile) {
      if (file.size > maxFileSize) {
        const mb = Math.round(maxFileSize / 1024 / 1024);
        return json({ error: `File exceeds ${mb}MB limit` }, 400);
      }
      if (!MIME_ALLOWLIST.has(file.type)) {
        return json({ error: 'File type not allowed' }, 400);
      }

      fileName = file.name || 'file';
      mimeType = file.type || 'application/octet-stream';
      fileSize = file.size;
    }

    // Generate code with collision retry
    const id = crypto.randomUUID();
    let code;
    for (let attempt = 0; attempt < 3; attempt++) {
      code = generateCode();
      const expiresAt = new Date(Date.now() + expireMinutes * 60 * 1000).toISOString();

      try {
        if (hasFile) {
          fileKey = `${code}/${id}${getExtension(fileName)}`;
          await context.env.FILES.put(fileKey, file.stream(), {
            httpMetadata: { contentType: mimeType },
          });
        }

        await context.env.DB.prepare(
          `INSERT INTO clipboard_items (id, code, type, text_content, file_name, file_key, mime_type, file_size, expire_minutes, expires_at, ip_hash)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
        ).bind(
          id,
          code,
          hasText ? 'text' : 'file',
          hasText ? sanitize(text.trim()) : null,
          fileName,
          fileKey,
          mimeType,
          fileSize,
          expireMinutes,
          expiresAt,
          ipHash
        ).run();

        // Update stats
        await context.env.DB.prepare(
          `UPDATE statistics SET total_uploads = total_uploads + 1, ${hasText ? 'total_texts' : 'total_files'} = ${hasText ? 'total_texts' : 'total_files'} + 1`
        ).run();

        return json({
          code,
          type: hasText ? 'text' : 'file',
          expires_at: expiresAt,
          expire_minutes: expireMinutes,
        }, 201);
      } catch (err) {
        if (err.message?.includes('UNIQUE') && attempt < 2) continue;
        throw err;
      }
    }

    return json({ error: 'Failed to generate unique code' }, 500);
  } catch (err) {
    console.error('Upload error:', err);
    return json({ error: 'Upload failed' }, 500);
  }
}

function getExtension(filename) {
  const match = filename?.match(/\.[^.]+$/);
  return match ? match[0] : '';
}
