import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function EmailTestPage() {
  const [email, setEmail] = useState('michaelcongtran@gmail.com')
  const [name, setName] = useState('Michael')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSendConfirmationEmail = async () => {
    if (!email || !name) {
      setMessage('Please enter both email and name')
      setStatus('error')
      return
    }

    setStatus('loading')
    setMessage('Sending confirmation email...')

    try {
      const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb;">Welcome to Our Mailing List!</h1>
          <p>Hello ${name},</p>
          <p>Thank you for subscribing to the Contractor Growth Systems mailing list. We're excited to share valuable insights and updates with you!</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #1f2937; margin-top: 0;">What to Expect</h2>
            <ul style="list-style-type: none; padding-left: 0;">
              <li style="margin-bottom: 8px;">📈 Latest industry trends and insights</li>
              <li style="margin-bottom: 8px;">💡 Exclusive tips for contractor growth</li>
              <li style="margin-bottom: 8px;">🎯 Special offers and promotions</li>
              <li style="margin-bottom: 8px;">📊 Success stories from our community</li>
            </ul>
          </div>
          
          <p>You can manage your subscription preferences or unsubscribe at any time by clicking the link at the bottom of our emails.</p>
          <p>Best regards,<br>The Contractor Growth Systems Team</p>
        </div>
      `;
      
      const response = await fetch('./api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: email,
          subject: 'Welcome to Contractor Growth Systems Mailing List',
          html: htmlContent,
          name: name
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setStatus('success')
        setMessage('Confirmation email sent successfully!')
      } else {
        setStatus('error')
        setMessage(`Failed to send email: ${data.message || data.error || 'Unknown error'}`)
      }
    } catch (error) {
      setStatus('error')
      setMessage(`Error: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Email Service Test</h1>
          <p className="text-gray-600 mb-8">
            Use this page to test the email service configuration. Enter an email address and name to send a test email.
          </p>
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Send Mailing List Confirmation</CardTitle>
              <CardDescription>
                Test the mailing list confirmation email
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="recipient@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Recipient Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                {message && (
                  <div className={`p-3 rounded-md ${
                    status === 'success' ? 'bg-green-100 text-green-800' :
                    status === 'error' ? 'bg-red-100 text-red-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {message}
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={handleSendConfirmationEmail} 
                disabled={status === 'loading'}
                className="w-full"
              >
                {status === 'loading' ? 'Sending...' : 'Send Confirmation Email'}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
} 