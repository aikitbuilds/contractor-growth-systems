import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Calendar, Clock, User, Shield, Play, Zap, Code, Bot, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';

function RoofSalesBootcamp() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-0 min-h-[90vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/Images/home-with-beach-vibes-has-solar-panels-on-rooftop-2025-02-15-16-49-47-utc.jpg" 
            alt="Modern home with new roof and solar" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8">
              <div className="bg-gray-800/80 p-6 rounded-lg backdrop-blur-sm">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  BDC Solar-to-Roof Bootcamp
                </h1>
                <h2 className="text-xl md:text-2xl text-white/90 mb-8">
                  Go from zero to closing your first profitable roofing deal in 30 days, leveraging proven systems and AI tools. We guarantee it!
                </h2>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-secondary hover:bg-secondary-600 text-white font-medium">
                    Enroll Now - Special Launch Price <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <a href="#guarantee" className="inline-block">
                    <Button size="lg" className="bg-primary hover:bg-primary-800 text-white font-medium">
                      View Guarantee
                    </Button>
                  </a>
                  <Link to="/bootcamp-details" className="inline-block">
                    <Button size="lg" className="bg-primary hover:bg-primary-800 text-white font-medium">
                      View Detailed Curriculum
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Video Component */}
            <div className="md:w-1/2 mt-10 md:mt-0 md:pl-8">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white/20">
                <iframe 
                  width="100%" 
                  height="315" 
                  src="https://www.youtube.com/embed/snn78OpcP14?si=6ozUHrbtyQCvVWMa" 
                  title="Roofing and Solar Sales Bootcamp" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  className="aspect-video"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ready to Add a Profitable Revenue Stream to Your Business?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you're in solar looking to add roofing or a roofer wanting to expand into solar, our bootcamp delivers a practical system for cross-selling success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pain Point 1 */}
            <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-secondary hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Missing Opportunities?</h3>
              <p className="text-gray-600">Already talking to homeowners but not monetizing all potential revenue streams from each conversation?</p>
            </div>

            {/* Pain Point 2 */}
            <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-secondary hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Need a System?</h3>
              <p className="text-gray-600">Tired of random advice and ready for a step-by-step process with supporting technology?</p>
            </div>

            {/* Pain Point 3 */}
            <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-secondary hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Tech Confusion?</h3>
              <p className="text-gray-600">Overwhelmed by all the software options and uncertain how to leverage AI for sales acceleration?</p>
            </div>

            {/* Pain Point 4 */}
            <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-secondary hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Want Quick ROI?</h3>
              <p className="text-gray-600">Need to see fast results with a clear path to recover your investment and scale profitably?</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution: The Bootcamp Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative">
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="/Images/little-girl-with-her-dad-holding-paper-model-of-ho-2024-10-22-04-39-00-utc.jpg" 
                    alt="Solar and roof sales training" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent mix-blend-overlay" />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Not Just Training – A Complete Business Operating System</h2>
              <p className="text-lg text-gray-300 mb-6">
                This is more than a course. It's a comprehensive business system combining live training, software tools, AI assistance, and done-for-you marketing assets.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Live, interactive training with direct access to industry experts</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Complete sales system with scripts, processes, and AI-powered tools</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Small group format ensures personalized attention (limited to 15 participants)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Guarantee Section */}
      <section id="guarantee" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary/10 border-4 border-secondary p-8 rounded-xl">
              <div className="text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Unbeatable "First Deal Closed" Guarantee</h2>
                <div className="w-20 h-1 bg-secondary mx-auto mb-8" />
              </div>
              
              <p className="text-xl text-center mb-8">
                <span className="font-bold">Attend all 8 live sessions, implement the system we teach, and if you haven't closed your first profitable roofing or solar deal within 30 days, we'll provide personalized 1-on-1 coaching until you achieve that milestone.</span> We are committed to your success.
              </p>
              
              <div className="flex justify-center mt-8">
                <Button size="lg" className="bg-secondary hover:bg-secondary-600 text-white font-medium">
                  Secure Your Spot Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Here's What's Included:</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to launch and scale your cross-selling operation in just 30 days.
              <Link to="/bootcamp-details" className="ml-2 text-secondary hover:underline">View detailed curriculum →</Link>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
              <div className="mr-4 mt-1">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">8 Live Training Sessions</h3>
                <p className="text-gray-600">Tuesdays & Thursdays for 1 Month, designed to build your skills progressively.</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
              <div className="mr-4 mt-1">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                  <Code className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Business Operating System</h3>
                <p className="text-gray-600">Complete software toolkit with CRM integrations, proposal templates, and sales tracking.</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
              <div className="mr-4 mt-1">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                  <Bot className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">AI Sales Assistant</h3>
                <p className="text-gray-600">Custom-trained AI tools for lead qualification, proposal generation, and objection handling.</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
              <div className="mr-4 mt-1">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                  <Zap className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Done-For-You Marketing</h3>
                <p className="text-gray-600">Customized marketing assets including digital ads, email sequences, and presentation decks.</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
              <div className="mr-4 mt-1">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Small Group Setting</h3>
                <p className="text-gray-600">Limited to 15 participants to ensure personalized attention and feedback.</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
              <div className="mr-4 mt-1">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">The "First Deal Closed" Guarantee</h3>
                <p className="text-gray-600">Our commitment to your success with personalized 1-on-1 support if needed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Here's what our graduates have accomplished with the Solar-to-Roof Sales Accelerator system:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src="/Images/team1.png" 
                    alt="Testimonial author" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Michael Rodriguez</h4>
                  <p className="text-gray-600 text-sm">Solar Installer, California</p>
                </div>
              </div>
              <div className="flex mb-3">
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
              </div>
              <p className="text-gray-700">
                "I closed my first roofing deal worth $24,500 just 18 days into the program. The AI tools made proposal creation incredibly fast, and the sales scripts worked exactly as promised."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src="/Images/team2.png" 
                    alt="Testimonial author" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">Roofing Contractor, Texas</p>
                </div>
              </div>
              <div className="flex mb-3">
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
              </div>
              <p className="text-gray-700">
                "Adding solar to our roofing business has increased our average ticket by 300%. The operating system they provide let us hit the ground running without hiring additional staff."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src="/Images/team3.png" 
                    alt="Testimonial author" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">David Chen</h4>
                  <p className="text-gray-600 text-sm">Home Services, Florida</p>
                </div>
              </div>
              <div className="flex mb-3">
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
              </div>
              <p className="text-gray-700">
                "The AI tools alone are worth the price of admission. We've automated 80% of our proposal process and increased our closing rate from 22% to 37% using the scripts and methodologies."
              </p>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src="/Images/team4.png" 
                    alt="Testimonial author" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Jennifer Martinez</h4>
                  <p className="text-gray-600 text-sm">Solar Sales Manager, Arizona</p>
                </div>
              </div>
              <div className="flex mb-3">
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
              </div>
              <p className="text-gray-700">
                "I was skeptical about the guarantee, but they delivered. Closed my first two roofing jobs within 27 days, and the marketing materials they provided look like they cost thousands to create."
              </p>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src="/Images/about-thumb.jpg" 
                    alt="Testimonial author" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Carlos Mendez</h4>
                  <p className="text-gray-600 text-sm">Home Improvement, Colorado</p>
                </div>
              </div>
              <div className="flex mb-3">
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
              </div>
              <p className="text-gray-700">
                "Best business investment I've made in years. The combination of live training and technology tools gave us everything needed to expand our services. ROI was positive in the first month."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule & Logistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Program Details</h2>
          </div>

          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3" />
                <div>
                  <h4 className="font-bold text-gray-900">Format</h4>
                  <p className="text-gray-600">Live Online via Zoom + On-Demand Software Access</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3" />
                <div>
                  <h4 className="font-bold text-gray-900">Schedule</h4>
                  <p className="text-gray-600">Tuesdays & Thursdays at 2:00 PM EST</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3" />
                <div>
                  <h4 className="font-bold text-gray-900">Start Date</h4>
                  <p className="text-gray-600">Tuesday, August 15, 2024</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3" />
                <div>
                  <h4 className="font-bold text-gray-900">Duration</h4>
                  <p className="text-gray-600">4 Weeks (8 Total Sessions) + Ongoing Software Access</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3" />
                <div>
                  <h4 className="font-bold text-gray-900">Spots Available</h4>
                  <p className="text-gray-600 font-bold">Strictly Limited to 15 Participants</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3" />
                <div>
                  <h4 className="font-bold text-gray-900">Recording Access</h4>
                  <p className="text-gray-600">Lifetime access to all session recordings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Bio Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-8 md:mb-0">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto">
                  <img 
                    src="/Images/steve1.png" 
                    alt="Steve Huber" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3 md:pl-8">
                <h2 className="text-3xl font-bold mb-4">Learn From an Industry Expert: Steve Huber</h2>
                <p className="text-gray-300 mb-4">
                  Steve Huber has decades of experience building multi-million dollar sales engines from the ground up. He has personally trained hundreds of roofing and solar sales professionals and developed systematic approaches that consistently deliver results.
                </p>
                <p className="text-gray-300 mb-4">
                  His practical, no-nonsense teaching style focuses on what actually works in the field – combined with cutting-edge AI and technology tools to accelerate your success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expert Testimonials */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Industry Leaders Trust Steve</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Here's what industry professionals say about Steve Huber's expertise, leadership, and impact:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
              <p className="text-gray-700 italic mb-4">
                "I've had the privilege of working with Steve for several years. He stands out for his innovative problem-solving, unwavering commitment to excellence, and ability to inspire and unite a team, fostering a culture of collaboration and respect."
              </p>
              <div className="flex items-center">
                <div className="mr-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                    AC
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Armando Champagne</p>
                  <p className="text-sm text-gray-600">Eliovation | Digital A.I. Marketing Masters</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
              <p className="text-gray-700 italic mb-4">
                "Steve is a very dedicated sales professional who drives the team effectively by always encouraging and enabling everyone. His outgoing nature makes him easily approachable and a great person to work with across departments."
              </p>
              <div className="flex items-center">
                <div className="mr-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                    DS
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Danielle Shackelford</p>
                  <p className="text-sm text-gray-600">Director of Compliance</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
              <p className="text-gray-700 italic mb-4">
                "Working alongside Steve, I became excited to see the synergy he created with the Operations Team. He listens to his teams and utilizes that knowledge to better the processes for the whole organization."
              </p>
              <div className="flex items-center">
                <div className="mr-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                    CP
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Chad Pricolo</p>
                  <p className="text-sm text-gray-600">(Previous Role)</p>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
              <p className="text-gray-700 italic mb-4">
                "Steve is wonderful to work with. He's responsive and a great motivator, not just for his own group but infectious to others. Excellent team building and teaching skills to help people reach their potential."
              </p>
              <div className="flex items-center">
                <div className="mr-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                    BN
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Becky Norton</p>
                  <p className="text-sm text-gray-600">Call Center Manager Semper Solaris</p>
                </div>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
              <p className="text-gray-700 italic mb-4">
                "As Steve's advertising agency partner, I saw him as a consummate professional, a tremendous manager of talent, and a builder of profits! He was instrumental, actively providing feedback that helped shape our messaging and effectiveness."
              </p>
              <div className="flex items-center">
                <div className="mr-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                    DP
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-900">David Pell</p>
                  <p className="text-sm text-gray-600">EVP of Business Development at Ad Leverage</p>
                </div>
              </div>
            </div>

            {/* Testimonial 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
              <p className="text-gray-700 italic mb-4">
                "In my 12+ years in solar, I've never seen anyone architect a multi-million dollar inside sales team like Steve. He built the systems, processes, and culture for complex, multi-product sales (solar, roofing, storage, HVAC) over the phone/chat that directly drove 40% of our consumer revenue and profitability."
              </p>
              <div className="flex items-center">
                <div className="mr-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                    TR
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Tim Ramage</p>
                  <p className="text-sm text-gray-600">EVP of Sales Operations (SubcontractorHub / previous role)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-primary hover:bg-primary-700 text-white">
              View More Testimonials
            </Button>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Your Investment in Business Transformation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our tiered pricing model rewards early action. Just one completed deal will recover your entire investment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Early Bird Pricing */}
            <div className="bg-white border-2 border-secondary rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
              <div className="bg-secondary p-6 text-white text-center">
                <h3 className="text-2xl font-bold">Early Bird Special</h3>
                <p className="text-sm mt-1">First 10 Participants Only</p>
              </div>
              <div className="p-8 text-center">
                <div className="mb-4">
                  <span className="text-5xl font-bold text-primary">$1,895</span>
                  <span className="text-gray-500 ml-2">one-time payment</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Save $600 by securing your spot early!
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                    <span className="text-gray-700">All 8 Live Training Sessions</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                    <span className="text-gray-700">Complete Business Operating System</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                    <span className="text-gray-700">AI Sales Assistant & Tools</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                    <span className="text-gray-700">Done-For-You Marketing Package</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                    <span className="text-gray-700">The "First Deal Closed" Guarantee</span>
                  </div>
                </div>
                
                <Button size="lg" className="w-full bg-secondary hover:bg-secondary-600 text-white font-medium">
                  Enroll Now - Early Bird Price
                </Button>
                <p className="text-xs text-gray-500 mt-3">Only 4 spots remaining at this price!</p>
              </div>
            </div>

            {/* Standard Pricing */}
            <div className="bg-white border border-gray-200 rounded-xl shadow overflow-hidden">
              <div className="bg-gray-700 p-6 text-white text-center">
                <h3 className="text-2xl font-bold">Standard Pricing</h3>
                <p className="text-sm mt-1">Last 5 Spots</p>
              </div>
              <div className="p-8 text-center">
                <div className="mb-4">
                  <span className="text-5xl font-bold text-primary">$2,495</span>
                  <span className="text-gray-500 ml-2">one-time payment</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Complete system with all features included.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-gray-600 mr-2" />
                    <span className="text-gray-700">All 8 Live Training Sessions</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-gray-600 mr-2" />
                    <span className="text-gray-700">Complete Business Operating System</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-gray-600 mr-2" />
                    <span className="text-gray-700">AI Sales Assistant & Tools</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-gray-600 mr-2" />
                    <span className="text-gray-700">Done-For-You Marketing Package</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-gray-600 mr-2" />
                    <span className="text-gray-700">The "First Deal Closed" Guarantee</span>
                  </div>
                </div>
                
                <Button size="lg" className="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium">
                  Enroll at Standard Price
                </Button>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center mt-10">
            <p className="text-sm text-gray-500">
              All prices are in USD. Payment plans available - contact us for details.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA / Checkout Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Only <span className="font-bold text-secondary">4 early bird spots</span> remaining!
            </p>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <p className="text-gray-700 mb-6">
                Don't miss this opportunity to add a powerful new revenue stream to your business with a proven system and expert guidance.
              </p>
              
              <Button size="lg" className="bg-secondary hover:bg-secondary-600 text-white font-medium px-8 py-6 text-xl">
                Enroll Now - Secure Your Spot <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <p className="text-sm text-gray-500 mt-4">
                Secure payment processing. Immediate access to system upon enrollment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RoofSalesBootcamp; 