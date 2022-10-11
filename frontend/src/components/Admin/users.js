import React from "react";
import "./admin.css";

const UserList = ({ users }) => {
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
          {users.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>
                <input
                  type="radio"
                  name="isCooperat"
                  value={true}
                  checked={user.iscooperation}
                ></input>
                True
                <input
                  type="radio"
                  name="isCooperat"
                  value={false}
                  checked={user.iscooperation}
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
