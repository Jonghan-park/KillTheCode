import React, { useState } from "react";
import Modal from "../AboutModal/Modal";
import "./Emoji.css";

const Emoji = ({ users }) => {
  const [showModal, setShowModal] = useState(false);
  const [curIndex, setCurIndex] = useState(0);

  const openModal = (index) => {
    setCurIndex(index);
    setShowModal((prev) => !prev);
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
      <Modal
        user={users[curIndex]}
        closeModal={showModal}
        setCloseModal={setShowModal}
      />
    </div>
  );
};

export default Emoji;
