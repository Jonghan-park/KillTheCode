import React from "react";
import Emoji from "./Emoji";
import "./About.css";

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutTitle">
        <p>
          <span className="highlight">Let</span> We{" "}
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
      <Emoji />
    </div>
  );
};

export default About;
