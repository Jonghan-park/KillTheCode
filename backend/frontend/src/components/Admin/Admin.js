import "./admin.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listUser } from "../../features/admin/adminSlice";
import UserList from "./users";
// import UserList from "./users";

// const userList = [
//   {
//     username: "Adam",
//     email: "adam@test.com",
//     iscooperation: "true",
//     id: "1",
//   },
//   {
//     username: "Hong",
//     email: "hong@test.com",
//     iscooperation: "false",
//     id: "2",
//   },
//   {
//     username: "dony",
//     email: "dony@test.com",
//     iscooperation: "true",
//     id: "kSEMggm",
//   },
//   {
//     username: "Jhon",
//     email: "jhon@test.com",
//     iscooperation: "false",
//     id: "4",
//   },
// ];

const Admin = () => {
  const [participate, setParticipate] = useState();

  const dispatch = useDispatch();

  const userList = useSelector((state) => state.listUser);
  const users = userList.users;
  return (
    <div className="adminWrapper">
      <div className="titleAdmin">Admin</div>
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
