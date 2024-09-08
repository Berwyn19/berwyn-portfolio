import React from 'react';
import berwyn from '../assets/berwyn.jpg'

export default function About() {
  return (
    <section id="about" className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-teal-400">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img 
              src={berwyn} 
              alt="Profile" 
              className="rounded-full w-64 h-64 object-cover mx-auto"
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <p className="mb-4 text-lg text-gray-300">
              Hello! I'm Berwyn, a sophomore at Stanford University passionate in Computer Science, Physics, and Mathematics.
            </p>
            <p className="mb-4 text-lg text-gray-300">
              My journey began in high school when I competed in regional and international physics olympiad. Through that journey,
              I developed a passion in solving real-world mathematical problems. At Stanford, I first encountered Computer Science and 
              since then I have been awed by how Computer Science can be used to solve problems in a wide variety of fields.
            </p>
            <p className="mb-6 text-lg text-gray-300">
              In Computer Science, I am interested in Artificial Intelligence, in particular Natural Language Processing and Computer Vision.
              I aspire to build useful tools with Artificial Intelligence to improve humans life.
            </p>
            <div className="flex justify-start space-x-4">
              <a href="#portfolio" className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded transition-colors">
                My Projects
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}