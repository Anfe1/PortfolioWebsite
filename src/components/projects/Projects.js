import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="py-32 text-white px-3 container">
      <h1 className="text-2xl font-bold">Projects</h1>
      <p className="font-light text-gray-400 py-2">
        Projects related to software Development, GIS, and Data Analysis.
      </p>

      <div className="mt-4">
        <ProjectCard />
      </div>
    </section>
  );
}
