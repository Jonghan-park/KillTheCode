import "./admin.css";
import React, { useState } from "react";
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
  const [users, setUsers] = useState(userList);
  return (
    <div className="adminWrapper">
      <div className="title">Admin</div>
      <div className="userWrapper">
        <a className="manageBtn" href="/admin">
          Manage User
        </a>
        <div className="userTable">
          <UserList users={users} />
          <button className="saveBtn">SAVE</button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
