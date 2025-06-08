
import React, { useEffect } from 'react';
import { Project } from '../types';
import { XIcon } from './icons/GenericIcons';
import { GithubIcon, ExternalLinkIcon } from './icons/SocialIcons';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-[100] animate-fade-in-up"
      onClick={onClose} // Close on overlay click
    >
      <div 
        className="bg-white dark:bg-slate-800 rounded-lg shadow-2xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-up"
        style={{ animationFillMode: 'forwards', animationDelay: '0.1s' }} // Ensure animation styles apply
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal content
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-red-500 dark:text-slate-400 dark:hover:text-red-400 transition-colors"
          aria-label="Close project details"
        >
          <XIcon className="w-6 h-6" />
        </button>

        <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-6" />
        
        <h2 className="text-3xl font-bold mb-2 text-lighttext dark:text-darktext">{project.title}</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Category: {project.category}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Year: {project.year}</p>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2 text-lighttext dark:text-darktext">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 text-sm bg-primary/10 text-primary dark:bg-primary-light/10 dark:text-primary-light rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none mb-6">
          <h4 className="text-lg font-semibold mb-2">Description:</h4>
          <p className="text-slate-600 dark:text-slate-300 whitespace-pre-line">{project.longDescription}</p>
        </div>
        
        <div className="flex space-x-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-md transition-colors"
            >
              <GithubIcon className="w-5 h-5 mr-2" />
              View on GitHub
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-md transition-colors"
            >
              <ExternalLinkIcon className="w-5 h-5 mr-2" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
