import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { sendEmail } from '@/services/email';

export function EmailTest() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSendTestEmail = async () => {
    if (!email || !name) {
      setMessage('Please enter both email and name');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setMessage('Sending email...');

    try {
      const result = await sendEmail({
        to: email,
        subject: 'Test Email from Contractor Growth Systems',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #2563eb;">Test Email</h1>
            <p>Hello ${name},</p>
            <p>This is a test email from Contractor Growth Systems.</p>
            <p>If you're receiving this, the email service is working correctly!</p>
            <p>Best regards,<br>The Contractor Growth Systems Team</p>
          </div>
        `,
      });

      if (result.success) {
        setStatus('success');
        setMessage('Email sent successfully!');
      } else {
        setStatus('error');
        setMessage(`Failed to send email: ${result.error}`);
      }
    } catch (error) {
      setStatus('error');
      setMessage(`Error: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Email Service Test</CardTitle>
        <CardDescription>
          Test the email service configuration
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
          onClick={handleSendTestEmail} 
          disabled={status === 'loading'}
          className="w-full"
        >
          {status === 'loading' ? 'Sending...' : 'Send Test Email'}
        </Button>
      </CardFooter>
    </Card>
  );
} 