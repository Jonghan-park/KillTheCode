import React, { useState } from "react";
import leftIcon from "../../assets/leftMessage.png";
import rightIcon from "../../assets/rightMessage.png";
import "./Main.css";

const Main = () => {
  const [leftIconClicked, setLeftIconClicked] = useState("");
  const [rightIconClicked, setRightIconClicked] = useState("");
  const [leftMessageIsShown, setLeftMessageIsShown] = useState(false);
  const [rightMessageIsShown, setRightMessageIsShown] = useState(false);

  const leftIconHandler = () => {
    setLeftIconClicked("leftIcon");
    if (leftIconClicked === "leftIcon") {
      window.location.href = "http://localhost:3000/projects";
    }
  };
  const rightIconHandler = () => {
    setRightIconClicked("rightIcon");
    if (rightIconClicked === "rightIcon") {
      window.location.href = "http://localhost:3000/about";
    }
  };
  const InvisibleIcon = (e) => {
    e.target.style.opacity = "0";
    if (e.target.alt === "Left message") {
      setLeftMessageIsShown(true);
    } else if (e.target.alt === "Right message") {
      setRightMessageIsShown(true);
    }
  };
  const VisibleIcon = (e) => {
    e.target.style.opacity = "1";
    setLeftMessageIsShown(false);
    setRightMessageIsShown(false);
  };
  return (
    <main className="mainPage">
      <div className="mainContainer">
        <div className="leftIcon">
          <img
            src={leftIcon}
            onMouseOver={InvisibleIcon}
            onMouseOut={VisibleIcon}
            onClick={leftIconHandler}
            alt="Left message"
          />
          {leftMessageIsShown && (
            <p className="leftIconMessage">Go To Project</p>
          )}
        </div>
        <div className="mainMessage">
          <p>
            We are here to <span>create project</span> and keep developing
            <span> something creative.</span>
          </p>
        </div>
        <div className="rightIcon">
          <img
            src={rightIcon}
            onMouseOver={InvisibleIcon}
            onMouseOut={VisibleIcon}
            onClick={rightIconHandler}
            alt="Right message"
          />
          {rightMessageIsShown && (
            <p className="rightIconMessage">Go To About</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Main;
