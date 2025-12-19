export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={project.image}
        alt={project.name}
        className="h-48 w-full object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {project.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4">
          {project.description}
        </p>

        <button className="text-indigo-600 font-medium hover:underline">
          Read More →
        </button>
      </div>
    </div>
  );
}
