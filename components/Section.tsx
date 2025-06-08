
import React from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = '', title }) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 ${className} animate-fade-in-up`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {title && (
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16 text-lighttext dark:text-darktext">
            {title}
            <span className="block w-20 h-1 bg-primary mx-auto mt-4"></span>
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
