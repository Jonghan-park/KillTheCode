import React, { useContext, useState } from "react";
import "./SignIn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { IdThemeContext } from "../../context/IdThemeContext";

function SignIn() {
  const tooggleID = () => {
    setIsId("Id");
  };
  const toogglePassWord = () => {
    setIsId("Password");
  };

  const { isId, setIsId } = useContext(IdThemeContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

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
          <div className="loginTitle">LOGIN</div>
          <form className="loginForm" onSubmit={onSubmit}>
            <div className="inputGrop">
              <FontAwesomeIcon icon={faEnvelope} className="signInIcon" />
              <input
                type="text"
                className="inputField"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onChange}
                required
              />
            </div>
            <div className="inputGrop">
              <FontAwesomeIcon icon={faKey} className="signInIcon" />
              <input
                type="password"
                className="inputField"
                placeholder="Password"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
                required
              />
            </div>

            <button type="submit" className="signUpBtn">
              LOGIN
            </button>
          </form>
          <div className="existAccount">
            <h2 className="findPwd">
              Forgot
              <Link to="/forgotPassword" onClick={toogglePassWord}>
                {" "}
                Password
              </Link>
              &nbsp; or &nbsp;
              <Link to="/forgotPassword" onClick={tooggleID}>
                {" "}
                account
              </Link>
            </h2>
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
