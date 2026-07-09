import { json } from './_middleware.js';

export async function onRequestGet(context) {
  try {
    const { results } = await context.env.DB.prepare(
      'SELECT key, value FROM config'
    ).all();

    const config = {};
    for (const row of results) {
      if (row.value === 'true') config[row.key] = true;
      else if (row.value === 'false') config[row.key] = false;
      else if (/^\d+$/.test(row.value)) config[row.key] = parseInt(row.value, 10);
      else config[row.key] = row.value;
    }

    return json(config);
  } catch (err) {
    console.error('Config error:', err);
    return json({ error: 'Failed to load config' }, 500);
  }
}
