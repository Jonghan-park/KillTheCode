import { Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IdThemeContext } from "../../context/IdThemeContext";
import "./ForgotPassWord.css";
import { useContext, useState } from "react";
import axios from "axios";
export default function Forgot() {
  const { isId } = useContext(IdThemeContext);

  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const handleFindUserNameSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/forgotPassword/forgot_username",
        {
          email: email,
        }
      );
      // .then((res) => res.json())
      // .then((data) => {
      //   if (data.status == "No") {
      //     alert("login successful");
      //   }
      // });
    } catch (error) {
      console.log("handleSubmit Error");
    }
  };

  const handleForgotPasswordSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/forgotPassword/forgot_password",
        {
          username: username,
          email: email,
        }
      );
    } catch (error) {
      console.log("handleSubmit Error");
    }
  };

  return (
    <div className="test">
      <Tabs defaultActiveKey={isId === "Id" ? "id" : "password"}>
        <Tab eventKey="id" title="User Name">
          <div>
            <strong>Find UserName</strong>
          </div>
          <div>
            <strong>
              <p>"Enter the email address</p>
              <p> associated with your</p>
              <p>KTC account "</p>
            </strong>
            <form className="loginForm" onSubmit={handleFindUserNameSubmit}>
              <p>
                Email
                <input
                  type="text"
                  className="inputField"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </p>
              <p>
                <button type="submit">
                  <Link to="/signin">Cancel</Link>
                </button>
                <button type="submit">
                  <span>Continue</span>
                </button>
              </p>
            </form>
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
            <form className="loginForm" onSubmit={handleForgotPasswordSubmit}>
              <p>
                Email
                <input
                  type="text"
                  className="inputField"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </p>
              <p>
                Username
                <input
                  type="text"
                  className="inputField"
                  placeholder="User name"
                  name="username"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                ></input>
              </p>
              <p>
                <button type="submit">
                  <Link to="/signin"> Cancel</Link>
                </button>
                <button type="submit">
                  <span>Continue</span>
                </button>
              </p>
            </form>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
