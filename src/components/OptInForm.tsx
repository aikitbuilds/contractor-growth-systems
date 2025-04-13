import { useState } from 'react'
import type { FormEvent, ChangeEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { toast } from '@/components/ui/use-toast'

interface OptInFormProps {
  onSubmit?: (data: OptInFormData) => void
  className?: string
}

export interface OptInFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  emailConsent: boolean
  smsConsent: boolean
}

export function OptInForm({ onSubmit, className = '' }: OptInFormProps) {
  const [formData, setFormData] = useState<OptInFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    emailConsent: false,
    smsConsent: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: 'emailConsent' | 'smsConsent', checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Validation
      if (!formData.firstName || !formData.lastName || !formData.email) {
        throw new Error('Please fill out all required fields')
      }
      
      if (!formData.emailConsent && !formData.smsConsent) {
        throw new Error('Please select at least one contact method')
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address')
      }
      
      // Phone validation if SMS consent is given
      if (formData.smsConsent) {
        if (!formData.phone) {
          throw new Error('Phone number is required for SMS notifications')
        }
        
        const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
        if (!phoneRegex.test(formData.phone)) {
          throw new Error('Please enter a valid phone number')
        }
      }
      
      // Call the submit handler if provided
      if (onSubmit) {
        await onSubmit(formData)
      }
      
      // Show success message
      toast({
        title: "Subscription successful!",
        description: formData.smsConsent 
          ? "Please check your email and text messages to confirm your subscription."
          : "Please check your email to confirm your subscription.",
      })
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        emailConsent: false,
        smsConsent: false
      })
      
    } catch (error) {
      // Show error message
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name <span className="text-red-500">*</span></Label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name <span className="text-red-500">*</span></Label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john.doe@example.com"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number {formData.smsConsent && <span className="text-red-500">*</span>}</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(123) 456-7890"
          required={formData.smsConsent}
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <Checkbox 
            id="emailConsent" 
            checked={formData.emailConsent} 
            onCheckedChange={(checked) => handleCheckboxChange('emailConsent', checked === true)}
          />
          <div className="grid gap-1.5 leading-none">
            <Label htmlFor="emailConsent" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Email Communications
            </Label>
            <p className="text-sm text-muted-foreground">
              I'd like to receive email communications with valuable resources and offers from Billion Dollar Contractor.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Checkbox 
            id="smsConsent" 
            checked={formData.smsConsent} 
            onCheckedChange={(checked) => handleCheckboxChange('smsConsent', checked === true)}
          />
          <div className="grid gap-1.5 leading-none">
            <Label htmlFor="smsConsent" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Text Message Updates
            </Label>
            <p className="text-sm text-muted-foreground">
              I'd like to receive occasional text messages with tips, offers and updates from Billion Dollar Contractor using the toll-free number 1-888-850-2095. Message & data rates may apply. Reply STOP to cancel at any time.
            </p>
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Subscribe"}
      </Button>
    </form>
  )
} 