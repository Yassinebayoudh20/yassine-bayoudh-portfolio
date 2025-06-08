
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useDarkMode } from './hooks/useDarkMode';
import { SectionId, Project, Experience, Skill, BlogPost } from './types';
import { DUMMY_PROJECTS, DUMMY_EXPERIENCES, DUMMY_SKILLS, DUMMY_BLOG_POSTS } from './constants';
import { CodeIcon, DesignIcon, DatabaseIcon, CloudIcon, MobileIcon } from './components/icons/SkillIcons'; // Example skill icons

const App: React.FC = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.Home);

  const skillsWithIcons: Skill[] = DUMMY_SKILLS.map(skill => {
    switch (skill.name.toLowerCase()) {
      case 'react':
      case 'typescript':
      case 'javascript':
        return { ...skill, icon: <CodeIcon className="w-6 h-6 mr-2 text-primary" /> };
      case 'tailwind css':
      case 'figma':
        return { ...skill, icon: <DesignIcon className="w-6 h-6 mr-2 text-primary" /> };
      case 'nodejs':
      case 'express':
        return { ...skill, icon: <CodeIcon className="w-6 h-6 mr-2 text-primary" /> };
      case 'mongodb':
      case 'postgresql':
        return { ...skill, icon: <DatabaseIcon className="w-6 h-6 mr-2 text-primary" /> };
      case 'aws':
        return { ...skill, icon: <CloudIcon className="w-6 h-6 mr-2 text-primary" /> };
      case 'swift':
        return { ...skill, icon: <MobileIcon className="w-6 h-6 mr-2 text-primary" /> };
      default:
        return { ...skill, icon: <CodeIcon className="w-6 h-6 mr-2 text-primary" /> };
    }
  });
  
  // Basic scroll spy implementation
  useEffect(() => {
    const sections = Object.values(SectionId).map(id => document.getElementById(id));
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as SectionId);
        }
      });
    }, { rootMargin: "-50% 0px -50% 0px" }); // Adjust rootMargin to trigger when section is in middle of viewport

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);


  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Navbar 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
      />
      <main className="flex-grow">
        <Hero id={SectionId.Home} />
        <About id={SectionId.About} experiences={DUMMY_EXPERIENCES} skills={skillsWithIcons} />
        <Projects id={SectionId.Projects} projects={DUMMY_PROJECTS} />
        {/* <Blog id={SectionId.Blog} posts={DUMMY_BLOG_POSTS} /> */}
        <Contact id={SectionId.Contact} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
