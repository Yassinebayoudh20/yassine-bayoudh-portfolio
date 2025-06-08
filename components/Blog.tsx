
import React from 'react';
import Section from './Section';
import BlogPostCard from './BlogPostCard';
import { BlogPost, SectionId } from '../types';

interface BlogProps {
  id: SectionId;
  posts: BlogPost[];
}

const Blog: React.FC<BlogProps> = ({ id, posts }) => {
  if (!posts || posts.length === 0) {
    return null; // Don't render if no posts
  }

  return (
    <Section id={id} title="Latest Articles">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
       <div className="text-center mt-12">
        <a 
          href="#" 
          className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark transition-transform transform hover:scale-105 duration-300"
          onClick={(e) => { e.preventDefault(); alert("Blog page link clicked (not implemented in template)"); }}
        >
          View All Posts
        </a>
      </div>
    </Section>
  );
};

export default Blog;
