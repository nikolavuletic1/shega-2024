import React from 'react';
import YourImage from '../public/instagram.png';
import Image from 'next/image';

const CircleImagePlaceholder: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-32 h-32 transition-transform transform hover:scale-110">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center group">
          <Image
            src={YourImage.src}
            alt="Your Image"
            width={100}
            height={100}
            className="rounded-full"
          />
          {/* Blue Ring */}
          <div className="absolute w-full h-full border-2 border-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:animate-pulse-border-blue"></div>

        </div>
      </div>
    </div>
  );
};

export default CircleImagePlaceholder;



