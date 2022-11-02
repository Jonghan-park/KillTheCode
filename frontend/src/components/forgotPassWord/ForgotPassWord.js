import { Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IdThemeContext } from "../../context/IdThemeContext";
import "./ForgotPassWord.css";
import { useContext } from "react";

import Container from "react-bootstrap/Container";

export default function Forgot() {
  const { isId } = useContext(IdThemeContext);

  return (
    <>
      <div className="test">
        <Tabs
          defaultActiveKey={isId === "Id" ? "id" : "password"}
          className="mb-3  "
        >
          <Tab eventKey="id" title="User Name">
            <div>
              <strong>Find UserName</strong>
            </div>
            <div>
              <strong>
                <p>"Please enter your name,</p>
                <p>birthday, someting</p>
                <p>on your *** account "</p>
              </strong>

              <p>
                Email
                <input type="box"></input>
              </p>
              <p>
                <button type="submit">
                  <Link to="/signin"> Cancel</Link>
                </button>
                <button type="submit">
                  <span>Continue</span>
                </button>
              </p>
            </div>
          </Tab>

          <Tab eventKey="password" title="Password">
            <div>
              <strong>Find password</strong>
            </div>
            <div>
              <strong>
                <p>"Please enter your username,</p>
                <p>and contact info on your</p>
                <p>KTC account.</p>
              </strong>

              <p>
                Email
                <input type="box"></input>
              </p>
              <p>
                Username
                <input type="box"></input>
              </p>
              <p>
                <button type="submit">
                  <Link to="/signin"> Cancel</Link>
                </button>
                <button type="submit">
                  <span>Continue</span>
                </button>
              </p>
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
