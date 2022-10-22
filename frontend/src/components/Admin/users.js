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
            <th>Participation</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>
                {user.iscooperation} :
                <input
                  type="radio"
                  name={i}
                  value="true"
                  checked={user.iscooperation == "true"}
                ></input>
                True
                <input
                  type="radio"
                  name={i}
                  value="false"
                  checked={user.iscooperation == "false"}
                ></input>
                False
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserList;
