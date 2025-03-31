import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'default' | 'white';
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ variant = 'default', size = 'md' }: LogoProps) => {
  const sizes = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
  };

  const textColorClass = variant === 'white' ? 'text-white' : 'text-primary';
  
  return (
    <Link to="/" className={`flex items-center ${sizes[size]}`}>
      <div className="flex items-center">
        <div className={`font-heading font-extrabold text-lg md:text-xl lg:text-2xl`}>
          <span className="text-secondary-500">B</span>
          <span className={variant === 'white' ? 'text-white' : 'text-primary-400'}>DC</span>
        </div>
        <div className={`ml-2 text-sm font-medium leading-tight ${textColorClass}`}>
          <div>Billion Dollar</div>
          <div>Contractor</div>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
