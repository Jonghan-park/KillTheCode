import React, { useEffect, useContext } from "react";
import Emoji from "./Emoji";
import "./About.css";
import { LightThemeContext } from "../../context/LightThemeContext";

const users = [
  {
    name: "Joseph",
    skill: "JS, HTML, CSS, React, NodeJS, MongoDB",
    linkedIn: "www.linkedin.com",
    github: "https://github.com/Jonghan-park",
    email: "pjh843@gmail.com",
    emojiInUser: "👦🏼",
  },
  {
    name: "Eunji",
    skill: "JS, HTML, CSS, React, NodeJS, MongoDB",
    linkedIn: "www.linkedin.com",
    github: "www.github.com",
    email: "abc123@gmail.com",
    emojiInUser: "👩🏻‍🦰",
  },
  {
    name: "Louren",
    skill: "JS, HTML, CSS, React, NodeJS, MongoDB",
    linkedIn: "www.linkedin.com",
    github: "www.github.com",
    email: "abc123@gmail.com",
    emojiInUser: "👱🏻‍♀️",
  },
  {
    name: "Kai",
    skill: "JS, HTML, CSS, React, NodeJS, MongoDB",
    linkedIn: "www.linkedin.com",
    github: "www.github.com",
    email: "abc123@gmail.com",
    emojiInUser: "👱🏻",
  },
  {
    name: "Jihoon",
    skill: "JS, HTML, CSS, React, NodeJS, MongoDB",
    linkedIn: "www.linkedin.com",
    github: "www.github.com",
    email: "abc123@gmail.com",
    emojiInUser: "👱🏻‍♂️",
  },
];

const About = () => {
  const { setLightTheme } = useContext(LightThemeContext);
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
