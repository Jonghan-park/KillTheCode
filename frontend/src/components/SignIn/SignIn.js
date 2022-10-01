import React from "react";
import "./SignIn.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSolid } from "@fortawesome/free-solid-svg-icons";
function SignIn() {
  return (
    <div className="container">
      <div className="formBox">
        <div className="signIn">
          <form>
            <FontAwesomeIcon icon="fa-solid fa-user" />
            <FontAwesomeIcon icon="fa-regular fa-user" />
          </form>
          {/* <Form>
            <h2>Sign In</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign In
            </Button>
          </Form> */}
          <div className="panelContainer">
            <h1>
              WE ARE
              <br />
              MORE THAN
              <br />
              JUST
              <br />A TEAM
              <br />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
