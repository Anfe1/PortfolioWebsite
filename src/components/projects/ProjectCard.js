import projects from "./projectData";

export default function ProjectCard() {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 items-center">
      {projects.map((project, index) => (
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-offset="100"
          className="hover:bg-dark-400 w-full h-full bg-dark-100 rounded-md py-4 px-4"
        >
          <img
            src={project.thumbnail}
            className="w-full h-56 mx-auto object-cover"
            alt="{props.name}"
          ></img>
          <div className="mt-2">
            <h1 className="font-bold md:text-xl">{project.title}</h1>
            <p className="font-light md:text-lg">{project.description}</p>
            <br />
            <p className="font-light text-gray-400">
              <strong>Project Technology:</strong>
            </p>
            <p className="font-light text-green-400">{project.technology}</p>
            <br />
            <p className="font-light text-gray-400">Status: {project.status}</p>
            <br />
            <div className="grid md:grid-cols-2">
              <a
                className="font-light text-green-200 hover:text-green-600 hover:underline"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                See Live Website
              </a>
              <a
                className="font-light text-green-200 hover:text-green-600 hover:underline"
                href={project.gitHub}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// grid grid-cols-2 md:grid-cols-3 sm:grid-cols-1 justify-center mt-4 gap-5
