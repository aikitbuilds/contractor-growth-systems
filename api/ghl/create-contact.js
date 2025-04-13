export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { firstName, lastName, email, phone, companyName } = req.body;

  // Basic validation
  if (!firstName || !lastName || !email) {
    return res.status(400).json({ 
      success: false, 
      error: 'First name, last name, and email are required' 
    });
  }

  try {
    // Prepare contact data for GHL
    const contactData = {
      firstName,
      lastName,
      email,
      phone,
      companyName,
      source: "BDC Website Test"
    };

    // Make API call to GHL
    const response = await fetch('https://rest.gohighlevel.com/v1/contacts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GHL_API_KEY}`
      },
      body: JSON.stringify(contactData)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Error creating contact in GHL');
    }

    console.log('GHL contact created successfully:', data.id);
    return res.status(200).json({ 
      success: true, 
      contactId: data.id, 
      message: 'Contact created successfully in GHL' 
    });
  } catch (error) {
    console.error('Error creating GHL contact:', error);
    return res.status(500).json({ 
      success: false, 
      error: error.message || 'Error creating contact in GHL' 
    });
  }
} 