import type { Request, Response } from 'express';

// This endpoint receives data and forwards it to a configured N8N webhook URL.
export default async function handler(req: Request, res: Response) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;

  // Check if the N8N webhook URL is configured
  if (!n8nWebhookUrl) {
    console.error('N8N_WEBHOOK_URL environment variable is not set.');
    return res.status(500).json({ success: false, message: 'Server configuration error: N8N webhook URL not set.' });
  }

  try {
    const incomingData = req.body;

    // Forward the data to the N8N webhook using native fetch
    const n8nResponse = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers N8N might require, e.g., authentication
      },
      body: JSON.stringify(incomingData),
    });

    // Check if the request to N8N was successful
    if (!n8nResponse.ok) {
      const errorBody = await n8nResponse.text();
      console.error(`Error forwarding data to N8N: ${n8nResponse.status} ${n8nResponse.statusText}`, errorBody);
      return res.status(502).json({ 
        success: false, 
        message: 'Failed to forward data to N8N workflow.',
        n8n_status: n8nResponse.status,
        n8n_error: errorBody 
      });
    }

    // Send success response back to the original caller
    return res.status(200).json({ 
      success: true, 
      message: 'Data successfully forwarded to N8N workflow.'
    });

  } catch (error) {
    console.error('Error processing N8N trigger webhook:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Internal Server Error processing webhook request.',
      error: error instanceof Error ? error.message : String(error)
    });
  }
} 