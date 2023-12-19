
// 'use client'

// import { Link as ScrollLink, scrollSpy } from 'react-scroll';
// import { useState, useCallback, useEffect } from 'react';
// import { NAV_LINKS } from "@/constants";
// import HamburgerButton from './HamburgerIcon';
// import ArcadeButton, { Color } from './ArcadeButoon';
// import YellowBgPattern from './YellowBgPattern';

// const Navbar = () => {

//   useEffect(() => {
//     scrollSpy.update();
//   }, []);
  
//   const [isMenuOpen, setMenuOpen] = useState(false);
//   const colors: Color[] = ['green', 'red', 'orange', 'blue'];
//   const [isTargetLoaded, setTargetLoaded] = useState(false);

//   const handleToggleMenu = useCallback(() => {
//     setMenuOpen(prevState => !prevState);
//     setTargetLoaded(false);
//   }, []);

//   const handleLinkClick = useCallback(() => {
//     setMenuOpen(false);
//   }, []);

//   const handleLinkLoad = useCallback(() => {
//     setTargetLoaded(true);
//   }, []);


// //   const handleLinkClick = useCallback(() => {
// //   setMenuOpen(false);
// //   scroller.scrollTo('contact', {
// //     smooth: true,
// //     duration: 500,
// //     offset: -50,
// //   });
// // }, []);


//   const renderLinks = (links: any[], offset: number | undefined) => {
//     return links.map((link, index) => (
//       <li key={link.key}>
//         <ScrollLink
//          activeClass="active"
//           to={link.id}
//           spy={true}
//           smooth={true}
//           offset={offset}
//           // duration={500}
//           onClick={handleLinkClick}
//           onLoad={handleLinkLoad}
//         >
//           <ArcadeButton color={colors[index % colors.length]}>
//             {link.label}
//           </ArcadeButton>
//         </ScrollLink>
//       </li>
//     ));
//   };

//   useEffect(() => {
//     // Recalculate scroll position here
//   }, [NAV_LINKS]); // This will run every time `NAV_LINKS` changes
//   return (
//     <nav className="z-50 fixed top-0 left-0 right-0 bg-yellow-20 flexCenter h-1/8 padding-container py-5 cursor: pointer">
//       <YellowBgPattern onLoad={undefined} />
//       <div className="md:hidden relative z-50">
//         <HamburgerButton onClick={handleToggleMenu} isOpen={isMenuOpen} />
//       </div>
//       {isMenuOpen && (
//         <div className="fixed top-0 left-0 right-0 bottom-0 flex flex-col z-40">
//           <YellowBgPattern onLoad={undefined} />
//           <div className="flex justify-end p-4">
//             <button onClick={handleToggleMenu}></button>
//           </div>
//           <ul className="flex flex-col items-center justify-center h-full gap-12 surfaceDuo iphoneSe">
//             {renderLinks(NAV_LINKS, -80)}
//           </ul>
//         </div>
//       )}
//       <ul className="hidden md:flex flex-row items-center justify-center h-full gap-12">
//         {renderLinks(NAV_LINKS, -144)}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
// 'use client'
// import { Link as ScrollLink, scrollSpy } from 'react-scroll';
// import { useState, useCallback, useEffect } from 'react';
// import { NAV_LINKS } from "@/constants";
// import HamburgerButton from './HamburgerIcon';
// import ArcadeButton, { Color } from './ArcadeButoon';
// import YellowBgPattern from './YellowBgPattern';

// const Navbar = () => {
//   useEffect(() => {
//     scrollSpy.update();
//   }, []);

//   const [isMenuOpen, setMenuOpen] = useState(false);
//   const colors: Color[] = ['green', 'red', 'orange', 'blue'];
//   const [isTargetLoaded, setTargetLoaded] = useState(false);

//   const handleToggleMenu = useCallback(() => {
//     setMenuOpen((prevState) => !prevState);
//     setTargetLoaded(false);
//   }, []);

//   const handleLinkClick = useCallback(() => {
//     setMenuOpen(false);
//   }, []);

//   const handleLinkLoad = useCallback(() => {
//     setTargetLoaded(true);
//   }, []);

//   const renderLinks = (links: any[], defaultOffset: number | undefined, footerOffset: number | undefined) => {
//     return links.map((link, index) => (
//       <li key={link.key}>
//         <ScrollLink
//           activeClass="active"
//           to={link.id}
//           spy={true}
//           smooth={true}
//           offset={link.isFooter ? footerOffset : defaultOffset}
//           onClick={handleLinkClick}
//           onLoad={handleLinkLoad}
//         >
//           <ArcadeButton color={colors[index % colors.length]}>
//             {link.label}
//           </ArcadeButton>
//         </ScrollLink>
//       </li>
//     ));
//   };

//   return (
//     <nav className="z-50 fixed top-0 left-0 right-0 bg-yellow-20 flexCenter h-1/8 padding-container py-5 cursor: pointer">
//       <YellowBgPattern onLoad={undefined} />
//       <div className="md:hidden relative z-50">
//         <HamburgerButton onClick={handleToggleMenu} isOpen={isMenuOpen} />
//       </div>
//       {isMenuOpen && (
//         <div className="fixed top-0 left-0 right-0 bottom-0 flex flex-col z-40">
//           <YellowBgPattern onLoad={undefined} />
//           <div className="flex justify-end p-4">
//             <button onClick={handleToggleMenu}></button>
//           </div>
//           <ul className="flex flex-col items-center justify-center h-full gap-12 surfaceDuo iphoneSe">
//             {/* {renderLinks(NAV_LINKS, -80, -50)} */}
//             {renderLinks(NAV_LINKS, -60, -50)} {/* Use different offset for the Footer */}
//           </ul>
//         </div>
//       )}
//       <ul className="hidden md:flex flex-row items-center justify-center h-full gap-12">
//         {/* {renderLinks(NAV_LINKS, -144, -10)} */}
//         {renderLinks(NAV_LINKS, -144, -38)}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


// ... (import statements)


// export default Navbar;
'use client'
import { Link as ScrollLink, scrollSpy } from 'react-scroll';
import { useState, useCallback, useEffect } from 'react';
import { NAV_LINKS } from "@/constants";
import HamburgerButton from './HamburgerIcon';
import ArcadeButton, { Color } from './ArcadeButoon';
import YellowBgPattern from './YellowBgPattern';

interface Link {
  id: string;
  key: string;
  label: string;
  isFooter?: boolean;
  isGame?: boolean;
  isDefault?: boolean;

}

interface NavbarProps {
  defaultOffset: number;
  footerOffset:number;
  gamesOffset: number;
}

const Navbar: React.FC<NavbarProps> = ({ defaultOffset, footerOffset, gamesOffset }) => {
  // console.log(defaultOffset, footerOffset, gamesOffset);


  useEffect(() => {
    scrollSpy.update();
  }, []);

  const [isMenuOpen, setMenuOpen] = useState(false);
  const colors: Color[] = ['green', 'red', 'orange', 'blue'];
  const [isTargetLoaded, setTargetLoaded] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setMenuOpen((prevState) => !prevState);
    setTargetLoaded(false);
  }, []);

  const handleLinkClick = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const handleLinkLoad = useCallback(() => {
    setTargetLoaded(true);
  }, []);

  const renderLinks = (links: Link[], defaultOffset: number, footerOffset: number, gamesOffset: number) => {
    return links.map((link, index) => (
      <li key={link.key}>
        <ScrollLink
          activeClass="active"
          to={link.id}
          spy={true}
          smooth={true}
          offset={getOffset(link.id)}
          onClick={handleLinkClick}
          onLoad={handleLinkLoad}
        >
          <ArcadeButton color={colors[index % colors.length]}>
            {link.label}
          </ArcadeButton>
        </ScrollLink>
      </li>
    ));

    function getOffset(linkId: string): number {
      switch (linkId) {
        case '/contact':
          return footerOffset;
        case '/games':
          return gamesOffset;
        default:
          return defaultOffset;
      }
    }
  };

  return (
    <nav className="z-50 fixed top-0 left-0 right-0 bg-yellow-20 flexCenter h-1/8 padding-container py-5 cursor: pointer">
      <YellowBgPattern onLoad={undefined} />
      <div className="md:hidden relative z-50">
        <HamburgerButton onClick={handleToggleMenu} isOpen={isMenuOpen} />
      </div>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex flex-col z-40">
          <YellowBgPattern onLoad={undefined} />
          <div className="flex justify-end p-4">
            <button onClick={handleToggleMenu}></button>
          </div>
          <ul className="flex flex-col items-center justify-center h-full gap-12 surfaceDuo iphoneSe">
            {renderLinks(NAV_LINKS, defaultOffset, footerOffset, gamesOffset)} {/* Use different offset for the Footer and Games */}
          </ul>
        </div>
      )}
      <ul className="hidden md:flex flex-row items-center justify-center h-full gap-12">
        {renderLinks(NAV_LINKS, defaultOffset, footerOffset, gamesOffset)} {/* Use different offset for the Footer and Games */}
      </ul>
    </nav>
  );
};

export default Navbar;
