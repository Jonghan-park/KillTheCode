import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import quotation from "../../assets/quotation.svg";
import "./Project.css";

const Project = ({ projects, admin, sendId }) => {
  const openLink = (link) => {
    window.open(link);
  };
  const handleOpenEditModal = (id) => {
    sendId(id, "Edit");
  };
  const handleDelete = (id) => {
    sendId(id, "Delete");
  };
  return (
    <>
      {projects ? (
        projects.map((project) => {
          const {
            _id,
            title,
            type,
            language,
            period,
            contributors,
            github,
            link,
          } = project;

          return (
            <>
              <div key={_id} className="projectItem">
                <img src={quotation} alt="Quotation mark" />
                <ul className="projectInfo">
                  <li className="projectTitle">
                    <p>Title: {title}</p>
                  </li>
                  <li className="projectType">
                    <p>Type: {type}</p>
                  </li>
                  <li className="projectLanguage">
                    <p>Language: {language}</p>
                  </li>
                  <li className="projectPeriod">
                    <p>Period: {period}</p>
                  </li>
                  <li className="projectContributor">
                    <p>
                      Contributor:{" "}
                      {contributors.map((user) => {
                        return user;
                      })}
                    </p>
                  </li>
                  <li className="projectLink">
                    <p onClick={() => openLink(github)}>Github: {github}</p>
                  </li>
                  <li className="projectLink">
                    <p onClick={() => openLink(link)}>Link: {link}</p>
                  </li>
                </ul>
                {admin && (
                  <div className="projectEditDelete">
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      className="projectEdit"
                      onClick={() => handleOpenEditModal(_id)}
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="projectDelete"
                      onClick={() => handleDelete(_id)}
                    />
                  </div>
                )}
              </div>
            </>
          );
        })
      ) : (
        <h1>No projects</h1>
      )}
    </>
  );
};

export default Project;
