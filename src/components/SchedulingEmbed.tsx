import { useEffect, useRef, useState } from 'react';

interface SchedulingEmbedProps {
  widgetId?: string;
  title?: string;
  height?: string;
  schedulingType?: 'strategy' | 'discovery' | 'implementation' | 'demo';
}

export function SchedulingEmbed({ 
  widgetId = 'lqdmVgOSW0dDHw41zRxS',
  title = 'Schedule an Appointment',
  height = '650px',
  schedulingType = 'strategy'
}: SchedulingEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Map of scheduling types to their respective widget IDs
  // These could be updated to use actual GHL widget IDs for different appointment types
  const widgetIdMap: Record<string, string> = {
    strategy: 'lqdmVgOSW0dDHw41zRxS', // Default strategy call
    discovery: 'lqdmVgOSW0dDHw41zRxS', // Discovery call (using same ID for demo)
    implementation: 'lqdmVgOSW0dDHw41zRxS', // Implementation planning (using same ID for demo)
    demo: 'lqdmVgOSW0dDHw41zRxS', // Product demo (using same ID for demo)
  };

  // Use the correct widget ID based on type or fallback to provided ID
  const activeWidgetId = widgetIdMap[schedulingType] || widgetId;

  useEffect(() => {
    // Load GHL form embed script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Handle iframe load event
    const handleIframeLoad = () => {
      setIsLoading(false);
    };

    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('load', handleIframeLoad);
    }

    // Cleanup function
    return () => {
      document.body.removeChild(script);
      if (iframe) {
        iframe.removeEventListener('load', handleIframeLoad);
      }
    };
  }, []); // We don't need activeWidgetId in the dependency array

  // Generate a unique ID for the iframe using timestamp
  const iframeId = `${activeWidgetId}_${Date.now()}`;

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>
      <div className="schedule-embed-container relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 bg-opacity-75">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary" />
          </div>
        )}
        <iframe 
          ref={iframeRef}
          src={`https://api.leadconnectorhq.com/widget/booking/${activeWidgetId}`} 
          style={{ 
            width: '100%', 
            border: 'none', 
            overflow: 'hidden',
            height
          }} 
          scrolling="no" 
          id={iframeId}
          title="Schedule an appointment"
        />
      </div>
    </div>
  );
}

export default SchedulingEmbed; 