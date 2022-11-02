import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ProjectEditModal.css";

const ProjectEditModal = ({
  closeModal,
  setCloseModal,
  id,
  selectedProject,
}) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [language, setLanguage] = useState("");
  const [period, setPeriod] = useState("");
  const [contributor, setContributor] = useState("");
  const [github, setGithub] = useState("");
  const [link, setLink] = useState("");

  const handleEditProjectSubmit = async (e) => {
    try {
      const res = await axios.put(`http://localhost:5000/projects/edit/${id}`, {
        title: title,
        type: type,
        language: language,
        period: period,
        contributor: contributor,
        github: github,
        link: link,
      });
      const data = await res.data;
      return data;
    } catch (error) {
      console.log(error);
    }
    setCloseModal(false);
  };
  useEffect(() => {
    if (selectedProject) {
      setTitle(selectedProject.title);
      setType(selectedProject.type);
      setLanguage(selectedProject.language);
      setPeriod(selectedProject.period);
      setContributor(selectedProject.contributor);
      setGithub(selectedProject.github);
      setLink(selectedProject.link);
    }
  }, [selectedProject]);

  return (
    <>
      {closeModal ? (
        <div
          className="modalContainer"
          key={id}
          onClick={() => setCloseModal(false)}
        >
          <div
            className="modalContent"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="projectModalHeader">Edit Project</div>
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
                    onClick={() => handleEditProjectSubmit()}
                  >
                    Update
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

export default ProjectEditModal;
