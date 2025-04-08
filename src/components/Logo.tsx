import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'light' | 'dark';
}

const Logo = ({ size = 'md', color = 'light' }: LogoProps) => {
  const getLogoSize = () => {
    switch (size) {
      case 'sm':
        return 'h-10';
      case 'lg':
        return 'h-16';
      default:
        return 'h-12';
    }
  };

  return (
    <Link to="/" className="inline-flex items-center">
      <div className="flex items-center">
        <img 
          src="/Images/1.png" 
          alt="Billion Dollar Contractor Logo" 
          className={`${getLogoSize()} object-contain`}
        />
        <div className={`ml-2 ${size === 'sm' ? 'text-sm' : 'text-base'} font-semibold ${color === 'light' ? 'text-white/80' : 'text-gray-600'}`}>
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
