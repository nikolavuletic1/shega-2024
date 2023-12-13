// import React from 'react';
// import InstagramIcon from '../public/instagram.png';
// // import TikTokIcon from '../public/tik-tok.png';
// import FacebookIcon from '../public/facebook.png';
// import Image from 'next/image';
// import Link from 'next/link';

// const CircleSocial: React.FC = () => {
//   return (
//     <div className="flex items-center h-full w-full justify-around">
//       <div className="flex space-x-12 xs:space-x-12 sm:space-x-24 md:space-x-24 lg:space-x-24 xl:space-x-20 xxl:space-x-24">

//         <div className="relative w-14 h-14 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-40 xl:h-40 transition-transform transform hover:scale-110">
//           <Link href="https://www.instagram.com/shegaboardgames/" passHref>
//             <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center group">
//               <Image
//                 src={InstagramIcon.src}
//                 alt="Instagram Icon"
//                 width={100}
//                 height={100}
//                 className="rounded-full"
//               />
//               <div className="absolute w-[4.3rem] h-[4.3rem] xs:w-20 xs:h-20 sm:w-32 sm:h-32 md:w-32 md:h-32 lg:w-32 lg:h-32 xl:w-40 xl:h-40 border-4 border-yellow-20 rounded-full"></div>
//               <div className="absolute w-full h-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:animate-pulse-border"></div>
//             </div>
//           </Link>
//         </div>

//         {/* Facebook Icon */}
//         <div className="relative w-14 h-14 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-40 xl:h-40 transition-transform transform hover:scale-110">
//           <Link href="https://www.facebook.com/shega.srbulj.9" target="_blank" passHref>
//             <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center group">
//               <Image
//                 src={FacebookIcon.src}
//                 alt="Facebook Icon"
//                 width={100}
//                 height={100}
//                 className="rounded-full"
//               />
//               <div className="absolute w-[4.3rem] h-[4.3rem] xs:w-20 xs:h-20 sm:w-32 sm:h-32 md:w-32 md:h-32 lg:w-32 lg:h-32 xl:w-40 xl:h-40 border-4 border-yellow-20 rounded-full"></div>
//               <div className="absolute w-full h-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:animate-pulse-border"></div>
//             </div>
//           </Link>
//         </div>

//         {/* TikTok Icon */}

//         {/* <div className="relative w-14 h-14 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-40 xl:h-40 transition-transform transform hover:scale-110">
//           <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center group">
//             <Image
//               src={TikTokIcon.src}
//               alt="TikTok Icon"
//               width={100}
//               height={100}
//               className="rounded-full"
//             />
//                 <div className="absolute w-[4.3rem] h-[4.3rem] xs:w-20 xs:h-20 sm:w-32 sm:h-32 md:w-32 md:h-32 lg:w-32 lg:h-32 xl:w-40 xl:h-40 border-4 border-yellow-20 rounded-full"></div>
//             <div className="absolute w-full h-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:animate-pulse-border"></div>
//           </div>
//         </div> */}

//       </div>
//     </div>
//   );
// };

// export default CircleSocial;


import React from 'react';
import InstagramIcon from '../public/instagram.png';
import FacebookIcon from '../public/facebook.png';
import Image from 'next/image';

const CircleSocial: React.FC = () => {
  return (
    <div className="flex items-center h-full w-full justify-around">
      <div className="flex space-x-12 xs:space-x-12 sm:space-x-24 md:space-x-24 lg:space-x-24 xl:space-x-20 xxl:space-x-24">

        {/* Instagram Icon */}
        <div className="relative w-14 h-14 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-40 xl:h-40 transition-transform transform hover:scale-110">
          <a href="https://www.instagram.com/shegaboardgames/" target="_blank" rel="noopener noreferrer">
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center group">
              <Image
                src={InstagramIcon.src}
                alt="Instagram Icon"
                width={100}
                height={100}
                className="rounded-full"
              
              />
              <div className="absolute w-[4.3rem] h-[4.3rem] xs:w-20 xs:h-20 sm:w-32 sm:h-32 md:w-32 md:h-32 lg:w-32 lg:h-32 xl:w-40 xl:h-40 border-4 border-yellow-20 rounded-full"></div>
              <div className="absolute w-full h-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:animate-pulse-border"></div>
            </div>
          </a>
        </div>

        {/* Facebook Icon */}
        <div className="relative w-14 h-14 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-40 xl:h-40 transition-transform transform hover:scale-110">
          <a href="https://www.facebook.com/shega.srbulj.9" target="_blank" rel="noopener noreferrer">
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center group">
              <Image
                src={FacebookIcon.src}
                alt="Facebook Icon"
                width={100}
                height={100}
                className="rounded-full"
           
              />
              <div className="absolute w-[4.3rem] h-[4.3rem] xs:w-20 xs:h-20 sm:w-32 sm:h-32 md:w-32 md:h-32 lg:w-32 lg:h-32 xl:w-40 xl:h-40 border-4 border-yellow-20 rounded-full"></div>
              <div className="absolute w-full h-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:animate-pulse-border"></div>
            </div>
          </a>
        </div>

        {/* TikTok Icon */}
        {/* 
        <div className="relative w-14 h-14 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-40 xl:h-40 transition-transform transform hover:scale-110">
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center group">
            <Image
              src={TikTokIcon.src}
              alt="TikTok Icon"
              width={100}
              height={100}
              className="rounded-full"
            />
            <div className="absolute w-[4.3rem] h-[4.3rem] xs:w-20 xs:h-20 sm:w-32 sm:h-32 md:w-32 md:h-32 lg:w-32 lg:h-32 xl:w-40 xl:h-40 border-4 border-yellow-20 rounded-full"></div>
            <div className="absolute w-full h-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:animate-pulse-border"></div>
          </div>
        </div>
        */}
      </div>
    </div>
  );
};

export default CircleSocial;
