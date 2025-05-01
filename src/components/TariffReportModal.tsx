import React, { useEffect, useState } from 'react'
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'

const TariffReportModal = () => {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [optIn, setOptIn] = useState(true)
  const [submitted, setSubmitted] = useState(false)
  
  useEffect(() => {
    // Show modal after 30 seconds
    const timer = setTimeout(() => {
      setOpen(true)
    }, 30000)
    
    return () => clearTimeout(timer)
  }, [])
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend
    console.log({ name, email, optIn })
    setSubmitted(true)
    
    // Close the modal after successful submission
    setTimeout(() => {
      setOpen(false)
      // Reset the form
      setName('')
      setEmail('')
      setOptIn(true)
      setSubmitted(false)
    }, 2000)
  }
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left side - Image */}
          <div className="md:w-2/5 bg-primary">
            <img 
              src="/Images/tariff.png" 
              alt="Solar panels on roof" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Right side - Content */}
          <div className="md:w-3/5 p-6">
            <DialogHeader>
              <DialogTitle className="text-xl sm:text-2xl font-bold text-primary">
                May 2025 Tariff Report
              </DialogTitle>
              <DialogDescription className="text-base text-gray-700 mt-2">
                <p className="text-sm">Get critical insights on upcoming tariff changes affecting solar and roofing contractors.</p>
              </DialogDescription>
            </DialogHeader>
            
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">Thank You!</h3>
                <p className="text-gray-600 mt-2 text-center">Your report is on its way to your inbox.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full border-gray-300 focus:border-primary focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full border-gray-300 focus:border-primary focus:ring-primary"
                  />
                </div>
                
                <div className="flex items-start mt-4">
                  <div className="flex items-center h-5">
                    <Checkbox 
                      id="opt-in" 
                      checked={optIn}
                      onCheckedChange={(checked) => setOptIn(checked as boolean)}
                      className="h-4 w-4"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="opt-in" className="text-gray-700">
                      Yes, I'd like to receive the Tuesday Tuneup newsletter with contractor business tips.
                    </label>
                  </div>
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 text-center rounded-md shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all duration-300 animate-pulse transform hover:scale-105"
                >
                  GET MY FREE REPORT
                </Button>
                
                <p className="text-xs text-gray-500 text-center mt-2">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default TariffReportModal 