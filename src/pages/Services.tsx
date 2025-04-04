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
        <section className="bg-primary text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-5xl font-bold mb-6">
                  Stop Fighting Fires, Start Building Your Future
                </h1>
                <p className="text-xl md:text-2xl font-medium text-secondary">
                  Systems to Scale Your Contracting Business
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                  You didn't get into contracting to be buried in spreadsheets, chase down sales updates, or feel like every day is chaos. You want to build great projects, lead a strong team, and grow profitably. But scaling past your current level often feels overwhelming. Billion Dollar Contractor (BDC) is your hands-on partner to implement the practical, intelligent systems needed to break through growth barriers predictably and efficiently. We don't just tell you what to do – we build the engine with you.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Core Offering Section */}
        <section className="py-16 bg-white">
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
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                  ContractorScale AI Tiers
                </h3>
                
                <Tabs defaultValue="comparison" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="comparison">Tier Comparison</TabsTrigger>
                    <TabsTrigger value="features">Detailed Features</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="comparison" className="mt-6">
                    <div className="overflow-x-auto rounded-lg border border-gray-200">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-primary/5">
                            <TableHead className="font-bold">Feature Category</TableHead>
                            <TableHead className="text-center">Foundation Tier</TableHead>
                            <TableHead className="text-center">Accelerator Tier</TableHead>
                            <TableHead className="text-center">Scale Suite Tier</TableHead>
                            <TableHead className="text-center">Enterprise Tier</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Monthly Price</TableCell>
                            <TableCell className="text-center">$500 / month</TableCell>
                            <TableCell className="text-center">$900 / month</TableCell>
                            <TableCell className="text-center">$1500 / month</TableCell>
                            <TableCell className="text-center">Custom Pricing</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Annual Price (Savings)</TableCell>
                            <TableCell className="text-center">$5,000 (Save $1000)</TableCell>
                            <TableCell className="text-center">$9,000 (Save $1800)</TableCell>
                            <TableCell className="text-center">$15,000 (Save $3000)</TableCell>
                            <TableCell className="text-center">Custom (Annual Contract Required)</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Target Audience</TableCell>
                            <TableCell className="text-center">Emerging ($1-7M)</TableCell>
                            <TableCell className="text-center">Growing ($3-15M)</TableCell>
                            <TableCell className="text-center">Scaling ($10M+)</TableCell>
                            <TableCell className="text-center">Large / Complex Operations ($25M+)</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Core Focus</TableCell>
                            <TableCell className="text-center">Core Sales Visibility & AI Assist</TableCell>
                            <TableCell className="text-center">Sales Optimization & Ops Streamlining</TableCell>
                            <TableCell className="text-center">Comprehensive Scaling, Team Dev & Market Insights</TableCell>
                            <TableCell className="text-center">Bespoke Solutions & Integrations</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Included Users</TableCell>
                            <TableCell className="text-center">Up to 5</TableCell>
                            <TableCell className="text-center">Up to 15</TableCell>
                            <TableCell className="text-center">Up to 30</TableCell>
                            <TableCell className="text-center">Custom / Site License</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="features" className="mt-6">
                    <div className="overflow-x-auto rounded-lg border border-gray-200">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-primary/5">
                            <TableHead className="font-bold">Feature</TableHead>
                            <TableHead className="text-center">Foundation</TableHead>
                            <TableHead className="text-center">Accelerator</TableHead>
                            <TableHead className="text-center">Scale Suite</TableHead>
                            <TableHead className="text-center">Enterprise</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">
                              <div className="flex items-center">
                                Sales KPI Dashboard
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <HelpCircle className="h-4 w-4 text-gray-400 ml-1 cursor-help" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs">Interactive dashboards showing sales performance metrics</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </div>
                            </TableCell>
                            <TableCell className="text-center">Core (Revenue, Close Rate, ASP)</TableCell>
                            <TableCell className="text-center">Enhanced (+ Stage Conversion, Lead Source)</TableCell>
                            <TableCell className="text-center">Advanced (+ Custom Reports, Team Compare, Goals)</TableCell>
                            <TableCell className="text-center">Fully Customizable</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">AI Lead Scoring</TableCell>
                            <TableCell className="text-center">Yes (Basic)</TableCell>
                            <TableCell className="text-center">Yes</TableCell>
                            <TableCell className="text-center">Yes</TableCell>
                            <TableCell className="text-center">Yes (Custom Models Possible)</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">AI Communication Helper</TableCell>
                            <TableCell className="text-center">Basic (Drafts from templates)</TableCell>
                            <TableCell className="text-center">Advanced (+ Send Time, Sentiment Hints)</TableCell>
                            <TableCell className="text-center">Advanced+</TableCell>
                            <TableCell className="text-center">Customizable</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">AI Bid Optimizer</TableCell>
                            <TableCell className="text-center">Basic (Hist. Profitability)</TableCell>
                            <TableCell className="text-center">Basic</TableCell>
                            <TableCell className="text-center">Advanced (+ Benchmarks, Risk Factors)</TableCell>
                            <TableCell className="text-center">Advanced+ (Cost DB Integration)</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Sales Funnel Analytics</TableCell>
                            <TableCell className="text-center">No</TableCell>
                            <TableCell className="text-center">Yes (Visual Funnel, Bottlenecks)</TableCell>
                            <TableCell className="text-center">Yes</TableCell>
                            <TableCell className="text-center">Yes (Deeper Analysis)</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">AI Project Coordinator</TableCell>
                            <TableCell className="text-center">No</TableCell>
                            <TableCell className="text-center">Basic (Scheduling Suggestions)</TableCell>
                            <TableCell className="text-center">Advanced (+ Predictive Risk Alerts)</TableCell>
                            <TableCell className="text-center">Advanced+ (Resource Optimization)</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Team Performance</TableCell>
                            <TableCell className="text-center">No</TableCell>
                            <TableCell className="text-center">Leaderboards</TableCell>
                            <TableCell className="text-center">Enhanced (+ Trends, Goal Tracking)</TableCell>
                            <TableCell className="text-center">Custom Reporting</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">AI Sales Perf. Coach</TableCell>
                            <TableCell className="text-center">No</TableCell>
                            <TableCell className="text-center">No</TableCell>
                            <TableCell className="text-center">Yes (Skill Gaps, Training Links)</TableCell>
                            <TableCell className="text-center">Yes (Granular Analysis)</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">AI Market Navigator</TableCell>
                            <TableCell className="text-center">No</TableCell>
                            <TableCell className="text-center">No</TableCell>
                            <TableCell className="text-center">Yes (Basic Local Trends)</TableCell>
                            <TableCell className="text-center">Advanced (Deeper Insights)</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Support Level</TableCell>
                            <TableCell className="text-center">Email, Knowledge Base</TableCell>
                            <TableCell className="text-center">Email & Chat</TableCell>
                            <TableCell className="text-center">Priority Email & Chat, Phone Option</TableCell>
                            <TableCell className="text-center">Dedicated Account Manager, Custom SLA</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <div className="mt-8 text-center">
                  <Link to="/ai-platform">
                    <Button className="bg-primary hover:bg-primary/90 text-white">
                      Compare AI Tiers / Request a Demo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
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
                
                <Card>
                  <CardHeader>
                    <CardTitle>'Tuesday Tune-Up' Newsletter</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Free weekly insights and actionable strategies delivered to your inbox.
                    </p>
                    <Button variant="outline" className="w-full mt-4">
                      Free Sign-up
                    </Button>
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