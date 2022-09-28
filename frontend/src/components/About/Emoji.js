import React, { useState } from "react";
import Modal from "../AboutModal/Modal";
import "./Emoji.css";

const Emoji = ({ users }) => {
  const [show, setShow] = useState(false);
  const [curIndex, setCurIndex] = useState(0);

  const openModal = (index) => {
    setCurIndex(index);
    setShow((prev) => !prev);
  };
  return (
    <div className="emojiContainer">
      {users.map((user, index) => {
        return (
          <div key={index} className="emoji" onClick={() => openModal(index)}>
            {user.emojiInUser}
          </div>
        );
      })}
      <Modal user={users[curIndex]} closeModal={show} setCloseModal={setShow} />
    </div>
  );
};

export default Emoji;
