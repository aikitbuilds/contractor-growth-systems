import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { FormSubmissionType, Submission } from '@/services/submission'
import { formatDistanceToNow } from 'date-fns'

export default function SubmissionAdmin() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [filteredSubmissions, setFilteredSubmissions] = useState<Submission[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState<FormSubmissionType | 'all'>('all')
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await fetch('/api/form-submission/list')
        const data = await response.json()
        
        if (data.success) {
          // Convert date strings to Date objects
          const formattedData = data.submissions.map((sub: any) => ({
            ...sub,
            createdAt: new Date(sub.createdAt)
          }))
          
          setSubmissions(formattedData)
          setFilteredSubmissions(formattedData)
        } else {
          console.error('Failed to fetch submissions:', data.error)
        }
      } catch (error) {
        console.error('Error fetching submissions:', error)
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchSubmissions()
  }, [])
  
  // Filter submissions when tab or search term changes
  useEffect(() => {
    let filtered = [...submissions]
    
    // Filter by type
    if (activeTab !== 'all') {
      filtered = filtered.filter(sub => sub.type === activeTab)
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(sub => 
        sub.email.toLowerCase().includes(term) || 
        (sub.name && sub.name.toLowerCase().includes(term))
      )
    }
    
    setFilteredSubmissions(filtered)
  }, [submissions, activeTab, searchTerm])
  
  const handleViewDetails = (submission: Submission) => {
    setSelectedSubmission(submission)
    setIsModalOpen(true)
  }
  
  const formatDate = (date: Date) => {
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
  }
  
  const getTypeColor = (type: FormSubmissionType) => {
    switch (type) {
      case 'contact':
        return 'bg-blue-100 text-blue-800'
      case 'resource_download':
        return 'bg-green-100 text-green-800'
      case 'course_interest':
        return 'bg-purple-100 text-purple-800'
      case 'newsletter':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Form Submissions</h1>
            <div className="flex gap-4">
              <Input
                type="search"
                placeholder="Search by email or name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64"
              />
            </div>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>All Submissions</CardTitle>
              <CardDescription>
                Manage and view all form submissions from across the website
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" onValueChange={(value) => setActiveTab(value as FormSubmissionType | 'all')}>
                <TabsList className="mb-6">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="contact">Contact</TabsTrigger>
                  <TabsTrigger value="resource_download">Resources</TabsTrigger>
                  <TabsTrigger value="course_interest">Courses</TabsTrigger>
                  <TabsTrigger value="newsletter">Newsletter</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all" className="m-0">
                  {renderSubmissionsTable()}
                </TabsContent>
                <TabsContent value="contact" className="m-0">
                  {renderSubmissionsTable()}
                </TabsContent>
                <TabsContent value="resource_download" className="m-0">
                  {renderSubmissionsTable()}
                </TabsContent>
                <TabsContent value="course_interest" className="m-0">
                  {renderSubmissionsTable()}
                </TabsContent>
                <TabsContent value="newsletter" className="m-0">
                  {renderSubmissionsTable()}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
      
      {/* Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl">
          {selectedSubmission && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl">Submission Details</DialogTitle>
                <DialogDescription>
                  Complete information about this form submission
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Type</h3>
                    <p className="mt-1">
                      <Badge className={getTypeColor(selectedSubmission.type)}>
                        {selectedSubmission.type.replace('_', ' ')}
                      </Badge>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Submission Date</h3>
                    <p className="mt-1">{formatDate(selectedSubmission.createdAt)}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Email</h3>
                  <p className="mt-1">{selectedSubmission.email}</p>
                </div>
                
                {selectedSubmission.name && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Name</h3>
                    <p className="mt-1">{selectedSubmission.name}</p>
                  </div>
                )}
                
                {selectedSubmission.type === 'contact' && (
                  <>
                    {'phone' in selectedSubmission && selectedSubmission.phone && (
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                        <p className="mt-1">{selectedSubmission.phone}</p>
                      </div>
                    )}
                    
                    {'company' in selectedSubmission && selectedSubmission.company && (
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Company</h3>
                        <p className="mt-1">{selectedSubmission.company}</p>
                      </div>
                    )}
                    
                    {'message' in selectedSubmission && (
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Message</h3>
                        <p className="mt-1 whitespace-pre-wrap">{selectedSubmission.message}</p>
                      </div>
                    )}
                  </>
                )}
                
                {selectedSubmission.type === 'resource_download' && 'resourceName' in selectedSubmission && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Resource</h3>
                    <p className="mt-1">{selectedSubmission.resourceName}</p>
                  </div>
                )}
                
                {selectedSubmission.type === 'course_interest' && 'courseName' in selectedSubmission && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Course</h3>
                    <p className="mt-1">{selectedSubmission.courseName}</p>
                  </div>
                )}
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Email Status</h3>
                  <p className="mt-1">
                    {selectedSubmission.emailSent ? (
                      <Badge className="bg-green-100 text-green-800">Sent</Badge>
                    ) : (
                      <Badge className="bg-red-100 text-red-800">Not Sent</Badge>
                    )}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
  
  function renderSubmissionsTable() {
    if (isLoading) {
      return <div className="text-center py-8">Loading submissions...</div>
    }
    
    if (filteredSubmissions.length === 0) {
      return <div className="text-center py-8">No submissions found</div>
    }
    
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Email Sent</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredSubmissions.map((submission) => (
            <TableRow key={submission.id}>
              <TableCell>
                <Badge className={getTypeColor(submission.type)}>
                  {submission.type.replace('_', ' ')}
                </Badge>
              </TableCell>
              <TableCell>{submission.name || '-'}</TableCell>
              <TableCell>{submission.email}</TableCell>
              <TableCell title={formatDate(submission.createdAt)}>
                {formatDistanceToNow(submission.createdAt, { addSuffix: true })}
              </TableCell>
              <TableCell>
                {submission.emailSent ? (
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Yes</Badge>
                ) : (
                  <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">No</Badge>
                )}
              </TableCell>
              <TableCell>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleViewDetails(submission)}
                >
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
} 