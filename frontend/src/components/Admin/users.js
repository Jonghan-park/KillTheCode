import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listUser } from "../../features/admin/adminSlice";
import "./admin.css";

const UserList = () => {
  // const [userCooperate, setCooperate] = useState;

  const dispatch = useDispatch();
  const userList = useSelector((state) => state.listUser);
  const users = userList.users;

  useEffect(() => {
    dispatch(listUser());
  }, [dispatch]);
  console.log(users);
  return (
    <>
      <table className="userTable">
        <thead>
          <tr className="tableTitle">
            <th>Name</th>
            <th>Project Cooperater</th>
            <th>Change state</th>
          </tr>
        </thead>
        <tbody className="userTableBody">
          {users.map((user, i) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.participate}</td>
              <td>
                <input
                  type="radio"
                  name={i}
                  value="true"
                  checked={user.participate == "true"}
                ></input>
                Yes
                <input
                  type="radio"
                  name={i}
                  value="false"
                  checked={user.iscooperation == "false"}
                ></input>
                No
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserList;
