import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient, predicate } from '@prismicio/client';
import { repositoryName } from '@/prismicio'; // Import the repositoryName from prismicio.ts

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req.query;

  if (!query || typeof query !== 'string') {
    return res.status(400).json({ error: 'Query parameter is required' });
  }

  try {
    // Create the Prismic client with the repository name
    const client = createClient(repositoryName);

    const response = await client.get({
      predicates: [predicate.fulltext('document', query)],
      pageSize: 20, // Adjust as necessary
    });

    return res.status(200).json(response.results);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    } else {
      return res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

export default handler;
