import {
  Project,
  Experience,
  Skill,
  BlogPost,
  SectionId,
  NavLink,
} from "./types";

export const NAV_LINKS: NavLink[] = [
  { id: SectionId.Home, label: "Home" },
  { id: SectionId.About, label: "About" },
  { id: SectionId.Projects, label: "Projects" },
  // { id: SectionId.Blog, label: 'Blog' },
  { id: SectionId.Contact, label: "Contact" },
];

export const DUMMY_PROJECTS: Project[] = [
  {
    id: "1",
    title: "TrackIT",
    description:
      "Tracks workforce time, generates reports, and manages vacations.",
    tags: ["Angular", ".NET Core", "SQL Server", "Keycloak", "Docker"],
    imageUrl: "https://res.cloudinary.com/de870fank/image/upload/v1749379117/ChatGPT_Image_Jun_8_2025_11_40_00_AM_ofok3o.png",
    githubUrl: "#",
    demoUrl: "#",
    longDescription:
      "Architected and implemented a full-stack project management tool, improving operational efficiency by 40% with automated reporting and workforce tracking.",
    year: "2023",
    category: "Enterprise Software",
    privateRepository: true,
  },
  {
    id: "2",
    title: "Formulation",
    description: "For managing and versioning alchemy experiments.",
    tags: ["Angular", "Bootstrap", "i18n"],
    imageUrl: "https://res.cloudinary.com/de870fank/image/upload/v1749379267/ChatGPT_Image_Jun_8_2025_11_41_58_AM_rhdcob.png",
    githubUrl: "#",
    demoUrl: "#",
    longDescription:
      "Built a dynamic application with support for multilingual UI and customizable themes, increasing research efficiency by 50%.",
    year: "2024",
    category: "Web Application",
    privateRepository: true,
  },
  {
    id: "3",
    title: "Matrix",
    description: "Optimized planning and resource allocation in manufacturing.",
    tags: ["Angular", ".NET", "SQL Server"],
    imageUrl: "https://res.cloudinary.com/de870fank/image/upload/v1749379356/ChatGPT_Image_Jun_8_2025_11_44_11_AM_oxuixr.png",
    githubUrl: "#",
    demoUrl: "#",
    longDescription:
      "Created a production tracking system that cut workflow bottlenecks by 25% and improved resource efficiency by 35%.",
    year: "2023",
    category: "Workflow Tools",
    privateRepository: true,
  },
];

export const DUMMY_EXPERIENCES: Experience[] = [
  {
    id: "1",
    date: "2022 - Present",
    title: "Full Stack Web Developer",
    company: "CASE Tunisia",
    description:
      "Led backend and frontend development using Angular and .NET Core. Delivered secure, efficient systems with advanced planning and authentication features.",
    logoUrl: "https://picsum.photos/seed/case/50/50",
    tags: ["Angular", ".NET Core", "Docker", "SQL Server", "Keycloak", "Agile"],
  },
  {
    id: "2",
    date: "2023 - 2024",
    title: "Frontend Developer",
    company: "Hutchinson",
    description:
      "Built advanced UIs with theme and language support. Delivered high-performing interfaces for research management systems.",
    logoUrl: "https://picsum.photos/seed/hutchinson/50/50",
    tags: ["Angular", "Bootstrap", "i18n", "HTML", "CSS", "Performance"],
  },
];

export const DUMMY_SKILLS: Skill[] = [
  { name: "C#", level: "Expert" },
  { name: "TypeScript", level: "Expert" },
  { name: "Angular", level: "Expert" },
  { name: ".NET Core", level: "Expert" },
  { name: "SQL Server", level: "Advanced" },
  { name: "PostgreSQL", level: "Advanced" },
  { name: "Docker", level: "Intermediate" },
  { name: "Azure", level: "Beginner" },
  { name: "CI/CD Pipelines", level: "Intermediate" },
  { name: "Keycloak", level: "Intermediate" },
  { name: "HTML/CSS", level: "Advanced" },
  { name: "Bootstrap", level: "Advanced" },
];

export const DUMMY_BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Mastering Tailwind CSS for Rapid UI Development",
    date: "October 26, 2023",
    excerpt:
      "An in-depth guide to leveraging Tailwind CSS for building beautiful, responsive user interfaces quickly and efficiently.",
    imageUrl: "https://picsum.photos/seed/blog1/600/400",
    slug: "mastering-tailwind-css",
    author: "Jane Doe",
    readingTime: "7 min read",
  },
  {
    id: "2",
    title: "The Power of TypeScript in Modern Web Apps",
    date: "September 15, 2023",
    excerpt:
      "Exploring the benefits of TypeScript for large-scale applications, including type safety, better tooling, and improved developer experience.",
    imageUrl: "https://picsum.photos/seed/blog2/600/400",
    slug: "power-of-typescript",
    author: "Jane Doe",
    readingTime: "5 min read",
  },
  {
    id: "3",
    title: "A Deep Dive into React Hooks",
    date: "August 02, 2023",
    excerpt:
      "Understanding React Hooks like useState, useEffect, and custom hooks to write cleaner and more reusable component logic.",
    imageUrl: "https://picsum.photos/seed/blog3/600/400",
    slug: "react-hooks-deep-dive",
    author: "Jane Doe",
    readingTime: "10 min read",
  },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/Yassinebayoudh20",
  linkedin: "https://linkedin.com/in/yassinebayoudh",
  twitter: "https://twitter.com/yourusername",
  email: "bayoudh.yassine20@gmail.com",
};

export const RESUME_PATH =
  "/yassine-bayoudh-portfolio/public/yassine-bayoudh.pdf";
