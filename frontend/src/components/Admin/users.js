import React from "react";

const UserList = ({ users }) => {
  return (
    <>
      <table className="userTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Participation</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.iscooperation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserList;
