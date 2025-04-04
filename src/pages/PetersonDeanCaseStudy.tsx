import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, TrendingUp, BarChart2, Users, MapPin, Award, Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, AreaChart, Area } from 'recharts';

// Sample data for Revenue Growth chart
const revenueGrowthData = [
  { period: 'Start', revenue: 0, phase: 'Phase 1' },
  { period: 'Q1', revenue: 5000000, phase: 'Phase 1' },
  { period: 'Q2', revenue: 15000000, phase: 'Phase 1' },
  { period: 'Q3', revenue: 25000000, phase: 'Phase 1' },
  { period: 'Year 1', revenue: 40000000, phase: 'Phase 1' },
  { period: 'Year 1.5', revenue: 80000000, phase: 'Phase 2' },
  { period: 'Year 2', revenue: 120000000, phase: 'Phase 2' },
  { period: 'Year 2.5', revenue: 180000000, phase: 'Phase 2' },
  { period: 'Year 3', revenue: 240000000, phase: 'Phase 2' },
  { period: 'Year 3.5', revenue: 300000000, phase: 'Phase 2' }
];

// States where Peterson Dean operated
const operationStates = [
  { state: 'Hawaii', abbreviation: 'HI', revenue: 20000000 },
  { state: 'California', abbreviation: 'CA', revenue: 120000000 },
  { state: 'Nevada', abbreviation: 'NV', revenue: 25000000 },
  { state: 'Arizona', abbreviation: 'AZ', revenue: 35000000 },
  { state: 'Texas', abbreviation: 'TX', revenue: 40000000 },
  { state: 'Colorado', abbreviation: 'CO', revenue: 30000000 },
  { state: 'Florida', abbreviation: 'FL', revenue: 30000000 }
];

function PetersonDeanCaseStudy() {
  // State for the revenue calculator
  const [calculatorInputs, setCalculatorInputs] = useState({
    salesReps: 10,
    closeRate: 20,
    dealSize: 25000,
    improvedCloseRate: 30,
    teamSizeGrowth: 20
  });
  
  const [calculatedResults, setCalculatedResults] = useState({
    currentRevenue: 0,
    potentialRevenue: 0,
    additionalRevenue: 0
  });
  
  // Update the calculator results whenever inputs change
  useEffect(() => {
    const current = calculatorInputs.salesReps * (calculatorInputs.closeRate / 100) * calculatorInputs.dealSize * 12; // Monthly deals * 12 months
    const potential = calculatorInputs.teamSizeGrowth * (calculatorInputs.improvedCloseRate / 100) * calculatorInputs.dealSize * 12;
    
    setCalculatedResults({
      currentRevenue: current,
      potentialRevenue: potential,
      additionalRevenue: potential - current
    });
  }, [calculatorInputs]);
  
  const handleInputChange = (name: string, value: number) => {
    setCalculatorInputs(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="mb-16 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Building from Zero to $300M+: How Strategic Inside Sales & Scalable Systems Fueled Peterson Dean's Residential Solar Dominance
            </h1>
            <p className="text-xl text-gray-600">
              Discover how proven leadership created the blueprint for scaling to over $300 million annually and achieving national recognition
            </p>
          </div>
          
          {/* Client Profile */}
          <div className="bg-white rounded-2xl shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">Client Profile</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="flex flex-col">
                <h3 className="font-bold text-gray-700">Client</h3>
                <p className="text-gray-600">Peterson Dean</p>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-gray-700">Industry</h3>
                <p className="text-gray-600">Solar Installation, Roofing, EPC</p>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-gray-700">Location</h3>
                <p className="text-gray-600">Multi-State Operations (HI, CA, NV, AZ, TX, CO, FL)</p>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-gray-700">Timeline</h3>
                <p className="text-gray-600">1 Year (Initial Build), Multi-Year Scaling</p>
              </div>
            </div>
          </div>
          
          {/* The Challenge Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">The Challenge: Launching and Scaling a New Division</h2>
            
            <div className="flex flex-col lg:flex-row gap-10 items-center mb-8">
              <div className="lg:w-1/2">
                <p className="text-lg text-gray-700 mb-6">
                  Peterson Dean, a long-established EPC contractor, faced the significant challenge of entering the competitive residential solar market with no existing infrastructure or dedicated team.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="p-1 bg-red-100 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <title>Challenge indicator</title>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Zero Starting Point: No existing infrastructure, processes, or dedicated team for residential solar sales</p>
                  </div>
                  <div className="flex items-start">
                    <div className="p-1 bg-red-100 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <title>Challenge indicator</title>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Need for Rapid Growth: Required a fast ramp-up to capture market share</p>
                  </div>
                  <div className="flex items-start">
                    <div className="p-1 bg-red-100 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <title>Challenge indicator</title>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Complexity of Scale: Needed systems and leadership capable of managing growth across multiple states and product lines</p>
                  </div>
                  <div className="flex items-start">
                    <div className="p-1 bg-red-100 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <title>Challenge indicator</title>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Building Brand Recognition: Had to establish credibility in the residential space</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/Images/aerial-view-of-a-new-autonomous-house-with-solar-p-2024-12-06-16-58-50-utc.jpg" 
                    alt="Blueprint for building sales division" 
                    className="w-full h-auto"
                  />
                  <div className="bg-gray-800 text-white p-4">
                    <p className="text-sm italic">Starting from zero required creating an entirely new sales infrastructure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* The Solution Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">The Solution: Foundational Build & Strategic Scaling</h2>
            
            <p className="text-lg text-gray-700 mb-8">
              Steve Huber played a pivotal, multi-stage role in Peterson Dean's residential success story, first building the inside sales department from scratch and later leading the entire sales organization as VP of Sales.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Phase 1 */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <BarChart2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Phase 1: Architecting Inside Sales</h3>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Hired specifically to build the inside sales department from the ground up</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Developed all necessary processes, scripts, training, and infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Created comprehensive KPI tracking and performance management systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Focused relentlessly on efficiency and continuous improvement</span>
                  </li>
                </ul>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
                    <p className="font-bold text-gray-800">First Year Result:</p>
                  </div>
                  <p className="text-gray-700">Grew the nascent inside sales division from $0 to nearly $40 Million in revenue within the first year</p>
                </div>
              </div>
              
              {/* Phase 2 */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Phase 2: VP Leadership & Multi-State Expansion</h3>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Promoted to VP of Sales, overseeing all residential sales operations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Managed and scaled sales teams across seven states including Hawaii, California, Nevada, Arizona, Texas, Colorado, and Florida</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Implemented standardized processes and reporting across regions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Contributed significantly to overall strategic direction</span>
                  </li>
                </ul>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
                    <p className="font-bold text-gray-800">Multi-Year Result:</p>
                  </div>
                  <p className="text-gray-700">The residential division grew to generate over $300 Million in annual revenue</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg mt-8">
              <div className="bg-white p-6 rounded-t-xl">
                <div className="aspect-video w-full max-w-md mx-auto bg-gray-50 rounded-lg overflow-hidden relative">
                  <video 
                    src="/Images/steve.mp4" 
                    className="w-full h-full object-cover"
                    controls
                    poster="/Images/steve1.png"
                  >
                    <track 
                      kind="captions"
                      src="/Images/petersondean-captions.vtt" 
                      label="English"
                      srcLang="en"
                      default
                    />
                  </video>
                  
                  {/* Audio Waveform Visualization */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900/70 to-transparent p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-white">Click to play</span>
                      <span className="text-xs text-white">Peterson Dean Case Study</span>
                    </div>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-500 mt-2">
                  Note: Click to play video. Enable sound on your device.
                </p>
              </div>
              <div className="bg-gray-800 text-white p-4">
                <p className="text-sm italic">Steve Huber's leadership was instrumental in building the processes and systems that enabled massive scale</p>
              </div>
            </div>
          </div>
          
          {/* Interactive Charts Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Measurable Growth & Geographic Expansion</h2>
            
            <div className="grid md:grid-cols-2 gap-10">
              {/* Chart 1: Revenue Growth */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-primary mb-4">Revenue Growth Journey</h3>
                <p className="text-gray-600 mb-6">From a standing start to over $300M in annual revenue, the growth trajectory demonstrates the power of systematic scaling.</p>
                
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={revenueGrowthData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis 
                        dataKey="period" 
                        tick={{ fontSize: 12 }}
                        axisLine={{ stroke: '#E5E7EB' }}
                        tickLine={false}
                      />
                      <YAxis 
                        tick={{ fontSize: 12 }}
                        axisLine={{ stroke: '#E5E7EB' }}
                        tickLine={false}
                        tickFormatter={(value) => `$${value/1000000}M`}
                        domain={[0, 350000000]}
                        label={{ value: 'Revenue ($)', angle: -90, position: 'insideLeft', dy: 50, fontSize: 12 }}
                      />
                      <Tooltip 
                        formatter={(value) => [`$${(value as number/1000000).toFixed(1)}M`, 'Revenue']}
                        labelFormatter={(label) => `Period: ${label}`}
                        contentStyle={{
                          backgroundColor: 'white',
                          border: '1px solid #E5E7EB',
                          borderRadius: '4px',
                          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="#0EA5E9"
                        fill="url(#colorRevenue)"
                        strokeWidth={3}
                        activeDot={{ r: 8, strokeWidth: 2 }}
                      />
                      <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              {/* Chart 2: Geographic Expansion */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-primary mb-4">Multi-State Revenue Distribution</h3>
                <p className="text-gray-600 mb-6">The systematic approach enabled successful scaling across seven diverse markets, each with unique requirements.</p>
                
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={operationStates}
                      margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
                      barSize={40}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis 
                        dataKey="abbreviation" 
                        tick={{ fontSize: 12 }}
                        axisLine={{ stroke: '#E5E7EB' }}
                        tickLine={false}
                      />
                      <YAxis 
                        tick={{ fontSize: 12 }}
                        axisLine={{ stroke: '#E5E7EB' }}
                        tickLine={false}
                        tickFormatter={(value) => `$${value/1000000}M`}
                        label={{ value: 'Revenue ($M)', angle: -90, position: 'insideLeft', dy: 50, fontSize: 12 }}
                      />
                      <Tooltip 
                        formatter={(value) => [`$${(value as number/1000000).toFixed(0)}M`, 'Revenue']}
                        labelFormatter={(label) => {
                          const state = operationStates.find(s => s.abbreviation === label);
                          return state ? state.state : label;
                        }}
                        contentStyle={{
                          backgroundColor: 'white',
                          border: '1px solid #E5E7EB',
                          borderRadius: '4px',
                          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                        }}
                      />
                      <Bar 
                        dataKey="revenue" 
                        fill="#3B82F6"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
          
          {/* Interactive Calculator Section */}
          <div className="mb-16">
            <div className="bg-white rounded-xl shadow-md p-8 overflow-hidden">
              <h2 className="text-2xl font-bold text-primary mb-6">Estimate Your Untapped Revenue Potential</h2>
              <p className="text-gray-600 mb-8">
                See how implementing BDC's systematic approach to inside sales growth and scaling could impact your business.
              </p>
              
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="font-bold text-gray-800 mb-6">Your Current Metrics</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-700 mb-2">Number of Sales Reps</label>
                      <input 
                        type="number"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={calculatorInputs.salesReps}
                        onChange={(e) => handleInputChange('salesReps', parseInt(e.target.value) || 0)}
                        min="1"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Average Rep Closing Rate (%)</label>
                      <input 
                        type="number"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={calculatorInputs.closeRate}
                        onChange={(e) => handleInputChange('closeRate', parseInt(e.target.value) || 0)}
                        min="1"
                        max="100"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Average Deal Size ($)</label>
                      <input 
                        type="number"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={calculatorInputs.dealSize}
                        onChange={(e) => handleInputChange('dealSize', parseInt(e.target.value) || 0)}
                        min="1000"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Target Improved Closing Rate (%)</label>
                      <input 
                        type="range"
                        min="5"
                        max="50"
                        step="1"
                        className="w-full"
                        value={calculatorInputs.improvedCloseRate}
                        onChange={(e) => handleInputChange('improvedCloseRate', parseInt(e.target.value))}
                      />
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>5%</span>
                        <span>{calculatorInputs.improvedCloseRate}%</span>
                        <span>50%</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Target Team Size Growth (# of Reps)</label>
                      <input 
                        type="range"
                        min={calculatorInputs.salesReps}
                        max={calculatorInputs.salesReps * 5}
                        step="1"
                        className="w-full"
                        value={calculatorInputs.teamSizeGrowth}
                        onChange={(e) => handleInputChange('teamSizeGrowth', parseInt(e.target.value))}
                      />
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>{calculatorInputs.salesReps}</span>
                        <span>{calculatorInputs.teamSizeGrowth} Reps</span>
                        <span>{calculatorInputs.salesReps * 5}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-gray-800 mb-6">Revenue Potential</h3>
                  
                  <div className="space-y-6">
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <p className="text-sm text-gray-500">Current Annual Revenue</p>
                      <p className="text-2xl font-bold text-gray-800">${calculatedResults.currentRevenue.toLocaleString()}</p>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <p className="text-sm text-gray-500">Potential Annual Revenue</p>
                      <p className="text-2xl font-bold text-blue-600">${calculatedResults.potentialRevenue.toLocaleString()}</p>
                    </div>
                    
                    <div className="p-4 bg-blue-50 rounded-lg shadow-sm border-l-4 border-blue-500">
                      <p className="text-sm font-medium text-blue-800">Additional Annual Revenue</p>
                      <p className="text-3xl font-bold text-blue-800">${calculatedResults.additionalRevenue.toLocaleString()}</p>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                        Discuss Your Growth Strategy with BDC
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Results Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">The Results: Market Dominance and Industry Acclaim</h2>
            
            <div className="flex flex-col lg:flex-row gap-10 mb-10">
              <div className="lg:w-1/2">
                <p className="text-lg text-gray-700 mb-6">
                  Steve's contributions were integral to Peterson Dean becoming a national leader in residential solar. The processes and systems he built provided the foundation for massive growth, industry recognition, and lasting success.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="p-1 bg-green-100 rounded-full mr-3 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-gray-700"><span className="font-semibold">Massive Revenue Generation:</span> Scaled the residential division to over $300M annually</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-1 bg-green-100 rounded-full mr-3 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-gray-700"><span className="font-semibold">Profitable Inside Sales Engine:</span> Created a highly effective inside sales team contributing significantly to revenue ($40M in Year 1)</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-1 bg-green-100 rounded-full mr-3 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-gray-700"><span className="font-semibold">Successful Multi-State Operation:</span> Proved the model could be replicated and managed effectively across diverse US markets</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-1 bg-green-100 rounded-full mr-3 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-gray-700"><span className="font-semibold">Industry Recognition:</span> Multiple Inc. 5000 rankings, #1 Residential Solar Installer in California, and more</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-primary mb-4">Industry Recognition & Awards</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-blue-50 rounded-lg flex flex-col items-center text-center">
                      <Award className="h-8 w-8 text-blue-600 mb-2" />
                      <p className="font-bold text-gray-800">Inc. 5000</p>
                      <p className="text-sm text-gray-600">Multiple Years</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg flex flex-col items-center text-center">
                      <Award className="h-8 w-8 text-blue-600 mb-2" />
                      <p className="font-bold text-gray-800">#1 in California</p>
                      <p className="text-sm text-gray-600">Residential Installations</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg flex flex-col items-center text-center">
                      <Award className="h-8 w-8 text-blue-600 mb-2" />
                      <p className="font-bold text-gray-800">Top 5 Nationwide</p>
                      <p className="text-sm text-gray-600">Solar Power World</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg flex flex-col items-center text-center">
                      <Award className="h-8 w-8 text-blue-600 mb-2" />
                      <p className="font-bold text-gray-800">Excellence Awards</p>
                      <p className="text-sm text-gray-600">Industry Recognition</p>
                    </div>
                  </div>
                  
                  <div className="rounded-xl overflow-hidden">
                    <img 
                      src="/Images/happy-family-near-their-house-with-solar-panel-al-2024-10-18-08-59-38-utc.jpg" 
                      alt="US map with operations highlighted" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="font-bold text-gray-800 mb-2">BDC's Core Contribution</h3>
              <p className="text-gray-700">
                What distinguished BDC's approach was expertise in <span className="font-semibold">building sales divisions from scratch</span>, <span className="font-semibold">designing scalable systems</span> for multi-state growth, <span className="font-semibold">providing strategic sales leadership</span>, and <span className="font-semibold">driving exponential revenue growth</span>. These same processes and systems can be applied to your business to achieve similar transformative results.
              </p>
            </div>
          </div>
          
          {/* Call to Action Section */}
          <div className="bg-primary text-white rounded-xl p-10 mb-16">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to Build Your $100M+ Sales Engine?</h2>
              <p className="text-xl text-white/80 mb-8">
                The same systematic approach that built Peterson Dean's massive success can be applied to scale your contracting business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Discuss Your Growth Strategy with BDC <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Download className="mr-2 h-5 w-5" /> Download the Peterson Dean Scaling Blueprint
                </Button>
              </div>
            </div>
          </div>
          
          {/* Related Case Studies */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Explore More Success Stories</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/texas-contractor-case" className="block group">
                <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all group-hover:shadow-lg">
                  <div className="aspect-video bg-gray-100 relative overflow-hidden">
                    <img 
                      src="/Images/outdoors-diverse-father-and-daughter-interacting-2024-06-06-00-10-03-utc.jpg" 
                      alt="Texas Contractor Case Study" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-white">From 'Dead & Dying' to Market Leader: Texas Contractor Transformation</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600">How BDC ignited explosive growth in just 30 days</p>
                    <div className="flex items-center text-blue-600 mt-3 group-hover:underline">
                      <span className="font-medium">Read Case Study</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
              
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
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PetersonDeanCaseStudy; 