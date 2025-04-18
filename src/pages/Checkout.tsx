import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import { GHLFormEmbed } from '@/components/GHLFormEmbed';
import TestimonialCard from '../components/TestimonialCard';

interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
  imageSrc: string;
}

function getFormId(isEarlyBird: boolean): string {
  return isEarlyBird ? 'bWJeCTvmhZPem9goQjRf' : 'U76ZUQnsAcARA2A5JmA5'
}

function getFormHeight(isEarlyBird: boolean): string {
  return isEarlyBird ? '1746px' : '1721px' // Heights from GHL form data
}

function getPlanInfo(isEarlyBird: boolean) {
  return {
    price: isEarlyBird ? 1895 : 2495,
    label: isEarlyBird ? 'Early Bird Special' : 'Standard Price'
  }
}

const testimonials = [
  {
    quote: "The bootcamp completely transformed my approach to roof sales. I've doubled my close rate since implementing what I learned.",
    author: "Michael Johnson",
    title: "Sales Professional",
    imageSrc: "/images/testimonial1.jpg"
  },
  {
    quote: "Best investment I've made in my career. The strategies taught here are pure gold.",
    author: "Sarah Williams",
    title: "Sales Manager",
    imageSrc: "/images/testimonial2.jpg"
  }
]

export default function Checkout() {
  const isEarlyBird = true // TODO: Implement logic to check early bird availability
  const formId = getFormId(isEarlyBird)
  const formHeight = getFormHeight(isEarlyBird)
  const { price, label } = getPlanInfo(isEarlyBird)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <Link to="/roof-sales-bootcamp" className="flex items-center text-primary hover:text-primary/80 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-1" />
                <span>Back to Bootcamp Details</span>
              </Link>
            </div>

            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">{label} - ${price}</h1>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <GHLFormEmbed 
                formId={formId}
                height={formHeight}
                title="Solar to Roof Bootcamp Checkout"
                showTitle={false}
                containerClassName="w-full"
              />
            </div>
            
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Your Investment is Protected</h3>
              <p className="text-gray-700">
                If you follow our system and don't close your first deal within 60 days of completing 
                the bootcamp, we'll continue working with you at no additional cost until you do.
              </p>
            </div>

            {/* Testimonials Section */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">Hear From Our Successful Bootcamp Graduates</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.author} {...testimonial} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
} 