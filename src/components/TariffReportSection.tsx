import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'

const TariffReportSection = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [optIn, setOptIn] = useState(true)
  const [submitted, setSubmitted] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend
    console.log({ name, email, optIn })
    setSubmitted(true)
    
    // Reset the form after successful submission
    setTimeout(() => {
      setName('')
      setEmail('')
      setOptIn(true)
      setSubmitted(false)
    }, 4000)
  }
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            May 2025 Tariff Report
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Get critical insights on upcoming tariff changes affecting solar and roofing contractors.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left side - Image */}
            <div className="md:w-1/2 bg-primary h-auto md:h-full relative">
              <img 
                src="/Images/tariff.png" 
                alt="Solar panels on roof" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent mix-blend-multiply"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Stay Ahead of Tariff Changes</h3>
                <p className="text-white/90">Essential information for forward-thinking contractors.</p>
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="md:w-1/2 p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-8 h-full">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-3">Thank You!</h3>
                  <p className="text-gray-600 text-center text-lg">
                    Your report is on its way to your inbox. Check your email in the next few minutes.
                  </p>
                </div>
              ) : (
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">
                    Get Your Free Report
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full"
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
                        className="w-full"
                      />
                    </div>
                    
                    <div className="flex items-start mt-4">
                      <div className="flex items-center h-5">
                        <Checkbox 
                          id="opt-in-section" 
                          checked={optIn}
                          onCheckedChange={(checked) => setOptIn(checked as boolean)}
                          className="h-4 w-4"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="opt-in-section" className="text-gray-700">
                          Yes, I'd like to receive the Tuesday Tuneup newsletter with contractor business tips.
                        </label>
                      </div>
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 text-center rounded-md shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all duration-300 transform hover:scale-105"
                    >
                      GET MY FREE REPORT
                    </Button>
                    
                    <p className="text-xs text-gray-500 text-center mt-2">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TariffReportSection 