import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, BookOpen, Award, Lightbulb, MessageCircle, ArrowLeftRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';

function BootcampDetails() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-0 min-h-[60vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/Images/breatcame-bg.jpg" 
            alt="BDC Solar-to-Roof Bootcamp" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Course Curriculum & Details
            </h1>
            <h2 className="text-xl md:text-2xl text-white/90 mb-8">
              Your 4-Week Journey to Solar-to-Roof Sales Mastery
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/roof-sales-bootcamp" className="inline-block">
                <Button size="lg" className="bg-secondary hover:bg-secondary-600 text-white font-medium">
                  Back to Bootcamp Overview <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Course Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="h-1 bg-secondary w-16 mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary">The 4-Week Bootcamp</h2>
              <div className="h-1 bg-secondary w-16 ml-4" />
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-10">
              <div className="flex flex-col md:flex-row md:items-center mb-6">
                <div className="bg-secondary/10 p-3 rounded-full md:mr-6 mb-4 md:mb-0 inline-block mx-auto md:mx-0">
                  <BookOpen className="h-8 w-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-center md:text-left">Program Goal</h3>
                  <p className="text-gray-700 text-center md:text-left">
                    Equip participants with the knowledge, process, tools, and confidence to sell roofing and solar effectively, 
                    leveraging their existing skills and customer database.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6 mb-6">
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                  <Calendar className="h-8 w-8 text-secondary mb-2" />
                  <h4 className="font-bold">Duration</h4>
                  <p className="text-center text-gray-600">4 Weeks</p>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                  <Clock className="h-8 w-8 text-secondary mb-2" />
                  <h4 className="font-bold">Sessions</h4>
                  <p className="text-center text-gray-600">8 Live Trainings</p>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                  <ArrowLeftRight className="h-8 w-8 text-secondary mb-2" />
                  <h4 className="font-bold">Format</h4>
                  <p className="text-center text-gray-600">30min Training + 30min Q&A</p>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                  <Award className="h-8 w-8 text-secondary mb-2" />
                  <h4 className="font-bold">Includes</h4>
                  <p className="text-center text-gray-600">Full Business OS Access</p>
                </div>
              </div>
              
              <div className="bg-secondary/10 p-4 rounded-lg">
                <p className="text-gray-700 italic">
                  <span className="font-semibold">Pre-Work (Minimal):</span> Complete a brief questionnaire about your current business and set up access to the BDC Back Office Portal. This will be delivered via your Welcome Email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Week 1 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start mb-8">
              <div className="bg-secondary text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                1
              </div>
              <div className="ml-6">
                <h2 className="text-3xl font-bold text-primary mb-2">Week 1: The Foundation & Combined Value Proposition</h2>
                <p className="text-gray-600 mb-8">
                  Establish the groundwork for your integrated roofing and solar sales approach.
                </p>
                
                {/* Session 1 */}
                <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border-l-4 border-secondary">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-6 w-6 text-secondary mr-3" />
                    <h3 className="text-xl font-bold">Session 1 (Tuesday): Laying the Groundwork</h3>
                  </div>
                  
                  <div className="ml-9">
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-800 mb-2">Instruction (30 minutes)</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Why add Roofing/Solar? Market opportunity & customer demand</span>
                        </li>
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Mindset: Overcoming fear of a new trade, focusing on solutions</span>
                        </li>
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Understanding the Ideal "Both/And" Customer Profile</span>
                        </li>
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Core Roofing/Solar Basics (Key terms, common issues, basic product knowledge)</span>
                        </li>
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Introduction to the BDC Back Office: Dashboard, Course Materials, Simple CRM overview</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Q&A (30 minutes)</h4>
                      <div className="pl-7 text-gray-700">
                        <p>Initial fears, market questions, commitment clarification, and system access support.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Session 2 */}
                <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-secondary">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-6 w-6 text-secondary mr-3" />
                    <h3 className="text-xl font-bold">Session 2 (Thursday): Crafting Your Combined Offer & Pitch</h3>
                  </div>
                  
                  <div className="ml-9">
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-800 mb-2">Instruction (30 minutes)</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>The HUGE advantage of offering both services (convenience, trust, potential bundling)</span>
                        </li>
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Developing your core value proposition for selling both</span>
                        </li>
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Initial Goal Setting within the Back Office dashboard</span>
                        </li>
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>AI Workshop 1: Using the AI Assistant to generate initial pitch variations and value prop statements</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Q&A (30 minutes)</h4>
                      <div className="pl-7 text-gray-700">
                        <p>Value proposition refinement, clarifying your unique selling points, AI tool usage questions.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Week 2 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start mb-8">
              <div className="bg-secondary text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                2
              </div>
              <div className="ml-6">
                <h2 className="text-3xl font-bold text-primary mb-2">Week 2: Mastering the Integrated Sales Process</h2>
                <p className="text-gray-600 mb-8">
                  Develop the skills to effectively sell both roofing and solar services to your customers.
                </p>
                
                {/* Session 3 */}
                <div className="bg-gray-50 rounded-xl shadow-sm p-6 mb-6 border-l-4 border-secondary">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-6 w-6 text-secondary mr-3" />
                    <h3 className="text-xl font-bold">Session 3 (Tuesday): Lead Intake & The Combined Assessment</h3>
                  </div>
                  
                  <div className="ml-9">
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-800 mb-2">Instruction (30 minutes)</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Leveraging your existing database/past clients for leads</span>
                        </li>
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Simple referral program setup</span>
                        </li>
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Identifying ideal local target neighborhoods/triggers (age of homes, recent storms)</span>
                        </li>
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Key qualification questions: Scripting for database outreach, handling initial objections</span>
                        </li>
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Structuring the initial site visit to efficiently evaluate both roof condition and solar potential</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Q&A (30 minutes)</h4>
                      <div className="pl-7 text-gray-700">
                        <p>Database segmentation, outreach strategy questions, handling specific objections.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Session 4 */}
                <div className="bg-gray-50 rounded-xl shadow-sm p-6 border-l-4 border-secondary">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-6 w-6 text-secondary mr-3" />
                    <h3 className="text-xl font-bold">Session 4 (Thursday): The BDC Initial Contact & Appointment Setting</h3>
                  </div>
                  
                  <div className="ml-9">
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-800 mb-2">Instruction (30 minutes)</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>The standardized script/approach for initiating contact (phone, door, email)</span>
                        </li>
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Qualifying questions during the initial contact</span>
                        </li>
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Using the Simple CRM: Entering leads, logging initial assessment notes</span>
                        </li>
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Effectively setting the inspection appointment</span>
                        </li>
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Handling gatekeepers</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Q&A (30 minutes)</h4>
                      <div className="pl-7 text-gray-700">
                        <p>Role-playing initial contact, overcoming objections, time management strategies.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Week 3 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start mb-8">
              <div className="bg-secondary text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                3
              </div>
              <div className="ml-6">
                <h2 className="text-3xl font-bold text-primary mb-2">Week 3: Closing Deals & Streamlining Operations</h2>
                <p className="text-gray-600 mb-8">
                  Learn effective techniques for closing integrated roofing and solar sales.
                </p>
                
                {/* Session 5 */}
                <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border-l-4 border-secondary">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-6 w-6 text-secondary mr-3" />
                    <h3 className="text-xl font-bold">Session 5 (Tuesday): Overcoming Objections & Closing Techniques</h3>
                  </div>
                  
                  <div className="ml-9">
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-800 mb-2">Instruction (30 minutes)</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Common objections specific to adding a second trade (complexity, cost, timing)</span>
                        </li>
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Addressing concerns about coordinating two different project types</span>
                        </li>
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Reviewing effective closing language and strategies</span>
                        </li>
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Reinforcing the Guarantee</span>
                        </li>
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>CRM Deep Dive: Tracking deals through stages, setting follow-up tasks</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Q&A (30 minutes)</h4>
                      <div className="pl-7 text-gray-700">
                        <p>Handling specific objections, CRM usage questions, follow-up strategies.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Session 6 */}
                <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-secondary">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-6 w-6 text-secondary mr-3" />
                    <h3 className="text-xl font-bold">Session 6 (Thursday): The Seamless Handoff</h3>
                  </div>
                  
                  <div className="ml-9">
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-800 mb-2">Instruction (30 minutes)</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>CRITICAL: The process for handing off a signed Solar+Roof deal to operations</span>
                        </li>
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Key information required (using a standardized checklist/CRM fields)</span>
                        </li>
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Setting customer expectations for a multi-trade project timeline</span>
                        </li>
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Intro to Change Order process (using provided template/process)</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Q&A (30 minutes)</h4>
                      <div className="pl-7 text-gray-700">
                        <p>Operations processes, customer management, coordination questions.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Week 4 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start mb-8">
              <div className="bg-secondary text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                4
              </div>
              <div className="ml-6">
                <h2 className="text-3xl font-bold text-primary mb-2">Week 4: Launching Your Marketing & Ongoing Success</h2>
                <p className="text-gray-600 mb-8">
                  Set up your marketing systems and prepare for long-term success.
                </p>
                
                {/* Session 7 */}
                <div className="bg-gray-50 rounded-xl shadow-sm p-6 mb-6 border-l-4 border-secondary">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-6 w-6 text-secondary mr-3" />
                    <h3 className="text-xl font-bold">Session 7 (Tuesday): Activating Your Marketing Assets</h3>
                  </div>
                  
                  <div className="ml-9">
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-800 mb-2">Instruction (30 minutes)</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Reviewing the personalized landing page generated via the Back Office</span>
                        </li>
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>AI Workshop 2: Using the AI Assistant to customize provided email campaign templates</span>
                        </li>
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Strategies for promoting the landing page (simple social posts, email signature)</span>
                        </li>
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Asking for reviews and referrals systematically</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Q&A (30 minutes)</h4>
                      <div className="pl-7 text-gray-700">
                        <p>Marketing setup, email campaign questions, promotional strategy refinement.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Session 8 */}
                <div className="bg-gray-50 rounded-xl shadow-sm p-6 border-l-4 border-secondary">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-6 w-6 text-secondary mr-3" />
                    <h3 className="text-xl font-bold">Session 8 (Thursday): Using Your AI Bot & Long-Term Success</h3>
                  </div>
                  
                  <div className="ml-9">
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-800 mb-2">Instruction (30 minutes)</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>AI Workshop 3: Hands-on with the personalized AI Bot – asking industry questions, getting system refreshers</span>
                        </li>
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Setting launch goals for the next week</span>
                        </li>
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Introducing the personalized AI Bot within the OS – how to use it for questions on process, scripts, industry info</span>
                        </li>
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Reiteration of the Guarantee & 1-on-1 support path</span>
                        </li>
                        <li className="flex">
                          <Lightbulb className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Next steps after the bootcamp</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Q&A (30 minutes)</h4>
                      <div className="pl-7 text-gray-700">
                        <p>Using the AI bot, troubleshooting first attempts, accessing support, goal setting.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-white/80">
              Comprehensive training, powerful tools, and our industry-leading guarantee.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="flex flex-col items-center">
                  <div className="bg-white/20 rounded-full p-3 mb-4">
                    <CheckCircle className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">What You'll Learn</h3>
                  <ul className="text-white/80 text-center space-y-2">
                    <li>Complete Sales System</li>
                    <li>Cross-Selling Strategy</li>
                    <li>Closing Techniques</li>
                    <li>Marketing Automation</li>
                  </ul>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="bg-white/20 rounded-full p-3 mb-4">
                    <CheckCircle className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">What You'll Get</h3>
                  <ul className="text-white/80 text-center space-y-2">
                    <li>8 Live Training Sessions</li>
                    <li>Business Operating System</li>
                    <li>AI Sales Assistant</li>
                    <li>Our "First Deal Closed" Guarantee</li>
                  </ul>
                </div>
              </div>
              
              <Link to="/roof-sales-bootcamp" className="inline-block">
                <Button size="lg" className="bg-secondary hover:bg-secondary-600 text-white font-medium px-8 py-6 text-xl">
                  Enroll Now - Limited Spots Available <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BootcampDetails; 