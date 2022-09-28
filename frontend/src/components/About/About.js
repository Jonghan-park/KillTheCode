import React, { useState } from "react";
import Emoji from "./Emoji";
import "./About.css";

const users = [
  { name: "Joseph", emojiInUser: "👦🏼" },
  { name: "Eunji", emojiInUser: "👩🏻‍🦰" },
  { name: "Louren", emojiInUser: "👱🏻‍♀️" },
  { name: "Kai", emojiInUser: "👱🏻" },
  { name: "Jihoon", emojiInUser: "👱🏻‍♂️" },
];

const emojis = [
  users.map((user) => {
    return user.emojiInUser;
  }),
];

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
