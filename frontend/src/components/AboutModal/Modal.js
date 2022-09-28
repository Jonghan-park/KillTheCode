import React from "react";
import "./Modal.css";

const Modal = ({ user, closeModal, setCloseModal }) => {
  console.log(closeModal);
  return (
    <>
      {closeModal ? (
        <div className="modalContainer">
          <div className="modalContent">
            <div className="modalHeader">Modal title</div>
            <div className="modalBody">
              <p>{user.emojiInUser}</p>
              <h3>Hi, my name is {user.name}</h3>
              <p>Skill: {user.skill}</p>
              <p>linkedIn: {user.linkedIn}</p>
              <p>Github: {user.github}</p>
              <p>Email: {user.email}</p>
            </div>
            <div className="modalFooter">
              <button
                className="modalButton"
                onClick={() => setCloseModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
