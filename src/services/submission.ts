import { sendEmail } from './email';
import db from './database';

// Initialize database when service is imported
db.init().catch(error => console.error('Failed to initialize database:', error));

// Define form submission types
export type FormSubmissionType = 
  | 'contact'
  | 'resource_download'
  | 'course_interest'
  | 'newsletter'
  | 'payment'
  | 'consultation_request'
  | 'other';

// Base submission interface
export interface BaseSubmission {
  id?: string;
  type: FormSubmissionType;
  email: string;
  name?: string;
  createdAt: Date;
  emailSent: boolean;
  emailId?: string;
}

// Contact form submission
export interface ContactSubmission extends BaseSubmission {
  type: 'contact';
  message: string;
  phone?: string;
  company?: string;
}

// Resource download submission
export interface ResourceSubmission extends BaseSubmission {
  type: 'resource_download';
  resourceId: string;
  resourceName: string;
}

// Course interest submission
export interface CourseInterestSubmission extends BaseSubmission {
  type: 'course_interest';
  courseId: string;
  courseName: string;
}

// Newsletter subscription
export interface NewsletterSubmission extends BaseSubmission {
  type: 'newsletter';
  interests?: string[];
}

// Union type of all submission types
export type Submission = 
  | ContactSubmission
  | ResourceSubmission
  | CourseInterestSubmission
  | NewsletterSubmission
  | BaseSubmission;

// Generate HTML for confirmation emails based on submission type
const generateConfirmationEmailHtml = (submission: Submission): string => {
  const { name, type } = submission;
  const firstName = name ? name.split(' ')[0] : 'there';
  
  let html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #2563eb;">Thank You for Your Submission!</h1>
      <p>Hello ${firstName},</p>
  `;
  
  switch (type) {
    case 'contact': {
      const contactSub = submission as ContactSubmission;
      html += `
        <p>Thank you for contacting Contractor Growth Systems. We've received your message and our team will get back to you as soon as possible.</p>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #1f2937; margin-top: 0;">Your Message Details</h2>
          <p><strong>Subject:</strong> Contact Form Submission</p>
          <p><strong>Message:</strong> ${contactSub.message}</p>
        </div>
      `;
      break;
    }
      
    case 'resource_download': {
      const resourceSub = submission as ResourceSubmission;
      html += `
        <p>Thank you for your interest in our "${resourceSub.resourceName}" resource. You'll find it attached to this email.</p>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #1f2937; margin-top: 0;">What's Next?</h2>
          <p>Check out these related resources that might interest you:</p>
          <ul>
            <li>Latest industry trends and insights from our blog</li>
            <li>Our free webinar series on contractor growth strategies</li>
          </ul>
        </div>
      `;
      break;
    }
      
    case 'course_interest': {
      const courseSub = submission as CourseInterestSubmission;
      html += `
        <p>Thank you for your interest in our "${courseSub.courseName}" course. We've added you to our waiting list and will notify you when enrollment opens.</p>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #1f2937; margin-top: 0;">What's Next?</h2>
          <p>In the meantime, we've prepared some free resources to help you get started:</p>
          <ul>
            <li>Introductory guide to the topic</li>
            <li>Recommended reading list</li>
            <li>Free webinar access</li>
          </ul>
        </div>
      `;
      break;
    }
      
    case 'newsletter':
      html += `
        <p>Thank you for subscribing to the Contractor Growth Systems newsletter. We're excited to share valuable insights and updates with you!</p>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #1f2937; margin-top: 0;">What to Expect</h2>
          <ul style="list-style-type: none; padding-left: 0;">
            <li style="margin-bottom: 8px;">📈 Latest industry trends and insights</li>
            <li style="margin-bottom: 8px;">💡 Exclusive tips for contractor growth</li>
            <li style="margin-bottom: 8px;">🎯 Special offers and promotions</li>
            <li style="margin-bottom: 8px;">📊 Success stories from our community</li>
          </ul>
        </div>
      `;
      break;
      
    default:
      html += `
        <p>We have received your submission and will process it shortly.</p>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #1f2937; margin-top: 0;">Thank You</h2>
          <p>We appreciate your interest in Contractor Growth Systems. If you have any questions, please don't hesitate to contact our support team.</p>
        </div>
      `;
  }
  
  html += `
    <p>You can manage your communication preferences or unsubscribe at any time by clicking the link at the bottom of our emails.</p>
    <p>Best regards,<br>The Contractor Growth Systems Team</p>
  </div>
  `;
  
  return html;
};

// Process a form submission
export async function processFormSubmission(submission: Submission): Promise<{ success: boolean; submission?: Submission; error?: string }> {
  try {
    // Save submission to database
    const savedSubmission = await db.saveSubmission({
      ...submission,
      emailSent: false
    });
    
    // Generate email content
    const emailHtml = generateConfirmationEmailHtml(savedSubmission);
    
    // Send confirmation email
    const emailResult = await sendEmail({
      to: savedSubmission.email,
      subject: 'Thank you for your submission - Contractor Growth Systems',
      html: emailHtml
    });
    
    if (emailResult.success) {
      // Update submission with email info
      const emailUpdate = {
        emailSent: true,
        emailId: emailResult.messageId
      };
      await db.updateSubmission(savedSubmission.id as string, emailUpdate);
      
      // Update the local submission object
      savedSubmission.emailSent = true;
      savedSubmission.emailId = emailResult.messageId;
    }
    
    return {
      success: true,
      submission: savedSubmission
    };
  } catch (error) {
    console.error('Error processing form submission:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error)
    };
  }
}

// Get all submissions
export async function getAllSubmissions(): Promise<Submission[]> {
  return db.getAllSubmissions();
}

// Get submissions by email
export async function getSubmissionsByEmail(email: string): Promise<Submission[]> {
  return db.getSubmissionsByEmail(email);
} 