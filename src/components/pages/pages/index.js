import React from "react";
import NavbarElem from "../Navbar/NavbarElem";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <NavbarElem />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
