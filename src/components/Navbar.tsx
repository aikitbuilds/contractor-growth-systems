import React, { useState, useEffect } from 'react';
import { MenuIcon, X } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Set initial styling based on current page
  const isHomePage = location.pathname === '/';
  
  // Initialize isScrolled to true on non-home pages to maintain consistent appearance
  const [initialRender, setInitialRender] = useState(true);
  
  useEffect(() => {
    if (initialRender) {
      setIsScrolled(!isHomePage);
      setInitialRender(false);
    }
  }, [isHomePage, initialRender]);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        // Only change scroll state based on scroll position for homepage
        setIsScrolled(window.scrollY > 20);
      } else {
        // Always keep the solid background on other pages
        setIsScrolled(true);
      }
    };
    
    // Set initial scroll state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  const navbarClass = isScrolled 
    ? 'bg-primary shadow-lg py-3' 
    : 'bg-transparent py-4';
    
  const linkClass = (isActive: boolean) => `
    relative px-3 py-2 text-sm font-medium transition-colors
    ${isScrolled || isMenuOpen ? 'text-white' : 'text-white'}
    ${isActive ? 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-secondary' : 'hover:text-secondary'}
  `;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarClass}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo color="light" />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => linkClass(isActive)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => linkClass(isActive)}
            >
              About
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => linkClass(isActive)}
            >
              Services
            </NavLink>
            <NavLink 
              to="/case-study/semper-solaris" 
              className={({ isActive }) => linkClass(isActive)}
            >
              Case Studies
            </NavLink>
            <div className="relative group px-3 py-2">
              <span className="text-sm font-medium cursor-pointer flex items-center text-white hover:text-secondary">
                Resources
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <NavLink 
                  to="/ai-image-tools" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  AI Image Tools
                </NavLink>
                <NavLink 
                  to="/course-coming-soon" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Solar Course
                  <span className="ml-2 bg-secondary text-white text-xs py-0.5 px-1.5 rounded-full">
                    New
                  </span>
                </NavLink>
                <NavLink 
                  to="/project-dashboard" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Project Dashboard
                </NavLink>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <NavLink to="/login">
              <Button variant="default" className={`
                transition-all duration-300 transform hover:scale-105
                ${isScrolled 
                  ? 'bg-secondary text-white hover:bg-secondary-600' 
                  : 'bg-secondary text-white hover:bg-secondary-600 shadow-lg shadow-secondary/30'
                }
              `}>
                Client Login
              </Button>
            </NavLink>
            <NavLink to="/services">
              <Button className={`
                transition-transform duration-300 hover:scale-105
                ${isScrolled 
                  ? 'bg-white text-primary hover:bg-gray-100' 
                  : 'bg-white text-primary hover:bg-gray-100 shadow-lg'
                }
              `}>
                Schedule a Strategy Call
              </Button>
            </NavLink>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
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
                  `px-3 py-2 text-white ${isActive ? 'bg-primary-600 rounded' : ''}`
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/about"
                className={({ isActive }) => 
                  `px-3 py-2 text-white ${isActive ? 'bg-primary-600 rounded' : ''}`
                }
              >
                About
              </NavLink>
              <NavLink 
                to="/services"
                className={({ isActive }) => 
                  `px-3 py-2 text-white ${isActive ? 'bg-primary-600 rounded' : ''}`
                }
              >
                Services
              </NavLink>
              <NavLink 
                to="/case-study/semper-solaris"
                className={({ isActive }) => 
                  `px-3 py-2 text-white ${isActive ? 'bg-primary-600 rounded' : ''}`
                }
              >
                Case Studies
              </NavLink>
              
              <div className="px-3 py-2">
                <p className="text-white font-medium mb-2">Resources</p>
                <div className="pl-4 space-y-2">
                  <NavLink 
                    to="/ai-image-tools"
                    className={({ isActive }) => 
                      `block py-1 text-sm text-white/90 ${isActive ? 'text-secondary font-medium' : ''}`
                    }
                  >
                    AI Image Tools
                  </NavLink>
                  <NavLink 
                    to="/course-coming-soon"
                    className={({ isActive }) => 
                      `block py-1 text-sm text-white/90 ${isActive ? 'text-secondary font-medium' : ''}`
                    }
                  >
                    <div className="flex items-center">
                      Solar Course
                      <span className="ml-2 bg-secondary text-white text-xs py-0.5 px-1.5 rounded-full">
                        New
                      </span>
                    </div>
                  </NavLink>
                  <NavLink 
                    to="/project-dashboard"
                    className={({ isActive }) => 
                      `block py-1 text-sm text-white/90 ${isActive ? 'text-secondary font-medium' : ''}`
                    }
                  >
                    Project Dashboard
                  </NavLink>
                </div>
              </div>
              
              <div className="pt-2 space-y-3">
                <NavLink to="/login" className="block">
                  <Button variant="default" className="w-full bg-secondary hover:bg-secondary-600 shadow-md">
                    Client Login
                  </Button>
                </NavLink>
                <NavLink to="/services" className="block">
                  <Button className="w-full bg-white text-primary hover:bg-gray-100">
                    Schedule a Strategy Call
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
