import React from "react";
import "./SignIn.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SignIn() {
  return (
    <div className="containerBody">
      <div className="container">
        <div className="signIn">
          <Form>
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
          </Form>
        </div>
        <div className="panelContainer"></div>
      </div>
    </div>
  );
}

export default SignIn;
