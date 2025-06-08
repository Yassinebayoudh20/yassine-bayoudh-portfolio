
import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-darkbg border-t border-slate-200 dark:border-slate-700 py-8 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex justify-center space-x-6 mb-4">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary-light transition-colors duration-300">
            <GithubIcon className="w-6 h-6" />
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary-light transition-colors duration-300">
            <LinkedinIcon className="w-6 h-6" />
          </a>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          &copy; {currentYear} Yassine Bayoudh. All rights reserved.
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
          Portfolio Template by AI.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
