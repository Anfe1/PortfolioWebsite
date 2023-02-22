import NavBar from "./components/header/NavBar";
import Banner from "./components/banner/Banner";
import React from "react";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";

import Footer from "./components/footer/Footer";

export default function Layout() {
  return (
    <div className="h-30 bg-cover bg-woods-image">
      <NavBar />
      <div id="home">
        <Banner />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
