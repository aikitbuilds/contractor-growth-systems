import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gift, ArrowLeft, Lock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { GHLFormEmbed } from '@/components/GHLFormEmbed';

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
      <p className="text-gray-700 italic text-sm">"{quote}"</p>
    </Card>
  );
}

function Checkout() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const plan = queryParams.get('plan') || 'early'; // Default to early bird
  
  // Effect to scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const listPrice = 3895;
  const earlyBirdPrice = 2895;
  const discountAmount = listPrice - earlyBirdPrice; // $1000
  const isEarlyBird = plan !== 'standard';
  const displayPrice = isEarlyBird ? earlyBirdPrice : listPrice;

  // Function to format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2
    }).format(value);
  };

  // Helper function to get the appropriate GHL form ID based on plan
  const getFormId = (isEarlyBird: boolean): string => {
    // Replace these with your actual GHL form IDs
    return isEarlyBird ? 'bWJeCTvmhZPem9goQjRf' : 'U76ZUQnsAcARA2A5JmA5';
  };

  // Helper function to get appropriate form height
  const getFormHeight = (): string => {
    return '1200px'; // Increased height to show more of the form without scrolling
  };

  // Testimonial Data
  const testimonials: TestimonialProps[] = [
    {
      quote: "I closed my first roofing deal worth $24,500 just 18 days into the program. The AI tools made proposal creation incredibly fast, and the sales scripts worked exactly as promised.",
      author: "Michael Rodriguez",
      title: "Solar Installer, California",
      imageSrc: "/Images/team1.png"
    },
    {
      quote: "Adding solar to our roofing business has increased our average ticket by 50%. The operating system they provide let us hit the ground running without hiring additional staff.",
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
      <Navbar />

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
              {/* Link back to bootcamp page */}
              <Link to="/roof-sales-bootcamp" className="flex items-center text-primary hover:text-primary/80 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-1" />
                <span>Back to Bootcamp Details</span>
              </Link>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              {isEarlyBird ? 'Secure Your Early Bird Spot' : 'Secure Your Bootcamp Spot'}
            </h1>

            <div className="grid md:grid-cols-3 gap-8">
              {/* GHL Form and Order Summary */}
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
                            <span className="text-secondary">Early Bird Special (Save {formatCurrency(discountAmount)})</span>
                          ) : (
                            <span>Standard Pricing</span>
                          )}
                        </p>
                      </div>
                      <p className="font-semibold">{formatCurrency(displayPrice)}</p>
                    </div>
                    {/* Add List Price display if needed */}
                    {!isEarlyBird && (
                       <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                         <p>List Price:</p>
                         <p>{formatCurrency(listPrice)}</p>
                       </div>
                    )}
                    {isEarlyBird && (
                       <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                         <p>List Price:</p>
                         <p className="line-through">{formatCurrency(listPrice)}</p>
                       </div>
                    )}

                    {/* What's Included List */}
                    <div className="my-4">
                      <p className="font-medium mb-2">What's Included:</p>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-start">
                          <span className="text-secondary mr-2">✓</span>
                          <span>8 Live Interactive Training Sessions</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary mr-2">✓</span>
                          <span>Complete Business Operating System</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary mr-2">✓</span>
                          <span>AI Sales Assistant & Tools</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary mr-2">✓</span>
                          <span>Lifetime Access to All Session Recordings</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary mr-2">✓</span>
                          <span>The "First Deal Closed" Guarantee</span>
                        </li>
                      </ul>
                    </div>

                    {/* Total */}
                    <div className="flex justify-between items-center font-bold text-lg pt-4 border-t">
                      <p>Total Amount:</p>
                      <p>{formatCurrency(displayPrice)}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* GHL Form Embed */}
                <Card>
                  <CardHeader>
                    <CardTitle>Complete Your Registration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <GHLFormEmbed 
                      formId={getFormId(isEarlyBird)}
                      height={getFormHeight()}
                      title="Solar to Roof Bootcamp Checkout"
                      showTitle={false}
                      containerClassName="w-full"
                    />
                    
                    <div className="flex items-center justify-center mt-4 text-gray-500 text-xs">
                      <div className="flex items-center">
                        <Lock className="h-3 w-3 mr-1" />
                        <span>Secure Payment Processing</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Bonus Column */}
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

                {/* Program Details */}
                <Card>
                  <CardHeader>
                    <CardTitle>Program Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h4 className="font-semibold">Start Date</h4>
                      <p className="text-gray-700">May 2025 TBD</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Schedule</h4>
                      <p className="text-gray-700">Tuesdays & Thursdays at 2:00 PM EST</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Duration</h4>
                      <p className="text-gray-700">4 Weeks (8 Sessions) + Ongoing Access</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Format</h4>
                      <p className="text-gray-700">Live Online via Zoom + On-Demand Software</p>
                    </div>
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