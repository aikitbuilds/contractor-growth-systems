import { FormSubmissionType } from './submission';

// GHL API endpoint
const GHL_API_URL = 'https://rest.gohighlevel.com/v1/contacts/';

// Get API key from environment variables
const GHL_API_KEY = import.meta.env.VITE_GHL_API_KEY;

if (!GHL_API_KEY) {
  console.error('GHL API key is not set in environment variables. Form submissions will fail.');
}

/**
 * Interface for contact data to be sent to GHL
 */
export interface GHLContactData {
  email: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  phone?: string;
  companyName?: string;
  address1?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  website?: string;
  tags?: string[];
  customField?: Record<string, string>;
  source?: string;
}

/**
 * Send data to Go High Level API
 */
export async function sendToGHL(
  contactData: GHLContactData, 
  formType: FormSubmissionType = 'other'
): Promise<{ success: boolean; contactId?: string; error?: string }> {
  try {
    if (!GHL_API_KEY) {
      throw new Error('GHL API key is not set');
    }

    // Process name if provided as full name
    if (contactData.name && !contactData.firstName) {
      const nameParts = contactData.name.split(' ');
      contactData.firstName = nameParts[0];
      contactData.lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
    }

    // Add form type to tags
    if (!contactData.tags) {
      contactData.tags = [];
    }
    contactData.tags.push(`form_${formType}`);
    
    // Add waitlist tag if applicable
    if (formType === 'other' && contactData.customField?.tier) {
      contactData.tags.push('waitlist');
      contactData.tags.push(`tier_${contactData.customField.tier}`);
    }

    // API request options
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${GHL_API_KEY}`
      },
      body: JSON.stringify(contactData)
    };

    // Send request to GHL
    const response = await fetch(GHL_API_URL, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to submit to GHL');
    }

    return {
      success: true,
      contactId: data.id
    };
  } catch (error) {
    console.error('Error sending to GHL:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}

/**
 * Process a waitlist submission to GHL
 */
export async function processWaitlistSubmission({
  name,
  email,
  company,
  phone,
  tier,
  message
}: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  tier: string;
  message?: string;
}): Promise<{ success: boolean; contactId?: string; error?: string }> {
  const contactData: GHLContactData = {
    email,
    name,
    phone,
    companyName: company,
    customField: {
      tier,
      message: message || ''
    },
    tags: ['waitlist', `tier_${tier}`],
    source: 'Website Waitlist Form'
  };

  return sendToGHL(contactData, 'other');
}

/**
 * Process a contact form submission to GHL
 */
export async function processContactSubmission({
  name,
  email,
  phone,
  company,
  message,
  subject
}: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  subject?: string;
}): Promise<{ success: boolean; contactId?: string; error?: string }> {
  const contactData: GHLContactData = {
    email,
    name,
    phone,
    companyName: company,
    customField: {
      message,
      subject: subject || 'Contact Form'
    },
    tags: ['contact_form'],
    source: 'Website Contact Form'
  };

  return sendToGHL(contactData, 'contact');
}

/**
 * Process a newsletter subscription to GHL
 */
export async function processNewsletterSubmission({
  name,
  email,
  interests
}: {
  name?: string;
  email: string;
  interests?: string[];
}): Promise<{ success: boolean; contactId?: string; error?: string }> {
  const contactData: GHLContactData = {
    email,
    name,
    tags: ['newsletter'],
    source: 'Website Newsletter Signup'
  };
  
  // Add interests as tags if available
  if (interests && interests.length > 0) {
    contactData.tags = [...contactData.tags, ...interests.map(i => `interest_${i}`)];
  }

  return sendToGHL(contactData, 'newsletter');
}

export default {
  sendToGHL,
  processWaitlistSubmission,
  processContactSubmission,
  processNewsletterSubmission
}; 