import { useState } from 'react'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { toast } from '@/components/ui/use-toast'

export default function TestIntegrations() {
  // Email Test State
  const [emailData, setEmailData] = useState({
    to: '',
    subject: 'Confirmation Email Test',
    message: 'This is a test confirmation email from BDC.'
  })
  
  // GHL Test State
  const [ghlData, setGhlData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: ''
  })
  
  const [isLoading, setIsLoading] = useState({
    email: false,
    ghl: false
  })
  
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEmailData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleGhlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setGhlData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleEmailTest = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!emailData.to) {
      toast({
        title: "Error",
        description: "Please enter a recipient email address",
        variant: "destructive"
      })
      return
    }
    
    setIsLoading(prev => ({ ...prev, email: true }))
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      })
      
      const result = await response.json()
      
      if (result.success) {
        toast({
          title: "Email Sent",
          description: "Test email was sent successfully!",
        })
      } else {
        throw new Error(result.error || 'Failed to send email')
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send email",
        variant: "destructive"
      })
      console.error('Email test error:', error)
    } finally {
      setIsLoading(prev => ({ ...prev, email: false }))
    }
  }
  
  const handleGhlTest = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!ghlData.email || !ghlData.firstName || !ghlData.lastName) {
      toast({
        title: "Error",
        description: "Please fill out all required fields",
        variant: "destructive"
      })
      return
    }
    
    setIsLoading(prev => ({ ...prev, ghl: true }))
    
    try {
      const response = await fetch('/api/ghl/create-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ghlData),
      })
      
      const result = await response.json()
      
      if (result.success) {
        toast({
          title: "GHL Contact Created",
          description: `Successfully created contact with ID: ${result.contactId}`,
        })
      } else {
        throw new Error(result.error || 'Failed to create GHL contact')
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to create GHL contact",
        variant: "destructive"
      })
      console.error('GHL test error:', error)
    } finally {
      setIsLoading(prev => ({ ...prev, ghl: false }))
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Integration Tests</h1>
            <p className="text-muted-foreground mt-2">
              Test email confirmations and Go High Level API integration
            </p>
          </div>
          
          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="email">Email Testing</TabsTrigger>
              <TabsTrigger value="ghl">GHL API Testing</TabsTrigger>
            </TabsList>
            
            <TabsContent value="email" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Test Email Confirmation</CardTitle>
                  <CardDescription>
                    Send a test confirmation email to verify email delivery is working correctly
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleEmailTest}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="to">Recipient Email</Label>
                      <Input
                        id="to"
                        name="to"
                        type="email"
                        value={emailData.to}
                        onChange={handleEmailChange}
                        placeholder="recipient@example.com"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={emailData.subject}
                        onChange={handleEmailChange}
                        placeholder="Email Subject"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Input
                        id="message"
                        name="message"
                        value={emailData.message}
                        onChange={handleEmailChange}
                        placeholder="Email Message"
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={isLoading.email}
                    >
                      {isLoading.email ? "Sending..." : "Send Test Email"}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
              
              <div className="mt-6 p-4 bg-muted rounded-lg text-sm">
                <h3 className="font-medium mb-2">Email Configuration Info</h3>
                <p>Current email configuration:</p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Server: {import.meta.env.VITE_EMAIL_SERVER_HOST}:{import.meta.env.VITE_EMAIL_SERVER_PORT}</li>
                  <li>From: {import.meta.env.VITE_EMAIL_FROM}</li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="ghl" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Test Go High Level Integration</CardTitle>
                  <CardDescription>
                    Create a test contact in Go High Level to verify API connectivity
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleGhlTest}>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name <span className="text-red-500">*</span></Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={ghlData.firstName}
                          onChange={handleGhlChange}
                          placeholder="John"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name <span className="text-red-500">*</span></Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={ghlData.lastName}
                          onChange={handleGhlChange}
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={ghlData.email}
                        onChange={handleGhlChange}
                        placeholder="john.doe@example.com"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={ghlData.phone}
                        onChange={handleGhlChange}
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company</Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        value={ghlData.companyName}
                        onChange={handleGhlChange}
                        placeholder="Company Name"
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={isLoading.ghl}
                    >
                      {isLoading.ghl ? "Creating..." : "Create GHL Contact"}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
              
              <div className="mt-6 p-4 bg-muted rounded-lg text-sm">
                <h3 className="font-medium mb-2">GHL API Configuration</h3>
                <p>Current GHL configuration:</p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>API Key: {import.meta.env.VITE_GHL_API_KEY ? "Configured ✓" : "Not configured ✗"}</li>
                </ul>
                <p className="mt-2 text-muted-foreground">The API key is securely stored in your environment variables.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
} 