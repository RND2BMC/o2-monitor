let latestO2 = 0;

export default function handler(req, res) {
  if (req.method === "POST") {
    const { o2 } = req.body;
    latestO2 = o2;
    return res.status(200).json({ message: "O2 stored", o2 });
  }

  if (req.method === "GET") {
    return res.status(200).json({ o2: latestO2 });
  }

  res.status(405).end(); // Method Not Allowed
}
