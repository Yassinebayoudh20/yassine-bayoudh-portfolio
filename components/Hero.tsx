import React from "react";
import Section from "./Section";
import { SOCIAL_LINKS, RESUME_PATH } from "../constants";
import { SectionId } from "../types";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MailIcon,
} from "./icons/SocialIcons";
import { DownloadIcon } from "./icons/GenericIcons";

interface HeroProps {
  id: SectionId;
}

const Hero: React.FC<HeroProps> = ({ id }) => {
  return (
    <Section
      id={id}
      className="min-h-screen flex items-center bg-gradient-to-br from-slate-100 to-sky-100 dark:from-slate-800 dark:to-sky-900 !py-0"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
        <img
          src="https://res.cloudinary.com/de870fank/image/upload/v1749379593/Design_sans_titre_lxqnqn.png"
          alt="Profile Picture"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto mb-8 shadow-xl border-4 border-white dark:border-slate-700"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-lighttext dark:text-darktext">
          Hi, I'm <span className="text-primary">Yassine Bayoudh</span>
        </h1>
        <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
          A passionate Fullstack Web Developer specializing in creating robust,
          beautiful, responsive, and user-friendly web applications.
        </p>
        <div className="flex justify-center space-x-4 mb-10">
          <a
            href={`#${SectionId.Projects}`}
            className="px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark transition-transform transform hover:scale-105 duration-300"
          >
            View Projects
          </a>
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-secondary text-white font-semibold rounded-lg shadow-md hover:bg-secondary-dark transition-transform transform hover:scale-105 duration-300 flex items-center"
          >
            <DownloadIcon className="w-5 h-5 mr-2" />
            My Resume
          </a>
        </div>
        <div className="flex justify-center space-x-6">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary-light transition-colors duration-300"
          >
            <GithubIcon className="w-7 h-7" />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary-light transition-colors duration-300"
          >
            <LinkedinIcon className="w-7 h-7" />
          </a>
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary-light transition-colors duration-300"
          >
            <MailIcon className="w-7 h-7" />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
