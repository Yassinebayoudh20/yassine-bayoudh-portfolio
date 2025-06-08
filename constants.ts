
import { Project, Experience, Skill, BlogPost, SectionId, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { id: SectionId.Home, label: 'Home' },
  { id: SectionId.About, label: 'About' },
  { id: SectionId.Projects, label: 'Projects' },
  { id: SectionId.Blog, label: 'Blog' },
  { id: SectionId.Contact, label: 'Contact' },
];

export const DUMMY_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with a modern UI.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    githubUrl: '#',
    demoUrl: '#',
    longDescription: 'Developed a responsive and scalable e-commerce website using the MERN stack. Features include product listings, search functionality, user authentication, shopping cart, and a Stripe payment integration. The admin panel allows for easy product and order management.',
    year: '2023',
    category: 'Web Development',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management tool for teams.',
    tags: ['Vue.js', 'Firebase', 'Vuetify'],
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    githubUrl: '#',
    demoUrl: '#',
    longDescription: 'Designed and built a real-time task management application enabling users to create, assign, and track tasks. Implemented features like drag-and-drop boards, notifications, and team collaboration. Leveraged Firebase for backend services and real-time database.',
    year: '2022',
    category: 'Web Development',
  },
  {
    id: '3',
    title: 'Mobile Fitness Tracker',
    description: 'An iOS app for tracking workouts and fitness goals.',
    tags: ['Swift', 'CoreData', 'HealthKit'],
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    githubUrl: '#',
    longDescription: 'Created a native iOS application to help users monitor their physical activity, set fitness goals, and view progress. Integrated with HealthKit to sync data. Focused on intuitive UI/UX and performance.',
    year: '2023',
    category: 'Mobile App',
  },
   {
    id: '4',
    title: 'Portfolio Website V1',
    description: 'My previous personal portfolio website.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    demoUrl: '#',
    longDescription: 'A static portfolio website built with fundamental web technologies. This project helped solidify my understanding of responsive design and vanilla JavaScript DOM manipulation.',
    year: '2021',
    category: 'Web Development',
  },
];

export const DUMMY_EXPERIENCES: Experience[] = [
  {
    id: '1',
    date: '2022 - Present',
    title: 'Senior Frontend Developer',
    company: 'Tech Solutions Inc.',
    description: 'Leading frontend development for key client projects, mentoring junior developers, and driving UI/UX best practices. Specialized in React, TypeScript, and modern JavaScript frameworks.',
    logoUrl: 'https://picsum.photos/seed/company1/50/50',
    tags: ['React', 'TypeScript', 'Agile', 'Leadership']
  },
  {
    id: '2',
    date: '2020 - 2022',
    title: 'Mid-Level Frontend Developer',
    company: 'Innovatech Ltd.',
    description: 'Developed and maintained responsive web applications using Angular and Vue.js. Collaborated with backend teams to integrate APIs and improve application performance.',
    logoUrl: 'https://picsum.photos/seed/company2/50/50',
    tags: ['Angular', 'Vue.js', 'REST APIs', 'Performance']
  },
  {
    id: '3',
    date: '2018 - 2020',
    title: 'Junior Web Developer',
    company: 'Web Wizards Co.',
    description: 'Assisted in the development of client websites using HTML, CSS, JavaScript, and jQuery. Gained experience in version control with Git and responsive web design.',
    logoUrl: 'https://picsum.photos/seed/company3/50/50',
    tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Git']
  },
];

export const DUMMY_SKILLS: Skill[] = [
  { name: 'JavaScript', level: 'Expert' },
  { name: 'TypeScript', level: 'Expert' },
  { name: 'React', level: 'Expert' },
  { name: 'Node.js', level: 'Advanced' },
  { name: 'Express', level: 'Advanced' },
  { name: 'Tailwind CSS', level: 'Expert' },
  { name: 'Figma', level: 'Intermediate' },
  { name: 'MongoDB', level: 'Intermediate' },
  { name: 'PostgreSQL', level: 'Intermediate' },
  { name: 'AWS', level: 'Beginner' },
  { name: 'Swift', level: 'Intermediate' },
];

export const DUMMY_BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Mastering Tailwind CSS for Rapid UI Development',
    date: 'October 26, 2023',
    excerpt: 'An in-depth guide to leveraging Tailwind CSS for building beautiful, responsive user interfaces quickly and efficiently.',
    imageUrl: 'https://picsum.photos/seed/blog1/600/400',
    slug: 'mastering-tailwind-css',
    author: 'Jane Doe',
    readingTime: '7 min read',
  },
  {
    id: '2',
    title: 'The Power of TypeScript in Modern Web Apps',
    date: 'September 15, 2023',
    excerpt: 'Exploring the benefits of TypeScript for large-scale applications, including type safety, better tooling, and improved developer experience.',
    imageUrl: 'https://picsum.photos/seed/blog2/600/400',
    slug: 'power-of-typescript',
    author: 'Jane Doe',
    readingTime: '5 min read',
  },
  {
    id: '3',
    title: 'A Deep Dive into React Hooks',
    date: 'August 02, 2023',
    excerpt: 'Understanding React Hooks like useState, useEffect, and custom hooks to write cleaner and more reusable component logic.',
    imageUrl: 'https://picsum.photos/seed/blog3/600/400',
    slug: 'react-hooks-deep-dive',
    author: 'Jane Doe',
    readingTime: '10 min read',
  },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  twitter: 'https://twitter.com/yourusername',
  email: 'your.email@example.com',
};

export const RESUME_PATH = '/placeholder-resume.pdf'; // Create a dummy PDF at public/placeholder-resume.pdf
