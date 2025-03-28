
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, BarChart3, Users, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import { Card } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-primary-100 to-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-primary mb-4">
                Stop Guessing, Start Scaling
              </h1>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-700 mb-6">
                Proven Sales Systems for Contractors
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                End the cycle of inconsistent leads and transform your contracting business with systematic approaches to sales, marketing, and operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary-600 font-medium">
                    Schedule a Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="font-medium">
                    Explore Our Systems
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Contractor planning with technology" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Common Contractor Challenges We Solve</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We've helped hundreds of contractors overcome these critical business obstacles with our proven systems and hands-on implementation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card className="p-6 border-t-4 border-secondary hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <BarChart3 className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">The Sales Abyss</h3>
              <p className="text-gray-600 mb-4">Struggling with inconsistent leads, unpredictable revenue, and a feast-or-famine cycle?</p>
              <div className="mt-auto">
                <h4 className="font-bold text-primary mb-2">Our Solution:</h4>
                <p className="font-medium">Revenue Accelerator System</p>
              </div>
            </Card>

            {/* Card 2 */}
            <Card className="p-6 border-t-4 border-secondary hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <FileText className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Marketing Myopia</h3>
              <p className="text-gray-600 mb-4">Wasting money on ineffective marketing with poor ROI and no clear strategy?</p>
              <div className="mt-auto">
                <h4 className="font-bold text-primary mb-2">Our Solution:</h4>
                <p className="font-medium">Lead Flow Optimizer</p>
              </div>
            </Card>

            {/* Card 3 */}
            <Card className="p-6 border-t-4 border-secondary hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Users className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Scaling Struggle</h3>
              <p className="text-gray-600 mb-4">Feeling stuck with founder-dependent operations and inefficient team performance?</p>
              <div className="mt-auto">
                <h4 className="font-bold text-primary mb-2">Our Solution:</h4>
                <p className="font-medium">Growth Accelerator Framework</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Strategic collaboration" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Hands-On Implementation, Not Just Theory</h2>
              <p className="text-lg text-gray-600 mb-6">
                We don't just provide advice - we roll up our sleeves and implement proven sales systems directly in your business.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Custom-tailored strategies for your specific contracting niche</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Expert guidance from industry veterans with proven results</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Direct integration with your team for sustainable growth</p>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/about">
                  <Button className="bg-primary hover:bg-primary-600">
                    About Our Approach
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive systems designed specifically for contractors looking to scale from $1M to $10M+ annually.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-secondary-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Sales Optimization</h3>
              <p className="text-gray-600">
                Transform your sales process with repeatable systems that consistently convert leads into profitable projects.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-secondary-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Team Training</h3>
              <p className="text-gray-600">
                Build capable teams with our proven training methods, reducing owner dependency and increasing operational efficiency.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-secondary-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Operational Efficiency</h3>
              <p className="text-gray-600">
                Streamline your bidding, project management, and business operations to maximize profitability and scalability.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Ideal Client Profile */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Who We Help</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our systems are specifically designed for contractors with these characteristics:
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">$1-10 million annual revenue with 5-50 employees</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Home improvement, solar, HVAC, roofing, plumbing, electrical</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Ambitious owners seeking significant growth within 2-3 years</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Currently wearing multiple hats and feeling operationally overwhelmed</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Struggling with inconsistent leads and revenue fluctuations</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Ready to implement systematic approaches to sales and operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Placeholder */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how we've helped contractors just like you achieve predictable growth.
            </p>
          </div>
          
          {/* Placeholder for future testimonials */}
          <div className="bg-gray-100 p-10 text-center rounded-lg">
            <p className="text-lg font-medium text-gray-500">Testimonials and case studies coming soon</p>
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="py-16 bg-gradient-to-br from-primary-700 to-primary">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Free Download: The AI-Ready Contractor Checklist</h2>
            <p className="text-xl text-white/90 mb-8">
              Discover if your contracting business is ready to leverage AI to automate sales, improve bidding accuracy, and increase close rates.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 font-medium">
              Get the Checklist Now
            </Button>
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
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary-600 font-medium">
              Schedule Your Strategy Call Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer will go here */}

    </div>
  );
};

export default Index;
