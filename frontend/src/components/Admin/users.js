import React, { useState } from "react";
import "./admin.css";

const UserList = ({ users }) => {
  // const [userCooperate, setCooperate] = useState;

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
              <td>{user.iscooperation}</td>
              <td>
                <input
                  type="radio"
                  name={i}
                  value="true"
                  checked={user.iscooperation == "true"}
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
