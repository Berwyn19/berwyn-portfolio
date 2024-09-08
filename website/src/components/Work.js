export default function Work({ title, date, institution, description }) {
    return (
      <div className="mb-8 bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700">
        <h4 className="text-xl font-semibold mb-2 text-teal-300">{title}</h4>
        <p className="text-gray-400 mb-2 text-sm">{date}</p>
        <p className="text-gray-300 mb-3 italic">{institution}</p>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    );
  }