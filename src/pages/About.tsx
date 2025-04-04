import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-primary text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="md:w-1/2">
                  <h1 className="text-3xl md:text-5xl font-bold mb-6">
                    Meet Steve Huber - Architect of Scalable Contractor Growth
                  </h1>
                  <p className="text-xl md:text-2xl font-medium text-secondary mb-6">
                    From Chaos to Control: Building Your $10M+ Contracting Blueprint
                  </p>
                </div>
                
                <div className="md:w-1/2">
                  {/* Updated to use steve1.png */}
                  <div className="w-full aspect-square bg-gray-300 rounded-2xl shadow-lg overflow-hidden">
                    <img 
                      src="/Images/steve1.png" 
                      alt="Steve Huber, Founder of Billion Dollar Contractor" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://placehold.co/600x600/00BCD4/FFFFFF?text=Steve+Huber';
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Intro Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                Hi, I'm Steve Huber, Founder of Billion Dollar Contractor (BDC).
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p>
                  Like many of you, I've been deep in the trenches of the contracting world. I've witnessed firsthand the incredible drive and skill it takes to build a successful business – hitting that first million, then pushing past $5M or even $10M.
                </p>
                
                <p>
                  But I've also seen where things often get stuck. Growth stalls. The owner (maybe that's you?) becomes the bottleneck, buried in day-to-day fires instead of focusing on the future. Sales become unpredictable, hiring feels like a gamble, and the idea of getting bigger starts to feel like it just means more chaos and less profit margin.
                </p>
                
                <p>
                  You didn't get into this business to feel overwhelmed and overworked. You got into it to build something great, serve your customers well, and create freedom for yourself and your team.
                </p>
              </div>
              
              <div className="mt-12 bg-primary-100 p-8 rounded-xl">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  That's Why BDC Exists.
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  I founded Billion Dollar Contractor with a clear mission: to provide contractors like you with the practical systems and hands-on support needed to break through growth ceilings and scale predictably. We don't just hand you a plan and wish you luck; we roll up our sleeves and build your growth engine alongside you.
                </p>
                
                <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg mb-6">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/eLigBqphoQw?si=49UgkectfFFfyLej"
                    title="A Message from Steve Huber, Founder of BDC"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Approach Section */}
        <section className="py-16 relative">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/Images/about_back1.jpg" 
              alt="Systems background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/85"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Our Approach: Systems, Implementation, and AI Leverage
                </h2>
                <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                  At the core of what we do is the belief that sustainable scaling comes from robust, repeatable systems – not just sheer effort.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 shadow-lg">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Designing Your Blueprint</h3>
                  <p className="text-gray-200">
                    We assess your unique situation – sales process, operational flow, team structure, technology – and map out the specific systems needed for your next level of growth.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 shadow-lg">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Hands-On Implementation</h3>
                  <p className="text-gray-200">
                    This is where BDC is different. We actively help build and implement these systems directly into your business. That means configuring your CRM, documenting key workflows, setting up reporting, creating training materials, and refining sales processes with your team.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 shadow-lg">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">The AI Central Framework</h3>
                  <p className="text-gray-200">
                    Scaling shouldn't mean drowning in complexity or forcing your team to work endless hours. We integrate intelligent automation and AI agents (aiming to handle up to 80% of repetitive tasks) into your core systems.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-6">Think of AI Central as a brain that helps:</h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="flex items-start mb-4">
                      <div className="bg-secondary p-2 rounded-full mr-3">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <h4 className="font-bold text-white">Automate Workflows</h4>
                    </div>
                    <p className="text-gray-200 ml-10">
                      Streamlining tasks like lead follow-up, appointment reminders, and data syncing.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-start mb-4">
                      <div className="bg-secondary p-2 rounded-full mr-3">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <h4 className="font-bold text-white">Provide Insights</h4>
                    </div>
                    <p className="text-gray-200 ml-10">
                      Automatically scoring leads, analyzing bid profitability, and flagging potential project risks.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-start mb-4">
                      <div className="bg-secondary p-2 rounded-full mr-3">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <h4 className="font-bold text-white">Boost Efficiency</h4>
                    </div>
                    <p className="text-gray-200 ml-10">
                      Offering communication drafts, identifying coaching opportunities for your team, and simplifying reporting.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-black/30 rounded-lg border border-white/10">
                  <p className="text-white italic">
                    Our Goal: Use technology smartly to make scaling simpler and more profitable, letting your team focus on high-value work, not busywork.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Experience Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Experience That Drives Results
                </h2>
              </div>
              
              <div className="md:flex">
                <div className="md:w-1/2 md:pr-8">
                  <p className="text-lg text-gray-700 mb-6">
                    My background involves direct experience in environments that achieved explosive, award-winning growth. I've seen firsthand how implementing the right systems can transform a business, leading to results like:
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <TrendingUp className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">
                        Scaling new sales divisions from zero to tens of millions in revenue remarkably quickly.
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <TrendingUp className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">
                        Achieving consistent recognition as a fastest-growing company (like those seen on the INC 5000 list).
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <TrendingUp className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">
                        Successfully launching and scaling multiple service lines (like Solar, Roofing, and HVAC) under one roof.
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <TrendingUp className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">
                        Reaching #1 market positions through optimized sales and operational execution.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2 md:pl-8 md:border-l border-gray-200">
                  <div className="bg-gray-50 p-8 rounded-xl">
                    <p className="text-lg text-gray-700 mb-6">
                      This isn't theory; it's the proven outcome of replacing gut-feel and chaos with structured, repeatable, and increasingly automated processes. BDC brings this implementation expertise directly to your contracting business.
                    </p>
                    
                    <div className="p-4 bg-primary-50 rounded-lg border border-primary-100">
                      <h3 className="text-xl font-bold text-primary mb-2">Ready to Build Your Scalable Future?</h3>
                      <p className="text-gray-700 mb-4">
                        If you're a contractor aiming for significant growth but feel like you're hitting a wall, let's talk. Let BDC help you implement the systems that build predictability, reduce the chaos, and free you up to lead your company to its next milestone.
                      </p>
                      
                      <Link to="/contact">
                        <Button className="bg-secondary hover:bg-secondary-600 text-white w-full md:w-auto">
                          Schedule Your Free Growth Blueprint Call Today
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About; 