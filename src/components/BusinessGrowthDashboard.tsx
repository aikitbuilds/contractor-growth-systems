import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ReferenceLine 
} from 'recharts';
import { ArrowUpIcon } from 'lucide-react';

// Sample data for real-time performance
const performanceData = [
  { time: '2:00', value: 45 },
  { time: '3:00', value: 60 },
  { time: '4:00', value: 52 },
  { time: '5:00', value: 65 },
  { time: '6:00', value: 59 },
  { time: '7:00', value: 70 },
  { time: '8:00', value: 78 },
  { time: '9:00', value: 85 },
  { time: '10:00', value: 75 },
  { time: '11:00', value: 82 },
  { time: '12:00', value: 90 },
];

function BusinessGrowthDashboard() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl mx-auto py-12">
      {/* Left column - Hero text */}
      <div className="lg:w-1/2 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          The AI-Powered Operating System for
          <span className="block text-violet-500 mt-2">Business Growth</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Stop juggling tools. Start dominating your market with unified data, AI-powered insights, and automated workflows designed for growth-focused businesses.
        </p>
        <div className="flex mt-8 gap-4">
          <button className="px-6 py-3 bg-violet-500 text-white rounded-lg font-medium flex items-center hover:bg-violet-600 transition-colors">
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium flex items-center hover:bg-gray-50 transition-colors">
            View Dashboard
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Right column - Dashboard */}
      <div className="lg:w-1/2">
        <div className="bg-gray-800 rounded-2xl p-6 shadow-xl overflow-hidden">
          {/* KPI Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Revenue Card */}
            <div className="bg-gray-700 rounded-lg p-4">
              <div className="text-gray-400 text-sm font-medium">Revenue Growth</div>
              <div className="text-white text-3xl font-bold mt-1">64.8%</div>
              <div className="flex items-center text-emerald-400 text-sm mt-1">
                <ArrowUpIcon className="h-4 w-4 mr-1" />
                <span>15.2%</span>
              </div>
            </div>

            {/* Conversion Card */}
            <div className="bg-gray-700 rounded-lg p-4">
              <div className="text-gray-400 text-sm font-medium">Conversion Rate</div>
              <div className="text-white text-3xl font-bold mt-1">32.7%</div>
              <div className="flex items-center text-emerald-400 text-sm mt-1">
                <ArrowUpIcon className="h-4 w-4 mr-1" />
                <span>4.3%</span>
              </div>
            </div>

            {/* ROI Card */}
            <div className="bg-gray-700 rounded-lg p-4">
              <div className="text-gray-400 text-sm font-medium">Customer LTV</div>
              <div className="text-white text-3xl font-bold mt-1">$2,845</div>
              <div className="flex items-center text-emerald-400 text-sm mt-1">
                <ArrowUpIcon className="h-4 w-4 mr-1" />
                <span>8.7%</span>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-gray-700 rounded-lg p-4">
            <div className="text-gray-400 text-sm font-medium mb-4">Real-time Performance</div>
            <div className="h-60">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="time" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#9CA3AF', fontSize: 10 }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#9CA3AF', fontSize: 10 }}
                    domain={[0, 100]}
                  />
                  <Tooltip 
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-gray-800 border border-gray-700 p-2 rounded">
                            <p className="text-violet-300">{`${payload[0].payload.time} - value: ${payload[0].value}`}</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <CartesianGrid vertical={false} stroke="#374151" />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#8884d8" 
                    strokeWidth={3}
                    dot={false}
                    activeDot={{ r: 6, stroke: '#8884d8', strokeWidth: 2, fill: '#111827' }}
                    fillOpacity={1}
                    fill="url(#colorValue)"
                  />
                  <ReferenceLine
                    x="9:00"
                    stroke="#8884d8"
                    strokeDasharray="3 3"
                    label={{ 
                      value: "AI Strategy Deployed", 
                      position: 'top', 
                      fill: '#8884d8', 
                      fontSize: 10 
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 flex justify-center">
              <span className="bg-violet-500 text-white text-xs font-medium py-1 px-3 rounded-full">
                AI-Powered Analytics
              </span>
            </div>
          </div>

          {/* Business Growth Section */}
          <div className="mt-4">
            <h3 className="text-white text-xl font-bold">Smart Business Management</h3>
            <p className="text-gray-400 text-sm mt-1">
              Real-time monitoring and optimization of marketing campaigns and sales pipelines
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessGrowthDashboard; 