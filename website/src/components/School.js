import React from 'react';

export default function School({ schoolName, years, degree, description }) {
  return (
    <div className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700">
      <h3 className="text-xl font-semibold mb-2 text-teal-300">{degree}</h3>
      <h3 className="text-gray-400 mb-2">
        {schoolName} <span className="text-gray-500">| {years}</span>
      </h3>
      <p className="text-gray-300 mt-3">{description}</p>
    </div>
  );
}
