import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faCaretDown, faBars } from "@fortawesome/free-solid-svg-icons";
import lightThemeLogo from "../../assets/lightLogo.png";
import logo from "../../assets/logo.png";
import { LightThemeContext } from "../../context/LightThemeContext";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [dropDownMenu, setdropDownMenu] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const { lightTheme, setLightTheme } = useContext(LightThemeContext);

  const linksStyle = { color: lightTheme ? "black" : "#F0F2F2" };
  const backgroundStyle = {
    backgroundColor: lightTheme ? "#F0F2F2" : "",
    borderBottomColor: lightTheme ? "black" : "#F0F2F2",
  };

  const setToggleAndTheme = () => {
    setToggleMenu(false);
    setLightTheme(false);
  };

  useEffect(() => {
    if (
      window.location.pathname === "/myaccount" ||
      window.location.pathname === "/projects"
    ) {
      setLightTheme(true);
    } else {
      setLightTheme(false);
    }
  }, [setLightTheme]);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
  };

  return (
    <nav className="navbar" style={backgroundStyle}>
      <div className="logoAndMainLinks">
        <div className="logo">
          <Link to="/" onClick={() => setLightTheme(false)}>
            {lightTheme ? (
              <img src={lightThemeLogo} alt="Nav light theme logo" />
            ) : (
              <img src={logo} alt="Nav logo" />
            )}
          </Link>
        </div>
        <div className="mainLinks">
          <div className="navbarLink">
            <Link
              onClick={() => setLightTheme(false)}
              style={linksStyle}
              to="/about"
            >
              About
            </Link>
          </div>
          <div className="navbarLink">
            <Link
              onClick={() => setLightTheme(true)}
              style={linksStyle}
              to="/projects"
            >
              Projects
            </Link>
          </div>
          {user &&
            <div className="navbarLink">
              <Link
                onClick={() => setLightTheme(false)}
                style={linksStyle}
                to="/notice"
              >
                Notice
              </Link>
            </div>
          }
        </div>
      </div>

      <div className="signInLinks">        
        {user ? (
          <>
            {/* show myaccount & logout when user login */}
            <div className="navbarLink" style={linksStyle}>
              Hello,&nbsp;
              {user.role && (
                <FontAwesomeIcon
                  icon={faCrown}
                  color="#FFFD24"
                />
              )}
              &nbsp;{user.username} &nbsp;
              <FontAwesomeIcon
                icon={faCaretDown}
                cursor="pointer"
                size="lg"
                onClick={() => setdropDownMenu((prev) => !prev)}
              />
            </div>
            {/* Dropdown Menu - My Account, Admin, Logout */}
            {dropDownMenu && (
              <div
                className="dropDownMenu"
                onClick={() => setdropDownMenu((prev) => !prev)}
              >
                <div className={lightTheme ? "lightDrop" : "darkDrop"}>
                  <Link
                    onClick={() => setLightTheme(true)}
                    style={linksStyle}
                    to="/myaccount"
                  >
                    My Account
                  </Link>
                  {/* show admin if user is admin */}
                  {user.role && (
                    <Link
                      onClick={() => setLightTheme(false)}
                      style={linksStyle}
                      to="/admin"
                    >
                      Admin
                    </Link>
                  )}
                  <Link
                    onClick={() => {setLightTheme(false); onLogout();}}
                    style={linksStyle}
                    to="/"
                  >
                    Logout
                  </Link>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="navbarLink">
              <Link
                onClick={() => setLightTheme(false)}
                style={linksStyle}
                to="/signin"
              >
                Sign In
              </Link>
            </div>
            <div className="navbarLink">
              <Link
                onClick={() => setLightTheme(false)}
                style={linksStyle}
                to="/joinus"
              >
                Join Us
              </Link>
            </div>
          </>
        )}
      </div>

      <div className="navbarSmallscreen">
        <FontAwesomeIcon
          className="navHamburger"
          onClick={() => setToggleMenu(() => !toggleMenu)}
          icon={faBars}
          style={linksStyle}
        />
        {toggleMenu && (
          <div
            className="navbarSmallscreenToggle"
            onClick={() => setToggleMenu(false)}
          >
            <ul className="navbarSmallscreenLinks">
              <li className="navbarItem" onClick={() => setToggleAndTheme()}>
                <Link to="/about">About</Link>
              </li>
              <li
                className="navbarItem"
                onClick={() => {setToggleMenu(false); setLightTheme(true);}}
              >
                <Link to="/projects">Projects</Link>
              </li>
              {user ? (
                <>
                  <li className="navbarItem" onClick={() => setToggleAndTheme()}>
                    <Link to="/notice">Notice</Link>
                  </li>
                  <li
                    className="navbarItem"
                    onClick={() => {setToggleMenu(false); setLightTheme(true);}}
                  >
                    <Link to="/myaccount">My Account</Link>
                  </li>
                  {user.role && (
                    <li className="navbarItem" onClick={() => setToggleAndTheme()}>
                      <Link to="/admin">Admin</Link>
                    </li>
                  )}
                  <li className="navbarItem" onClick={() => setToggleAndTheme()}>
                    <Link onClick={() => onLogout()} to="/">
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="navbarItem" onClick={() => setToggleAndTheme()}>
                    <Link to="/signin">Sign In</Link>
                  </li>
                  <li className="navbarItem" onClick={() => setToggleAndTheme()}>
                    <Link to="/joinus">Join Us</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
