import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <main className="mainPage">
      <div className="mainContainer">
        <div className="leftIcon"></div>
        <div className="mainMessage">
          <p>
            We are here to <span>create project</span> and keep developing
            <span> something creative.</span>
          </p>
        </div>
        <div className="rightIcon"></div>
      </div>
    </main>
  );
};

export default Main;
