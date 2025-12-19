import ProjectCard from "./ProjectCard";

const demoProjects = [
  {
    id: 1,
    name: "Website Redesign",
    description: "Modern and responsive website redesign.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    id: 2,
    name: "Mobile App",
    description: "Cross-platform mobile application.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  },
  {
    id: 3,
    name: "E-commerce Platform",
    description: "Scalable online shopping solution.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
  }
];

export default function ProjectsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {demoProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
