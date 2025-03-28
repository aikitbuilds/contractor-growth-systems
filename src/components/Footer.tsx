
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Logo variant="white" />
            <p className="mt-4 text-sm text-gray-300">
              Helping small and medium-sized contractors scale their businesses through systematic approaches to growth.
            </p>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Revenue Accelerator</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Lead Flow Optimizer</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Growth Accelerator</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Team Training</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/resources" className="text-gray-300 hover:text-white transition-colors">Free Guides</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <address className="not-italic text-gray-300">
              <p className="mb-1">Billion Dollar Contractor</p>
              <p className="mb-1">1234 Growth Avenue</p>
              <p className="mb-1">Contractor City, CS 98765</p>
              <p className="mb-1">support@billiondollarcontractor.com</p>
              <p className="mb-1">(555) 123-4567</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Billion Dollar Contractor. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
