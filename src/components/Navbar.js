import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false); //state for toggle burger to x

  const handleClick = () => setClick(!click); //toggle false to it's opposite
  const closeMobileMenu = () => setClick(false); //close mobile menu after clicking sidebar link

  return (
    <>
      <nav className="navbar">
        <div className="mobile-wrapper">
          {/* logo */}
          <div>
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              ainne oum
            </Link>
          </div>
          {/* toggle burgar & x */}
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        </div>

        {/* menu items - active class to open slider */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/projects"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              projects
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              contact
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              about
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
