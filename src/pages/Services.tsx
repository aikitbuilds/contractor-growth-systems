import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import Navbar from '@/components/Navbar'

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              muted 
              loop 
              className="w-full h-full object-cover"
            >
              <source src="/Images/services_hero.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-5xl font-bold mb-6">
                  Stop Fighting Fires, Start Building Your Future
                </h1>
              </div>
            </div>
          </div>
        </section>
        
        {/* Systems to Scale Section - Moved here */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Systems to Scale Your Contracting Business
                </h2>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
                  You didn't get into contracting to be buried in spreadsheets, chase down sales updates, or feel like every day is chaos. You want to build great projects, lead a strong team, and grow profitably. But scaling past your current level often feels overwhelming. Billion Dollar Contractor (BDC) is your hands-on partner to implement the practical, intelligent systems needed to break through growth barriers predictably and efficiently. We don't just tell you what to do – we build the engine with you.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Core Offering Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Our Core Offering: The BDC Growth Accelerator™ Package
                </h2>
                <p className="text-lg text-gray-700">
                  A comprehensive partnership designed for contractors ready for significant, managed scaling
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="md:w-1/2">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-primary">Consulting Services</CardTitle>
                      <CardDescription className="text-base">
                        Our signature, comprehensive partnership designed for contractors ready for significant, managed scaling.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">What It Is</h3>
                        <p className="text-gray-700">
                          A multi-month engagement where BDC experts work directly with you and your team to design, build, implement, and optimize the core systems needed for scalable growth. We integrate proven processes with smart technology, including setting up and leveraging the ContractorScale AI platform.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">What's Included (Typically)</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700"><span className="font-medium">Deep Dive Assessment & Strategic Roadmap:</span> Identifying your biggest bottlenecks and creating a clear, prioritized plan for system implementation aligned with your growth goals.</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700"><span className="font-medium">Sales System Implementation:</span> Building a repeatable lead-to-close process, configuring your CRM for maximum effectiveness, setting up proposal tools, and automating follow-ups.</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700"><span className="font-medium">Operational Workflow Design:</span> Mapping and streamlining key processes like sales-to-operations handoffs, project communication, and change orders to reduce errors and improve efficiency.</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700"><span className="font-medium">Team Enablement:</span> Developing tailored training programs, creating clear job descriptions and scorecards, structuring effective onboarding, and designing motivating compensation plans.</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700"><span className="font-medium">Marketing Funnel Optimization:</span> Analyzing and refining how you attract and nurture leads to feed your sales engine consistently.</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700"><span className="font-medium">KPI Dashboard & Reporting Setup:</span> Creating visibility into the metrics that actually matter for managing growth.</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700"><span className="font-medium">AI Integration:</span> Implementing automation and AI agents where they provide the most leverage to reduce manual work and provide insights.</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="md:w-1/2">
                  <Card className="h-full bg-gray-50">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-primary">Implementation Details</CardTitle>
                      <CardDescription className="text-base">
                        How we work with you to build scalable systems for your business
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Pain Points Addressed</h3>
                        <div className="flex flex-wrap gap-2">
                          {["Scaling Struggle", "Sales Abyss", "Founder Dependency", "Inconsistent Revenue", "Operational Chaos", "Team Troubles", "Inefficient Bidding"].map((pain, index) => (
                            <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                              {pain}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Delivery Method</h3>
                        <p className="text-gray-700 mb-4">
                          A blend of strategic workshops (virtual/on-site), regular implementation meetings, direct hands-on configuration of your tools by BDC, documentation creation (SOPs, checklists), team training sessions, and ongoing support.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Pricing</h3>
                        <p className="text-gray-700">
                          Custom Package based on scope, company size, and specific goals. (Contact us for a tailored proposal).
                        </p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h3 className="text-lg font-semibold text-primary mb-2">Our Unique Approach</h3>
                        <p className="text-gray-700">
                          Truly hands-on implementation – we build it with you, ensuring it works for your business and gets adopted by your team. Focus on creating scalable infrastructure and reducing owner dependency.
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link to="/contact" className="w-full">
                        <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                          Schedule Your Growth Blueprint Call
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* AI Platform Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Powering Your Systems: ContractorScale AI™
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                  Work smarter, not just harder. ContractorScale AI is the intelligence engine designed to automate tasks, provide critical insights, and amplify the effectiveness of the systems BDC implements.
                </p>
                
                <div className="aspect-video w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg mb-8">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YmpeNG7K7TY?si=dUwpsoajOt7d1OyB"
                    title="ContractorScale AI Overview"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              
              <div className="mb-12">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-primary mb-2">What It Is</h3>
                    <p className="text-gray-700">
                      A cloud-based platform tailored for contractors, integrating with your core tools (like your CRM) to provide AI-driven assistance and analytics across sales, operations, and team management.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Core Benefits</h3>
                    <p className="text-gray-700">
                      Gain real-time visibility, automate routine communications, score leads intelligently, get predictive insights on bids and projects, receive AI-driven coaching prompts, and understand market trends – all designed to make scaling more efficient and data-driven.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                {/* ContractorScale AI Tiers section removed */}
              </div>
            </div>
          </div>
        </section>
        
        {/* Component Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Component Services & Other Resources
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  While our core focus is the comprehensive Growth Accelerator™ Package, components may be available for specific needs or as add-ons. We also offer targeted resources.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Solar AI Assistant</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      AI-powered virtual assistant that helps solar professionals qualify leads, optimize proposals, and close more deals.
                    </p>
                    <Link to="/solar-ai-assistant">
                      <Button variant="outline" className="w-full mt-4">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Standalone System Implementation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Focused projects on areas like Sales Process Setup, Operational Workflow Design, or Compensation Plan Redesign.
                    </p>
                    <p className="text-sm text-gray-500 mt-4">
                      Inquire for custom scope & pricing
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Targeted Team Training</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Specific workshops or online modules on CRM usage, sales skills, and more tailored to your team's needs.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Online Courses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Self-paced learning on foundational topics like Goal Setting or Solar Sales fundamentals.
                    </p>
                    <p className="text-sm text-gray-500 mt-4">
                      Fixed Price - See Courses Page
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8 text-center">
                <Link to="/resources">
                  <Button variant="outline" className="bg-white">
                    Explore All Resources
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Client Testimonials */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Real Results, Real Leaders
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  Success stories from leaders who've experienced the BDC approach to systematic growth and sales transformation:
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Featured Testimonial 1 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <p className="text-gray-700 italic text-lg mb-4">
                      "Steve's leadership was a significant factor in our company's sales growth success. His combination of intelligence, aptitude, and unyielding drive turns 'impossible' goals into reality, and his ability to chart success through new business disciplines is unparalleled."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold mr-4">GL</div>
                      <div>
                        <p className="font-bold text-gray-900">Gary Liardon</p>
                        <p className="text-sm text-gray-600">Chief Operations Officer</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Featured Testimonial 2 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <p className="text-gray-700 italic text-lg mb-4">
                      "Steve has an unmatched focus on building and growing the business. He continuously innovates across all aspects of the company, ensuring that growth can not only be achieved but sustained. A consummate professional."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold mr-4">JB</div>
                      <div>
                        <p className="font-bold text-gray-900">Justin Brach</p>
                        <p className="text-sm text-gray-600">CEO of Subcontractorhub & ExpansionJS</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Testimonial 1 */}
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <p className="text-gray-700 italic mb-4">
                    "Steve tackles challenges head-on and presents simplified solutions everyone can grasp. His systematic approach to sales, processes, and customer engagement is second to none."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm mr-3">JM</div>
                    <div>
                      <p className="font-bold text-gray-900">James Murray</p>
                      <p className="text-xs text-gray-600">CA Business Development Manager</p>
                    </div>
                  </div>
                </div>
                
                {/* Testimonial 2 */}
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <p className="text-gray-700 italic mb-4">
                    "Working under Steve for five years at two companies, I always felt he truly listened and made decisions based on everyone's input. He encouraged personal and professional growth."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm mr-3">CC</div>
                    <div>
                      <p className="font-bold text-gray-900">Casey Carhart</p>
                      <p className="text-xs text-gray-600">Home Improvement Sales Specialist</p>
                    </div>
                  </div>
                </div>
                
                {/* Testimonial 3 */}
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <p className="text-gray-700 italic mb-4">
                    "Steve is everything a manager can ask for in a VP. He always has an open door, goes above and beyond to solve problems, and genuinely desires to help his management team grow."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm mr-3">JW</div>
                    <div>
                      <p className="font-bold text-gray-900">Jordan Wise</p>
                      <p className="text-xs text-gray-600">Sales & Operations Growth Leader</p>
                    </div>
                  </div>
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
                Ready to Stop Guessing and Start Systematically Scaling?
              </h2>
              <p className="text-xl mb-8">
                Implementing the right systems, enhanced by intelligent automation, is the key to unlocking predictable growth without burning yourself out. Let BDC be your partner in building that foundation.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-medium">
                  Schedule Your Growth Blueprint Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Services 