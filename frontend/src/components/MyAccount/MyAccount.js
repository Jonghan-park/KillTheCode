import React, { useState } from "react";
import "./MyAccount.css";
import { useSelector, useDispatch } from "react-redux";
import { updateMyInfo } from "../../features/auth/authSlice";

const MyAccount = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;
  //bring in state from slider
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const updateInfo = {
      username,
      password,
      email,
    };
    dispatch(updateMyInfo(updateInfo));
  };
  return (
    <>
      <div className="title">My Account</div>

      <div className="myAccountContainer">
        <div className="myAccountPhoto">
          <div className="myAccountPhotoAdd"></div>
          <input
            className="myAccountImage"
            type="file"
            accept="image/png, image/jpg"
          />
        </div>

        <form className="myAccountForm" onSubmit={onSubmit}>
          <div className="myAccountInfo">
            <div className="myAccountInfoGroup">
              <label className="myAccountLabel">User Name</label>
              <input
                type="text"
                className="myAcountFistname"
                placeholder={user.username}
                onChange={onChange}
                name="username"
                value={username}
              ></input>
              <br></br>

              <label className="myAccountLabel  mt-3">Password</label>
              <input
                type="password"
                className="myAcountPassword"
                value={password}
                placeholder={user.password}
                name="password"
                onChange={onChange}
              ></input>
              <br></br>

              <label className="myAccountLabel  mt-3">Email</label>
              <input
                type="email"
                className="myAcountEmail"
                placeholder={user.email}
                value={email}
                name="email"
                onChange={onChange}
              ></input>
              <br></br>
            </div>
            <button className="myAccountbutton">SAVE</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MyAccount;
