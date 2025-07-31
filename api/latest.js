// /api/latest.js

import { latestO2 } from './log';

export default function handler(req, res) {
  res.status(200).json({ o2: latestO2 });
}
