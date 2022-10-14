import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import lightThemeLogo from "../../assets/lightLogo.png";
import logo from "../../assets/logo.png";
import { LightThemeContext } from "../../context/LightThemeContext";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { lightTheme } = useContext(LightThemeContext);
  return (
    <nav className="navbar">
      <div className="logoAndMainLinks">
        <div className="logo">
          <Link to="/">
            {lightTheme ? (
              <img src={lightThemeLogo} alt="Nav light theme logo" />
            ) : (
              <img src={logo} alt="Nav logo" />
            )}
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
          onClick={() => setToggleMenu(() => !toggleMenu)}
          icon={faBars}
        />

        {toggleMenu && (
          <div
            className="navbarSmallscreenToggle"
            onClick={() => setToggleMenu(false)}
          >
            <ul className="navbarSmallscreenLinks">
              <li className="navbarItem" onClick={() => setToggleMenu(false)}>
                <Link to="/about">About</Link>
              </li>
              <li className="navbarItem" onClick={() => setToggleMenu(false)}>
                <Link to="/projects">Projects</Link>
              </li>
              <li className="navbarItem" onClick={() => setToggleMenu(false)}>
                <Link to="/signin">Sign In</Link>
              </li>
              <li className="navbarItem" onClick={() => setToggleMenu(false)}>
                <Link to="/joinus">Join Us</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
