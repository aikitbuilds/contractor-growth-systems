import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, BarChart3, Users, FileText, Phone, Shield, Zap, Award, TrendingUp, ArrowUpIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import { Card } from '@/components/ui/card';
import HomeAIChatComponent from '@/components/HomeAIChatComponent';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-0 min-h-[90vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/Images/Hero.png" 
            alt="Contractor business growth" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Stop Guessing, Start Scaling
              </h1>
              <h2 className="text-xl md:text-2xl text-white/90 mb-8">
                End the cycle of inconsistent leads and transform your contracting business with systematic approaches to sales, marketing, and operations.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary-600 text-white font-medium">
                  Schedule a Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link to="/business-growth">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-medium">
                    Interactive Dashboard
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Interactive Dashboard Preview */}
            <div className="md:w-1/2 mt-10 md:mt-0">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-white text-xl font-bold">Performance Metrics</h3>
                  <span className="bg-secondary/20 text-secondary text-xs py-1 px-3 rounded-full">Live Data</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* Sales Growth Metric */}
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="text-white/70 text-sm mb-1">Sales Growth</div>
                    <div className="flex items-end justify-between">
                      <div className="text-white text-2xl font-bold">+143%</div>
                      <div className="flex items-center text-emerald-400 text-sm">
                        <ArrowUpIcon className="h-4 w-4 mr-1" />
                        <span>18.2%</span>
                      </div>
                    </div>
                    <div className="mt-2 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="bg-emerald-400 h-full rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  
                  {/* Lead Conversion Metric */}
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="text-white/70 text-sm mb-1">Lead Conversion</div>
                    <div className="flex items-end justify-between">
                      <div className="text-white text-2xl font-bold">34.7%</div>
                      <div className="flex items-center text-emerald-400 text-sm">
                        <ArrowUpIcon className="h-4 w-4 mr-1" />
                        <span>7.5%</span>
                      </div>
                    </div>
                    <div className="mt-2 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="bg-emerald-400 h-full rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                </div>
                
                {/* Mini Chart */}
                <div className="bg-white/10 p-4 rounded-lg mb-4">
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-white/70 text-sm">Monthly Revenue Trend</div>
                    <div className="text-white text-xs px-2 py-1 rounded-full bg-white/10">Last 6 Months</div>
                  </div>
                  
                  <div className="relative h-20">
                    <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
                      <div className="w-1/6 h-[30%] bg-secondary/50 rounded-sm mx-[2px]"></div>
                      <div className="w-1/6 h-[40%] bg-secondary/50 rounded-sm mx-[2px]"></div>
                      <div className="w-1/6 h-[35%] bg-secondary/50 rounded-sm mx-[2px]"></div>
                      <div className="w-1/6 h-[60%] bg-secondary/50 rounded-sm mx-[2px]"></div>
                      <div className="w-1/6 h-[75%] bg-secondary/50 rounded-sm mx-[2px]"></div>
                      <div className="w-1/6 h-[95%] bg-secondary/70 rounded-sm mx-[2px]"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-secondary/20 to-transparent rounded-b-sm"></div>
                  </div>
                  
                  <div className="flex justify-between text-white/50 text-xs mt-2">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <Link to="/business-growth">
                    <Button variant="secondary" size="sm" className="text-xs bg-secondary/20 hover:bg-secondary/30 text-white border-0">
                      View Detailed Analytics
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
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
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative">
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Strategic collaboration" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent mix-blend-overlay"></div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Hands-On Implementation, Not Just Theory</h2>
              <p className="text-lg text-gray-300 mb-6">
                We don't just provide advice - we roll up our sleeves and implement proven sales systems directly in your business.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Custom-tailored strategies for your specific contracting niche</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Expert guidance from industry veterans with proven results</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Direct integration with your team for sustainable growth</p>
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="bg-secondary hover:bg-secondary-600 text-white">
                  About Our Approach <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
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
            <Link to="/ai-image-tools" className="inline-block">
              <Button variant="outline" size="lg" className="flex items-center">
                Explore AI Image Tools
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Social Proof - Case Studies */}
      <section className="py-16 relative">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/Images/semper_back1.png" 
            alt="Semper Solaris background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See how we've helped contractors just like you achieve predictable growth.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-xl">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 flex justify-center">
                  <img 
                    src="/Images/Semper_Solaris_Logo.webp" 
                    alt="Semper Solaris" 
                    className="w-full max-w-[200px] h-auto"
                  />
                </div>
                
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-white mb-3">Systemizing for Explosive Scale</h3>
                  <p className="text-gray-300 mb-4">
                    Learn how Semper Solaris transformed from a small local operation to a $100M+ powerhouse through systematic implementation of sales and operational processes.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-secondary/20 text-secondary text-xs py-1 px-3 rounded-full">Solar</span>
                    <span className="bg-secondary/20 text-secondary text-xs py-1 px-3 rounded-full">Roofing</span>
                    <span className="bg-secondary/20 text-secondary text-xs py-1 px-3 rounded-full">Growth Transformation</span>
                  </div>
                  
                  <Link to="/case-study/semper-solaris" className="inline-block">
                    <Button className="bg-secondary hover:bg-secondary-600 text-white">
                      Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ROI Calculator Section */}
      <section id="calculator" className="relative py-16 md:py-24">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')`,
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/80" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Calculate Your Growth Potential</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="mb-6">
                <p className="text-lg text-gray-700 mb-4">
                  See how our systems can impact your contracting business with our ROI calculator. Enter your information below to get a personalized estimate.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Current Monthly Revenue</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                    <input 
                      type="text" 
                      className="w-full rounded-md border border-gray-300 py-2.5 pl-8 pr-3 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary" 
                      placeholder="10,000"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Number of Team Members</label>
                  <input 
                    type="number" 
                    className="w-full rounded-md border border-gray-300 py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary" 
                    placeholder="5"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Average Project Value</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                    <input 
                      type="text" 
                      className="w-full rounded-md border border-gray-300 py-2.5 pl-8 pr-3 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary" 
                      placeholder="25,000"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Closing Rate (%)</label>
                  <div className="relative">
                    <input 
                      type="number" 
                      className="w-full rounded-md border border-gray-300 py-2.5 pl-3 pr-8 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary" 
                      placeholder="25"
                      max="100"
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">%</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Button className="bg-secondary hover:bg-secondary-600 text-white font-medium px-8">
                  Calculate Growth Potential
                </Button>
              </div>
            </div>
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

      {/* AI Chat Component */}
      <HomeAIChatComponent />

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
    </div>
  );
};

export default Index;
