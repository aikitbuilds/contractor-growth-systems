import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronDown, ChevronUp, Info, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';

const Pricing = () => {
  // State for feature toggles
  const [expandedFeatures, setExpandedFeatures] = useState<string[]>([]);
  // State for billing period
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annually'>('monthly');

  // Toggle feature expansion
  const toggleFeature = (featureId: string) => {
    setExpandedFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId) 
        : [...prev, featureId]
    );
  };

  // Define pricing tiers
  const pricingTiers = [
    {
      id: 'foundation',
      name: 'Foundation Tier',
      description: 'Get started with AI-powered tools for contracting businesses',
      price: billingPeriod === 'monthly' ? 500 : 5000,
      annualSavings: '16%',
      userLimit: '5 users',
      idealFor: 'Teams of 3-5 people',
      highlights: [
        'Core KPI Dashboard',
        'Basic AI Lead Scoring',
        'Basic AI Communication Helper',
        'Team Leaderboards'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      id: 'accelerator',
      name: 'Accelerator Tier',
      description: 'Advanced AI tools to scale your contracting business',
      price: billingPeriod === 'monthly' ? 900 : 9000,
      annualSavings: '16%',
      userLimit: '15 users',
      idealFor: 'Teams of 5-15 people',
      highlights: [
        'Enhanced KPIs',
        'Sales Funnel Analytics',
        'Basic AI Project Coordination',
        'Basic AI Market Trends'
      ],
      cta: 'Accelerate Growth',
      popular: true
    },
    {
      id: 'scale',
      name: 'Scale Suite Tier',
      description: 'Enterprise-level AI solutions for large contracting operations',
      price: billingPeriod === 'monthly' ? 1500 : 15000,
      annualSavings: '16%',
      userLimit: '30 users',
      idealFor: 'Teams of 15-30 people',
      highlights: [
        'Advanced KPIs & Custom Reports',
        'Advanced Bid Optimizer',
        'AI Sales Performance Coach',
        'Team Goal Tracking'
      ],
      cta: 'Scale Your Business',
      popular: false
    }
  ];

  // Define features with descriptions
  const features = [
    {
      id: 'dashboards',
      category: 'Dashboards & Analytics',
      items: [
        {
          id: 'core-kpi',
          name: 'Core KPI Dashboard',
          tiers: ['foundation', 'accelerator', 'scale'],
          description: 'Track essential metrics like revenue, leads, conversions, and project timelines in a centralized dashboard. Visualize your business performance in real-time to make data-driven decisions.'
        },
        {
          id: 'enhanced-kpi',
          name: 'Enhanced KPIs',
          tiers: ['accelerator', 'scale'],
          description: 'Gain deeper insights with advanced KPIs including customer acquisition cost, lifetime value, and team productivity metrics. Compare performance across time periods and set customizable goals.'
        },
        {
          id: 'advanced-kpi',
          name: 'Advanced KPIs & Custom Reports',
          tiers: ['scale'],
          description: 'Build fully customized reports and dashboards with unlimited metrics. Includes executive summaries, predictive analytics, and the ability to create custom KPIs specific to your business needs.'
        },
        {
          id: 'sales-funnel',
          name: 'Sales Funnel Analytics',
          tiers: ['accelerator', 'scale'],
          description: 'Visualize your entire sales pipeline with conversion rates at each stage. Identify bottlenecks and opportunities to optimize your sales process for maximum efficiency.'
        }
      ]
    },
    {
      id: 'ai-tools',
      category: 'AI Tools',
      items: [
        {
          id: 'lead-scoring',
          name: 'Basic AI Lead Scoring',
          tiers: ['foundation', 'accelerator', 'scale'],
          description: 'Automatically rank leads based on likelihood to convert using AI-powered analysis of customer data and behavior patterns. Prioritize your sales efforts on the most promising opportunities.'
        },
        {
          id: 'advanced-bid',
          name: 'Advanced Bid Optimizer',
          tiers: ['scale'],
          description: 'AI-powered tool that analyzes historical project data, material costs, and market rates to recommend optimal pricing strategies for your bids. Increases win rates while maintaining healthy margins.'
        },
        {
          id: 'communication-helper',
          name: 'Basic AI Communication Helper',
          tiers: ['foundation', 'accelerator', 'scale'],
          description: 'AI-assisted email and message templates for consistent client communications. Includes automated follow-ups and basic sentiment analysis to guide your customer interactions.'
        },
        {
          id: 'project-coordination',
          name: 'Basic AI Project Coordination',
          tiers: ['accelerator', 'scale'],
          description: 'AI suggests optimal scheduling, resource allocation, and identifies potential conflicts before they arise. Keeps projects on track with automated milestone tracking and early warning systems.'
        },
        {
          id: 'performance-coach',
          name: 'AI Sales Performance Coach',
          tiers: ['scale'],
          description: 'Personalized AI coaching for each team member based on their performance data. Provides tailored recommendations, identifies skill gaps, and suggests targeted training opportunities.'
        },
        {
          id: 'market-trends',
          name: 'Basic AI Market Trends',
          tiers: ['accelerator', 'scale'],
          description: 'AI-powered analysis of local market conditions and industry trends. Receive alerts about emerging opportunities, competitive threats, and changing market dynamics in your service area.'
        }
      ]
    },
    {
      id: 'team-tools',
      category: 'Team Tools',
      items: [
        {
          id: 'leaderboards',
          name: 'Team Leaderboards',
          tiers: ['foundation', 'accelerator', 'scale'],
          description: 'Gamified performance tracking to boost team motivation and healthy competition. Recognize top performers and celebrate wins across various metrics and time periods.'
        },
        {
          id: 'goal-tracking',
          name: 'Team Goal Tracking',
          tiers: ['scale'],
          description: 'Comprehensive goal setting and tracking system for individuals and teams. Align everyone around common objectives with progress visualization and automated check-ins.'
        }
      ]
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: 'Can I switch between tiers later?',
      answer: 'Yes, you can upgrade or downgrade your subscription at any time. When upgrading, you\'ll gain immediate access to additional features. When downgrading, changes will take effect at the start of your next billing cycle.'
    },
    {
      question: 'Is there a long-term contract?',
      answer: 'No long-term commitment is required. Monthly plans can be canceled anytime. Annual plans provide significant savings and can be canceled before renewal, but are non-refundable for the current term.'
    },
    {
      question: 'What kind of support is included?',
      answer: 'All plans include standard email support with a 24-hour response time. Accelerator and Scale plans include priority support with faster response times. Premium support packages are available as add-ons for all tiers.'
    },
    {
      question: 'Do you offer custom solutions?',
      answer: 'Yes, for larger organizations or those with specific requirements, we offer custom enterprise packages. Contact our sales team for a personalized consultation and tailored solution.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Header Section */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                AI-Powered Growth for Contractors
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Choose the plan that's right for your contracting business
              </p>
              <Tabs defaultValue={billingPeriod} onValueChange={(value) => setBillingPeriod(value as 'monthly' | 'annually')} className="w-full max-w-md mx-auto">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="annually">Annually (Save 16%)</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </section>
        
        {/* Pricing Tiers */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {pricingTiers.map((tier) => (
                  <Card key={tier.id} className={`flex flex-col relative ${tier.popular ? 'border-primary shadow-lg' : ''}`}>
                    {tier.popular && (
                      <Badge className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/2 bg-secondary px-4 py-1">
                        Most Popular
                      </Badge>
                    )}
                    <CardHeader>
                      <CardTitle>{tier.name}</CardTitle>
                      <CardDescription>{tier.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="mb-6">
                        <p className="text-3xl font-bold">${tier.price}{billingPeriod === 'monthly' ? '/month' : '/year'}</p>
                        {billingPeriod === 'annually' && (
                          <p className="text-sm text-green-700">Save {tier.annualSavings} with annual billing</p>
                        )}
                      </div>
                      <div className="mb-6">
                        <p className="text-sm font-medium">
                          <span className="font-bold">{tier.userLimit}</span>
                          <span className="mx-2">•</span>
                          <span>Ideal for: {tier.idealFor}</span>
                        </p>
                      </div>
                      <ul className="space-y-3">
                        {tier.highlights.map((feature, index) => (
                          <li key={`${tier.id}-highlight-${index}`} className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link 
                        to={`/checkout?tier=${tier.id}`} 
                        className="w-full"
                      >
                        <Button 
                          className={`w-full ${tier.popular ? 'bg-secondary hover:bg-secondary/90' : ''}`}
                        >
                          {tier.cta}
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Feature Comparison */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Feature Comparison</h2>
                <p className="text-lg text-gray-600">
                  Click on any feature to see more details
                </p>
              </div>
              
              <div className="space-y-8">
                {features.map((category) => (
                  <div key={category.id} className="space-y-4">
                    <h3 className="text-xl font-semibold border-b pb-2">{category.category}</h3>
                    
                    <div className="divide-y">
                      {category.items.map((feature) => (
                        <div key={feature.id} className="py-4">
                          <div 
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => toggleFeature(feature.id)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                toggleFeature(feature.id);
                              }
                            }}
                            tabIndex={0}
                            role="button"
                            aria-expanded={expandedFeatures.includes(feature.id)}
                          >
                            <div className="flex-grow">
                              <div className="flex items-center">
                                <h4 className="font-medium">{feature.name}</h4>
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Info className="h-4 w-4 text-gray-400 ml-1 cursor-help" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs text-sm">Click to see feature details</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </div>
                            </div>
                            
                            <div className="flex items-center">
                              <div className="hidden md:flex items-center space-x-8 mr-8">
                                {pricingTiers.map((tier) => (
                                  <div key={`${feature.id}-${tier.id}`} className="w-20 text-center">
                                    {feature.tiers.includes(tier.id) ? (
                                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                                    ) : (
                                      <Plus className="h-5 w-5 text-gray-300 mx-auto" />
                                    )}
                                  </div>
                                ))}
                              </div>
                              
                              <div className="md:hidden mr-4">
                                <p className="text-sm text-gray-500">
                                  {feature.tiers.length === 3 && 'All tiers'}
                                  {feature.tiers.length === 2 && feature.tiers.includes('foundation') && 'Foundation & Accelerator'}
                                  {feature.tiers.length === 2 && !feature.tiers.includes('foundation') && 'Accelerator & Scale Suite'}
                                  {feature.tiers.length === 1 && feature.tiers.includes('foundation') && 'Foundation only'}
                                  {feature.tiers.length === 1 && feature.tiers.includes('accelerator') && 'Accelerator only'}
                                  {feature.tiers.length === 1 && feature.tiers.includes('scale') && 'Scale Suite only'}
                                </p>
                              </div>
                              
                              {expandedFeatures.includes(feature.id) ? (
                                <ChevronUp className="h-5 w-5 text-gray-500" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-gray-500" />
                              )}
                            </div>
                          </div>
                          
                          {expandedFeatures.includes(feature.id) && (
                            <div className="mt-3 pl-4 pr-12 pb-2">
                              <p className="text-gray-600 text-sm">{feature.description}</p>
                              <div className="mt-3 grid grid-cols-3 gap-4 md:hidden">
                                {pricingTiers.map((tier) => (
                                  <div key={`${feature.id}-${tier.id}-mobile`} className="text-center">
                                    <p className="text-xs font-medium">{tier.name}</p>
                                    <div className="mt-1">
                                      {feature.tiers.includes(tier.id) ? (
                                        <Check className="h-4 w-4 text-green-500 mx-auto" />
                                      ) : (
                                        <Plus className="h-4 w-4 text-gray-300 mx-auto" />
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 md:hidden">
                <h4 className="text-lg font-semibold mb-2">Tier Legend:</h4>
                <div className="grid grid-cols-3 gap-4">
                  {pricingTiers.map((tier) => (
                    <div key={`legend-${tier.id}`} className="text-center p-2 bg-gray-50 rounded-md">
                      <p className="text-sm font-medium">{tier.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-lg text-gray-600">
                  Have more questions? Contact our sales team for a personalized consultation.
                </p>
              </div>
              
              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <Card key={`faq-item-${item.question}`}>
                    <CardHeader>
                      <CardTitle className="text-xl">{item.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{item.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Contracting Business?</h2>
              <p className="text-xl mb-8">
                Join hundreds of successful contractors who've increased their revenue by an average of 27% with our AI-powered platform.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-white text-secondary hover:bg-white/90 w-full sm:w-auto">
                  Schedule a Demo
                </Button>
                <Link to="/checkout?tier=accelerator" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full">
                    Start 14-Day Trial
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pricing; 