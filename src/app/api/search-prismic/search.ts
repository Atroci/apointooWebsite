import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '../../prismicio';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req.query;

  if (!query || typeof query !== 'string') {
    return res.status(400).json({ error: 'Query parameter is required' });
  }

  try {
    const client = createClient();
    const response = await client.getByType('blogpost', {
      q: `[fulltext(document, "${query}")]`,
    });

    return res.status(200).json(response.results);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default handler;
