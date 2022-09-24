import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
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
            <Link to="/notice">Notice</Link>
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
    </nav>
  );
};

export default Navbar;
