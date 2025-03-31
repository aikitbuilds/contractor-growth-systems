import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CalendarDays, CheckCircle, Play, AlertCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';

function CourseComingSoon() {
  const [email, setEmail] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // In a real implementation, you would send this to your backend
    }
  };
  
  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Course Header */}
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-secondary/20 text-secondary rounded-full font-medium text-sm mb-4">
                COMING SOON
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Solar to Roof Transformation
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Master the art of adding high-profit solar installations to your roofing business. 
                Launch date: August 2025
              </p>
            </div>
            
            {/* Video Section */}
            <div className="mb-16 bg-white rounded-2xl overflow-hidden shadow-xl">
              <div className="relative aspect-video">
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 z-10">
                    <button
                      onClick={handleVideoPlay}
                      className="flex items-center justify-center w-20 h-20 rounded-full bg-secondary text-white hover:bg-secondary-600 transition-colors"
                      aria-label="Play video"
                    >
                      <Play className="h-8 w-8 ml-1" />
                    </button>
                  </div>
                )}
                <video
                  className="w-full h-full object-cover"
                  poster="/Images/video-poster.jpg"
                  controls={isPlaying}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  <source src="/Images/Solar to Roof.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            
            {/* Course Details */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">What You'll Learn</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>Complete solar installation fundamentals for roofers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>How to add $25,000-50,000 profit to every job</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>Streamlined permitting and inspection processes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>Marketing solar to existing roofing customers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>Financing and tax incentive mastery</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Course Includes</h2>
                <div className="grid gap-4">
                  <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="p-2 bg-secondary/10 rounded-full mr-4">
                      <CalendarDays className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-medium">8-Week Program</h3>
                      <p className="text-sm text-gray-500">Step-by-step implementation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="p-2 bg-secondary/10 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-secondary">
                        <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path>
                        <path d="M16.5 9.4 7.55 4.24"></path>
                        <polyline points="3.29 7 12 12 20.71 7"></polyline>
                        <line x1="12" y1="22" x2="12" y2="12"></line>
                        <circle cx="18.5" cy="15.5" r="2.5"></circle>
                        <path d="M20.27 17.27 22 19"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Installation Templates</h3>
                      <p className="text-sm text-gray-500">Ready-to-use documentation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="p-2 bg-secondary/10 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-secondary">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Expert Live Sessions</h3>
                      <p className="text-sm text-gray-500">Q&A with solar specialists</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Waitlist Signup */}
            <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <AlertCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  Join the Waitlist
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Be the first to know when enrollment opens. Early bird pricing will be available for waitlist members only.
                </p>
                
                {isSubmitted ? (
                  <div className="bg-accent/10 rounded-lg p-6 text-accent">
                    <CheckCircle className="h-8 w-8 mx-auto mb-2" />
                    <p className="font-medium">Thank you for joining the waitlist!</p>
                    <p className="text-sm mt-1">We'll notify you when the course is available.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-grow"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                    <Button type="submit" className="bg-secondary hover:bg-secondary-600 text-white">
                      Join Waitlist
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CourseComingSoon; 