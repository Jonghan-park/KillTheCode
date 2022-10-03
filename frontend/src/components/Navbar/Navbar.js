import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="logoAndMainLinks">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="mainLinks">
          <div className="navbarLink">
            <Link to="/about">About</Link>
          </div>
          <div className="navbarLink">
            <Link to="/projects">Projects</Link>
          </div>
        </div>
      </div>
      <div className="signInLinks">
        <div className="navbarLink">
          <Link to="/signin">Sign In</Link>
        </div>
        <div className="navbarLink">
          <Link to="/joinus">Join Us</Link>
        </div>
      </div>

      <div className="navbarSmallscreen">
        <FontAwesomeIcon
          className="navHamburger"
          onClick={() => setToggleMenu(true)}
          icon={faBars}
        />
      </div>
      {toggleMenu && <div className="navbarSmallscreenToggle"></div>}
    </nav>
  );
};

export default Navbar;
