import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const ContactItem = ({ icon, text, link }) => (
  <a 
    href={link} 
    className="flex items-center space-x-3 text-gray-300 hover:text-teal-400 transition-colors duration-300"
    target="_blank" 
    rel="noopener noreferrer"
  >
    {icon}
    <span>{text}</span>
  </a>
);

export default function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-b from-gray-700 to-gray-900 text-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-teal-400">Contact Me</h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ContactItem 
              icon={<Mail className="w-6 h-6" />}
              text="berwyn@stanford.edu"
            
            />
            <ContactItem 
              icon={<Phone className="w-6 h-6" />}
              text="+1 (650) 546-9635"
      
            />
            <ContactItem 
              icon={<Linkedin className="w-6 h-6" />}
              text="LinkedIn Profile"
              link="https://www.linkedin.com/in/berwyn-berwyn/"
            />
            <ContactItem 
              icon={<Github className="w-6 h-6" />}
              text="GitHub Profile"
              link="https://github.com/Berwyn19"
            />
          </div>
        </div>
      </div>
    </section>
  );
}