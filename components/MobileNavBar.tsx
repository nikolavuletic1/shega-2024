'use client'
// MobileNavbar.js
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import ArcadeButton, { Color } from './ArcadeButoon';
import YellowBgPattern from './YellowBgPattern';
import { NAV_LINKS } from '@/constants';

interface MobileNavbarProps {
  isMenuOpen: boolean;
  handleToggleMenu: () => void;
  backgroundColor: string; // New prop for background color
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  isMenuOpen,
  handleToggleMenu,
  backgroundColor,
}) => {
  const colors: Color[] = ['green', 'red', 'orange', 'blue'];

  const handleLinkClick = () => {
    // Add any specific logic you want to execute on link click
    // For now, let's close the menu
    handleToggleMenu();
  };

  return (
    <>
      {isMenuOpen && (
        <div className={`fixed top-0 left-0 right-0 bottom-0 flex flex-col z-[40] ${backgroundColor}`}>
          <YellowBgPattern />
          <div className="flex justify-end p-4">
            <button onClick={handleToggleMenu}>Close</button>
          </div>

          <ul className="flex flex-col items-center justify-center h-full gap-12 surfaceDuo iphoneSe">
            {NAV_LINKS.map((link, index) => (
              <ScrollLink
                to={link.id}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                key={link.key}
                onClick={handleLinkClick}
              >
                <ArcadeButton color={colors[index % colors.length]}>
                  {link.label}
                </ArcadeButton>
              </ScrollLink>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;
