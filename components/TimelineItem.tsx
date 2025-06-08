
import React from 'react';
import { Experience } from '../types';

interface TimelineItemProps {
  experience: Experience;
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ experience, isLast }) => {
  return (
    <div className="relative pl-8 pb-4 transition-all duration-300 hover:scale-[1.02]">
      <div className="absolute -left-[calc(1.5rem+1px)] top-1.5 w-6 h-6 bg-primary rounded-full border-4 border-lightbg dark:border-darkbg group-hover:bg-primary-dark"></div>
      
      <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
          <h4 className="text-xl font-semibold text-primary dark:text-primary-light">{experience.title}</h4>
          <span className="text-sm text-slate-500 dark:text-slate-400 mt-1 sm:mt-0">{experience.date}</span>
        </div>
        <p className="text-md font-medium text-slate-700 dark:text-slate-300 mb-3">{experience.company}</p>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{experience.description}</p>
        {experience.tags && experience.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {experience.tags.map(tag => (
              <span key={tag} className="px-2 py-1 text-xs bg-primary/10 text-primary dark:bg-primary-light/10 dark:text-primary-light rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
