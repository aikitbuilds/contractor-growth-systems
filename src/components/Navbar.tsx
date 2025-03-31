import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-black/20 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Logo size="md" />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <Link to="/" 
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-secondary'
                }`}
              >
                Home
              </Link>
              <Link to="/services" 
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-secondary'
                }`}
              >
                Services
              </Link>
              <Link to="/about" 
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-secondary'
                }`}
              >
                About
              </Link>
              <Link to="/resources" 
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-secondary'
                }`}
              >
                Resources
              </Link>
              <Link to="/course-coming-soon" 
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-secondary'
                }`}
              >
                <span className="flex items-center">
                  Solar Course
                  <span className="ml-2 bg-secondary text-white text-xs py-0.5 px-1.5 rounded-full">New</span>
                </span>
              </Link>
              <Link to="/contact" 
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-secondary'
                }`}
              >
                Contact
              </Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <a 
                href="tel:+1234567890" 
                className={`flex items-center transition-colors ${
                  isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-secondary'
                }`}
              >
                <Phone className="w-5 h-5 mr-2" />
                <span className="font-medium">Call Us</span>
              </a>
              <Link to="/contact">
                <Button 
                  className={`${
                    isScrolled 
                      ? 'bg-primary hover:bg-primary-600 text-white' 
                      : 'bg-white hover:bg-white/90 text-primary'
                  } shadow-lg hover:shadow-xl transition-all`}
                >
                  Schedule a Strategy Call
                </Button>
              </Link>
            </div>
          </div>
          
          <button 
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" 
              className="text-gray-800 py-3 border-b border-gray-100 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link to="/services" 
              className="text-gray-800 py-3 border-b border-gray-100 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link to="/about" 
              className="text-gray-800 py-3 border-b border-gray-100 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link to="/resources" 
              className="text-gray-800 py-3 border-b border-gray-100 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link to="/course-coming-soon" 
              className="text-gray-800 py-3 border-b border-gray-100 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Solar Course
            </Link>
            <Link to="/contact" 
              className="text-gray-800 py-3 border-b border-gray-100 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a 
              href="tel:+1234567890" 
              className="flex items-center text-gray-800 py-3 border-b border-gray-100 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="w-5 h-5 mr-2" />
              <span>Call Us</span>
            </a>
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              <Button variant="outline" className="w-full">
                Login
              </Button>
            </Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-primary hover:bg-primary-600 text-white">
                Schedule a Strategy Call
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
