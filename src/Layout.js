import NavBar from "./components/header/NavBar";
import Banner from "./components/banner/Banner";
import React from "react";
import Skills from "./components/skills/Skills";

export default function Layout() {
  return (
    <div className="site-image bg-woods-image w-full h-screen bg-cover bg-center flex items-center px--4 bg-opacity-75">
      <NavBar />
      <Banner />
      {/* <Skills /> */}
    </div>
  );
}
