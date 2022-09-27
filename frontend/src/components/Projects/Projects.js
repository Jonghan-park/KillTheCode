import React, { useState, useEffect } from "react";
import Project from "../Projects/Project";
import "./Projects.css";

const project = [
  {
    id: 1,
    title: "Google web application",
    type: "Web application",
    language: "React, NodeJS, Express, MongoDB",
    period: "Sep 24, 2022",
    contributor: "Name1, Name2, Name3",
    link: "http://www.google.ca",
  },
  {
    id: 2,
    title: "Weather application",
    type: "Web application",
    language: "React, NodeJS, Express, MongoDB",
    period: "Oct 30, 2022",
    contributor: "Name1, Name2, Name3",
    link: "http://www.weather.ca",
  },
];

const Projects = () => {
  const [projects, setProjects] = useState(project);

  // Get projects

  // const getProjects = async () => {
  //   try {
  //     const { data } = await axios.get("http://localhost:5000/api/projects");
  //     setProjects(data.projects);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getProjects();
  // }, []);
  return (
    <div className="ProjectsContainer">
      <div className="ProjectsTitle">PROJECTs</div>

      {projects ? (
        <Project projects={projects} />
      ) : (
        <div className="noProject">
          We are just about to start working on a project.
        </div>
      )}
    </div>
  );
};

export default Projects;
