# GoHighLevel (GHL) Integration Documentation

This document provides comprehensive information about the GoHighLevel integrations implemented in the Contractor Growth Systems project.

## Overview

GoHighLevel (GHL) has been integrated into this project to provide:

1. **AI-powered Chat Widget**: A customizable chat assistant for visitor engagement
2. **Form Embeds**: Easily embed GHL forms throughout the site
3. **Scheduling Widgets**: Embed calendar booking functionality 
4. **Checkout Pages**: Process payments using GHL's built-in payment processing

These integrations eliminate the need for direct API integrations with Stripe and other services, simplifying the codebase and reducing potential points of failure.

## Component Documentation

### 1. AIChatbot Component

**File location**: `src/components/AIChatbot.tsx`

This component injects the GHL chat widget script into the DOM and handles cleanup on unmount. It's included in the main App layout to ensure the chat widget appears on all pages.

```tsx
import React, { useEffect } from 'react';

const AIChatbot = () => {
  useEffect(() => {
    // Create and inject GHL chat widget script
    const script = document.createElement('script');
    script.id = 'ghl-chat-widget';
    script.src = 'https://widgets.leadconnectorhq.com/loader.js';
    script.async = true;
    script.defer = true;
    script.dataset.resourcesUrl = 'https://widgets.leadconnectorhq.com/chat-widget/loader.js';
    script.dataset.widgetId = '6750f17685eed571176e6e22'; // Widget ID
    
    // Append the script to the body
    document.body.appendChild(script);
    
    // Cleanup on unmount
    return () => {
      const existingScript = document.getElementById('ghl-chat-widget');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      
      const chatElements = document.querySelectorAll('[id^="chat-widget-"]');
      for (const element of chatElements) {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      }
    };
  }, []);

  return null;
};

export default AIChatbot;
```

### 2. GHLFormEmbed Component

**File location**: `src/components/GHLFormEmbed.tsx`

A reusable component for embedding any GHL form on the site. The component handles loading states and errors.

**Props**:
- `formId` (required): The GHL form ID
- `height`: Height of the form iframe (default: "650px")
- `title`: Form title displayed above the iframe
- `showTitle`: Whether to display the title (default: false)
- `description`: Form description displayed below the title
- `showDescription`: Whether to display the description (default: false)
- `containerClassName`: Additional CSS classes for the container

**Usage example**:
```tsx
import GHLFormEmbed from '@/components/GHLFormEmbed';

// In your component:
<GHLFormEmbed 
  formId="YOUR_GHL_FORM_ID" 
  height="650px"
  title="Contact Form"
  showTitle={true}
  description="Fill out this form to contact us"
  showDescription={true}
  containerClassName="max-w-3xl mx-auto"
/>
```

### 3. SchedulingEmbed Component

**File location**: `src/components/SchedulingEmbed.tsx`

A component for embedding GHL scheduling widgets, allowing users to book appointments.

**Props**:
- `widgetId` (required): The GHL scheduling widget ID
- `height`: Height of the scheduling iframe (default: "650px")
- `title`: Title displayed above the iframe (default: "Schedule a Meeting")

**Usage example**:
```tsx
import SchedulingEmbed from '@/components/SchedulingEmbed';

// In your component:
<SchedulingEmbed 
  widgetId="YOUR_GHL_WIDGET_ID" 
  title="Book a Consultation"
  height="700px"
/>
```

### 4. RoofSalesCheckout Page

**File location**: `src/pages/RoofSalesCheckout.tsx`

A dedicated checkout page that uses GHLFormEmbed to process payments for the Roof Sales Bootcamp products.

**Key features**:
- Dynamically loads different GHL forms based on URL parameters
- Displays relevant pricing information based on the selected plan
- Provides guarantee information below the checkout form

**Implementation details**:
- Uses URL query parameter `plan` to determine which form to display
- Supports "early" and "standard" pricing plans
- Includes appropriate meta tags and SEO information

## Setup Instructions

### Adding New GHL Forms

1. Create your form in the GHL interface
2. Get the form ID from the embed code (usually in format `data-form-id="YOUR_FORM_ID"`)
3. Use the GHLFormEmbed component with your form ID:
   ```tsx
   <GHLFormEmbed formId="YOUR_FORM_ID" />
   ```

### Creating New Checkout Pages

1. Use the RoofSalesCheckout.tsx as a template
2. Update the form IDs for your products
3. Customize the pricing and description information
4. Add the new route to App.tsx

### Updating the Chat Widget

1. Create or modify your chat widget in the GHL interface
2. Get the new widget ID
3. Update the widget ID in AIChatbot.tsx:
   ```tsx
   script.dataset.widgetId = 'YOUR_NEW_WIDGET_ID';
   ```

## Troubleshooting

### Chat Widget Not Appearing
- Check that AIChatbot component is included in App.tsx
- Verify the widget ID is correct
- Check browser console for any errors
- Make sure the widget is enabled in GHL

### Form Not Loading
- Verify the form ID is correct
- Check that the form is published in GHL
- Inspect browser network requests for any failed requests
- Try increasing the height if the form appears cut off

### Scheduling Widget Issues
- Ensure the scheduling widget is correctly set up in GHL
- Verify permissions and availability in GHL calendar settings
- Check that the widget ID is correct

## GHL Product IDs Reference

For quick reference, here are the current GHL product IDs used in the application:

- **Early Bird Bootcamp**: `67fc2991b054f76740c23d53`
- **Standard Bootcamp**: `67fc2a1d846c488583c59b01`
- **Chat Widget**: `6750f17685eed571176e6e22`

## Additional Resources

- [GoHighLevel Documentation](https://help.gohighlevel.com/)
- [GHL Form Builder Guide](https://help.gohighlevel.com/support/solutions/articles/48000965817-form-builder)
- [GHL Scheduling Widget Guide](https://help.gohighlevel.com/support/solutions/articles/48000965762-calendar-booking) 