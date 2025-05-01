import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '@/components/Navbar'

const Sitemap = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">Sitemap</h1>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {/* Main Pages */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Main Pages</h2>
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="text-blue-600 hover:underline">Home</Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-blue-600 hover:underline">About</Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-blue-600 hover:underline">Services</Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-blue-600 hover:underline">Contact</Link>
                  </li>
                </ul>
              </div>
              
              {/* Service Pages */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Services</h2>
                <ul className="space-y-2">
                  <li>
                    <Link to="/services" className="text-blue-600 hover:underline">All Services</Link>
                  </li>
                  <li>
                    <Link to="/solar-ai-assistant" className="text-blue-600 hover:underline">Solar AI Assistant</Link>
                  </li>
                </ul>
              </div>
              
              {/* Case Studies */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Case Studies</h2>
                <ul className="space-y-2">
                  <li>
                    <Link to="/case-study/semper-solaris" className="text-blue-600 hover:underline">Semper Solaris</Link>
                  </li>
                  <li>
                    <Link to="/PetersonDeanCaseStudy" className="text-blue-600 hover:underline">Peterson Dean</Link>
                  </li>
                  <li>
                    <Link to="/TexasContractorCaseStudy" className="text-blue-600 hover:underline">Texas Contractor</Link>
                  </li>
                </ul>
              </div>
              
              {/* Resources */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Resources & Tools</h2>
                <ul className="space-y-2">
                  <li>
                    <Link to="/resources" className="text-blue-600 hover:underline">All Resources</Link>
                  </li>
                  <li>
                    <Link to="/ai-image-tools" className="text-blue-600 hover:underline">AI Image Tools</Link>
                  </li>
                  <li>
                    <Link to="/blog" className="text-blue-600 hover:underline">Blog</Link>
                  </li>
                  <li>
                    <Link to="/events" className="text-blue-600 hover:underline">Events</Link>
                  </li>
                </ul>
              </div>
              
              {/* Legal Pages */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Legal Information</h2>
                <ul className="space-y-2">
                  <li>
                    <Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/terms" className="text-blue-600 hover:underline">Terms of Service</Link>
                  </li>
                </ul>
              </div>
              
              {/* Other Pages */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Other Pages</h2>
                <ul className="space-y-2">
                  <li>
                    <Link to="/schedule" className="text-blue-600 hover:underline">Schedule a Call</Link>
                  </li>
                  <li>
                    <a 
                      href="https://www.nextbdc.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 hover:underline"
                    >
                      Bootcamp (External)
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.thetuesdaytuneup.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 hover:underline"
                    >
                      Tuesday Tuneup Newsletter (External)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="text-xl font-bold text-gray-800 mb-4">XML Sitemap</h2>
              <p className="text-gray-700">
                For search engines, an XML version of our sitemap is available at{' '}
                <a href="/sitemap.xml" className="text-blue-600 hover:underline">sitemap.xml</a>.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Sitemap 