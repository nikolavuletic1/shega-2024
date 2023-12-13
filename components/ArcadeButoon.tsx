
import React, { ReactNode, useState } from 'react';

interface ArcadeButtonProps {
  children: ReactNode;
  color: 'green' | 'red' | 'orange' | 'blue';
}

const colorClasses: Record<ArcadeButtonProps['color'], string> = {
  green: 'border-green-600 bg-[#7ED855] hover:bg-[#7ED855] active:bg-[#5A9D36]',
  red: 'border-red-600 bg-[#FF6666] hover:bg-[#FF6666] active:bg-[#E00000]',
  //   orange: 'border-orange-600 bg-[#FFD54F] hover:bg-[#FFD54F] active:bg-[#FFA726]',
  orange: 'border-orange-600 bg-[#ffb442] hover:bg-[#ffb442] active:bg-[#FFA726]',

  blue: 'border-blue-600 bg-[#42A5F5] hover:bg-[#42A5F5] active:bg-[#1976D2]',
};

const ArcadeButton: React.FC<ArcadeButtonProps> = ({ children, color }) => {
  const [isActive, setIsActive] = useState(false);

  const handleMouseDown = () => {
    setIsActive(true);
  };

  const handleMouseUp = () => {
    setIsActive(false);
  };

  return (
    <button
      className={`relative cursor-pointer w-[6.6rem] h-[6.5rem] text-white text-[1.6rem] font-outline-2 active:text-lg rounded-full p-2 ${colorClasses[color]}`}
      style={{
        boxShadow: `
          rgba(0,0,0,.8) 0 0 7px 2px,
          rgba(255,255,255,.7) 0 3px 3px inset,
          ${color} 0 8px 10px inset,
          rgba(0,0,0,.7) 0 20px 10px inset,
          rgba(255,255,255,.8) 0 -5px 5px inset,
          ${color} 0 -7px 20px inset
        `,
      }}
    >
      <div
        className={`front w-full h-full rounded-full  pushable-inner ${isActive ? 'active' : ''}`}
        style={{
          transform: `translateY(${isActive ? '-2px' : '-6px'})`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: `${isActive ? '3px 10px' : '3px 10px'}`,
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {children}
      </div>
    </button>
  );
};
export type Color = 'green' | 'red' | 'orange' | 'blue';

export default ArcadeButton;








