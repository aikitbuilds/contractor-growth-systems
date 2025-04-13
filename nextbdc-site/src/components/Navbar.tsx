import React, { useState, useEffect } from 'react';
import { MenuIcon, X } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Extract pathname from location
  const { pathname } = location;
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);
  
  // Simplified navbar class for standalone - always solid
  const navbarClass = 'bg-primary shadow-lg py-3';
    
  const linkClass = (isActive: boolean) => `
    relative px-3 py-2 text-sm font-medium transition-colors
    text-white
    ${isActive ? 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-secondary' : 'hover:text-secondary'}
  `;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarClass}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo color="light" />
          
          {/* Desktop Navigation - Simplified */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => linkClass(isActive && pathname === '/')}
            >
              Bootcamp Details
            </NavLink>
            <button
              type="button"
              className={linkClass(false)}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('guarantee')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Guarantee
            </button>
             <NavLink 
              to="/checkout?plan=early"
              className={({ isActive }) => linkClass(isActive)}
            >
              Enroll Now
            </NavLink>
          </div>
          
          {/* Action Buttons - Simplified */}
          <div className="hidden md:flex items-center gap-3">
            <NavLink to="/checkout?plan=early">
              <Button variant="default" className={`
                transition-all duration-300 transform hover:scale-105
                bg-secondary text-white hover:bg-secondary-600
              `}>
                Enroll Now
              </Button>
            </NavLink>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            type="button"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-3">
              <NavLink 
                to="/" 
                end
                className={({ isActive }) => 
                  `px-3 py-2 text-white ${isActive && pathname === '/' ? 'bg-primary-600 rounded' : ''}`
                }
              >
                Bootcamp Details
              </NavLink>
              <button 
                type="button"
                className="px-3 py-2 text-white text-left"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('guarantee')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                Guarantee
              </button>
              <NavLink 
                to="/checkout?plan=early"
                className={({ isActive }) => 
                  `px-3 py-2 text-white ${isActive ? 'bg-primary-600 rounded' : ''}`
                }
              >
                Enroll Now
              </NavLink>
              <div className="pt-3">
                <NavLink to="/checkout?plan=early">
                  <Button className="w-full bg-secondary hover:bg-secondary-600 text-white">
                    Enroll Now
                  </Button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 