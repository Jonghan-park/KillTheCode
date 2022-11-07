import React, { useEffect, useContext, useState } from "react";
import Emoji from "./Emoji";
import "./About.css";
import { LightThemeContext } from "../../context/LightThemeContext";
import axios from "axios";

const About = () => {
  const { setLightTheme } = useContext(LightThemeContext);
  const [users, setUsers] = useState([]);

  // Get users
  const getUsers = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/users");
      setUsers(data.users);
      console.log(users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (window.location.pathname !== "/admin") {
      setLightTheme(false);
    }
  }, [window.location.pathname]);
  return (
    <div className="aboutContainer">
      <div className="aboutTitle">
        <p>
          <span className="highlight">Let</span> Us{" "}
          <span className="highlight">Introduce</span>
        </p>
      </div>
      <div className="aboutDetail">
        <p>
          Team Kill The Code was organized in June, 2022 and started our first
          team project in September, 2022. We{" "}
          <span className="highlight">create</span> our team project with{" "}
          <span className="highlight">innovative ideas.</span>{" "}
        </p>
      </div>
      <Emoji users={users} />
    </div>
  );
};

export default About;
