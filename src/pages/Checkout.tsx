import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Navbar from '@/components/Navbar';

const Checkout = () => {
  // State for selected billing option
  const [billingOption, setBillingOption] = useState('monthly');
  
  // State for upsells/add-ons
  const [addOns, setAddOns] = useState<Record<string, boolean>>({
    onboarding: false,
    apiIntegration: false,
    premiumSupport: false
  });
  
  // Base prices for each tier
  const tierPrices = {
    foundation: { monthly: 500, annual: 5000 },
    accelerator: { monthly: 900, annual: 9000 },
    scale: { monthly: 1500, annual: 15000 }
  };
  
  // Add-on prices
  const addOnPrices = {
    onboarding: 1000,
    apiIntegration: 500,
    premiumSupport: { monthly: 100, annual: 1000 }
  };
  
  // Get current tier from URL query params
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tier = queryParams.get('tier') || 'foundation';
  
  // Calculate total price
  const calculateTotal = () => {
    const basePrice = billingOption === 'monthly' 
      ? tierPrices[tier as keyof typeof tierPrices].monthly 
      : tierPrices[tier as keyof typeof tierPrices].annual;
    
    let addOnTotal = 0;
    if (addOns.onboarding) addOnTotal += addOnPrices.onboarding;
    if (addOns.apiIntegration) addOnTotal += addOnPrices.apiIntegration;
    if (addOns.premiumSupport) {
      addOnTotal += billingOption === 'monthly' 
        ? addOnPrices.premiumSupport.monthly 
        : addOnPrices.premiumSupport.annual;
    }
    
    return basePrice + addOnTotal;
  };
  
  // Toggle add-on selection
  const toggleAddOn = (key: string) => {
    setAddOns(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  // Get tier display name
  const getTierName = () => {
    switch(tier) {
      case 'foundation': return 'Foundation Tier';
      case 'accelerator': return 'Accelerator Tier';
      case 'scale': return 'Scale Suite Tier';
      default: return 'Foundation Tier';
    }
  };
  
  // Get tier key features
  const getTierFeatures = () => {
    switch(tier) {
      case 'foundation':
        return [
          {id: "f1", name: "Core KPI Dashboard"},
          {id: "f2", name: "Basic AI Lead Scoring"},
          {id: "f3", name: "Basic AI Communication Helper"},
          {id: "f4", name: "Team Leaderboards"},
          {id: "f5", name: "Up to 5 users"}
        ];
      case 'accelerator':
        return [
          {id: "a1", name: "Enhanced KPIs"},
          {id: "a2", name: "Sales Funnel Analytics"},
          {id: "a3", name: "Basic AI Project Coordination"},
          {id: "a4", name: "Basic AI Market Trends"},
          {id: "a5", name: "Up to 15 users"}
        ];
      case 'scale':
        return [
          {id: "s1", name: "Advanced KPIs & Custom Reports"},
          {id: "s2", name: "Advanced Bid Optimizer"},
          {id: "s3", name: "AI Sales Performance Coach"},
          {id: "s4", name: "Team Goal Tracking"},
          {id: "s5", name: "Up to 30 users"}
        ];
      default:
        return [
          {id: "d1", name: "Core KPI Dashboard"},
          {id: "d2", name: "Basic AI Lead Scoring"},
          {id: "d3", name: "Up to 5 users"}
        ];
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Header Section */}
        <section className="bg-primary text-white py-10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center mb-4">
                <Link to="/pricing" className="flex items-center text-white/80 hover:text-white transition-colors">
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  <span>Back to Pricing</span>
                </Link>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">
                Complete Your Order
              </h1>
              <p className="text-xl text-secondary mt-2">
                You're just a few steps away from transforming your contracting business
              </p>
            </div>
          </div>
        </section>
        
        {/* Checkout Content Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Left Side - Order Summary */}
                <div className="md:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Plan: {getTierName()}</CardTitle>
                      <CardDescription>
                        Choose your billing cycle and additional services
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Billing Options */}
                      <div>
                        <h3 className="text-lg font-medium mb-3">Billing Cycle</h3>
                        <Tabs 
                          defaultValue={billingOption} 
                          onValueChange={setBillingOption}
                          className="w-full"
                        >
                          <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="monthly">Monthly</TabsTrigger>
                            <TabsTrigger value="annual">Annual (Save 16%)</TabsTrigger>
                          </TabsList>
                        </Tabs>
                      </div>
                      
                      {/* Selected Plan Features */}
                      <div>
                        <h3 className="text-lg font-medium mb-3">Included with Your Plan</h3>
                        <ul className="space-y-2">
                          {getTierFeatures().map((feature) => (
                            <li key={feature.id} className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{feature.name}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Upsell Options */}
                      <div>
                        <h3 className="text-lg font-medium mb-3">Enhance Your Plan</h3>
                        <div className="space-y-4">
                          {/* Onboarding Package */}
                          <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                            <div className="flex-grow">
                              <div className="flex items-center">
                                <h4 className="font-medium">Premium Onboarding Package</h4>
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Info className="h-4 w-4 text-gray-400 ml-1 cursor-help" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs">Get up and running faster with dedicated onboarding support, custom setup, and team training.</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </div>
                              <p className="text-sm text-gray-600">One-time fee: ${addOnPrices.onboarding}</p>
                            </div>
                            <Switch 
                              checked={addOns.onboarding}
                              onCheckedChange={() => toggleAddOn('onboarding')}
                            />
                          </div>
                          
                          {/* API Integration */}
                          <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                            <div className="flex-grow">
                              <div className="flex items-center">
                                <h4 className="font-medium">Custom API Integration</h4>
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Info className="h-4 w-4 text-gray-400 ml-1 cursor-help" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs">Connect ContractorScale AI with your existing software systems for seamless data flow.</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </div>
                              <p className="text-sm text-gray-600">One-time fee: ${addOnPrices.apiIntegration}</p>
                            </div>
                            <Switch 
                              checked={addOns.apiIntegration}
                              onCheckedChange={() => toggleAddOn('apiIntegration')}
                            />
                          </div>
                          
                          {/* Premium Support */}
                          <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                            <div className="flex-grow">
                              <div className="flex items-center">
                                <h4 className="font-medium">Premium Support Package</h4>
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Info className="h-4 w-4 text-gray-400 ml-1 cursor-help" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs">Priority support with faster response times and dedicated support specialists.</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </div>
                              <p className="text-sm text-gray-600">
                                {billingOption === 'monthly' 
                                  ? `$${addOnPrices.premiumSupport.monthly}/month` 
                                  : `$${addOnPrices.premiumSupport.annual}/year`}
                              </p>
                            </div>
                            <Switch 
                              checked={addOns.premiumSupport}
                              onCheckedChange={() => toggleAddOn('premiumSupport')}
                            />
                          </div>
                        </div>
                      </div>
                      
                      {/* Downsell Options */}
                      {(tier === 'accelerator' || tier === 'scale') && (
                        <div>
                          <h3 className="text-lg font-medium mb-3">Looking for something different?</h3>
                          <div className="p-4 border rounded-lg bg-gray-50">
                            <p className="text-sm mb-3">
                              Not sure if this plan is right for you? Consider our other options:
                            </p>
                            {tier === 'scale' && (
                              <Link to="/checkout?tier=accelerator">
                                <Button variant="outline" className="mb-2 w-full text-left justify-start">
                                  <ArrowLeft className="h-4 w-4 mr-2" />
                                  Switch to Accelerator Tier (${billingOption === 'monthly' ? tierPrices.accelerator.monthly : tierPrices.accelerator.annual}/{billingOption === 'monthly' ? 'month' : 'year'})
                                </Button>
                              </Link>
                            )}
                            {(tier === 'accelerator' || tier === 'scale') && (
                              <Link to="/checkout?tier=foundation">
                                <Button variant="outline" className="w-full text-left justify-start">
                                  <ArrowLeft className="h-4 w-4 mr-2" />
                                  Switch to Foundation Tier (${billingOption === 'monthly' ? tierPrices.foundation.monthly : tierPrices.foundation.annual}/{billingOption === 'monthly' ? 'month' : 'year'})
                                </Button>
                              </Link>
                            )}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
                
                {/* Right Side - Payment Form */}
                <div>
                  <Card className="sticky top-24">
                    <CardHeader>
                      <CardTitle>Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>{getTierName()}</span>
                          <span>${billingOption === 'monthly' 
                            ? tierPrices[tier as keyof typeof tierPrices].monthly 
                            : tierPrices[tier as keyof typeof tierPrices].annual}/{billingOption}</span>
                        </div>
                        
                        {addOns.onboarding && (
                          <div className="flex justify-between">
                            <span>Premium Onboarding</span>
                            <span>${addOnPrices.onboarding} (one-time)</span>
                          </div>
                        )}
                        
                        {addOns.apiIntegration && (
                          <div className="flex justify-between">
                            <span>Custom API Integration</span>
                            <span>${addOnPrices.apiIntegration} (one-time)</span>
                          </div>
                        )}
                        
                        {addOns.premiumSupport && (
                          <div className="flex justify-between">
                            <span>Premium Support</span>
                            <span>${billingOption === 'monthly' 
                              ? addOnPrices.premiumSupport.monthly 
                              : addOnPrices.premiumSupport.annual}/{billingOption}</span>
                          </div>
                        )}
                        
                        <div className="border-t pt-2 mt-2">
                          <div className="flex justify-between font-bold">
                            <span>Total:</span>
                            <span>${calculateTotal()}</span>
                          </div>
                          <div className="text-sm text-gray-500 text-right">
                            {billingOption === 'monthly' ? 'Billed monthly' : 'Billed annually'}
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="font-medium">Payment Information</h3>
                        
                        <div className="space-y-2">
                          <Label htmlFor="card_name">Name on Card</Label>
                          <Input id="card_name" placeholder="John Smith" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="card_number">Card Number</Label>
                          <Input id="card_number" placeholder="1234 5678 9012 3456" />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" placeholder="123" />
                          </div>
                        </div>
                      </div>
                      
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                        Complete Purchase
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                      
                      <p className="text-xs text-gray-500 text-center">
                        By completing your purchase, you agree to our Terms of Service and Privacy Policy.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Checkout; 