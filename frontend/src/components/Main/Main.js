import React from "react";
import leftIcon from "../../assets/leftMessage.png";
import rightIcon from "../../assets/rightMessage.png";
import "./Main.css";

const Main = () => {
  return (
    <main className="mainPage">
      <div className="mainContainer">
        <div className="leftIcon">
          <img src={leftIcon} alt="Left message" />
        </div>
        <div className="mainMessage">
          <p>
            We are here to <span>create project</span> and keep developing
            <span> something creative.</span>
          </p>
        </div>
        <div className="rightIcon">
          <img src={rightIcon} alt="Right message" />
        </div>
      </div>
    </main>
  );
};

export default Main;
