
import React from 'react';

export interface Skill {
  name: string;
  level?: string; // e.g., 'Advanced', 'Intermediate'
  icon?: React.ReactNode;
}

export interface Experience {
  id: string;
  date: string;
  title: string;
  company: string;
  description: string;
  logoUrl?: string;
  tags?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
  longDescription: string;
  year: string;
  category: string; // e.g., 'Web Development', 'Mobile App', 'UI/UX Design'
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  slug: string; // for routing if it were a full blog
  author: string;
  readingTime: string; // e.g. "5 min read"
}

export enum SectionId {
  Home = 'home',
  About = 'about',
  Projects = 'projects',
  Blog = 'blog',
  Contact = 'contact',
}

export interface NavLink {
  id: SectionId;
  label: string;
}
