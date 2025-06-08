
import React from 'react';
import { Skill } from '../types';

interface SkillBadgeProps {
  skill: Skill;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
      {skill.icon && <span className="mr-2 text-primary dark:text-primary-light">{skill.icon}</span>}
      <span className="font-medium text-slate-700 dark:text-slate-200">{skill.name}</span>
      {/* Optional: Display skill level
      {skill.level && (
        <span className="ml-2 text-xs text-slate-500 dark:text-slate-400">({skill.level})</span>
      )}
      */}
    </div>
  );
};

export default SkillBadge;
