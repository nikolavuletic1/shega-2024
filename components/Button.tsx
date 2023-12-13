
import React from 'react';

interface ButtonProps {
  href?: string | undefined; // Make href optional
}
const Button: React.FC<ButtonProps> = ({ href }) => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100]">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className='z-50'
      >
        <div className="text-white text-[1.2rem] text-opacity-75 nav-font-outline-1
          bg-orange-60 border-2 border-pink-10 w-20 h-20 rounded-full flex items-center 
          justify-center transition bg-opacity-50 hover:bg-opacity-100 border-opacity-50 
          hover:border-opacity-100 hover:text-opacity-100 ease-in-out duration-300 z-[100]">
          Opširnije
        </div>
      </a>
    </div>
  );
}

export default Button;