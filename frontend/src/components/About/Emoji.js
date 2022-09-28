import React from "react";
import "./Emoji.css";

const Emoji = ({ users }) => {
  const emojiHandler = (index) => {
    console.log(users[index]);
  };
  return (
    <div className="emojiContainer">
      {users.map((user, index) => {
        const { name, skill, linkedIn, github, email, emojiInUser } = user;
        return (
          <div className="emoji" onClick={() => emojiHandler(index)}>
            {emojiInUser}
          </div>
        );
      })}
    </div>
  );
};

export default Emoji;
