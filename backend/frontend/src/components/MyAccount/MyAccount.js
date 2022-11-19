import React, { useState, useEffect } from "react";
import "./MyAccount.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getUser,
  reset,
  updateMyInfo,
} from "../../features/update/updateSlice";

//need to be update///////////
//doesn't display changing result
//use toast or something that tell progress
//password bug

const MyAccount = () => {
  const [formUsername, setFormUsername] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPassword, setFormPassword] = useState("");

  //bring in state from slider
  const { user, isLoading, isError } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    setFormUsername(user.username);
    setFormEmail(user.email);
  }, [dispatch, user]);

  const onSubmit = (e) => {
    e.preventDefault();
    const updateInfo = {
      formUsername,
      formPassword,
      formEmail,
    };
    //update profile
    dispatch(
      updateMyInfo({
        id: user._id,
        username: formUsername,
        password: formPassword,
        email: formEmail,
      })
    );
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
                onChange={(e) => setFormUsername(e.target.value)}
                name="username"
                value={formUsername}
              ></input>
              <br></br>

              <label className="myAccountLabel  mt-3">Password</label>
              <input
                type="password"
                className="myAcountPassword"
                value={formPassword}
                placeholder={user.password}
                name="password"
                onChange={(e) => setFormPassword(e.target.value)}
              ></input>
              <br></br>

              <label className="myAccountLabel  mt-3">Email</label>
              <input
                type="email"
                className="myAcountEmail"
                placeholder={user.email}
                value={formEmail}
                name="email"
                onChange={(e) => setFormEmail(e.target.value)}
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
