import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Spinner } from "@/components/ui/spinner"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend } from 'recharts'

// Sample data for charts
const projectsData = [
  { name: 'Jan', completed: 4, inProgress: 3, planned: 2 },
  { name: 'Feb', completed: 3, inProgress: 4, planned: 3 },
  { name: 'Mar', completed: 5, inProgress: 2, planned: 4 },
  { name: 'Apr', completed: 7, inProgress: 3, planned: 1 },
  { name: 'May', completed: 6, inProgress: 5, planned: 2 },
  { name: 'Jun', completed: 8, inProgress: 2, planned: 3 },
];

const projectTypeData = [
  { name: 'Roofing', value: 35 },
  { name: 'Solar', value: 30 },
  { name: 'HVAC', value: 20 },
  { name: 'Other', value: 15 },
];

const revenueData = [
  { name: 'Jan', revenue: 45000 },
  { name: 'Feb', revenue: 52000 },
  { name: 'Mar', revenue: 48000 },
  { name: 'Apr', revenue: 61000 },
  { name: 'May', revenue: 58000 },
  { name: 'Jun', revenue: 72000 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function ProjectDashboard() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("overview")
  
  useEffect(() => {
    // We'll simulate a brief loading period before showing the content
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-1 p-6 lg:p-8 pt-24">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary">Contractor Growth Systems Dashboard</h1>
          <p className="text-gray-600">Track project progress, revenue, and execution metrics</p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-[600px]">
            <Spinner size="lg" />
          </div>
        ) : (
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 md:w-auto">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="financial">Financial</TabsTrigger>
            </TabsList>
            
            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Total Projects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">48</div>
                    <p className="text-xs text-green-500 flex items-center mt-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1">
                        <path fillRule="evenodd" d="M12 7a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V8.414l-4.293 4.293a1 1 0 0 1-1.414 0L7 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0L9 10.586l3.293-3.293A1 1 0 0 1 12 7z" clipRule="evenodd" />
                      </svg>
                      12% from last month
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Completion Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">89%</div>
                    <Progress value={89} className="h-2 mt-2" />
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Revenue YTD</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">$336,000</div>
                    <p className="text-xs text-green-500 flex items-center mt-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1">
                        <path fillRule="evenodd" d="M12 7a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V8.414l-4.293 4.293a1 1 0 0 1-1.414 0L7 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0L9 10.586l3.293-3.293A1 1 0 0 1 12 7z" clipRule="evenodd" />
                      </svg>
                      8.5% increase
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Chart Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Projects by Type</CardTitle>
                    <CardDescription>Distribution of project types YTD</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={projectTypeData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {projectTypeData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Revenue</CardTitle>
                    <CardDescription>Revenue trends for the past 6 months</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={revenueData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis 
                            tickFormatter={(value) => `$${value/1000}k`}
                          />
                          <Tooltip formatter={(value) => [`$${value}`, 'Revenue']} />
                          <Line 
                            type="monotone" 
                            dataKey="revenue" 
                            stroke="#0088FE" 
                            strokeWidth={2}
                            activeDot={{ r: 8 }} 
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Projects Tab */}
            <TabsContent value="projects" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Project Status</CardTitle>
                  <CardDescription>Monthly project status breakdown</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={projectsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="completed" fill="#0088FE" name="Completed" />
                        <Bar dataKey="inProgress" fill="#00C49F" name="In Progress" />
                        <Bar dataKey="planned" fill="#FFBB28" name="Planned" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-0">
                  <CardTitle>Project Status Board</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="w-full h-[600px] overflow-hidden rounded-lg border">
                    <iframe 
                      src="/dashboard.html" 
                      className="w-full h-full" 
                      title="Project Dashboard"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Financial Tab */}
            <TabsContent value="financial" className="space-y-6">
              <Card>
                <CardHeader className="pb-0">
                  <CardTitle>Financial Performance</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="w-full h-[800px] overflow-hidden rounded-lg border">
                    <iframe 
                      src="/financial-dashboard.html" 
                      className="w-full h-full" 
                      title="Financial Dashboard"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}
      </main>
    </div>
  )
}

export default ProjectDashboard 