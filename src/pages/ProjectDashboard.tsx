import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Spinner } from "@/components/ui/spinner"

function ProjectDashboard() {
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    // We'll simulate a brief loading period before showing the iframe
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-1 p-6 lg:p-8 pt-20">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-primary">Contractor Growth Systems Dashboard</h1>
          <p className="text-gray-600">Track project progress and execution</p>
        </div>

        <Card>
          <CardHeader className="pb-0">
            <CardTitle>Project Status Board</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            {isLoading ? (
              <div className="flex justify-center items-center h-[600px]">
                <Spinner size="lg" />
              </div>
            ) : (
              <div className="w-full h-[800px] overflow-hidden rounded-lg border">
                <iframe 
                  src="/dashboard.html" 
                  className="w-full h-full" 
                  title="Project Dashboard"
                />
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

export default ProjectDashboard 