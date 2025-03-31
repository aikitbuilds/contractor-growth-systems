import React from 'react';
import { ArrowRight, CheckCircle, Award, TrendingUp, BarChart2, Users, Settings, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';

function SemperSolarisCase() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="mb-16 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Case Study: Systemizing for Explosive Scale
            </h1>
            <p className="text-xl text-gray-600">
              Lessons from the Semper Solaris Growth Trajectory
            </p>
          </div>
          
          {/* Disclaimer */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-12 rounded-r-lg">
            <p className="text-amber-800 font-medium mb-0">
              <strong>Important Disclaimer:</strong> This case study uses publicly recognized achievements of Semper Solaris to illustrate the potential outcomes of implementing robust business systems, similar to those provided by Billion Dollar Contractor (BDC). It does not imply BDC was directly responsible for these specific past results at Semper Solaris, but rather showcases the kind of success BDC aims to help its clients achieve.
            </p>
          </div>
          
          {/* Client Profile */}
          <div className="bg-white rounded-2xl shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">Client Profile: Semper Solaris (Illustrative Example)</h2>
            <p className="text-lg text-gray-700">
              A rapidly expanding contractor operating in highly competitive markets like California, offering Solar, Battery Storage, Roofing, and HVAC services.
            </p>
          </div>
          
          {/* The Challenge Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">The Challenge: Moving Beyond Early Success to Sustainable Scale</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Many successful contractors reach a point where the strategies that got them to their first million (or even $5M−$10M) start to break down. Growth stalls, operations become chaotic, and the owner feels trapped managing day-to-day fires instead of steering the ship. Common challenges at this stage often include:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Challenge 1 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-primary/10 rounded-full mr-4">
                    <BarChart2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-800">Inconsistent Sales</h3>
                </div>
                <p className="text-gray-600">
                  Revenue fluctuates wildly, relying on individual efforts rather than a predictable process.
                </p>
              </div>
              
              {/* Challenge 2 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-primary/10 rounded-full mr-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-800">Owner Dependency</h3>
                </div>
                <p className="text-gray-600">
                  The founder is the bottleneck for key decisions, sales management, and problem-solving.
                </p>
              </div>
              
              {/* Challenge 3 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-primary/10 rounded-full mr-4">
                    <Settings className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-800">Operational Chaos</h3>
                </div>
                <p className="text-gray-600">
                  Lack of standardized workflows leads to errors, delays, and frustrated customers and employees.
                </p>
              </div>
              
              {/* Challenge 4 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-primary/10 rounded-full mr-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-800">Difficult Team Scaling</h3>
                </div>
                <p className="text-gray-600">
                  Hiring, onboarding, and training new team members is inefficient and results are inconsistent.
                </p>
              </div>
              
              {/* Challenge 5 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-primary/10 rounded-full mr-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-800">Struggles Expanding Services</h3>
                </div>
                <p className="text-gray-600">
                  Launching or scaling new divisions (like HVAC or Roofing alongside Solar) lacks a repeatable blueprint.
                </p>
              </div>
            </div>
            
            <p className="text-lg text-gray-700">
              While Semper Solaris achieved remarkable success, their journey highlights the types of hurdles contractors face before implementing the robust systems needed for massive, award-winning growth.
            </p>
          </div>
          
          {/* The Solution Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">The Solution: Building the Engine for Predictable Growth</h2>
            <h3 className="text-xl text-secondary font-medium mb-6">The BDC Approach</h3>
            
            <p className="text-lg text-gray-700 mb-8">
              Scaling successfully isn't just about working harder; it's about implementing the right systems to handle increased volume efficiently and profitably. Billion Dollar Contractor partners with ambitious contractors to design and provide hands-on implementation of these critical systems. We act as both the architect and the builder for your growth engine.
            </p>
            
            <h3 className="text-2xl font-bold text-primary mb-6">The BDC Implementation Framework (Illustrative Application):</h3>
            
            <div className="space-y-12">
              {/* Framework 1 */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h4 className="text-xl font-bold text-primary mb-4">Building a Scalable Sales Engine:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Documented Sales Process</p>
                      <p className="text-gray-600">Defining every step from lead intake to closed deal and post-sale follow-up.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">CRM Implementation & Optimization</p>
                      <p className="text-gray-600">Configuring tools like GHL or Monday.com for lead tracking, pipeline management, automated follow-ups, and clear reporting.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Lead Management Systems</p>
                      <p className="text-gray-600">Ensuring no lead falls through the cracks, regardless of source (marketing, referrals, etc.).</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Performance Tracking</p>
                      <p className="text-gray-600">Establishing clear KPIs and dashboards for visibility on close rates, ASP, pipeline velocity, etc.</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 bg-gray-50 p-4 rounded-lg border-l-4 border-secondary">
                  <p className="text-gray-700 italic">
                    <strong>Likely impact on $0 {'->'} $35M Inside Sales Growth:</strong> A structured process and CRM would be essential for managing lead flow, training reps consistently, and tracking performance for such rapid scaling.
                  </p>
                </div>
              </div>
              
              {/* Framework 2 */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h4 className="text-xl font-bold text-primary mb-4">Establishing Operational Efficiency & Scalability:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Standardized Workflows</p>
                      <p className="text-gray-600">Documenting key processes like the sales-to-operations handoff, project milestones, and client communication cadences.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Automation Mapping</p>
                      <p className="text-gray-600">Identifying and implementing automation for repetitive tasks to free up human resources.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Cross-Functional Communication</p>
                      <p className="text-gray-600">Ensuring smooth information flow between departments (Sales, Ops, Finance, Marketing).</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 bg-gray-50 p-4 rounded-lg border-l-4 border-secondary">
                  <p className="text-gray-700 italic">
                    <strong>Likely impact on INC 5000 Awards:</strong> Handling rapid growth requires efficient operations that don't break under pressure. Systematized workflows are key.
                  </p>
                </div>
              </div>
              
              {/* Framework 3 */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h4 className="text-xl font-bold text-primary mb-4">Enabling Team Growth & Performance:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Structured Onboarding</p>
                      <p className="text-gray-600">Creating repeatable plans (like a 30-Day Onboarding Checklist) to get new hires productive faster.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Targeted Training</p>
                      <p className="text-gray-600">Developing role-specific training on processes, tools (CRM, proposal software), and sales techniques.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Clear Role Definitions & KPIs</p>
                      <p className="text-gray-600">Ensuring everyone understands their responsibilities and how success is measured.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Aligned Compensation Plans</p>
                      <p className="text-gray-600">Designing structures that motivate the right behaviors and support overall business goals.</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 bg-gray-50 p-4 rounded-lg border-l-4 border-secondary">
                  <p className="text-gray-700 italic">
                    <strong>Likely impact on Scaling Multiple Verticals & Teams:</strong> Consistent onboarding and training allow for predictable team expansion.
                  </p>
                </div>
              </div>
              
              {/* Framework 4 */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h4 className="text-xl font-bold text-primary mb-4">Strategic Vertical Integration & Launch:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Replicable "Launchpad" Model</p>
                      <p className="text-gray-600">Applying systematic processes to successfully launch and scale new service lines (like HVAC and Roofing alongside Solar).</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Tailored Sales Approaches</p>
                      <p className="text-gray-600">Adapting the core sales process for the nuances of each trade.</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 bg-gray-50 p-4 rounded-lg border-l-4 border-secondary">
                  <p className="text-gray-700 italic">
                    <strong>Likely impact on HVAC/Roofing Awards:</strong> A systematic approach to launching new verticals accelerates success.
                  </p>
                </div>
              </div>
              
              {/* Framework 5 */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h4 className="text-xl font-bold text-primary mb-4">Data-Driven Decision Making (Leveraging AI):</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Automated Dashboards</p>
                      <p className="text-gray-600">Providing real-time visibility without manual report pulling (potentially via ContractorScale AI).</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">AI Insights</p>
                      <p className="text-gray-600">Using tools for lead scoring, bid optimization guidance, performance trend analysis, and identifying coaching opportunities.</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 bg-gray-50 p-4 rounded-lg border-l-4 border-secondary">
                  <p className="text-gray-700 italic">
                    <strong>Likely impact on #1 Ranking & Sustained Growth:</strong> Continuous improvement based on accurate data is crucial for staying ahead.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* The Results Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">The Results: A Blueprint for Industry Leadership</h2>
            <h3 className="text-xl text-secondary font-medium mb-6">Based on Semper Solaris Public Achievements</h3>
            
            <p className="text-lg text-gray-700 mb-8">
              Implementing robust, scalable systems, like those BDC specializes in, lays the foundation for the kind of phenomenal results Semper Solaris has publicly achieved:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Result 1 */}
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-secondary">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-secondary mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Explosive Sales Growth</h3>
                </div>
                <p className="text-gray-600">
                  Building an inside sales department from scratch to $35 million/year in just one year requires highly effective, scalable sales systems.
                </p>
              </div>
              
              {/* Result 2 */}
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-secondary">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-8 w-8 text-secondary mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Sustained, Rapid Expansion</h3>
                </div>
                <p className="text-gray-600">
                  Earning 5 INC 5000 awards signifies consistent, high-percentage growth year-over-year, impossible without strong operational infrastructure.
                </p>
              </div>
              
              {/* Result 3 */}
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-secondary">
                <div className="flex items-center mb-4">
                  <Zap className="h-8 w-8 text-secondary mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Multi-Vertical Excellence</h3>
                </div>
                <p className="text-gray-600">
                  Winning Dealer of the Year awards (Owens Corning - Roofing) and "Fastest Growing HVAC Company" (Samsung) demonstrates the successful application of systematic growth principles across different trades.
                </p>
              </div>
              
              {/* Result 4 */}
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-secondary">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-secondary mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Market Leadership</h3>
                </div>
                <p className="text-gray-600">
                  Achieving #1 Residential Solar + Storage Contractor in the USA (Solar Power World) is the pinnacle outcome of optimized sales, marketing, and operational execution.
                </p>
              </div>
            </div>
          </div>
          
          {/* Key Takeaway */}
          <div className="bg-primary-100 p-8 rounded-2xl mb-16">
            <h2 className="text-2xl font-bold text-primary mb-4">Key Takeaway:</h2>
            <p className="text-lg text-gray-700 mb-0">
              The remarkable growth trajectory exemplified by Semper Solaris underscores a fundamental truth: Sustainable, profitable scaling in the contracting industry is built on a foundation of well-designed, consistently executed systems. Random acts of sales heroism or owner brute force eventually hit a ceiling. BDC provides the hands-on partnership to build the specific systems your business needs to break through those ceilings and achieve predictable, scalable success.
            </p>
          </div>
          
          {/* CTA Section */}
          <div className="text-center bg-white p-12 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-6">Ready to build the systems for your growth story?</h2>
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary-600 text-white">
                Schedule Your Strategy Call Today <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SemperSolarisCase; 