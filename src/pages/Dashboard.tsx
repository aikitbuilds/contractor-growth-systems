
import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SalesGrowthChart from "@/components/dashboard/SalesGrowthChart";
import KPICards from "@/components/dashboard/KPICards";
import SalesPipeline from "@/components/dashboard/SalesPipeline";
import LeadSourcesChart from "@/components/dashboard/LeadSourcesChart";
import TeamPerformance from "@/components/dashboard/TeamPerformance";
import AIInsights from "@/components/dashboard/AIInsights";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";

const Dashboard = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Simulate data loaded notification
    toast({
      title: "Dashboard Updated",
      description: "Latest data as of today at 8:00 AM",
    });
  }, [toast]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="flex pt-16">
        <DashboardSidebar />
        
        <main className="flex-1 p-6 lg:p-8 ml-0 md:ml-64">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-primary">Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's your business at a glance.</p>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="sales">Sales</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Sales Growth</CardTitle>
                    <CardDescription>
                      Revenue increased 40% after implementing BDC's Revenue Accelerator
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="h-80">
                    <SalesGrowthChart />
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Key Performance Metrics</CardTitle>
                    <CardDescription>Comparison to previous quarter</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <KPICards />
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Sales Pipeline</CardTitle>
                    <CardDescription>Current deals in progress</CardDescription>
                  </CardHeader>
                  <CardContent className="h-80">
                    <SalesPipeline />
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>AI Revenue Forecast</CardTitle>
                    <CardDescription>Based on current pipeline</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center justify-center h-64">
                      <span className="text-4xl font-bold text-primary">$150,000</span>
                      <span className="text-sm text-muted-foreground mb-4">Next Month Forecast</span>
                      
                      <div className="flex items-center gap-2 text-accent">
                        <span className="text-lg font-semibold">85%</span>
                        <span className="text-sm text-muted-foreground">Confidence Score</span>
                      </div>
                      
                      <p className="mt-6 text-sm text-center text-muted-foreground">
                        Based on your current pipeline health and historical conversion rates
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Lead Source Performance</CardTitle>
                    <CardDescription>Leads generated vs. conversion rates</CardDescription>
                  </CardHeader>
                  <CardContent className="h-80">
                    <LeadSourcesChart />
                  </CardContent>
                </Card>
                
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Team Performance</CardTitle>
                      <CardDescription>This month's top performers</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <TeamPerformance />
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>AI Insights</CardTitle>
                      <CardDescription>Generated coaching and skill analysis</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <AIInsights />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="sales">
              <div className="h-96 flex items-center justify-center border rounded-md bg-white">
                <p className="text-muted-foreground">Detailed sales data and metrics would be displayed here.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="team">
              <div className="h-96 flex items-center justify-center border rounded-md bg-white">
                <p className="text-muted-foreground">Team performance and training data would be displayed here.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="reports">
              <div className="h-96 flex items-center justify-center border rounded-md bg-white">
                <p className="text-muted-foreground">Custom reports and analytics would be displayed here.</p>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
