
import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { NAV_LINKS, RESUME_PATH } from '../constants';
import { SectionId, NavLink } from '../types';
import { MenuIcon, XIcon, DownloadIcon } from './icons/GenericIcons'; // Ensure these are created

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: SectionId;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItemClasses = (linkId: SectionId) => 
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      activeSection === linkId 
        ? 'bg-primary/20 text-primary dark:text-primary-light' 
        : 'hover:text-primary dark:hover:text-primary-light'
    }`;

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-lightbg/80 dark:bg-darkbg/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href={`#${SectionId.Home}`} className="text-2xl font-bold text-primary dark:text-primary-light">
              YourName
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            {NAV_LINKS.map((link: NavLink) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={closeMenu}
                className={navItemClasses(link.id)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-3 py-2 rounded-md text-sm font-medium bg-secondary text-white hover:bg-secondary-dark transition-colors duration-200 flex items-center"
            >
              <DownloadIcon className="w-4 h-4 mr-2" />
              Resume
            </a>
            <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          </div>
          <div className="md:hidden flex items-center">
            <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <button
              onClick={toggleMenu}
              className="ml-2 p-2 rounded-md text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary-light hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-lightbg dark:bg-darkbg shadow-lg p-2 space-y-1 sm:px-3 animate-slide-in-left" id="mobile-menu">
          {NAV_LINKS.map((link: NavLink) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={closeMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium ${navItemClasses(link.id)}`}
            >
              {link.label}
            </a>
          ))}
           <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md text-base font-medium bg-secondary text-white hover:bg-secondary-dark transition-colors duration-200 flex items-center"
            >
              <DownloadIcon className="w-4 h-4 mr-2" />
              Resume
            </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
