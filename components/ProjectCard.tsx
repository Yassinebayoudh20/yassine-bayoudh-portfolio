
import React from 'react';
import { Project } from '../types';
import { GithubIcon, ExternalLinkIcon } from './icons/SocialIcons'; // Or GenericIcons if preferred

interface ProjectCardProps {
  project: Project;
  onReadMore: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onReadMore }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 flex flex-col">
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-lighttext dark:text-darktext">{project.title}</h3>
        <div className="mb-3 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map(tag => ( // Show limited tags
            <span key={tag} className="px-2 py-1 text-xs bg-primary/10 text-primary dark:bg-primary-light/10 dark:text-primary-light rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 flex-grow">{project.description}</p>
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => onReadMore(project)}
              className="text-sm text-primary dark:text-primary-light font-medium hover:underline"
            >
              Read More
            </button>
            <div className="flex space-x-3">
              {project.githubUrl && (
                <div className="relative group">
                  <span
                    className={`${
                      project.privateRepository
                        ? 'cursor-not-allowed text-slate-400'
                        : 'text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary-light'
                    }`}
                  >
                    <GithubIcon className="w-5 h-5" />
                  </span>
                  {project.privateRepository && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-slate-700 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      Private Repository
                    </div>
                  )}
                </div>
              )}
              {project.demoUrl && (
                <div className="relative group">
                  <span
                    className={`${
                      project.privateRepository
                        ? 'cursor-not-allowed text-slate-400'
                        : 'text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary-light'
                    }`}
                  >
                    <ExternalLinkIcon className="w-5 h-5" />
                  </span>
                  {project.privateRepository && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-slate-700 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      Private Repository
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
