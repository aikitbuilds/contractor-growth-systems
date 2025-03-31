import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

function HomeAIChatComponent() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left side - Content */}
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-4">
                <span className="bg-secondary text-white text-xs font-medium py-1 px-3 rounded-full">
                  AI Expert Available 24/7
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Talk to Your Niche Ninja Expert
              </h2>
              
              <p className="text-gray-600 mb-6">
                Meet Steve, your AI business strategist. Get instant answers about niche market analysis, content strategy, and business growth - powered by advanced AI.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                  <span className="text-gray-700">Instant niche-specific insights</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                  <span className="text-gray-700">24/7 strategic guidance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                  <span className="text-gray-700">Personalized growth recommendations</span>
                </div>
              </div>
              
              <Button className="bg-secondary hover:bg-secondary-600 text-white w-fit">
                Chat with Steve Now
              </Button>
            </div>
            
            {/* Right side - Steve video */}
            <div className="md:w-1/2 bg-black flex items-center justify-center p-8 md:p-0">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Circular border */}
                <div className="absolute inset-0 rounded-full border-4 border-secondary-300 animate-pulse"></div>
                
                {/* Video in circle */}
                <div className="absolute inset-2 rounded-full overflow-hidden bg-gradient-to-b from-secondary-400 to-secondary-700">
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src="/Images/steve.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                
                {/* Glowing effect */}
                <div className="absolute inset-0 rounded-full bg-secondary opacity-20 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAIChatComponent; 