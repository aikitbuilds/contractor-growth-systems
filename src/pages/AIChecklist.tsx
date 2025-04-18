import React from 'react';
import { Helmet } from 'react-helmet';
import { CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import GHLFormEmbed from '@/components/GHLFormEmbed';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

function AIChecklist() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>AI-Ready Contractor Checklist | Billion Dollar Contractor</title>
        <meta name="description" content="Evaluate your contracting business's readiness for AI implementation with our comprehensive checklist. Learn how to leverage AI for sales, bidding, and operations." />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI-Ready Contractor Checklist
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Discover if your contracting business is ready to leverage AI for increased efficiency, better decision-making, and improved profitability.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6">What You'll Learn:</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">How to assess your current tech stack's compatibility with AI integration</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Key areas where AI can immediately impact your sales and operations</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Required data infrastructure for successful AI implementation</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Step-by-step roadmap for AI adoption in your contracting business</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">The Checklist Covers:</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2" />
                    Sales Process Automation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2" />
                    Bid Optimization Systems
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2" />
                    Customer Communication
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2" />
                    Project Management
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2" />
                    Lead Qualification
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2" />
                    Resource Allocation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2" />
                    Performance Analytics
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2" />
                    Team Training Requirements
                  </li>
                </ul>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-primary mb-2">Why This Matters:</h3>
                <p className="text-gray-700 mb-4">
                  AI is transforming the contracting industry, especially in solar and roofing. Companies that successfully implement AI are seeing:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    30-40% increase in sales conversion rates
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    25% reduction in project estimation time
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    50% improvement in customer response time
                  </li>
                </ul>
              </div>
            </div>

            {/* GHL Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4">Get Your Free AI-Ready Checklist</h2>
                <p className="text-gray-600">
                  Fill out the form below to receive your comprehensive AI readiness checklist and implementation guide.
                </p>
              </div>
              
              <GHLFormEmbed 
                formId="mlkl8LiqzNvKTi1rdfCW"
                height="1094px"
                title="AI Systems Questionnaire"
                showTitle={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Tuesday Tuneup Section */}
      <section className="relative py-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/stevetuneup.webp" 
            alt="Steve Huber Newsletter" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="bg-black/50 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  The Tuesday Tuneup
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Join thousands of contractors receiving Steve Huber's weekly newsletter. 
                  Get actionable insights on sales, marketing, and business growth delivered 
                  straight to your inbox every Tuesday.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a 
                    href="https://www.thetuesdaytuneup.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition duration-300"
                  >
                    Subscribe Now
                  </a>
                  <a 
                    href="https://www.thetuesdaytuneup.com/archive" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-transparent border border-white hover:bg-white/10 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
                  >
                    View Archive
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Ready to Transform Your Contracting Business?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Take the first step toward predictable growth and sustainable scaling.
          </p>
          <Link to="/schedule">
            <Button size="lg" className="bg-primary hover:bg-primary-600 font-medium">
              Schedule Your Strategy Call Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default AIChecklist; 