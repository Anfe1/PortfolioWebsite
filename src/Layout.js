import NavBar from "./components/header/NavBar";
import Banner from "./components/banner/Banner";
import React from "react";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import ContactForm from "./components/contact/ContactForm";

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

// bg-woods-image w-full bg-cover bg-center px-6 lg:px-20 xl:px-36
// bg-gradient-to-r from-cyan-500 to-green-500
// object-contain static py-10 flex mx-auto my-auto lg:h-24 sm:h-24 md:object-scale-down
