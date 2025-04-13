import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ClipboardList, Users, BarChartBig, Building, Layers, SunMedium, AlertCircle } from 'lucide-react';
import GHLFormEmbed from '@/components/GHLFormEmbed';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

// Replace these with your actual GHL form IDs
// To find these IDs:
// 1. Login to GHL
// 2. Go to Forms
// 3. Select a form and click "Share"
// 4. Choose "Embed" option
// 5. Copy the ID from the URL in the embed code (it's after "/form/")
const formIds = {
  // Example of a valid form ID: dgR34l8MutlMrAcTZkxQ
  aiSystems: 'mlkl8LiqzNvKTi1rdfCW', // AI Systems Questionnaire ID
  marketingClaim: 'JovoX6D78235tKlDMNZs', // Solar Form
  newsletter: 'zDgDVKlXVCLG41Fp35Q4', // Newsletter form
  nextSteps: '',
  salesBuilder: '',
  solarRoofing: 'lD3l6bvq3sixBgUfIFcm', // Roof Solar Form
};

type FormType = 'aiSystems' | 'marketingClaim' | 'newsletter' | 'nextSteps' | 'salesBuilder' | 'solarRoofing';

export default function Forms() {
  const [activeForm, setActiveForm] = useState<FormType>('aiSystems');

  const formOptions = {
    aiSystems: {
      title: 'AI Systems Questionnaire',
      description: 'Evaluate your current AI systems integration and needs',
      icon: <ClipboardList className="h-5 w-5" />
    },
    marketingClaim: {
      title: 'Marketing Form - Claim Offer',
      description: 'Claim your special marketing offer',
      icon: <Layers className="h-5 w-5" />
    },
    newsletter: {
      title: 'Newsletter Form',
      description: 'Subscribe to our regular newsletter updates',
      icon: <Users className="h-5 w-5" />
    },
    nextSteps: {
      title: 'Next Steps Form',
      description: 'Complete this form to determine your next steps',
      icon: <BarChartBig className="h-5 w-5" />
    },
    salesBuilder: {
      title: 'Sales Builder Questionnaire',
      description: 'Build your customized sales strategy',
      icon: <Building className="h-5 w-5" />
    },
    solarRoofing: {
      title: 'Solar + Roofing Questionnaire',
      description: 'Evaluate your solar and roofing needs',
      icon: <SunMedium className="h-5 w-5" />
    }
  };

  const allFormsEmpty = Object.values(formIds).every(id => !id);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gradient-to-b from-white to-gray-100 pt-20">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary-700 mb-4">Forms</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete the form that best matches your needs or interests. Our team will review your submission and get back to you promptly.
            </p>
          </div>
          
          {allFormsEmpty ? (
            <Alert className="mb-8">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Form IDs Required</AlertTitle>
              <AlertDescription>
                <p className="mb-2">To display GHL forms, you need to add the form IDs to the <code className="bg-gray-100 px-1 py-0.5 rounded">formIds</code> object in <code className="bg-gray-100 px-1 py-0.5 rounded">src/pages/Forms.tsx</code>.</p>
                <p>To find these IDs:</p>
                <ol className="list-decimal ml-5 space-y-1 mt-2">
                  <li>Login to GHL</li>
                  <li>Go to Forms</li>
                  <li>Select a form and click "Share"</li>
                  <li>Choose "Embed" option</li>
                  <li>Copy the ID from the URL in the embed code (it's after "/form/")</li>
                </ol>
              </AlertDescription>
            </Alert>
          ) : null}
          
          <Tabs 
            defaultValue="aiSystems" 
            value={activeForm} 
            onValueChange={(value) => setActiveForm(value as FormType)} 
            className="w-full"
          >
            <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
              {Object.entries(formOptions).map(([key, option]) => (
                <TabsTrigger key={key} value={key} className="flex flex-col items-center gap-1 py-3 px-2">
                  {option.icon}
                  <span className="text-xs text-center leading-tight">{option.title.split(' ')[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {Object.entries(formOptions).map(([key, option]) => (
              <TabsContent key={key} value={key} className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>{option.title}</CardTitle>
                    <CardDescription>{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {formIds[key as FormType] ? (
                      <GHLFormEmbed 
                        formId={formIds[key as FormType]} 
                        height="800px" 
                      />
                    ) : (
                      <div className="p-8 text-center bg-gray-50 rounded-md">
                        <AlertCircle className="h-10 w-10 text-yellow-500 mx-auto mb-4" />
                        <h3 className="text-lg font-medium mb-2">Form ID Missing</h3>
                        <p className="text-gray-600 mb-4">
                          Please add the GHL form ID for "{option.title}" in the formIds object.
                        </p>
                        <code className="inline-block bg-gray-100 p-2 rounded text-sm">
                          {key}: "your-form-id-here"
                        </code>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
    </div>
  );
} 