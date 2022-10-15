import "./admin.css";
import React, { useContext, useEffect, useState } from "react";
import UserList from "./users";
import { LightThemeContext } from "../../context/LightThemeContext";

const userList = [
  {
    username: "Adam",
    email: "adam@test.com",
    iscooperation: "true",
    id: "1",
  },
  {
    username: "Hong",
    email: "hong@test.com",
    iscooperation: "false",
    id: "2",
  },
  {
    username: "dony",
    email: "dony@test.com",
    iscooperation: "true",
    id: "kSEMggm",
  },
  {
    username: "Jhon",
    email: "jhon@test.com",
    iscooperation: "false",
    id: "4",
  },
];

const Admin = () => {
  const [users, setUsers] = useState(userList);
  const { setLightTheme } = useContext(LightThemeContext);
  useEffect(() => {
    console.log(window.location.pathname);
    if (window.location.pathname === "/admin") {
      setLightTheme(true);
    }
  }, [window.location.pathname]);
  return (
    <div className="adminWrapper">
      <div className="title">Admin</div>
      <div className="userWrapper">
        <a className="manageBtn" href="/admin">
          Manage User
        </a>
        <div className="userTableWrapper">
          <div className="tableWrap">
            <UserList users={users} />
          </div>

          <button className="saveBtn">SAVE</button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
