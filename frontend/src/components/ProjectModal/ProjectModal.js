import React from "react";
import "./ProjectModal.css";

const ProjectModal = ({ closeModal, setCloseModal }) => {
  return (
    <>
      {closeModal ? (
        <div className="modalContainer" onClick={() => setCloseModal(false)}>
          <div
            className="modalContent"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="modalHeader">Add Project</div>
            <div className="modalBody">
              <form></form>
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

export default ProjectModal;
