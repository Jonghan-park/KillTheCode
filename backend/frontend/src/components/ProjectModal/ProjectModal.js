import React, { useState } from "react";
import axios from "axios";
import "./ProjectModal.css";

const ProjectModal = ({ closeModal, setCloseModal }) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [language, setLanguage] = useState("");
  const [period, setPeriod] = useState("");
  const [contributor, setContributor] = useState("");
  const [github, setGithub] = useState("");
  const [link, setLink] = useState("");

  const handleProjectSubmit = async () => {
    const contributors = contributor.split(",");
    try {
      const res = await axios.post(
        "http://vast-island-14964.herokuapp.com/projects/add",
        {
          title: title,
          type: type,
          language: language,
          period: period,
          contributors: contributors,
          github: github,
          link: link,
        }
      );
      const data = await res.data;
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
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
            <div className="projectModalHeader">Add Project</div>
            <div className="projectModalBody">
              <form className="projectModalForm">
                <label htmlFor="name">Title:</label>
                <input
                  type="text"
                  required
                  id="title"
                  placeholder="Enter a title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <label htmlFor="type">Type:</label>
                <input
                  type="text"
                  required
                  id="type"
                  placeholder="Enter a type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                />

                <label htmlFor="language">Languages:</label>
                <input
                  type="text"
                  required
                  id="language"
                  placeholder="Enter a languages"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                />

                <label htmlFor="period">Period:</label>
                <input
                  type="date"
                  required
                  id="period"
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                />

                <label htmlFor="contributor">Contributor:</label>
                <input
                  type="text"
                  required
                  id="contributor"
                  placeholder="Enter a contributor"
                  value={contributor}
                  onChange={(e) => setContributor(e.target.value)}
                />

                <label htmlFor="github">Github:</label>
                <input
                  type="text"
                  required
                  id="github"
                  placeholder="Enter a github"
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
                />

                <label htmlFor="link">Link:</label>
                <input
                  type="text"
                  required
                  id="link"
                  placeholder="Enter a link"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
                <div className="projectModalButtons">
                  <button
                    type="submit"
                    className="projectModalButton"
                    onClick={(() => setCloseModal(false), handleProjectSubmit)}
                  >
                    Add
                  </button>
                  <button
                    className="projectModalButton"
                    onClick={() => setCloseModal(false)}
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProjectModal;
