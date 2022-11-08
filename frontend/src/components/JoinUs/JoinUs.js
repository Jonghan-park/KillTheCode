import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./JoinUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faUser,
  faEnvelope,
  faKey,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../../features/auth/authSlice";
import { isRejected } from "@reduxjs/toolkit";

function JoinUs() {
  const [errMsg, setErrMsg] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordCheck: "",
  });

  const { username, email, password, passwordCheck } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //bring in state from slider
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/working");
    }
    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordCheck) {
      toast.error("Password is not match!");
    } else {
      const userData = {
        username,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  return (
    <>
      <div className="container">
        <div className="joinInForm">
          <div className="titleJoin">REGISTER</div>
          <form onSubmit={onSubmit}>
            <div className="inputGrop">
              <FontAwesomeIcon icon={faUser} className="signInIcon" />
              <input
                ref={inputRef}
                type="text"
                className="inputField"
                placeholder="User ID"
                id="username"
                name="username"
                value={username}
                onChange={onChange}
                required
              />
            </div>
            <div className="inputGrop">
              <FontAwesomeIcon icon={faEnvelope} className="signInIcon" />
              <input
                type="text"
                className="inputField"
                placeholder="Email"
                id="email"
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
            <div className="inputGrop">
              <FontAwesomeIcon icon={faCheckCircle} className="signInIcon" />
              <input
                icon={faCheckCircle}
                type="password"
                className="inputField"
                placeholder="Confirm Password"
                id="passwordCheck"
                name="passwordCheck"
                value={passwordCheck}
                onChange={onChange}
                required
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
