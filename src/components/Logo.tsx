import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ size = 'md', color = 'light' }) => {
  const getLogoClass = () => {
    switch (size) {
      case 'sm':
        return 'text-xl font-black';
      case 'lg':
        return 'text-3xl font-black';
      case 'md':
      default:
        return 'text-2xl font-black';
    }
  };

  const getTextColor = () => {
    if (color === 'light') {
      return 'text-white';
    }
    return 'text-primary';
  };

  return (
    <Link to="/" className="inline-flex items-center">
      <div className="flex items-center">
        <div className={`relative ${getLogoClass()} ${getTextColor()} font-sans tracking-tight`}>
          <span className="relative z-10">
            B<span className="text-secondary font-black">DC</span>
          </span>
          <div className="absolute -inset-1 bg-secondary/10 rounded-full blur-sm -z-0"></div>
        </div>
        <div className={`ml-2 ${size === 'sm' ? 'text-xs' : 'text-sm'} font-semibold ${color === 'light' ? 'text-white/80' : 'text-gray-600'}`}>
          <div className="flex flex-col leading-tight">
            <span className="tracking-wide">Billion Dollar</span>
            <span className="tracking-wide">Contractor</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
