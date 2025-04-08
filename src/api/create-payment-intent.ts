import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('Missing Stripe secret key')
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
})

export async function createPaymentIntent(amount: number, currency: string = 'usd') {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      automatic_payment_methods: {
        enabled: true,
      },
    })

    return {
      clientSecret: paymentIntent.client_secret,
      status: paymentIntent.status,
    }
  } catch (error) {
    console.error('Error creating payment intent:', error)
    throw new Error('Failed to create payment intent')
  }
}

// Example usage in an API route:
/*
export default async function handler(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { amount, currency } = req.body
    const paymentIntent = await createPaymentIntent(amount, currency)
    res.status(200).json(paymentIntent)
  } catch (error) {
    res.status(500).json({ message: 'Failed to create payment intent' })
  }
}
*/ 