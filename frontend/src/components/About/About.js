import React, { useState } from "react";
import Emoji from "./Emoji";
import "./About.css";

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

const emojis = users.map((user) => {
  return user.emojiInUser;
});

const About = () => {
  const [emoji, setEmoji] = useState(emojis);
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
      <Emoji emojis={emoji} />
    </div>
  );
};

export default About;
