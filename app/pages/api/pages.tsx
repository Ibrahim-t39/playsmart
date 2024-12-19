import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest & { body: { userId: string } },
  res: NextApiResponse<{ message?: string; error?: string }>
) {
  if (req.method === 'POST') {
    const { userId } = req.body;

    try {
      // Replace with your database update logic
      console.log(`Upgrading user ${userId} to premium`);

      res.status(200).json({ message: 'User upgraded to premium.' });
    } catch {
      // Respond with a generic error message
      res.status(500).json({ error: 'Failed to upgrade user to premium.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
