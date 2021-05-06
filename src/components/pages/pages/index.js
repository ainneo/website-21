import { useState } from "react";
import Navbar from "../Navbar";
// import Projects from "./Projects";
// import About from "./About";
// import Contact from "./Contact";
import Sidebar from "../Sidebar";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      {/* <About />
      <Projects />
      <Contact /> */}
    </>
  );
}
