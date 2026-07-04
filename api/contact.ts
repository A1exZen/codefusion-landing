import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error('Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID environment variables');
    res.status(500).json({ error: 'Server not configured' });
    return;
  }

  const { name, contact, message } = req.body ?? {};

  if (!name || !contact) {
    res.status(400).json({ error: 'Missing name or contact' });
    return;
  }

  const text = `📩 New Request\n👤 Name: ${name}\n📞 Contact: ${contact}\n📝 Project:\n${message || '—'}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text }),
    });

    if (!response.ok) {
      console.error('Telegram API error:', await response.text());
      res.status(502).json({ error: 'Failed to send message' });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Unexpected error' });
  }
}
