import { Elements } from '@stripe/react-stripe-js'
import { stripePromise } from '@/lib/stripe'
import { PaymentForm } from '@/components/payment/PaymentForm'
import { useQuery } from '@tanstack/react-query'

interface PaymentPageProps {
  amount: number
  currency?: string
}

export function PaymentPage({ amount, currency = 'usd' }: PaymentPageProps) {
  const { data: paymentIntent, isLoading } = useQuery({
    queryKey: ['paymentIntent', amount, currency],
    queryFn: async () => {
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, currency }),
      })
      
      if (!response.ok) {
        throw new Error('Failed to create payment intent')
      }
      
      return response.json()
    },
  })

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900" />
      </div>
    )
  }

  if (!paymentIntent?.clientSecret) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500">Failed to initialize payment</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8">
      <Elements
        stripe={stripePromise}
        options={{
          clientSecret: paymentIntent.clientSecret,
          appearance: {
            theme: 'stripe',
          },
        }}
      >
        <PaymentForm
          clientSecret={paymentIntent.clientSecret}
          onSuccess={() => {
            // Handle successful payment
            console.log('Payment successful')
          }}
          onError={(error) => {
            // Handle payment error
            console.error('Payment error:', error)
          }}
        />
      </Elements>
    </div>
  )
} 