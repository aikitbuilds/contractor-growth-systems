
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 fixed w-full top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Logo size="md" />
        
        <div className="hidden md:flex items-center space-x-8">
          <div className="space-x-6 font-medium">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
            <Link to="/services" className="hover:text-secondary transition-colors">Services</Link>
            <Link to="/about" className="hover:text-secondary transition-colors">About</Link>
            <Link to="/resources" className="hover:text-secondary transition-colors">Resources</Link>
            <Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" size="sm">Login</Button>
            </Link>
            <Link to="/contact">
              <Button variant="default" size="sm" className="bg-primary hover:bg-primary-600">Schedule a Strategy Call</Button>
            </Link>
          </div>
        </div>
        
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-white z-40 md:hidden">
          <div className="container mx-auto pt-8 px-4">
            <div className="flex flex-col space-y-6 text-lg font-medium">
              <Link to="/" onClick={toggleMenu} className="hover:text-secondary transition-colors">Home</Link>
              <Link to="/services" onClick={toggleMenu} className="hover:text-secondary transition-colors">Services</Link>
              <Link to="/about" onClick={toggleMenu} className="hover:text-secondary transition-colors">About</Link>
              <Link to="/resources" onClick={toggleMenu} className="hover:text-secondary transition-colors">Resources</Link>
              <Link to="/contact" onClick={toggleMenu} className="hover:text-secondary transition-colors">Contact</Link>
              
              <div className="pt-4 flex flex-col space-y-4">
                <Link to="/login" onClick={toggleMenu}>
                  <Button variant="outline" className="w-full">Login</Button>
                </Link>
                <Link to="/contact" onClick={toggleMenu}>
                  <Button variant="default" className="w-full bg-primary hover:bg-primary-600">Schedule a Strategy Call</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
