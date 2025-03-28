
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - Logo and About */}
          <div className="space-y-4">
            <Logo variant="white" />
            <p className="mt-4 text-gray-300">
              Helping small and medium-sized contractors scale their businesses through systematic approaches to sales, marketing, and operations.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Youtube size={20} />
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
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-white transition-colors">
                  Free Downloads
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-white transition-colors">
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
