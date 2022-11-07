import React from "react";
import "./Modal.css";

const Modal = ({ user, closeModal, setCloseModal }) => {
  return (
    <>
      {closeModal ? (
        // When user click outside of modal, it will be closed.
        <div className="modalContainer" onClick={() => setCloseModal(false)}>
          <div
            className="modalContent"
            // Do not close modal if content is clicked
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="modalHeader">MODAL TITLE</div>
            <div className="modalBody">
              <p className="modalEmoji">{user.username}</p>
              <h3 className="modalHello">Hi, my name is {user.username}</h3>
              {/* <p>Skill: {user.skill}</p>
              <p>linkedIn: {user.linkedIn}</p>
              <p>Github: {user.github}</p> */}
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
