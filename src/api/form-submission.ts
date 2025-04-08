import { NextApiRequest, NextApiResponse } from 'next';
import { 
  processFormSubmission, 
  Submission,
  FormSubmissionType 
} from '@/services/submission';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const formData = req.body;
    
    // Validate required fields
    if (!formData.email || !formData.type) {
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required fields: email and type are required' 
      });
    }
    
    // Validate form type
    const validTypes: FormSubmissionType[] = [
      'contact',
      'resource_download',
      'course_interest',
      'newsletter',
      'payment',
      'consultation_request',
      'other'
    ];
    
    if (!validTypes.includes(formData.type as FormSubmissionType)) {
      return res.status(400).json({ 
        success: false, 
        message: `Invalid form type. Must be one of: ${validTypes.join(', ')}` 
      });
    }

    // Create submission object
    const submission: Submission = {
      ...formData,
      type: formData.type as FormSubmissionType,
      createdAt: new Date(),
      emailSent: false
    };

    // Process the submission (save to DB and send email)
    const result = await processFormSubmission(submission);
    
    if (result.success) {
      return res.status(200).json({
        success: true,
        message: 'Form submission processed successfully',
        submission: result.submission
      });
    } else {
      return res.status(500).json({
        success: false,
        message: 'Failed to process form submission',
        error: result.error
      });
    }
  } catch (error) {
    console.error('Error handling form submission:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to process form submission',
      error: error instanceof Error ? error.message : String(error)
    });
  }
} 