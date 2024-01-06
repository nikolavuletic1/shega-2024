'use client'
import { Link as ScrollLink, scrollSpy } from 'react-scroll';
import { useState, useCallback, useEffect } from 'react';
import { NAV_LINKS } from "@/constants";
import HamburgerButton from './HamburgerIcon';
import ArcadeButton, { Color } from './ArcadeButoon';
import YellowBgPattern from './YellowBgPattern';

const Navbar = () => {

  useEffect(() => {
    scrollSpy.update();
  }, []);

  const [isMenuOpen, setMenuOpen] = useState(false);
  const colors: Color[] = ['green', 'red', 'orange', 'blue'];
  const [isTargetLoaded, setTargetLoaded] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setMenuOpen(prevState => !prevState);
    setTargetLoaded(false);
  }, []);

  const handleLinkClick = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const handleLinkLoad = useCallback(() => {
    setTargetLoaded(true);
  }, []);



  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
    return () => {
      window.onbeforeunload = null;
    }
  }, []);


  const renderLinks = (links: any[], offset: number | undefined) => {
    return links.map((link, index) => (
      <li key={link.key}>
        <ScrollLink
          activeClass="active"
          to={link.id}
          spy={true}
          smooth={true}
          offset={offset}
          duration={800}
          onClick={handleLinkClick}
          onLoad={handleLinkLoad}
        >
          <ArcadeButton color={colors[index % colors.length]}>
            {link.label}
          </ArcadeButton>
        </ScrollLink>
      </li>
    ));
  };

  useEffect(() => {
    // Recalculate scroll position here
  }, [NAV_LINKS]); // This will run every time `NAV_LINKS` changes
  return (
    <nav className="z-50 fixed top-0 left-0 right-0 bg-yellow-20 flexCenter h-[6rem] padding-container py-5 cursor: pointer">
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
            {renderLinks(NAV_LINKS, -96)}
          </ul>
        </div>
      )}
      <ul className="hidden md:flex flex-row items-center justify-center h-full gap-12">
        {renderLinks(NAV_LINKS, -96)}
      </ul>
    </nav>
  );
};

export default Navbar;
