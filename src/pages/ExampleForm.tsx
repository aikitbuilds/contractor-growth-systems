import Navbar from '@/components/Navbar';
import GHLFormEmbed from '@/components/GHLFormEmbed';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { InfoIcon } from 'lucide-react';

export default function ExampleForm() {
  // This is just an example form ID format - replace with your actual GHL form ID
  const exampleFormId = 'xR1g2H3k4L5m6N7o8P';
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gradient-to-b from-white to-gray-100 pt-20">
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary-700 mb-4">Example GHL Form Integration</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              This page demonstrates how to integrate a GHL form into your website.
            </p>
          </div>
          
          <Alert className="mb-8">
            <InfoIcon className="h-4 w-4" />
            <AlertTitle>Example Integration</AlertTitle>
            <AlertDescription>
              <p className="mb-2">This page shows how to integrate a GHL form. To use your own forms:</p>
              <ol className="list-decimal ml-5 space-y-1 mt-2">
                <li>Log in to GHL</li>
                <li>Go to Forms</li>
                <li>Select a form and click "Share"</li>
                <li>Choose "Embed" option</li>
                <li>Look for the URL in the embed code (something like <code className="bg-gray-100 px-1 py-0.5 rounded">https://api.leadconnectorhq.com/widget/form/AbC123XyZ789</code>)</li>
                <li>Copy the ID from the URL (the part after "/form/")</li>
                <li>Use that ID in the <code className="bg-gray-100 px-1 py-0.5 rounded">formId</code> prop of the GHLFormEmbed component</li>
              </ol>
            </AlertDescription>
          </Alert>
          
          <div className="grid gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Newsletter Signup</CardTitle>
                <CardDescription>Example GHL form integration</CardDescription>
              </CardHeader>
              <CardContent>
                <GHLFormEmbed 
                  formId={exampleFormId}
                  height="600px"
                />
              </CardContent>
            </Card>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">Implementation Code</h2>
              <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
                <pre>
{`import GHLFormEmbed from '@/components/GHLFormEmbed';

// In your component
function YourComponent() {
  return (
    <GHLFormEmbed 
      formId="YOUR_GHL_FORM_ID_HERE" 
      height="600px"
      title="Optional Form Title"
      showTitle={true}
      description="Optional form description text."
      showDescription={true}
    />
  );
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 