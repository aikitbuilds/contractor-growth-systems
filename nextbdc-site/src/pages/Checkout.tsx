import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import Navbar from '@/components/Navbar'; // Will copy later
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { AlertCircle, Gift, Star, ArrowLeft, Lock, CreditCard } from 'lucide-react';

// Added Testimonial Type (or import if defined elsewhere)
interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
  imageSrc: string;
}

// Simple Testimonial Card Component
function TestimonialCard({ quote, author, title, imageSrc }: TestimonialProps) {
  return (
    <Card className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
          <img 
            src={imageSrc} // Assumes images are in public/Images
            alt={author} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-md">{author}</h4>
          <p className="text-gray-600 text-sm">{title}</p>
        </div>
      </div>
      {/* Star rating can be added if desired */}
      <p className="text-gray-700 italic text-sm">"{quote}"</p>
    </Card>
  );
}

function Checkout() {
  const [includeUpsell, setIncludeUpsell] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const plan = queryParams.get('plan') || 'early'; // Default to early bird
  
  // Effect to scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const earlyBirdPrice = 1895;
  const standardPrice = 2495;
  const upsellPrice = 495; // 2x 1-on-1 Coaching Sessions
  
  const basePrice = plan === 'standard' ? standardPrice : earlyBirdPrice;
  const totalPrice = basePrice + (includeUpsell ? upsellPrice : 0);
  const isEarlyBird = plan !== 'standard';

  // Function to format currency (remains the same)
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2
    }).format(value);
  };

  // Testimonial Data (Copied from RoofSalesBootcamp page context)
  // Image paths assume they will be in the public/Images folder
  const testimonials: TestimonialProps[] = [
    {
      quote: "I closed my first roofing deal worth $24,500 just 18 days into the program. The AI tools made proposal creation incredibly fast, and the sales scripts worked exactly as promised.",
      author: "Michael Rodriguez",
      title: "Solar Installer, California",
      imageSrc: "/Images/team1.png"
    },
    {
      quote: "Adding solar to our roofing business has increased our average ticket by 300%. The operating system they provide let us hit the ground running without hiring additional staff.",
      author: "Sarah Johnson",
      title: "Roofing Contractor, Texas",
      imageSrc: "/Images/team2.png"
    },
    {
      quote: "The AI tools alone are worth the price of admission. We've automated 80% of our proposal process and increased our closing rate from 22% to 37% using the scripts and methodologies.",
      author: "David Chen",
      title: "Home Services, Florida",
      imageSrc: "/Images/team3.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* <Navbar /> */} {/* Placeholder for Navbar */}

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Testimonials Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">Hear From Our Successful Bootcamp Graduates</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.author} {...testimonial} />
              ))}
            </div>
          </section>

          {/* Main Checkout Area */}
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              {/* Link back to root (bootcamp page) */}
              <Link to="/" className="flex items-center text-primary hover:text-primary/80 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-1" />
                <span>Back to Bootcamp Details</span>
              </Link>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              {isEarlyBird ? 'Secure Your Early Bird Spot' : 'Secure Your Bootcamp Spot'}
            </h1>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Order Summary & Payment */}
              <div className="md:col-span-2">
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* Bootcamp Item */}
                    <div className="flex justify-between items-center border-b pb-4 mb-4">
                      <div>
                        <p className="font-semibold">BDC Solar-to-Roof Bootcamp</p>
                        <p className="text-sm text-gray-700 font-medium">
                          {isEarlyBird ? (
                            <span className="text-secondary">Early Bird Special</span>
                          ) : (
                            <span>Standard Pricing</span>
                          )}
                        </p>
                      </div>
                      <p className="font-semibold">{formatCurrency(basePrice)}</p>
                    </div>
                    
                    {/* Optional Upsell Display */}
                    {includeUpsell && (
                      <div className="flex justify-between items-center border-b pb-4 mb-4">
                        <div>
                          <p className="font-semibold">Optional Add-on:</p>
                          <p className="text-sm text-gray-600">2x 1-on-1 Coaching Sessions</p>
                        </div>
                        <p className="font-semibold">{formatCurrency(upsellPrice)}</p>
                      </div>
                    )}

                    {/* Total */}
                    <div className="flex justify-between items-center font-bold text-lg pt-4">
                      <p>Total Amount:</p>
                      <p>{formatCurrency(totalPrice)}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Details Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Billing & Payment Details</CardTitle>
                  </CardHeader>
                  {/* Replace with actual form handling later */}
                  <form onSubmit={(e) => {e.preventDefault(); alert('Stripe integration needed!');}}>
                    <CardContent className="space-y-4">
                      {/* Added Billing Info Inputs */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input placeholder="First Name" required/>
                        <Input placeholder="Last Name" required/>
                      </div>
                      <Input placeholder="Email Address" type="email" required/>
                      <Input placeholder="Phone Number" type="tel" required/>
                      <Input placeholder="Billing Address" required/>
                      <div className="flex gap-4">
                        <Input placeholder="City" className="flex-1" required/>
                        <Input placeholder="State" className="w-20" required/>
                        <Input placeholder="ZIP Code" className="flex-1" required/>
                      </div>
                      <Input placeholder="Company Website (Optional)" type="url"/>

                      {/* Stripe Elements Placeholder */}
                      <div className="pt-4">
                        <p className="font-medium mb-2 text-sm">Payment Information (Securely handled by Stripe)</p>
                        <div className="p-4 border rounded-md bg-gray-50 text-center text-gray-500">
                          <p className="font-semibold">[ Stripe Card Input Placeholder ]</p>
                          <p className="text-sm">Actual Stripe Elements will replace this area.</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col items-center pt-6">
                      {/* Moved Button Up */}
                      <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary-700 text-white text-lg mb-4">
                        Complete Purchase - {formatCurrency(totalPrice)}
                      </Button>
                      {/* Added Security Info */}
                      <div className="flex items-center justify-center space-x-4 text-gray-500 text-xs">
                        <div className="flex items-center">
                          <Lock className="h-3 w-3 mr-1" />
                          <span>Secure SSL Encrypted Checkout</span>
                        </div>
                        <span className="hidden sm:inline">|</span>
                        <div className="flex items-center space-x-1">
                          <CreditCard className="h-3 w-3 mr-1" />
                          <span>Cards processed by Stripe</span>
                        </div>
                      </div>
                    </CardFooter>
                  </form>
                </Card>
              </div>

              {/* Bonus & Upsell Column */}
              <div className="md:col-span-1 space-y-6">
                {/* Early Bird Bonus */}
                {isEarlyBird && (
                  <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200">
                    <CardHeader className="flex flex-row items-center space-x-3 pb-2">
                      <Gift className="h-6 w-6 text-green-600" />
                      <CardTitle className="text-green-800">Early Bird Bonus!</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        As an early bird, you get instant access to our 
                        <strong>AI Prompt Library for Contractors</strong> 
                        (valued at $199) absolutely free!
                      </p>
                    </CardContent>
                  </Card>
                )}

                {/* Optional Upsell */}
                <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-primary flex items-center">
                      <Star className="h-5 w-5 text-yellow-500 mr-2" />
                      Optional Add-on
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Accelerate your results with two <strong>1-on-1 personalized coaching sessions</strong> with Steve Huber.
                    </p>
                    <div className="flex items-center space-x-2 bg-white p-3 rounded-md border">
                      <Checkbox 
                        id="upsell-checkbox"
                        checked={includeUpsell}
                        onCheckedChange={() => setIncludeUpsell(!includeUpsell)}
                      />
                      <label
                        htmlFor="upsell-checkbox"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer flex-grow"
                      >
                        Add 2 Coaching Sessions <span className="font-semibold">(+{formatCurrency(upsellPrice)})</span>
                      </label>
                    </div>
                  </CardContent>
                </Card>

                {/* Secure Checkout Info */}
                <Card className="bg-gray-50 border border-gray-200">
                  <CardContent className="pt-6 text-center text-gray-600 text-sm">
                    <AlertCircle className="h-5 w-5 mx-auto mb-2 text-gray-400" />
                    <p>Your payment is processed securely by Stripe.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Checkout; 