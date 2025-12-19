import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Build Better Digital Experiences
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          We help brands grow with modern websites and applications.
        </p>
      </section>

      {/* Projects */}
      <ProjectsSection />
    </>
  );
}
