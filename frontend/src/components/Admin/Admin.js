import "./admin.css";
import React from "react";
import UserList from "./users";

const userList = [
  {
    id: "1",
    name: "Adam",
    email: "adam@test.com",
    iscooperation: "true",
  },
  {
    id: "2",
    name: "Hong",
    email: "hong@test.com",
    iscooperation: "false",
  },
  {
    name: "dony",
    email: "dony@test.com",
    iscooperation: "true",
    id: "kSEMggm",
  },
];
const Admin = () => {
  return (
    <div className="adminWrapper">
      <div className="title">Admin</div>
      <div className="userWrapper">
        <button className="manageBtn">Manage User</button>
        <div className="userTable">
          <UserList userlist={userList.name} />
          <button className="saveBtn">SAVE</button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
