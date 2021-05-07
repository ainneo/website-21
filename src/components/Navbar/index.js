import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll"; /* this is what makes the page scroll */
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
} from "./NavbarStyles";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo onClick={toggleHome} to="/">
            AO
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavLinks to="projects">Projects</NavLinks>
            <NavLinks to="contact">Contact</NavLinks>
            <NavLinks to="about">About</NavLinks>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
