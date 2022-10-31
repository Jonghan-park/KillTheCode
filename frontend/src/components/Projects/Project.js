import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import quotation from "../../assets/quotation.svg";
import "./Project.css";

const Project = ({ projects, admin, sendId }) => {
  const openLink = (link) => {
    window.open(link);
  };
  const handleOpenEditModal = (id) => {
    sendId(id);
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
            contributor,
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
                    <p>Contributor: {contributor}</p>
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
                    <FontAwesomeIcon icon={faTrash} className="projectDelete" />
                  </div>
                )}
              </div>
            </>
          );
        })
      ) : (
        <div className="noProject">
          We are just about to start working on a project.
        </div>
      )}
    </>
  );
};

export default Project;
