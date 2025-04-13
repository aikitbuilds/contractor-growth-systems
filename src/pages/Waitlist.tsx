import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle, Loader2 } from 'lucide-react';

// Map tier IDs to display names
const tierNames: Record<string, string> = {
  foundation: 'Foundation Tier',
  accelerator: 'Accelerator Tier',
  scale: 'Scale Suite Tier',
};

function Waitlist() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const initialTier = queryParams.get('tier') || '';

  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [tier, setTier] = useState(initialTier);
  const [message, setMessage] = useState(''); // Optional message
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Update tier select if query parameter changes
  useEffect(() => {
    const tierParam = queryParams.get('tier');
    if (tierParam && tierNames[tierParam]) {
      setTier(tierParam);
    }
  }, [queryParams]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!tier) {
        setErrorMessage('Please select a desired tier.');
        setSubmitStatus('error');
        return;
    }
    setIsLoading(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // --- Backend API Call ---
      const response = await fetch('/api/waitlist-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            email,
            company,
            phone,
            tier: tierNames[tier] || 'Unknown', // Send friendly name
            message,
            urgency: 'waiting list for saas' // As requested
         }),
      });

      if (!response.ok) {
        // Try to get error message from backend response
        const errorData = await response.json().catch(() => ({ message: 'An unknown error occurred during submission.' }));
        throw new Error(errorData.message || `Server responded with status ${response.status}`);
      }

      // --- Success ---
      setSubmitStatus('success');
      // Reset form fields on success? Optional.
      // setName(''); setEmail(''); setCompany(''); setPhone(''); setTier(''); setMessage('');

    } catch (error) {
      console.error('Waitlist submission error:', error);
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.');
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="bg-white shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-primary">
                Join Our Waitlist!
              </CardTitle>
              <p className="text-gray-600 mt-2">
                We're excited about your interest! We're currently operating at full capacity to ensure the best experience for our current users. Please fill out the form below to secure your spot on the waitlist. We'll notify you as soon as space becomes available.
              </p>
            </CardHeader>
            <CardContent>
              {/* Success Message */}
              {submitStatus === 'success' ? (
                <Alert variant="default" className="bg-green-50 border-green-200 text-green-800">
                  <CheckCircle className="h-5 w-5" />
                  <AlertTitle>Success!</AlertTitle>
                  <AlertDescription>
                    You've been added to the waitlist for the {tierNames[tier] || 'selected tier'}! We'll notify you via email as soon as a spot becomes available.
                  </AlertDescription>
                </Alert>
              ) : (
                /* Waitlist Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <Alert variant="destructive">
                      <AlertTitle>Submission Failed</AlertTitle>
                      <AlertDescription>{errorMessage}</AlertDescription>
                    </Alert>
                  )}

                  {/* Form Fields */}
                  <Input
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    aria-label="Full Name"
                  />
                  <Input
                    placeholder="Email Address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-label="Email Address"
                  />
                  <Input
                    placeholder="Company Name (Optional)"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    aria-label="Company Name"
                  />
                   <Input
                    placeholder="Phone Number (Optional)"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    aria-label="Phone Number"
                  />

                  <div>
                     <label htmlFor="tier-select" className="block text-sm font-medium text-gray-700 mb-1">Desired Tier</label>
                    <Select
                        value={tier}
                        onValueChange={setTier}
                        required // Make selection mandatory
                    >
                      <SelectTrigger id="tier-select" aria-label="Desired Tier">
                        <SelectValue placeholder="Select desired tier..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="foundation">Foundation Tier</SelectItem>
                        <SelectItem value="accelerator">Accelerator Tier</SelectItem>
                        <SelectItem value="scale">Scale Suite Tier</SelectItem>
                      </SelectContent>
                    </Select>
                    {!tier && submitStatus === 'error' && errorMessage.includes('select a desired tier') && (
                        <p className="text-sm text-red-600 mt-1">Please select the tier you're interested in.</p>
                    )}
                  </div>

                   <Textarea
                    placeholder="Anything else you'd like to share? (Optional)"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    aria-label="Optional Message"
                  />

                  {/* Submit Button */}
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Adding to Waitlist...</>
                    ) : (
                      'Join Waitlist Now'
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default Waitlist; 