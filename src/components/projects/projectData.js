import rest_project from "../images/rest_project.jpg";
import mov_project from "../images/movies.jpg";
import fla_project from "../images/flashcard.jpg";

const projectsData = [
  {
    title: "Restaurant Reservations Application",
    skills: "Knex, Postgres, React, Node.Js",
    description: "Full stack reservation and table management system.",
    technology: "React, Node.js, Express, Knex, and PostgreSQL.",
    link: "https://restaurant-frontend-ylvx.onrender.com/dashboard",
    thumbnail: rest_project,
    status: "Deployed",
    gitHub: "https://github.com/Anfe1/starter-restaurant-reservation",
  },
  {
    title: "We Love Movies",
    skills: "Knex, Postgres, Node, Express Js ",
    description:
      "Back end of a movie website, allows users to search for their favorite movies",
    technology: "Node.js, Express, and Knex. Version control with Git.",
    link: "https://we-love-movies-frontend-yn1y.onrender.com/",
    thumbnail: mov_project,
    status: "Deployed",
    gitHub: "https://github.com/Anfe1/Project-We-Love-Movies",
  },
  {
    title: "Flash Cards Application",
    skills: "HTML, CSS, React",
    description:
      "Application that allows users to create, edit, and delete decks and cards within them",
    technology: "JavaScript, React, Express, Knex, HTML, and CSS.",
    link: "https://flashcards-xo5h.onrender.com/",
    thumbnail: fla_project,
    status: "Not Fully Deployed",
    gitHub: "https://github.com/Anfe1/Flash-Cards",
  },

  // {
  //   title: "Table Data Display",
  //   skills: "HTML, CSS, React.",
  //   description:
  //     "Front-end application that show table data with implemented charts.",
  //   technology: "JavaScript, React, HTML, Material UI, React-Chart-JS and CSS.",
  //   link: "test",
  //   thumbnail: "test",
  //    status:"Not Deployed",
  //    gitHub: ""
  // },
];

export default projectsData;
