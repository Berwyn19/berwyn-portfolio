import React from 'react';

// Updated PortCard component
export default function PortCard({ title, description, technologies, projectUrl }) {
    return(
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col h-full">
            {/* <img src={imageUrl} alt={title} className="w-full h-48 object-cover" /> */}
            <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold mb-2 text-teal-300">{title}</h3>
            <p className="text-gray-300 mb-4 flex-grow">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((tech, index) => (
                <span key={index} className="px-2 py-1 bg-gray-700 text-sm rounded-full text-teal-200">
                    {tech}
                </span>
                ))}
            </div>
            <a 
                href={projectUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition-colors text-center inline-block"
            >
                View Project
            </a>
            </div>
        </div>
    )
}