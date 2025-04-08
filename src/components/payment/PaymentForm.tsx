import { useState } from 'react'
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/components/ui/use-toast'

interface PaymentFormProps {
  clientSecret: string
  onSuccess?: () => void
  onError?: (error: Error) => void
}

export function PaymentForm({ clientSecret, onSuccess, onError }: PaymentFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const [isProcessing, setIsProcessing] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsProcessing(true)

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/payment/success`,
        },
      })

      if (error) {
        toast({
          variant: 'destructive',
          title: 'Payment failed',
          description: error.message,
        })
        onError?.(error)
      } else {
        onSuccess?.()
      }
    } catch (err) {
      const error = err as Error
      toast({
        variant: 'destructive',
        title: 'Payment failed',
        description: error.message,
      })
      onError?.(error)
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Complete your payment</CardTitle>
        <CardDescription>Enter your payment details below</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <PaymentElement />
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            disabled={!stripe || isProcessing}
            className="w-full"
          >
            {isProcessing ? 'Processing...' : 'Pay now'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
} 