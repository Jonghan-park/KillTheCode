import React from "react";
import "./Emoji.css";

const Emoji = ({ emojis }) => {
  const emojiHandler = (index) => {
    console.log(index + 1);
  };
  return (
    <div className="EmojiContainer">
      {emojis.map((emoji, index) => {
        return (
          <div className="Emoji" onClick={() => emojiHandler(index)}>
            {emoji}
          </div>
        );
      })}
    </div>
  );
};

export default Emoji;
