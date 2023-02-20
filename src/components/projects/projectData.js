import rest_project from "../images/rest_project.jpg";
import mov_project from "../images/movies.jpg";
import fla_project from "../images/flashcard.jpg";

const projectsData = [
  {
    title: "Restaurant Reservations Application",
    skills: "Knex, Postgres, React, Node.Js",
    description: "Full stack reservation and table management system.",
    technology: "React, Node.js, Express, Knex, and PostgreSQL.",
    link: "test",
    thumbnail: rest_project,
  },
  {
    title: "We Love Movies",
    skills: "Knex, Postgres, Node, Express Js ",
    description:
      "Back end of a movie website, allows users to search for their favorite movies",
    technology: "Node.js, Express, and Knex. Version control with Git.",
    link: "test",
    thumbnail: mov_project,
  },
  {
    title: "Flash Cards Application",
    skills: "HTML, CSS, React",
    description:
      "Application that allows users to create, edit, and delete decks and cards within them",
    technology: "JavaScript, React, Express, Knex, HTML, and CSS.",
    link: "test",
    thumbnail: fla_project,
  },
];

export default projectsData;
