import React, { useState } from 'react';
import { ArrowRight, CheckCircle, TrendingUp, BarChart2, Users, Settings, Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';

// Sample data for Team Size chart
const teamSizeData = [
  { name: 'Before BDC', value: 6, fill: '#94A3B8' },
  { name: 'After 30 Days', value: 12, fill: '#0EA5E9' }
];

// Sample data for Sales Metrics chart
const salesMetricsData = [
  { day: 'Day 1', leads: 10, closedDeals: 2, revenue: 20000 },
  { day: 'Day 5', leads: 12, closedDeals: 2, revenue: 22000 },
  { day: 'Day 10', leads: 18, closedDeals: 3, revenue: 32000 },
  { day: 'Day 15', leads: 22, closedDeals: 4, revenue: 45000 },
  { day: 'Day 20', leads: 28, closedDeals: 6, revenue: 65000 },
  { day: 'Day 25', leads: 32, closedDeals: 7, revenue: 78000 },
  { day: 'Day 30', leads: 38, closedDeals: 8, revenue: 94000 }
];

function TexasContractorCaseStudy() {
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: number}>({
    leadership: 0,
    processes: 0,
    tracking: 0,
    teamSize: 0,
    morale: 0
  });
  
  const handleQuizChange = (category: string, value: number) => {
    setQuizAnswers(prev => ({...prev, [category]: value}));
  };
  
  const calculateScore = () => {
    const total = Object.values(quizAnswers).reduce((sum, val) => sum + val, 0);
    const percentage = Math.round((total / 25) * 100);
    setQuizScore(percentage);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="mb-16 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              From 'Dead & Dying' to Market Leader: How BDC Ignited Explosive Growth for a Texas Contractor in Just 30 Days
            </h1>
            <p className="text-xl text-gray-600">
              A case study in rapid business transformation and revival
            </p>
          </div>
          
          {/* Client Profile */}
          <div className="bg-white rounded-2xl shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">Client Profile</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col">
                <h3 className="font-bold text-gray-700">Industry</h3>
                <p className="text-gray-600">Home Improvement / General Contracting</p>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-gray-700">Markets</h3>
                <p className="text-gray-600">Houston, Dallas, Austin, TX</p>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-gray-700">Timeframe</h3>
                <p className="text-gray-600">30 Days (Initial Transformation Phase)</p>
              </div>
            </div>
          </div>
          
          {/* The Challenge Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">The Challenge: A Business on Life Support</h2>
            
            <div className="flex flex-col lg:flex-row gap-10 items-center mb-8">
              <div className="lg:w-1/2">
                <p className="text-lg text-gray-700 mb-6">
                  When this multi-market Texas contractor reached out to BDC, the situation was dire. The company had been described as "dead and dying" – struggling to maintain operations across its Texas markets with fundamental problems threatening its very existence.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="p-1 bg-red-100 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <title>Problem indicator</title>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Ineffective sales leadership at the VP level</p>
                  </div>
                  <div className="flex items-start">
                    <div className="p-1 bg-red-100 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <title>Problem indicator</title>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Broken, outdated, or non-existent sales processes</p>
                  </div>
                  <div className="flex items-start">
                    <div className="p-1 bg-red-100 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <title>Problem indicator</title>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Lack of performance tracking systems and accountability</p>
                  </div>
                  <div className="flex items-start">
                    <div className="p-1 bg-red-100 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <title>Problem indicator</title>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Underperforming, possibly demotivated sales team, insufficient team size</p>
                  </div>
                  <div className="flex items-start">
                    <div className="p-1 bg-red-100 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <title>Problem indicator</title>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Low overall confidence and morale throughout the organization</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/Images/outdoors-diverse-father-and-daughter-interacting-2024-06-06-00-10-03-utc.jpg" 
                    alt="Before: Struggling team in dim office setting" 
                    className="w-full h-auto brightness-75 filter"
                  />
                  <div className="bg-gray-800 text-white p-4">
                    <p className="text-sm italic">The company was described as "dead and dying" before BDC's intervention</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* The Solution Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">The Solution: BDC's 30-Day Rapid Intervention</h2>
            
            <div className="flex flex-col lg:flex-row gap-10 items-center mb-12">
              <div className="lg:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/Images/steve1.png" 
                    alt="Steve Huber explaining a streamlined sales funnel" 
                    className="w-full h-auto"
                  />
                  <div className="bg-gray-800 text-white p-4">
                    <p className="text-sm italic">BDC's Steve Huber implementing decisive leadership changes and process optimization</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <p className="text-lg text-gray-700 mb-6">
                  BDC's approach was comprehensive and decisive. We didn't just advise – we acted, implementing immediate changes to arrest the decline and spark a rapid turnaround.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-2 bg-blue-100 rounded-full mr-4 mt-1">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Leadership Transformation</h3>
                      <p className="text-gray-600">Replaced ineffective VP of Sales and established a new, performance-driven sales manager to provide clear direction and accountability.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-blue-100 rounded-full mr-4 mt-1">
                      <Settings className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Process Reengineering</h3>
                      <p className="text-gray-600">Audited and completely rebuilt all sales processes, implementing proven best practices for lead handling, qualification, and closing.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-blue-100 rounded-full mr-4 mt-1">
                      <BarChart2 className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">KPI Implementation</h3>
                      <p className="text-gray-600">Deployed robust tracking systems to measure sales activities, conversions, and performance metrics at every stage of the sales process.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-blue-100 rounded-full mr-4 mt-1">
                      <TrendingUp className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Team Expansion</h3>
                      <p className="text-gray-600">Implemented aggressive recruitment strategies, DOUBLING the sales team size in just 30 days with qualified, motivated talent.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md mb-8">
              <h3 className="text-xl font-bold text-primary mb-6">The Speed Factor: Why BDC's Approach Was Different</h3>
              <p className="text-gray-700 mb-6">
                What set BDC's intervention apart was not just what we did, but how quickly and decisively we did it. Our team didn't just advise – we took ownership of the transformation:
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-gray-800">Rapid Diagnosis</h4>
                  <p className="text-sm text-gray-600">48-hour assessment of all critical failure points</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-gray-800">Decisive Action</h4>
                  <p className="text-sm text-gray-600">No time wasted on extended planning – implementation began immediately</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-gray-800">Hands-On Approach</h4>
                  <p className="text-sm text-gray-600">BDC worked directly within the organization, not as external consultants</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-gray-800">Daily Execution</h4>
                  <p className="text-sm text-gray-600">Real-time adjustments and optimization throughout the 30-day period</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Interactive Charts Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Measurable Transformation</h2>
            
            <div className="grid md:grid-cols-2 gap-10">
              {/* Chart 1: Team Size */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-primary mb-4">Sales Team Growth</h3>
                <p className="text-gray-600 mb-6">BDC doubled the sales team size in just 30 days, bringing in qualified talent ready to execute the new processes.</p>
                
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={teamSizeData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
                      barSize={60}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis 
                        dataKey="name" 
                        tick={{ fontSize: 12 }}
                        axisLine={{ stroke: '#E5E7EB' }}
                        tickLine={false}
                      />
                      <YAxis 
                        tick={{ fontSize: 12 }}
                        axisLine={{ stroke: '#E5E7EB' }}
                        tickLine={false}
                        domain={[0, 15]}
                        label={{ value: 'Team Members', angle: -90, position: 'insideLeft', dy: 50, fontSize: 12 }}
                      />
                      <Tooltip 
                        formatter={(value) => [`${value} team members`, 'Size']}
                        contentStyle={{
                          backgroundColor: 'white',
                          border: '1px solid #E5E7EB',
                          borderRadius: '4px',
                          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                        }}
                      />
                      <Bar 
                        dataKey="value" 
                        radius={[4, 4, 0, 0]}
                        label={{ position: 'top', fill: '#4B5563', fontSize: 12 }}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              {/* Chart 2: Key Sales Metrics */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-primary mb-4">30-Day Sales Metrics Growth</h3>
                <p className="text-gray-600 mb-6">Our structured approach led to dramatic growth in key sales metrics throughout the 30-day program.</p>
                
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={salesMetricsData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis 
                        dataKey="day" 
                        tick={{ fontSize: 12 }}
                        axisLine={{ stroke: '#E5E7EB' }}
                        tickLine={false}
                      />
                      <YAxis 
                        yAxisId="left"
                        tick={{ fontSize: 12 }}
                        axisLine={{ stroke: '#E5E7EB' }}
                        tickLine={false}
                        label={{ value: 'Count', angle: -90, position: 'insideLeft', fontSize: 12 }}
                      />
                      <YAxis 
                        yAxisId="right"
                        orientation="right"
                        tick={{ fontSize: 12 }}
                        axisLine={{ stroke: '#E5E7EB' }}
                        tickLine={false}
                        label={{ value: 'Revenue ($)', angle: 90, position: 'insideRight', fontSize: 12 }}
                        domain={[0, 100000]}
                        tickFormatter={(value) => `$${value/1000}k`}
                      />
                      <Tooltip 
                        formatter={(value, name) => {
                          if (name === 'revenue') return [`$${value.toLocaleString()}`, 'Revenue'];
                          return [value, name === 'leads' ? 'Leads' : 'Closed Deals'];
                        }}
                        contentStyle={{
                          backgroundColor: 'white',
                          border: '1px solid #E5E7EB',
                          borderRadius: '4px',
                          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                        }}
                      />
                      <Legend />
                      <Line 
                        yAxisId="left"
                        type="monotone" 
                        dataKey="leads" 
                        stroke="#0EA5E9" 
                        strokeWidth={2}
                        dot={{ stroke: '#0EA5E9', strokeWidth: 2, r: 4, fill: 'white' }}
                        activeDot={{ r: 6 }}
                        name="Leads"
                      />
                      <Line 
                        yAxisId="left"
                        type="monotone" 
                        dataKey="closedDeals" 
                        stroke="#10B981" 
                        strokeWidth={2}
                        dot={{ stroke: '#10B981', strokeWidth: 2, r: 4, fill: 'white' }}
                        activeDot={{ r: 6 }}
                        name="Closed Deals"
                      />
                      <Line 
                        yAxisId="right"
                        type="monotone" 
                        dataKey="revenue" 
                        stroke="#6366F1" 
                        strokeWidth={2}
                        dot={{ stroke: '#6366F1', strokeWidth: 2, r: 4, fill: 'white' }}
                        activeDot={{ r: 6 }}
                        name="Revenue"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
          
          {/* Interactive Quiz Section */}
          <div className="mb-16">
            <div className="bg-white rounded-xl shadow-md p-8 overflow-hidden">
              <h2 className="text-2xl font-bold text-primary mb-6">Is Your Sales Engine Firing on All Cylinders?</h2>
              <p className="text-gray-600 mb-8">
                Take this quick assessment to see if your contracting business is showing signs similar to our Texas client's pre-BDC situation.
              </p>
              
              {quizScore === null ? (
                <div className="space-y-8">
                  {/* Question 1 */}
                  <div>
                    <h3 className="font-bold text-gray-800 mb-3">1. Sales Leadership Effectiveness</h3>
                    <p className="text-gray-600 mb-4">How would you rate the effectiveness of your current sales leadership?</p>
                    <div className="flex flex-wrap gap-3">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <button
                          type="button"
                          key={value}
                          className={`px-4 py-2 rounded-md border ${quizAnswers.leadership === value ? 'bg-blue-100 border-blue-500' : 'border-gray-300'}`}
                          onClick={() => handleQuizChange('leadership', value)}
                        >
                          {value}
                        </button>
                      ))}
                    </div>
                    <div className="flex text-xs text-gray-500 justify-between mt-1">
                      <span>Very ineffective</span>
                      <span>Very effective</span>
                    </div>
                  </div>
                  
                  {/* Question 2 */}
                  <div>
                    <h3 className="font-bold text-gray-800 mb-3">2. Sales Process Clarity</h3>
                    <p className="text-gray-600 mb-4">How well-documented and followed are your sales processes?</p>
                    <div className="flex flex-wrap gap-3">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <button
                          type="button"
                          key={value}
                          className={`px-4 py-2 rounded-md border ${quizAnswers.processes === value ? 'bg-blue-100 border-blue-500' : 'border-gray-300'}`}
                          onClick={() => handleQuizChange('processes', value)}
                        >
                          {value}
                        </button>
                      ))}
                    </div>
                    <div className="flex text-xs text-gray-500 justify-between mt-1">
                      <span>No clear process</span>
                      <span>Excellent process</span>
                    </div>
                  </div>
                  
                  {/* Question 3 */}
                  <div>
                    <h3 className="font-bold text-gray-800 mb-3">3. Performance Tracking</h3>
                    <p className="text-gray-600 mb-4">How effectively are you tracking sales activities and KPIs?</p>
                    <div className="flex flex-wrap gap-3">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <button
                          type="button"
                          key={value}
                          className={`px-4 py-2 rounded-md border ${quizAnswers.tracking === value ? 'bg-blue-100 border-blue-500' : 'border-gray-300'}`}
                          onClick={() => handleQuizChange('tracking', value)}
                        >
                          {value}
                        </button>
                      ))}
                    </div>
                    <div className="flex text-xs text-gray-500 justify-between mt-1">
                      <span>No tracking</span>
                      <span>Comprehensive tracking</span>
                    </div>
                  </div>
                  
                  {/* Question 4 */}
                  <div>
                    <h3 className="font-bold text-gray-800 mb-3">4. Sales Team Size Adequacy</h3>
                    <p className="text-gray-600 mb-4">Is your sales team adequately sized for your market opportunity?</p>
                    <div className="flex flex-wrap gap-3">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <button
                          type="button"
                          key={value}
                          className={`px-4 py-2 rounded-md border ${quizAnswers.teamSize === value ? 'bg-blue-100 border-blue-500' : 'border-gray-300'}`}
                          onClick={() => handleQuizChange('teamSize', value)}
                        >
                          {value}
                        </button>
                      ))}
                    </div>
                    <div className="flex text-xs text-gray-500 justify-between mt-1">
                      <span>Severely understaffed</span>
                      <span>Perfectly staffed</span>
                    </div>
                  </div>
                  
                  {/* Question 5 */}
                  <div>
                    <h3 className="font-bold text-gray-800 mb-3">5. Team Morale & Confidence</h3>
                    <p className="text-gray-600 mb-4">How would you rate your sales team's morale and confidence?</p>
                    <div className="flex flex-wrap gap-3">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <button
                          type="button"
                          key={value}
                          className={`px-4 py-2 rounded-md border ${quizAnswers.morale === value ? 'bg-blue-100 border-blue-500' : 'border-gray-300'}`}
                          onClick={() => handleQuizChange('morale', value)}
                        >
                          {value}
                        </button>
                      ))}
                    </div>
                    <div className="flex text-xs text-gray-500 justify-between mt-1">
                      <span>Very low</span>
                      <span>Very high</span>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700 text-white" 
                      size="lg"
                      onClick={calculateScore}
                    >
                      Calculate My Sales Health Score
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-blue-100 mb-6">
                    <span className="text-3xl font-bold text-blue-600">{quizScore}%</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">
                    {quizScore < 40 ? 'Your sales engine needs immediate attention' : 
                     quizScore < 70 ? 'Your sales system has significant room for improvement' :
                     'Your sales engine is running well, but could be optimized further'}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {quizScore < 40 ? "Your situation is similar to our Texas client before BDC's intervention. Decisive action could transform your business." : 
                     quizScore < 70 ? "While not critical, your business could benefit substantially from sales system improvements." :
                     "You're doing well, but the right adjustments could take your business to the next level."}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Schedule a Free Sales Audit Call
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-blue-600 text-blue-600"
                      onClick={() => setQuizScore(null)}
                    >
                      Retake Assessment
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Results Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">The Results: From Crisis to Confidence in 30 Days</h2>
            
            <div className="flex flex-col lg:flex-row gap-10 mb-10">
              <div className="lg:w-1/2">
                <p className="text-lg text-gray-700 mb-6">
                  The transformation was dramatic and exceeded all expectations. Within just 30 days, BDC had turned a "dead and dying" business into a dynamic, forward-moving organization with clear direction and momentum.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="p-1 bg-green-100 rounded-full mr-3 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-gray-700"><span className="font-semibold">Complete operational turnaround</span> - from disorganized chaos to structured, repeatable processes</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-1 bg-green-100 rounded-full mr-3 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-gray-700"><span className="font-semibold">Doubled sales team size</span> - with each new hire properly trained and integrated</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-1 bg-green-100 rounded-full mr-3 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-gray-700"><span className="font-semibold">Created a "phenomenal," energized team</span> with clear direction and accountability</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-1 bg-green-100 rounded-full mr-3 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-gray-700"><span className="font-semibold">Enabled data-driven decision-making</span> with robust KPI tracking at every sales stage</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-1 bg-green-100 rounded-full mr-3 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-gray-700"><span className="font-semibold">Built confidence and stability</span> needed for expansion into California and other markets</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/Images/happy-family-near-their-house-with-solar-panels-a-2024-10-22-10-07-46-utc.jpg" 
                    alt="After: Bright office with a larger, engaged team" 
                    className="w-full h-auto"
                  />
                  <div className="bg-gray-800 text-white p-4">
                    <p className="text-sm italic">The revitalized team preparing for expansion into California after BDC's intervention</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="font-bold text-gray-800 mb-2">BDC's Core Contribution</h3>
              <p className="text-gray-700">
                What distinguished BDC's approach was our combination of <span className="font-semibold">rapid diagnosis</span>, <span className="font-semibold">decisive leadership changes</span>, <span className="font-semibold">process optimization</span>, and <span className="font-semibold">system implementation</span> – all delivered with extreme speed. We didn't just consult; we became embedded partners in the transformation, working side-by-side with the client to implement and optimize every change in real time.
              </p>
            </div>
          </div>
          
          {/* Call to Action Section */}
          <div className="bg-primary text-white rounded-xl p-10 mb-16">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Contracting Business?</h2>
              <p className="text-xl text-white/80 mb-8">
                Schedule a free, no-obligation sales audit call to discover how BDC can ignite growth in your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Schedule a Free Sales Audit Call <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Download className="mr-2 h-5 w-5" /> Download Full Case Study PDF
                </Button>
              </div>
            </div>
          </div>
          
          {/* Related Case Studies */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Explore More Success Stories</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/semper-solaris-case" className="block group">
                <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all group-hover:shadow-lg">
                  <div className="aspect-video bg-gray-100 relative overflow-hidden">
                    <img 
                      src="/Images/Semper_Solaris_Logo.webp" 
                      alt="Semper Solaris Case Study" 
                      className="w-full h-full object-contain p-4"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-white">Semper Solaris: Systemizing for Explosive Scale</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600">Lessons from the Semper Solaris Growth Trajectory</p>
                    <div className="flex items-center text-blue-600 mt-3 group-hover:underline">
                      <span className="font-medium">Read Case Study</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
              
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md border border-dashed border-gray-300 flex flex-col justify-center items-center p-8 text-center">
                <FileText className="h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-bold text-gray-700 mb-2">More Case Studies Coming Soon</h3>
                <p className="text-gray-500">We're constantly adding new success stories from our clients</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TexasContractorCaseStudy; 