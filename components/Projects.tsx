
import React, { useState, useMemo } from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { Project, SectionId } from '../types';

interface ProjectsProps {
  id: SectionId;
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ id, projects }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = useMemo(() => {
    const uniqueCategories = new Set(projects.map(p => p.category));
    return ['All', ...Array.from(uniqueCategories)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }
    return projects.filter(project => project.category === activeFilter);
  }, [projects, activeFilter]);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Restore background scroll
  };

  return (
    <Section id={id} title="My Projects">
      <div className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 transform hover:scale-105
              ${activeFilter === category 
                ? 'bg-primary text-white shadow-lg' 
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600'
              }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} onReadMore={openModal} />
        ))}
      </div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={closeModal} />}
    </Section>
  );
};

export default Projects;
