import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { LightThemeContext } from "../../context/LightThemeContext";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footerRow">
        <div className="footerLogo">
          <img src={logo} alt="Footer logo" />
        </div>
        <div className="footerContactUs">
          <Link to="#">Contact Us</Link>
        </div>
      </div>
      <div className="copyRight">
        <p> copyright &copy;2022 Team KillTheCode</p>
      </div>
    </footer>
  );
};

export default Footer;
