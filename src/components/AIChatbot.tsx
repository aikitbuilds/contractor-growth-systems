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
    script.dataset.widgetId = '6750f17685eed571176e6e22'; // Steve's chat widget ID
    
    // Append the script to the body
    document.body.appendChild(script);
    
    // Clean up on component unmount
    return () => {
      // Remove the script when component unmounts
      const existingScript = document.getElementById('ghl-chat-widget');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      
      // Remove the chat widget elements that might have been injected
      const chatElements = document.querySelectorAll('[id^="chat-widget-"]');
      for (const element of chatElements) {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      }
    };
  }, []);

  // The widget will be injected by the script, so we don't need to render anything
  return null;
};

export default AIChatbot; 