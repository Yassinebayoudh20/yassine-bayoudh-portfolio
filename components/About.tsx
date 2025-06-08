
import React from 'react';
import Section from './Section';
import TimelineItem from './TimelineItem';
import SkillBadge from './SkillBadge';
import { Experience, Skill, SectionId } from '../types';

interface AboutProps {
  id: SectionId;
  experiences: Experience[];
  skills: Skill[];
}

const About: React.FC<AboutProps> = ({ id, experiences, skills }) => {
  return (
    <Section id={id} title="About Me">
      <div className="grid md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-1 text-center md:text-left">
           <img 
            src="https://picsum.photos/seed/about_me/400/400" 
            alt="About me" 
            className="rounded-lg shadow-xl mx-auto md:mx-0 w-full max-w-xs object-cover"
          />
        </div>
        <div className="md:col-span-2">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
            Hello! I'm a dedicated and results-oriented software engineer with a strong focus on frontend technologies. 
            I thrive on transforming complex problems into intuitive and engaging user experiences. 
            With several years in the industry, I've had the privilege of working on diverse projects, honing my skills in modern JavaScript frameworks, responsive design, and performance optimization.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            I'm a lifelong learner, always eager to explore new technologies and methodologies. 
            Collaboration and clear communication are key to my workflow, and I enjoy working in agile environments to deliver high-quality software.
            When I'm not coding, you can find me exploring the outdoors, reading tech blogs, or contributing to open-source projects.
          </p>
        </div>
      </div>

      <div className="mt-16 md:mt-24">
        <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-10 md:mb-12 text-lighttext dark:text-darktext">Professional History</h3>
        <div className="relative border-l-2 border-primary/30 dark:border-primary-light/30 pl-6 space-y-10">
          {experiences.map((exp, index) => (
            <TimelineItem key={exp.id} experience={exp} isLast={index === experiences.length -1} />
          ))}
        </div>
      </div>

      <div className="mt-16 md:mt-24">
        <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-10 md:mb-12 text-lighttext dark:text-darktext">Key Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map(skill => (
            <SkillBadge key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
