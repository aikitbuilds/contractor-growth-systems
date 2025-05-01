import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

// Enhanced pulsating effect component
const PulsatingText = ({ children }: { children: React.ReactNode }) => (
  <span className="relative inline-block">
    <span className="text-orange-500 font-bold text-base animate-[pulse_1.5s_ease-in-out_infinite]">{children}</span>
    <span className="absolute inset-0 bg-orange-400/40 blur-md rounded-md animate-[pulse_1.5s_ease-in-out_infinite]" />
  </span>
);

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/case-study/semper-solaris" className="text-gray-300 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <a href="https://www.nextbdc.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  Bootcamp
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-lg font-bold mb-3">Contact Us</h3>
            <div className="mb-4">
              <span className="text-gray-300 mr-2">Powered by</span>
              <a href="https://aininjas.pro" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <PulsatingText>AI Ninjas</PulsatingText>
              </a>
            </div>
            <ul className="space-y-3">
              <li className="text-gray-300">
                <strong className="text-white">Email:</strong> info@billiondollarcontractor.com
              </li>
              <li className="text-gray-300">
                <strong className="text-white">Phone:</strong> 1-888-850-2095
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
        
        {/* Bottom Bar with copyright and links */}
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
