export default function Skills({ title, skillsList }) {
    return (
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700">
        <h4 className="text-xl font-semibold mb-4 text-teal-300">{title}</h4>
        <ul className="grid grid-cols-2 gap-2">
          {skillsList.map((skill, index) => (
            <li key={index} className="text-gray-300 mb-2 flex items-center">
              <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  