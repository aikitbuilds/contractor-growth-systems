import { NextApiRequest, NextApiResponse } from 'next';
import { getAllSubmissions } from '@/services/submission';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const submissions = await getAllSubmissions();
    
    return res.status(200).json({ 
      success: true, 
      message: 'Submissions retrieved successfully',
      submissions
    });
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch submissions',
      error: error instanceof Error ? error.message : String(error)
    });
  }
} 