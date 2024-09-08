import React from 'react';
import School from "./School";
import Certifications from './Certifications';

export default function Education() {
  return (
    <section id="education" className="bg-gradient-to-b from-gray-800 to-gray-700 text-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-teal-400">Education & Certifications</h2>
        <div className="flex flex-col lg:flex-row items-start lg:space-x-8">
          <section className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-teal-400">Education</h3>
            <School
              schoolName="Stanford University"
              years="2023 - 2027"
              degree="Computer Science"
              description="GPA: 3.997/4.0. Coursework: Linear Algebra and Multivariable Calculus, Deep Learning for Natural Language Processing, Introduction to Probability for Computer Scientists, Programming Abstractions, Computer Systems from the Ground Up"
            />
            <School
              schoolName="SMAK 1 PENABUR Jakarta"
              years="2020 - 2023"
              degree="Natural Science"
              description="International Physics Olympiad (IPhO) Silver Medalist, Absolute Winner of Indonesian National Physics Olympiad"
            />
          </section>
          <section className="lg:w-1/2">
             <h3 className="text-2xl font-semibold mb-6 text-teal-400">Certifications</h3>  
             <Certifications
                title="Meta Front-End Developer Professional Certificate"
                description="Demonstrated expertise in building responsive front-end web application with React.js and CSS libraries including Tailwind, Bootstrap, and ChakraUI"
             />
             <Certifications
                title="AWS Fundamentals"
                description="Developed understanding about architecting solutions on AWS cloud for a wide variety of use cases"
             />
             <Certifications
                title="Meta Back-End Developer Professional Certificate"
                description="Demonstrated expertise in using SQL, Python, and REST API to develop back-end application. Built a back-end application with Django framework"
             />
          </section>
        </div>
      </div>
    </section>
  );
}
