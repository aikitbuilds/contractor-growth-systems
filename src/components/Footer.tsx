import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setSubscribeStatus('loading');
    
    try {
      const response = await fetch('/api/form-submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'newsletter',
          email,
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSubscribeStatus('success');
        setEmail('');
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubscribeStatus('idle');
        }, 5000);
      } else {
        setSubscribeStatus('error');
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      setSubscribeStatus('error');
    }
  };

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - Logo and About */}
          <div className="space-y-4">
            <Logo />
            <p className="mt-4 text-gray-300">
              Helping small and medium-sized contractors scale their businesses through systematic approaches to sales, marketing, and operations.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" className="text-white hover:text-secondary transition-colors">
                <Facebook size={28} />
              </a>
              <a href="https://instagram.com" className="text-white hover:text-secondary transition-colors">
                <Instagram size={28} />
              </a>
              <a href="https://www.linkedin.com/in/steve-huber-954a6a23/" className="text-white hover:text-secondary transition-colors">
                <Linkedin size={28} />
              </a>
              <a href="https://www.youtube.com/@BillionDollarContractor" className="text-white hover:text-secondary transition-colors">
                <Youtube size={28} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Revenue Accelerator
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Lead Flow Optimizer
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Sales Training Systems
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Growth Accelerator Framework
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  ContractorScale AI (Coming Soon)
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Resources */}
          <div>
            <h3 className="text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-white transition-colors">
                  Free Downloads & Tools
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/texas-contractor-case" className="text-gray-300 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contractorai" className="text-gray-300 hover:text-white transition-colors">
                  Contractor's Guide to AI
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white transition-colors">
                  Webinars & Events
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">
                <strong className="text-white">Email:</strong> info@billiondollarcontractor.com
              </li>
              <li className="text-gray-300">
                <strong className="text-white">Phone:</strong> (555) 123-4567
              </li>
              <li className="text-gray-300">
                <strong className="text-white">Hours:</strong> Mon-Fri: 9AM - 5PM EST
              </li>
            </ul>
            <div className="mt-6">
              <Link to="/contact" className="bg-white text-primary hover:bg-gray-100 py-2 px-4 rounded-md font-medium inline-block transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        
        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-bold mb-6">Join Our Newsletter</h3>
          <p className="text-gray-300 mb-4">
            Subscribe to get the latest updates, insights, and offers directly to your inbox.
          </p>
          
          {subscribeStatus === 'success' ? (
            <div className="flex items-center text-green-400 mb-6">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Thanks for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="flex">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="bg-gray-800 border-gray-700 text-white mr-2"
                  required
                />
                <Button 
                  type="submit" 
                  variant="secondary"
                  disabled={subscribeStatus === 'loading'}
                >
                  {subscribeStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </div>
              {subscribeStatus === 'error' && (
                <p className="text-red-400 text-sm mt-2">
                  Subscription failed. Please try again.
                </p>
              )}
            </form>
          )}
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Billion Dollar Contractor. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-400 text-sm hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
