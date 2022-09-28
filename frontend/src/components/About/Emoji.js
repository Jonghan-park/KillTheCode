import React from "react";
import "./Emoji.css";

const Emoji = ({ emojis }) => {
  const emojiHandler = (index) => {
    console.log(index + 1);
  };
  return (
    <div className="emojiContainer">
      {emojis[0].map((emoji, index) => {
        return (
          <div className="emoji" onClick={() => emojiHandler(index)}>
            {emoji}
          </div>
        );
      })}
    </div>
  );
};

export default Emoji;
