import { Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ForgotPassWord.css";

export default function Forgot(props) {
  console.log(props.testWork);
  return (
    <>
      <Tabs defaultActiveKey={props.testWork} className="mb-3 tabsCss ">
        <Tab eventKey="id" title="Id" className="tabBody ">
          <ul>
            <strong>Find UserName</strong>
          </ul>
          <ul className="ulpanel">
            <li>
              <ul className="ulpanel">
                <strong>
                  <li>"Please enter your name,</li>
                  <li>birthday, someting</li>
                  <li>on your *** account "</li>
                </strong>
              </ul>
            </li>

            <li>
              Email
              <input type="box"></input>
            </li>
            <li>
              <button type="submit">
                <Link to="/signin"> Cancel</Link>
              </button>
              <button type="submit">
                <span>Continue</span>
              </button>
            </li>
          </ul>
        </Tab>

        <Tab eventKey="password" title="Password" className="tabBody ">
          <ul>
            <strong>Find password</strong>
          </ul>
          <ul className="ulpanel">
            <li>
              <ul className="ulpanel">
                <strong>
                  <li>"Please enter your username,</li>
                  <li>and contact info on your</li>
                  <li>KTC account.</li>
                </strong>
              </ul>
            </li>

            <li>
              Email
              <input type="box"></input>
            </li>
            <li>
              Username
              <input type="box"></input>
            </li>
            <li>
              <button type="submit">
                <Link to="/signin"> Cancel</Link>
              </button>
              <button type="submit">
                <span>Continue</span>
              </button>
            </li>
          </ul>
        </Tab>
      </Tabs>
    </>
  );
}
