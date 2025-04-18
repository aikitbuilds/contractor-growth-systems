import React from 'react'
import { Card } from '@/components/ui/card'

interface TestimonialProps {
  quote: string
  author: string
  title: string
  imageSrc: string
}

export default function TestimonialCard({ quote, author, title, imageSrc }: TestimonialProps) {
  return (
    <Card className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
          <img 
            src={imageSrc} 
            alt={author} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-md">{author}</h4>
          <p className="text-gray-600 text-sm">{title}</p>
        </div>
      </div>
      <p className="text-gray-700 italic text-sm">"{quote}"</p>
    </Card>
  )
} 