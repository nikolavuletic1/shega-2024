
// 'use client'
// import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
// import { useState, useEffect } from 'react';
// import { NAV_LINKS } from "@/constants";
// import HamburgerButton from './HamburgerIcon';
// import ArcadeButton, { Color } from './ArcadeButoon';
// import YellowBgPattern from './YellowBgPattern';



// const Navbar = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   // const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   const handleToggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   const handleLinkClick = () => {
//     setMenuOpen(false);
//   };



//   useEffect(() => {

//     const checkIsMobile = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     checkIsMobile();
//     window.addEventListener('resize', checkIsMobile);

//     return () => {
//       window.removeEventListener('resize', checkIsMobile);
//     };
//   }, []);


//   const colors: Color[] = ['green', 'red', 'orange', 'blue'];

//   return (
//     <nav className="z-50 fixed top-0 left-0 right-0 bg-yellow-20 flexCenter h-1/8 padding-container py-5 cursor: pointer">
//       <YellowBgPattern />

//       {isMobile && (
//         <div className="lg:hidden relative z-50">
//           <HamburgerButton onClick={handleToggleMenu} isOpen={isMenuOpen} />
//         </div>
//       )}

//       {isMobile && isMenuOpen && (
//         // <div className="fixed top-0 left-0 right-0 bottom-0 bg-yellow-20 flex flex-col z-40">
//                <div className="fixed top-0 left-0 right-0 bottom-0 flex flex-col z-40">
//              <YellowBgPattern />
//           <div className="flex justify-end p-4">
//             <button
//               // className="text-3xl font-bold text-yellow-500 cursor-pointer"
//               onClick={handleToggleMenu}
//             >

//             </button>
//           </div>

//           <ul className="flex flex-col items-center justify-center h-full gap-12 surfaceDuo iphoneSe">
//             {NAV_LINKS.map((link, index) => (
//               <ScrollLink
//                 key={link.key}
//                 to={link.id}
//                 spy={true}
//                 smooth={true}
//                 offset={-80}
//                 duration={500}
//                 // className={`text-blue-50 text-[1.6rem] py-2 hover:bg-gray-300 cursor-pointer`}
//                 onClick={handleLinkClick}
//               >
//                 <ArcadeButton color={colors[index % colors.length]}>
//                   {link.label}
//                 </ArcadeButton>
//               </ScrollLink>
//             ))}
//           </ul>
//         </div>
//       )}

//       {!isMobile && (
//         <ul className="flex flex-row items-center justify-center h-full gap-12 lg:flex">
//           {NAV_LINKS.map((link, index) => (
//             <ScrollLink
//               to={link.id}
//               spy={true}
//               smooth={true}
//               offset={-144}
//               duration={500}
//               key={link.key}
//             >
//               <ArcadeButton color={colors[index % colors.length]}>
//                 {link.label}
//               </ArcadeButton>
//             </ScrollLink>
//           ))}
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// 'use client';
// import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
// import { useState, useEffect } from 'react';
// import { NAV_LINKS } from "@/constants";
// import HamburgerButton from './HamburgerIcon';
// import ArcadeButton, { Color } from './ArcadeButoon';
// import YellowBgPattern from './YellowBgPattern';

// const Navbar = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(() => {
//     if (typeof window !== 'undefined') {
//       return window.innerWidth <= 768;
//     }
//     return false;
//   });

//   const handleToggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   const handleLinkClick = () => {
//     setMenuOpen(false);
//   };

//   useEffect(() => {
//     const checkIsMobile = () => {
//       setIsMobile(typeof window !== 'undefined' && window.innerWidth <= 768);
//     };

//     const debouncedCheckIsMobile = debounce(checkIsMobile, 200);

//     checkIsMobile(); // Initial check

//     if (typeof window !== 'undefined') {
//       window.addEventListener('resize', debouncedCheckIsMobile);

//       return () => {
//         window.removeEventListener('resize', debouncedCheckIsMobile);
//       };
//     }
//   }, []);

//   const colors: Color[] = ['green', 'red', 'orange', 'blue'];

//   return (
//     <nav className="z-50 fixed top-0 left-0 right-0 bg-yellow-20 flexCenter h-1/8 padding-container py-5 cursor: pointer">
//       <YellowBgPattern />

//       {isMobile && (
//         <div className="lg:hidden relative z-50">
//           <HamburgerButton onClick={handleToggleMenu} isOpen={isMenuOpen} />
//         </div>
//       )}

//       {isMobile && isMenuOpen && (
//         <div className="fixed top-0 left-0 right-0 bottom-0 flex flex-col z-40">
//           <YellowBgPattern />
//           <div className="flex justify-end p-4">
//             <button onClick={handleToggleMenu}></button>
//           </div>

//           <ul className="flex flex-col items-center justify-center h-full gap-12 surfaceDuo iphoneSe">
//             {NAV_LINKS.map((link, index) => (
//               <ScrollLink
//                 to={link.id}
//                 spy={true}
//                 smooth={true}
//                 offset={-80}
//                 duration={500}
//                 key={link.key}
//                 onClick={handleLinkClick}
//               >
//                 <ArcadeButton color={colors[index % colors.length]}>
//                   {link.label}
//                 </ArcadeButton>
//               </ScrollLink>
//             ))}
//           </ul>
//         </div>
//       )}

//       {!isMobile && (
//         <ul className={`flex flex-row items-center justify-center h-full gap-12 lg:flex hidden-on-mobile`}>
//           {NAV_LINKS.map((link, index) => (
//             <ScrollLink
//               to={link.id}
//               spy={true}
//               smooth={true}
//               offset={-144}
//               duration={500}
//               key={link.key}
//             >
//               <ArcadeButton color={colors[index % colors.length]}>
//                 {link.label}
//               </ArcadeButton>
//             </ScrollLink>
//           ))}
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// function debounce<T extends (...args: any[]) => void>(func: T, delay: number) {
//   let timeout: NodeJS.Timeout;
//   return function(this: ThisParameterType<T>, ...args: Parameters<T>) {
//     const context = this;
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func.apply(context, args), delay);
//   } as T;
// }


// Navbar.js
'use client';

// const colors: Color[] = ['green', 'red', 'orange', 'blue'];

import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import { NAV_LINKS } from "@/constants";
import HamburgerButton from './HamburgerIcon';
import ArcadeButton, { Color } from './ArcadeButoon';
import YellowBgPattern from './YellowBgPattern';
import MobileNavbar from './MobileNavBar';


interface NavbarProps {
  // ... other props
}

const colors: Color[] = ['green', 'red', 'orange', 'blue'];

const Navbar: React.FC<NavbarProps> = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768;
    }
    return false;
  });

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const checkIsMobile = () => {
      const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches;
      setIsMobile(isMobile);
    };
  
    checkIsMobile(); // Initial check
  
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', checkIsMobile);
  
      return () => {
        window.removeEventListener('resize', checkIsMobile);
      };
    }
  }, []);
  

  return (
    <nav className="z-50 fixed top-0 left-0 right-0 bg-yellow-20 flexCenter h-1/8 padding-container py-5 cursor: pointer">
      <YellowBgPattern />

      {isMobile && (
        <div className="lg:hidden relative z-50">
          <HamburgerButton onClick={handleToggleMenu} isOpen={isMenuOpen} />
        </div>
      )}

      {(isMobile || isMenuOpen) && (
        <MobileNavbar isMenuOpen={isMenuOpen} handleToggleMenu={handleToggleMenu} backgroundColor={''} />
      )}

{!isMobile && !isMenuOpen && isMobile === false && (
  <ul className={`flex flex-row items-center justify-center h-full gap-12 lg:flex hidden-on-mobile`}>
    {NAV_LINKS.map((link: { id: string; key: React.Key | null | undefined; label: any; }, index: number) => (
      <ScrollLink
        to={link.id}
        spy={true}
        smooth={true}
        offset={-144}
        duration={500}
        key={link.key}
      >
        <ArcadeButton color={colors[index % colors.length]}>
          {link.label}
        </ArcadeButton>
      </ScrollLink>
    ))}
  </ul>
)}
    </nav>
  );
};

export default Navbar;

// const debounce = function <T extends (...args: any[]) => void>(
//   func: T,
//   delay: number
// ) {
//   let timeout: NodeJS.Timeout;

//   return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
//     const context = this;
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func.apply(context, args), delay);
//   } as T;
// };


