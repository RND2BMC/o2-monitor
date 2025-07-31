import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), 'latest.json');

  if (req.method === 'POST') {
    const { o2 } = req.body;

    if (typeof o2 !== 'number') {
      return res.status(400).json({ error: 'Invalid O2 value' });
    }

    fs.writeFileSync(filePath, JSON.stringify({ o2 }));
    return res.status(200).json({ message: 'O2 stored', o2 });
  } else {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }
}
