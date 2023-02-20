import { useState } from "react";
import larimer from "../images/larimer.jpg";
import brImage from "../images/br.png";

export default function Banner() {
  const [loaded, setLoaded] = useState(true);

  return (
    <>
      {loaded ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center">
          Loading...
        </div>
      ) : null}
      <section
        id="home"
        className="flex w-full py-40 flex-col md:flex-row gap-5 items-center justify-center text-white"
      >
        <div className="container max-w-screen-lg md:w-3/6 md:p-4">
          <img
            className="rounded shadow-2xl"
            data-aos="flip-right"
            data-aos-duration="1500"
            data-aos-offset="200"
            src={larimer}
            alt="profile"
            onLoad={() => setLoaded(false)}
          />
        </div>
        <div className="md:w-3/6 container">
          <div className="flex flex-col w-full mt-8">
            <h1 className="text-2xl font-bold">Hi! I'm Andy Fernandez</h1>
            <p class="text-xl font-bold text-gray-300">
              Full-Stack web Developer | GIS Analyst
            </p>
            <p className="text-md text-gray-400">
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
      </section>
      <img
        src={brImage}
        className="object-contain mx-auto lg:h-24 sm:h-24 md:object-scale-down my-5"
        alt="hr"
      ></img>
    </>
  );
}

// flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative
// md:w-3/6 md:p-4
