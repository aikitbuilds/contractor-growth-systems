import { useState, useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

export interface GHLFormEmbedProps {
  formId: string;
  height?: string;
  title?: string;
  showTitle?: boolean;
  description?: string;
  showDescription?: boolean;
  containerClassName?: string;
}

export function GHLFormEmbed({ 
  formId,
  height = '650px',
  title = '',
  showTitle = false,
  description = '',
  showDescription = false,
  containerClassName = ''
}: GHLFormEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    if (!formId) {
      setError('No form ID provided');
      setIsLoading(false);
    } else {
      setError(null);
    }
  }, [formId]);

  const handleIframeError = () => {
    setError('Failed to load the form. Please check the form ID and try again.');
    setIsLoading(false);
  };
  
  if (!formId) {
    return (
      <div className={`w-full ${containerClassName} p-6 text-center bg-gray-50 rounded-lg border border-gray-200`}>
        <AlertCircle className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
        <h3 className="text-lg font-medium mb-2">Missing Form ID</h3>
        <p className="text-gray-600">
          A valid GHL Form ID is required to display this form.
        </p>
      </div>
    );
  }
  
  return (
    <div className={`w-full ${containerClassName}`}>
      {showTitle && title && (
        <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>
      )}
      {showDescription && description && (
        <p className="text-gray-600 text-center mb-6">{description}</p>
      )}
      <div className="relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 bg-opacity-75">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary" />
          </div>
        )}
        {error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 bg-opacity-90 p-6 text-center">
            <AlertCircle className="w-8 h-8 text-red-500 mb-2" />
            <p className="text-gray-800 font-medium">{error}</p>
          </div>
        )}
        <iframe 
          src={`https://api.leadconnectorhq.com/widget/form/${formId}`}
          style={{
            width: '100%',
            height,
            border: 'none',
            borderRadius: '4px',
          }}
          onLoad={() => setIsLoading(false)}
          onError={handleIframeError}
          title={title || "GHL Form"}
          allow="camera; microphone"
        />
      </div>
    </div>
  );
}

export default GHLFormEmbed; 