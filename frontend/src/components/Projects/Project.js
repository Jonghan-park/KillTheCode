import React from "react";
import quotation from "../../assets/quotation.svg";
import "./Project.css";

const Project = ({ projects }) => {
  return (
    <div className="project">
      {projects ? (
        projects.map((project) => {
          const { id, title, type, language, period, contributor, link } =
            project;
          return (
            <div key={id} className="projectItem">
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
                  <p>Link: {link}</p>
                </li>
              </ul>
            </div>
          );
        })
      ) : (
        <div className="noProject">
          We are just about to start working on a project.
        </div>
      )}
    </div>
  );
};

export default Project;
