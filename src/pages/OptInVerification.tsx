import { OptInForm } from '@/components/OptInForm'
import type { OptInFormData } from '@/components/OptInForm'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Separator } from '@/components/ui/separator'
import { toast } from '@/components/ui/use-toast'

export default function OptInVerification() {
  const handleSubmit = async (data: OptInFormData) => {
    console.log('Form data submitted:', data)
    // In a real implementation, this would send data to your API
    // for processing and initiating the double opt-in flow
    
    // Simulate API call with delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Return success
    return { success: true }
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-primary">Opt-In Verification Page</h1>
            <p className="text-lg text-muted-foreground">
              This page demonstrates our toll-free messaging and email opt-in process
            </p>
          </div>
          
          <Card className="border-2 border-primary/10">
            <CardHeader className="bg-primary/5">
              <CardTitle>Toll-Free SMS & Email Opt-In Form</CardTitle>
              <CardDescription>
                Complete this form to subscribe to our communications
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <OptInForm onSubmit={handleSubmit} />
            </CardContent>
          </Card>
          
          <Separator className="my-10" />
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary">Our Opt-In Workflow</h2>
            
            <div className="grid gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-medium flex items-center">
                  <span className="bg-primary text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">1</span>
                  Form Submission
                </h3>
                <p className="mt-2 text-muted-foreground ml-11">
                  Users complete our contact form with clear opt-in language for both email and SMS communications.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-medium flex items-center">
                  <span className="bg-primary text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">2</span>
                  Double Opt-In Confirmation
                </h3>
                <p className="mt-2 text-muted-foreground ml-11">
                  Users receive email and SMS confirmation messages requiring explicit confirmation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-medium flex items-center">
                  <span className="bg-primary text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">3</span>
                  User Confirmation
                </h3>
                <p className="mt-2 text-muted-foreground ml-11">
                  Users must click the email confirmation link and reply "YES" to the SMS to complete the opt-in.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-medium flex items-center">
                  <span className="bg-primary text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">4</span>
                  Welcome Message
                </h3>
                <p className="mt-2 text-muted-foreground ml-11">
                  Upon confirmation, users receive welcome messages with clear unsubscribe instructions.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-green-800 mb-2">Toll-Free Number Verification</h2>
            <p className="text-green-700 mb-3">Our business uses this toll-free number for all text message communications:</p>
            <div className="text-2xl font-bold text-green-900">1-888-850-2095</div>
            <p className="text-sm text-green-600 mt-3">This number is registered with our SMS service provider and complies with all TCPA requirements.</p>
            <p className="text-sm text-green-600 mt-2"><strong>Company Address:</strong> PO Box 322, Seaside OR 97138</p>
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            <p>For a detailed visualization of our opt-in workflow, please visit:</p>
            <a
              href="/optin-workflow.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Detailed Opt-In Workflow Documentation
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 