import QRCode from 'qrcode';
import { json } from './_middleware.js';

export async function onRequestGet(context) {
  try {
    const url = new URL(context.request.url);
    const parts = url.pathname.split('/');
    const code = parts[parts.length - 1];

    if (!code || !/^\d{5}$/.test(code)) {
      return json({ error: 'Invalid code. Must be exactly 5 digits.' }, 400);
    }

    const siteUrl = context.env.SITE_URL || url.origin;
    const targetUrl = `${siteUrl}/?code=${code}`;

    const pngBuffer = await QRCode.toBuffer(targetUrl, {
      type: 'png',
      width: 256,
      margin: 2,
      color: { dark: '#000000', light: '#ffffff' },
    });

    return new Response(pngBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=300',
      },
    });
  } catch (err) {
    console.error('QR code error:', err);
    return json({ error: 'Failed to generate QR code' }, 500);
  }
}
