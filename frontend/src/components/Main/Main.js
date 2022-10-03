import React, { useState } from "react";
import leftIcon from "../../assets/leftMessage.png";
import leftMouseOver from "../../assets/leftMouseOver.png";
import rightIcon from "../../assets/rightMessage.png";
import rightMouseOver from "../../assets/rightMouseOver.png";

import "./Main.css";

const Main = () => {
  const [leftIconClicked, setLeftIconClicked] = useState("");
  const [rightIconClicked, setRightIconClicked] = useState("");
  const [leftMessageIsShown, setLeftMessageIsShown] = useState(false);
  const [rightMessageIsShown, setRightMessageIsShown] = useState(false);

  const leftIconHandler = () => {
    if (leftIconClicked === "leftIcon") {
      window.location.href = "http://localhost:3000/projects";
    }
  };
  const rightIconHandler = () => {
    if (rightIconClicked === "rightIcon") {
      window.location.href = "http://localhost:3000/about";
    }
  };
  const InvisibleIcon = (e) => {
    if (e.target.alt === "Left message") {
      setLeftIconClicked("leftIcon");
      setLeftMessageIsShown(true);
    } else if (e.target.alt === "Right message") {
      setRightIconClicked("rightIcon");
      setRightMessageIsShown(true);
    }
  };
  const VisibleIcon = (e) => {
    setLeftMessageIsShown(false);
    setRightMessageIsShown(false);
  };
  return (
    <main className="mainPage">
      <div className="mainContainer">
        <div className="leftIcon">
          {leftMessageIsShown ? (
            <img
              className="leftIconMessage"
              src={leftMouseOver}
              onMouseOver={InvisibleIcon}
              onMouseOut={VisibleIcon}
              alt="Left mouse over"
            />
          ) : (
            <img
              src={leftIcon}
              onMouseOver={InvisibleIcon}
              onMouseOut={VisibleIcon}
              onClick={leftIconHandler}
              alt="Left message"
            />
          )}
        </div>
        <div className="mainMessage">
          <p>
            We are here to <span>create project</span> and keep developing
            <span> something creative.</span>
          </p>
        </div>
        <div className="rightIcon">
          {rightMessageIsShown ? (
            <img
              className="rightIconMessage"
              src={rightMouseOver}
              onMouseOver={InvisibleIcon}
              onMouseOut={VisibleIcon}
              alt="Left mouse over"
            />
          ) : (
            <img
              src={rightIcon}
              onMouseOver={InvisibleIcon}
              onMouseOut={VisibleIcon}
              onClick={rightIconHandler}
              alt="Right message"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Main;
