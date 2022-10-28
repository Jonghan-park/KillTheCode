import { Tab, Tabs } from "react-bootstrap";
import "./ForgotPassWord.css";

export default (forget) => {
  return (
    <>
      <Tabs defaultActiveKey="id" className="mb-3  tabsCss">
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
                <span>Cancel</span>
              </button>
              <button type="submit">
                <span>Continue</span>
              </button>
            </li>
          </ul>
        </Tab>
        <Tab eventKey="password" title="Password"></Tab>
      </Tabs>
    </>
  );
};
