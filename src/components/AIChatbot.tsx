import React, { useEffect } from 'react';

const AIChatbot = () => {
  useEffect(() => {
    // Create and inject GHL chat widget script
    const script = document.createElement('script');
    script.id = 'ghl-chat-widget';
    script.src = 'https://chat-widget.gohighlevel.com/widget.js';
    script.async = true;
    script.defer = true;
    script.dataset.chatbotId = '35c7743a-b8cf-4e12-8bb3-f91236e337fa'; // Replace with your actual GHL chat widget ID
    
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