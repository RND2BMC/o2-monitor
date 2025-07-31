import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'latest.json');

  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath);
    res.status(200).json(JSON.parse(data));
  } else {
    res.status(200).json({ o2: 0 });
  }
}
