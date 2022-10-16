import React from "react";
import "./JoinUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faUser,
  faEnvelope,
  faKey,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
function JoinUs() {
  return (
    <>
      <div className="container">
        <div className="joinInForm">
          <div className="titleJoin">REGISTER</div>
          <form>
            <div className="inputGrop">
              <FontAwesomeIcon icon={faUser} className="signInIcon" />
              <input type="text" className="inputField" placeholder="User ID" />
            </div>
            <div className="inputGrop">
              <FontAwesomeIcon icon={faEnvelope} className="signInIcon" />
              <input type="text" className="inputField" placeholder="Email" />
            </div>
            <div className="inputGrop">
              <FontAwesomeIcon icon={faKey} className="signInIcon" />
              <input
                type="password"
                className="inputField"
                placeholder="Password"
              />
            </div>
            <div className="inputGrop">
              <FontAwesomeIcon icon={faCheckCircle} className="signInIcon" />
              <input
                icon={faCheckCircle}
                type="text"
                className="inputField"
                placeholder="Confirm Password"
              />
            </div>
            <button type="submit" className="signUpBtn">
              JOIN US
            </button>
          </form>
          <div className="existAccount">
            <h2>Already have an account?</h2>
            <Link to="/signin">LOGIN NOW</Link>
          </div>
        </div>

        <div className="panelContainerJoin">
          <h1>
            WE ARE
            <br />
            <span className="more">MORE THAN</span>
            <br />
            JUST
            <br />A TEAM
            <br />
          </h1>
        </div>
      </div>
    </>
  );
}

export default JoinUs;
