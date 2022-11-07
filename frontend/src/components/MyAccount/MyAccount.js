import React, { useState } from "react";
import "./MyAccount.css";
import { useSelector, useDispatch } from "react-redux";

const MyAccount = () => {
  const dispatch = useDispatch();

  //bring in state from slider
  const { user } = useSelector((state) => state.auth);

  const handleChange = (event) => {
    console.log("value is:", event.target.value);
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

        <form className="myAccountForm">
          <div className="myAccountInfo">
            <div className="myAccountInfoGroup">
              <label className="myAccountLabel">First Name</label>
              <input
                type="text"
                className="myAcountFistname"
                onChange={handleChange}
                value={user.username}
              ></input>
              <br></br>

              <label className="myAccountLabel mt-3">Last Name</label>
              <input
                type="text"
                className="myAcountLastname"
                value={user.admin}
              ></input>
              <br></br>

              <label className="myAccountLabel  mt-3">Password</label>
              <input
                type="password"
                className="myAcountPassword"
                value="1111111"
              ></input>
              <br></br>

              <label className="myAccountLabel  mt-3">Email</label>
              <input
                type="email"
                className="myAcountEmail"
                value={user.email}
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
