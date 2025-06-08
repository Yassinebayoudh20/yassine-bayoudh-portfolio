
import React, { useState } from 'react';
import Section from './Section';
import { SectionId } from '../types';
import { SOCIAL_LINKS } from '../constants';
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from './icons/SocialIcons';

interface ContactProps {
  id: SectionId;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{name?: string, email?: string, message?: string}>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined }); // Clear error on change
  };

  const validateForm = (): boolean => {
    const newErrors: {name?: string, email?: string, message?: string} = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // For a real app, integrate with Formspree, Netlify Forms, or a backend API.
    // Example using Formspree (replace YOUR_FORM_ID):
    /*
    fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Oops! There was a problem submitting your form.');
      }
    })
    .catch(() => alert('Oops! There was a problem submitting your form.'));
    */
    
    // Fallback for template (mailto link or just success message)
    console.log('Form data:', formData);
    setIsSubmitted(true);
    // You can also construct a mailto link:
    // window.location.href = `mailto:${SOCIAL_LINKS.email}?subject=Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <Section id={id} title="Get In Touch" className="bg-slate-100 dark:bg-slate-900/50">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-lighttext dark:text-darktext">Let's Connect</h3>
          <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. 
            Feel free to reach out using the form or connect with me on social media.
          </p>
          <div className="space-y-4 mb-8">
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-light transition-colors">
              <MailIcon className="w-5 h-5 mr-3 text-primary dark:text-primary-light" />
              {SOCIAL_LINKS.email}
            </a>
            {/* Add more contact details like phone or address if needed */}
          </div>
          <div className="flex space-x-4">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary-light transition-colors p-2 bg-slate-200 dark:bg-slate-700 rounded-full">
              <GithubIcon className="w-6 h-6" />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary-light transition-colors p-2 bg-slate-200 dark:bg-slate-700 rounded-full">
              <LinkedinIcon className="w-6 h-6" />
            </a>
          </div>
        </div>

        {isSubmitted ? (
          <div className="bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-200 px-4 py-3 rounded-lg relative" role="alert">
            <strong className="font-bold">Thank you!</strong>
            <span className="block sm:inline"> Your message has been sent successfully. I'll get back to you soon.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-lg shadow-xl">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'} rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-slate-700 dark:text-white sm:text-sm`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'} rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-slate-700 dark:text-white sm:text-sm`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.message ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'} rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-slate-700 dark:text-white sm:text-sm`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
      
      {/* Optional Embedded Map */}
      {/* <div className="mt-12 md:mt-16">
        <h3 className="text-2xl font-semibold text-center mb-6 text-lighttext dark:text-darktext">Find Me Here</h3>
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2000000000003!2d-73.98785368459343!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            title="My Location"
          ></iframe>
        </div>
      </div> */}
    </Section>
  );
};

export default Contact;
