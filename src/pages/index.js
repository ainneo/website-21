import { useState } from "react";
import Navbar from "../components/Navbar";
import Projects from "../components/ProjectsSection";
import About from "../components/AboutSection";
import Contact from "../components/ContactSection";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
