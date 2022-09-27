import React from "react";
import "./Emoji.css";

const Emoji = ({ emojis }) => {
  return (
    <div className="EmojiContainer">
      {emojis.map((emoji) => {
        return <div className="Emoji">{emoji}</div>;
      })}
    </div>
  );
};

export default Emoji;
