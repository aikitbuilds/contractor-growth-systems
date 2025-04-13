import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Bot, Zap, Brain, Users, LineChart, BarChart4, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';

function SolarAIAssistant() {
  // Smooth scroll function
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-0 min-h-[90vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/Images/solar-panel-installer-on-roof-with-ai-overlay.jpg" 
            alt="Solar professional using AI assistant" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className="md:w-5/12 md:pr-12 mb-8 md:mb-0">
              <div className="bg-gray-800/80 p-6 rounded-lg backdrop-blur-sm">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Solar AI Assistant
                </h1>
                <h2 className="text-xl md:text-2xl text-white/90 mb-8">
                  Your virtual sales team member that helps qualify leads, optimize proposals, and close more deals
                </h2>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/checkout?plan=ai_assistant" onClick={handleScrollToTop}>
                    <Button size="lg" className="bg-secondary hover:bg-secondary-600 text-white font-medium">
                      Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Video or Demo Component */}
            <div className="md:w-7/12">
              <div className="aspect-video rounded-lg overflow-hidden shadow-xl bg-gray-800 flex items-center justify-center">
                <div className="text-center p-6">
                  <Bot className="h-16 w-16 text-secondary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">AI Assistant Demo</h3>
                  <p className="text-gray-300 mb-4">Watch how our AI Assistant transforms your solar sales process</p>
                  <Button size="lg" className="bg-primary hover:bg-primary-700">
                    Watch Demo <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Facing These Solar Sales Challenges?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI-powered assistant helps solar professionals overcome common obstacles and achieve better results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pain Point 1 */}
            <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-secondary hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Lead Qualification</h3>
              <p className="text-gray-600">Struggling to quickly identify which leads are worth pursuing and which aren't?</p>
            </div>

            {/* Pain Point 2 */}
            <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-secondary hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Proposal Time</h3>
              <p className="text-gray-600">Spending too many hours creating customized proposals for each prospect?</p>
            </div>

            {/* Pain Point 3 */}
            <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-secondary hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Customer Objections</h3>
              <p className="text-gray-600">Need better responses to common objections about solar installation, costs, and ROI?</p>
            </div>

            {/* Pain Point 4 */}
            <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-secondary hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Follow-up Consistency</h3>
              <p className="text-gray-600">Finding it difficult to maintain consistent follow-up with prospects in your pipeline?</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution: The AI Assistant Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative">
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="/Images/ai-assistant-dashboard.jpg"
                    alt="Solar AI Assistant Dashboard" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent mix-blend-overlay" />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Meet Your New AI-Powered Sales Assistant</h2>
              <p className="text-lg text-gray-300 mb-6">
                Our Solar AI Assistant combines advanced artificial intelligence with industry-specific knowledge to help you work smarter, not harder.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">24/7 virtual assistant that learns your business and improves over time</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Integrates with your existing CRM and proposal software</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Reduces proposal creation time by up to 80% with AI-generated content</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Powerful Features That Drive Results</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI Assistant comes packed with tools specifically designed for solar sales professionals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Bot className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Lead Scoring</h3>
              <p className="text-gray-600">
                AI-powered analysis of prospect data to prioritize your most promising leads and maximize conversion rates.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Zap className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Smart Proposals</h3>
              <p className="text-gray-600">
                Generate customized, professional proposals in minutes with AI that learns what works best for different customer types.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <LineChart className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">ROI Calculator</h3>
              <p className="text-gray-600">
                Advanced financial modeling that shows prospects their exact savings and investment returns based on their specific situation.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Users className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Customer Insights</h3>
              <p className="text-gray-600">
                Analyze customer data to identify patterns and preferences, helping you tailor your approach to each prospect.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Zap className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Automated Follow-up</h3>
              <p className="text-gray-600">
                Smart scheduling and personalized communication templates ensure no lead falls through the cracks.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <BarChart4 className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Performance Analytics</h3>
              <p className="text-gray-600">
                Detailed insights into your sales activities, conversion rates, and opportunities for improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your business needs and scale as you grow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold mb-2">Starter</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-gray-600 ml-1">/month</span>
                </div>
                <p className="text-gray-600">Perfect for individual solar sales professionals</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Lead scoring & prioritization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Basic proposal templates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>ROI calculator</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Single user access</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link to="/checkout?plan=ai_starter" onClick={handleScrollToTop}>
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Pro Plan */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-primary relative transform hover:scale-105 transition-transform">
              <div className="absolute top-0 right-0 bg-primary text-white py-1 px-3 text-sm font-bold">
                MOST POPULAR
              </div>
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold mb-2">Professional</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold">$249</span>
                  <span className="text-gray-600 ml-1">/month</span>
                </div>
                <p className="text-gray-600">Ideal for small solar sales teams</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Everything in Starter plan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Advanced AI proposal generation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Automated follow-up sequences</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>CRM integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Up to 5 team members</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link to="/checkout?plan=ai_pro" onClick={handleScrollToTop}>
                    <Button className="w-full bg-primary hover:bg-primary-700 text-white">Get Started</Button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold">$499</span>
                  <span className="text-gray-600 ml-1">/month</span>
                </div>
                <p className="text-gray-600">For growing solar companies</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Everything in Professional plan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Custom AI training on your data</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Advanced analytics dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Unlimited team members</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link to="/checkout?plan=ai_enterprise" onClick={handleScrollToTop}>
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from solar professionals who have transformed their sales process with our AI Assistant.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={`star1-${i}`} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 italic">
                    "The AI Assistant has cut my proposal creation time down by 75%. I'm closing more deals because I can focus on relationship building instead of paperwork."
                  </p>
                </div>
                <div className="mt-auto">
                  <p className="font-bold">Michael Torres</p>
                  <p className="text-sm text-gray-600">Solar Sales, California</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={`star2-${i}`} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 italic">
                    "The lead scoring feature is incredible. I now know exactly which prospects to prioritize, and my close rate has improved by 40% in just two months."
                  </p>
                </div>
                <div className="mt-auto">
                  <p className="font-bold">Jennifer Wallace</p>
                  <p className="text-sm text-gray-600">Sales Manager, Arizona</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={`star3-${i}`} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 italic">
                    "Our team's productivity has doubled since implementing the AI Assistant. The automated follow-up alone has recovered dozens of deals we would have lost."
                  </p>
                </div>
                <div className="mt-auto">
                  <p className="font-bold">David Chen</p>
                  <p className="text-sm text-gray-600">Operations Director, Texas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our Solar AI Assistant.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">How quickly can I get started?</h3>
                <p className="text-gray-600">
                  You can be up and running in less than 24 hours. After signing up, you'll receive access credentials and a quick onboarding session to help you get the most out of the AI Assistant.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Does it integrate with my existing tools?</h3>
                <p className="text-gray-600">
                  Yes, our AI Assistant integrates with popular CRM systems, proposal software, and other tools commonly used in the solar industry. Custom integrations are available for Enterprise clients.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Is training required?</h3>
                <p className="text-gray-600">
                  Minimal training is needed. The system is designed to be intuitive, and we provide video tutorials and documentation. Professional and Enterprise plans include personalized training sessions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">What kind of ROI can I expect?</h3>
                <p className="text-gray-600">
                  Most clients see a positive ROI within the first month. By saving time on administrative tasks and increasing close rates, the AI Assistant typically pays for itself many times over.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Can I cancel my subscription?</h3>
                <p className="text-gray-600">
                  Yes, you can cancel at any time. We offer monthly plans with no long-term commitment required. However, most clients stay with us for the long term once they experience the benefits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Solar Sales Process?
            </h2>
            <p className="text-xl mb-8">
              Join the hundreds of solar professionals already using our AI Assistant to close more deals in less time.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/checkout?plan=ai_pro" onClick={handleScrollToTop}>
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-medium px-8">
                  Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-medium px-8">
                  Schedule a Demo
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-white/80">
              No credit card required for demo. 14-day money-back guarantee on all plans.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SolarAIAssistant; 