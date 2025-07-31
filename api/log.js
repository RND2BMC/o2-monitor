// /api/log.js

let latestO2 = 0;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { o2 } = req.body;

    if (typeof o2 === 'number') {
      latestO2 = o2;
      return res.status(200).json({ message: 'O2 stored', o2 });
    } else {
      return res.status(400).json({ error: 'Invalid O2 value' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }
}

// Export getter for other API routes
export { latestO2 };
