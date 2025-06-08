
import React from 'react';
import { BlogPost } from '../types';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <a 
      href={`/blog/${post.slug}`} // Placeholder link, actual routing would be needed for a full blog
      onClick={(e) => { e.preventDefault(); alert(`Navigate to blog post: ${post.title} (not implemented)`); }}
      className="block bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 group"
    >
      <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
      <div className="p-6">
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{post.date} &bull; {post.readingTime}</p>
        <h3 className="text-lg font-semibold mb-2 text-lighttext dark:text-darktext group-hover:text-primary dark:group-hover:text-primary-light transition-colors duration-300">{post.title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">{post.excerpt}</p>
        <span className="text-sm text-primary dark:text-primary-light font-medium group-hover:underline">
          Read More &rarr;
        </span>
      </div>
    </a>
  );
};

export default BlogPostCard;
