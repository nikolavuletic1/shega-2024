// ButtonComponent.tsx
import React from 'react';

interface HamburgerButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isOpen: boolean;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ onClick, isOpen }) => {
  return (
    <button
      className={`hamburger-button h-12 w-12 relative cursor-pointer p-3 border-4  border-blue-50  rounded-full  ${isOpen ? 'active' : ''}`}
      onClick={onClick}
      aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
    >
      <div className={`ham-bar bar-top ${isOpen ? 'bar-top-open' : ''}`}></div>
      <div className={`ham-bar bar-mid ${isOpen ? 'bar-mid-open active' : ''}`}></div>
      <div className={`ham-bar bar-bottom ${isOpen ? 'bar-bottom-open active' : ''}`}></div>
    </button>
  );
};

export default HamburgerButton;


