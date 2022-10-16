import React from "react";
import "./SignIn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
function SignIn() {
  return (
    <>
      <div className="container">
        <div className="panelContainerSign">
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

        <div className="signInForm">
          <div className="title">LOGIN</div>
          <form>
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

            <button type="submit" className="signUpBtn">
              LOGIN
            </button>
          </form>
          <div className="existAccount">
            <h2 className="findPwd">Forgot Password</h2>
            <h2 className="toJoinUs">
              <Link to="/joinUs">Don't have an account?</Link>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
