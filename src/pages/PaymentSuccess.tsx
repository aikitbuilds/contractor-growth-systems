import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface OrderDetails {
  id: string
  amount: number
  status: string
  customerEmail?: string
  dateCreated: string
}

function PaymentSuccess() {
  const [order, setOrder] = useState<OrderDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const sessionId = queryParams.get('session_id')

  useEffect(() => {
    // Check if we have a session ID
    if (!sessionId) {
      setError('No session ID found. Please contact support if you believe this is an error.')
      setLoading(false)
      return
    }

    // In a real implementation, you would validate the session with your backend
    // For now, we'll just simulate a successful order
    const mockOrder = {
      id: sessionId,
      amount: 1895,
      status: 'paid',
      customerEmail: 'customer@example.com',
      dateCreated: new Date().toISOString()
    }

    // Simulate API call delay
    const timer = setTimeout(() => {
      setOrder(mockOrder)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [sessionId])

  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2
    }).format(value)
  }

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {loading ? (
              <Card className="text-center p-8">
                <CardContent>
                  <div className="flex flex-col items-center justify-center min-h-[300px]">
                    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4" />
                    <p className="text-lg text-gray-600">Confirming your payment...</p>
                  </div>
                </CardContent>
              </Card>
            ) : error ? (
              <Card className="text-center p-8">
                <CardContent>
                  <div className="flex flex-col items-center justify-center min-h-[300px]">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-red-500 text-2xl">!</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Verification Error</h2>
                    <p className="text-lg text-gray-600 mb-6">{error}</p>
                    <Link to="/contact">
                      <Button>Contact Support</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <>
                <Card className="mb-8">
                  <CardHeader className="text-center border-b pb-6">
                    <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-12 h-12 text-green-600" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-gray-800">Payment Successful!</CardTitle>
                    <p className="text-lg text-gray-600 mt-2">Thank you for your purchase</p>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-gray-700 mb-2">Order Information</h3>
                        <div className="space-y-2 text-sm">
                          <p><span className="text-gray-500">Order ID:</span> {order?.id}</p>
                          <p><span className="text-gray-500">Amount:</span> {order?.amount ? formatCurrency(order.amount) : 'N/A'}</p>
                          <p><span className="text-gray-500">Status:</span> <span className="text-green-600 font-medium capitalize">{order?.status}</span></p>
                          <p><span className="text-gray-500">Date:</span> {order?.dateCreated ? formatDate(order.dateCreated) : 'N/A'}</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-700 mb-2">What's Next?</h3>
                        <ul className="space-y-2 text-sm list-disc pl-4 text-gray-600">
                          <li>You will receive a confirmation email shortly</li>
                          <li>You'll get access to your bootcamp materials within 24 hours</li>
                          <li>Our team will contact you with login details and next steps</li>
                          <li>Save your order confirmation for your records</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t text-center">
                      <h3 className="font-semibold text-gray-800 mb-4">Ready to begin your journey?</h3>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/">
                          <Button className="bg-primary hover:bg-primary/90 text-white">
                            Return to Home
                          </Button>
                        </Link>
                        <Link to="/contact">
                          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                            Contact Support
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                  <p className="font-medium text-blue-800 mb-2">Have questions about your purchase?</p>
                  <p className="text-blue-700 text-sm mb-4">
                    Our team is here to help! Email us at <a href="mailto:support@bdcteam.pro" className="underline hover:text-blue-900">support@bdcteam.pro</a> or call us at (555) 123-4567.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default PaymentSuccess 