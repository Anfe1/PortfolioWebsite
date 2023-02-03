import { useState } from "react";
import larimer from "../images/larimer.jpg";

export default function Banner() {
  const [loaded, setLoaded] = useState(true);

  return (
    <span>
      {loaded ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center">
          Loading...
        </div>
      ) : null}
      <div
        id="home"
        className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative"
      >
        <div className="md:w-3/6 md:p-4">
          <img
            data-aos="flip-right"
            data-aos-duration="1500"
            data-aos-offset="200"
            src={larimer}
            alt="profile"
            onLoad={() => setLoaded(false)}
          />
        </div>
        <div
          className="md:w-3/6"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="100"
        >
          <div className="flex flex-col w-full mt-8">
            <h1 className="text-2xl font-bold">Hi! I'm Andy Fernandez</h1>
            <p class="text-xl font-bold text-gray-300">
              Full-Stack web Developer | GIS Analyst
            </p>
            <p className="text-md font-light text-gray-400 ">
              I have dedicated experience in GIS, data analysis, and software
              development. I am a full-stack web developer that enjoys learning
              technologies to solve all kinds of problems. I have worked with
              GIS data to create maps and tables for analysis. I have also built
              Python automation scripts to perform data-frame analysis using
              libraries like Pandas and Geopandas. My specialties as a
              full-stack developer include: Frontend: HTML, CSS, JavaScript,
              React, jQuery, and Python Backend: Node.js, Express, RESTful APIs,
              and PostgreSQL Tools: Mocha, Chai, Knex, Git, GitHub, Heroku, Node
              Package Manager, Visual Studio Code, Tableau, ArcGIS, and QGIS.
              Additional Skills: Bilingual, Data Analysis, GIS Analysis
            </p>
          </div>
          <ul className="flex mt-2 gap-4 items-center">
            <li>
              <a
                href="https://github.com/Anfe1"
                target="_blank"
                rel="noreferrer"
              >
                <iconify-icon
                  icon="fluent-mdl2:git-hub-logo"
                  height="45"
                  style={{ color: "#c0ebe4" }}
                ></iconify-icon>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/andy-w-fernandez/"
                target="_blank"
                rel="noreferrer"
              >
                <iconify-icon
                  icon="ion:social-linkedin"
                  height="45"
                  style={{ color: "#c0ebe4" }}
                ></iconify-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </span>
  );
}
