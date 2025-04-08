import { loadStripe } from '@stripe/stripe-js'

if (!import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY) {
  throw new Error('Missing Stripe publishable key')
}

export const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

export const STRIPE_PAYMENT_ELEMENT_OPTIONS = {
  layout: 'tabs' as const,
  defaultValues: {
    billingDetails: {
      address: {
        country: 'US',
      },
    },
  },
}

export type StripePaymentStatus = 'succeeded' | 'processing' | 'requires_payment_method' | 'requires_confirmation' | 'requires_action' | 'canceled'

export interface StripePaymentIntent {
  clientSecret: string
  status: StripePaymentStatus
} 