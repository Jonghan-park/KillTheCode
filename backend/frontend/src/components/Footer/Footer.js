import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import lightThemeLogo from "../../assets/lightLogo.png";
import { LightThemeContext } from "../../context/LightThemeContext";
import "./Footer.css";

const Footer = () => {
  const { lightTheme } = useContext(LightThemeContext);
  const linksStyle = { color: lightTheme ? "black" : "#F0F2F2" };
  const backgroundStyle = {
    backgroundColor: lightTheme ? "#F0F2F2" : "",
    borderTopColor: lightTheme ? "black" : "#F0F2F2",
  };
  return (
    <footer className="footerContainer" style={backgroundStyle}>
      <div className="footerRow">
        <div className="footerLogo">
          {lightTheme ? (
            <img src={lightThemeLogo} alt="Footer light theme logo" />
          ) : (
            <img src={logo} alt="Footer logo" />
          )}
        </div>
        <div className="footerContactUs">
          <Link style={linksStyle} to="#">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="copyRight" style={linksStyle}>
        <p> copyright &copy;2022 Team KillTheCode</p>
      </div>
    </footer>
  );
};

export default Footer;
