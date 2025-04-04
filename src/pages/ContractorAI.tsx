import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BrainCircuit, Check, Lightbulb, LineChart, MessageSquare, Bot, Sparkles, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';

const ContractorAI = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-primary text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                AI Isn't Just for Tech Giants: Your Practical Guide to Artificial Intelligence for Contracting Success
              </h1>
              <p className="text-xl md:text-2xl font-medium text-secondary max-w-4xl mx-auto">
                Our goal isn't just to talk about AI, but to provide practical, integrated solutions specifically designed for the needs of residential contractors.
              </p>
            </div>
          </div>
        </section>
        
        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-8">
                You hear "AI" everywhere, but what does Artificial Intelligence <em>really</em> mean for your contracting business? It's more than just hype; it's a powerful set of tools poised to revolutionize how contractors operate, sell, and scale. Forget complex code – this guide breaks down the practical applications of AI that can give you a significant competitive advantage, streamline operations, and boost your bottom line. Learn how to prepare for the future and discover how BDC is paving the way with ContractorScale AI.
              </p>
              
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-primary mb-6">ContractorScale AI will focus on:</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3 mt-0.5">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">AI Readiness Assessments:</span> Helping you understand where to start.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3 mt-0.5">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Implementing High-Impact Tools:</span> Focusing on proven applications like predictive lead scoring and automation.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3 mt-0.5">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Integrating AI with Proven BDC Frameworks:</span> Ensuring AI enhances, rather than complicates, your core sales and growth systems.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3 mt-0.5">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Making AI Accessible:</span> Providing guidance and support to demystify the technology.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* What is AI Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  What is AI (Simplified for Contractors)?
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  Think of AI as smart software that can learn from data, identify patterns, make predictions, and even automate tasks that normally require human intelligence. For contractors, this means tools that can:
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Lead Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Analyze thousands of past leads to predict which new ones are most likely to close.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Communication</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Automate personalized follow-up emails and texts.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <LineChart className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Forecasting</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Help forecast project costs or revenue more accurately.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Bot className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Customer Service</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Instantly answer common customer questions on your website 24/7.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center mt-10">
                <p className="text-lg font-medium text-gray-700">
                  It's about working smarter, not harder, by letting technology handle repetitive tasks and uncover hidden insights.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Why Should Contractors Care About AI? (The Benefits)
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  Integrating AI isn't about replacing your team; it's about empowering them and improving your business:
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center mr-3">
                      <Zap className="h-5 w-5 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">Supercharge Sales Efficiency</h3>
                  </div>
                  <p className="text-gray-700">
                    Help reps focus on high-probability deals (like we aim for in our Revenue Accelerator).
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center mr-3">
                      <Target className="h-5 w-5 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">Optimize Lead Flow</h3>
                  </div>
                  <p className="text-gray-700">
                    Spend less time and money on unqualified leads (a core goal of our Lead Flow Optimizer).
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center mr-3">
                      <MessageSquare className="h-5 w-5 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">Enhance Customer Experience</h3>
                  </div>
                  <p className="text-gray-700">
                    Provide faster responses and more personalized interactions.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center mr-3">
                      <Lightbulb className="h-5 w-5 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">Improve Decision Making</h3>
                  </div>
                  <p className="text-gray-700">
                    Gain deeper insights from your data for better forecasting and strategic planning (key to our Growth Accelerator Framework).
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center mr-3">
                      <LineChart className="h-5 w-5 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">Streamline Operations</h3>
                  </div>
                  <p className="text-gray-700">
                    Automate scheduling, reporting, and communication tasks.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center mr-3">
                      <Sparkles className="h-5 w-5 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">Gain a Competitive Edge</h3>
                  </div>
                  <p className="text-gray-700">
                    Adopt technology that slower competitors haven't embraced yet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Practical Applications Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Practical AI Applications You Can Explore TODAY:
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                  While advanced AI is evolving, several applications offer immediate value for contractors:
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">Predictive Lead Scoring:</h3>
                  </div>
                  <p className="text-gray-700">
                    AI tools analyze lead data (source, demographics, engagement) to rank leads by their likelihood to convert, helping your sales team prioritize follow-up.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">Automated Email/SMS Sequences:</h3>
                  </div>
                  <p className="text-gray-700">
                    AI can trigger personalized follow-up messages based on lead behavior, ensuring no opportunity falls through the cracks without manual effort.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <Bot className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">Website Chatbots:</h3>
                  </div>
                  <p className="text-gray-700">
                    AI-powered chatbots can handle initial inquiries, qualify leads, and schedule appointments 24/7, freeing up your team.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <LineChart className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">Review Management & Sentiment Analysis:</h3>
                  </div>
                  <p className="text-gray-700">
                    AI can monitor online reviews across platforms and analyze customer feedback themes to identify areas for improvement.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <BrainCircuit className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">Enhanced CRM Analytics:</h3>
                  </div>
                  <p className="text-gray-700">
                    Some modern CRMs incorporate AI features for better forecasting, identifying at-risk deals, or suggesting next best actions for sales reps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Getting Started Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Getting Started: Preparing for the AI Revolution
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                  You don't need to become an AI expert overnight. Here's how to prepare:
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start mb-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">Focus on Data</h3>
                      <p className="text-gray-700">
                        Good AI relies on good data. Start ensuring your CRM data (leads, customers, deals) is clean, consistent, and comprehensive.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start mb-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="font-bold text-primary">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">Identify Pain Points</h3>
                      <p className="text-gray-700">
                        Where are your biggest bottlenecks? Lead qualification? Follow-up? Scheduling? Target AI solutions that address your specific challenges.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start mb-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="font-bold text-primary">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">Start Small</h3>
                      <p className="text-gray-700">
                        Experiment with one tool first, like a simple chatbot or an AI feature within your existing CRM, before making massive investments.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start mb-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="font-bold text-primary">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">Educate Your Team</h3>
                      <p className="text-gray-700">
                        Help your team understand how AI can assist them, not replace them, to encourage adoption.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 md:col-span-2">
                  <div className="flex items-start mb-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="font-bold text-primary">5</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">Partner with Experts</h3>
                      <p className="text-gray-700">
                        Work with consultants (like BDC!) who understand both contracting and AI applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* ContractorScale AI Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-primary-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  The Future is Coming: ContractorScale AI by BDC (Coming Soon!)
                </h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  At Billion Dollar Contractor, we're actively developing ContractorScale AI – a suite of AI-powered tools specifically designed for the unique needs of residential contractors.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                <p className="text-lg text-white mb-6">
                  Imagine having:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-secondary/20 p-2 rounded-full mr-3 mt-0.5">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white">AI-driven insights tailored to optimize your sales process.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/20 p-2 rounded-full mr-3 mt-0.5">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white">Predictive analytics fine-tuned for contracting business models.</span>
                  </li>
                </ul>
                
                <div className="mt-8 p-6 bg-white/10 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Stay Tuned: This page will evolve as ContractorScale AI launches. Expect to find:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="bg-secondary/20 p-1 rounded-full mr-2 mt-1">
                        <ArrowRight className="h-3 w-3 text-white" />
                      </div>
                      <span>Detailed guides on specific AI applications for contractors.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-secondary/20 p-1 rounded-full mr-2 mt-1">
                        <ArrowRight className="h-3 w-3 text-white" />
                      </div>
                      <span>Case studies of AI implementation successes.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-secondary/20 p-1 rounded-full mr-2 mt-1">
                        <ArrowRight className="h-3 w-3 text-white" />
                      </div>
                      <span>Recommendations for vetted AI tools.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-secondary/20 p-1 rounded-full mr-2 mt-1">
                        <ArrowRight className="h-3 w-3 text-white" />
                      </div>
                      <span>Information on BDC's specific AI service offerings.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Is Your Business Ready for the AI Advantage?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                While ContractorScale AI is under development, the principles of strong data practices and optimized processes are key prerequisites. Let's discuss how BDC can help you build the foundation needed to leverage AI effectively in the near future.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact">
                  <Button className="px-8 py-6 bg-secondary hover:bg-secondary/90 text-white text-lg w-full sm:w-auto">
                    Discuss Your AI Readiness
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/newsletter">
                  <Button className="px-8 py-6 bg-primary hover:bg-primary/90 text-white text-lg w-full sm:w-auto">
                    Sign Up for AI Updates
                    <ArrowRight className="ml-2 h-5 w-5" />
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

export default ContractorAI; 