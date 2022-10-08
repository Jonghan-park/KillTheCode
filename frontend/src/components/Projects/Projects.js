import React, { useState } from "react";
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
  {
    id: 3,
    title: "Weather application",
    type: "Web application",
    language: "React, NodeJS, Express, MongoDB",
    period: "Oct 30, 2022",
    contributor: "Name1, Name2, Name3",
    link: "http://www.weather.ca",
  },
  {
    id: 4,
    title: "Weather application",
    type: "Web application",
    language: "React, NodeJS, Express, MongoDB",
    period: "Oct 30, 2022",
    contributor: "Name1, Name2, Name3",
    link: "http://www.weather.ca",
  },
  {
    id: 5,
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
      <button className="preBtnProject">
        <p>&lt;</p>
      </button>
      <button className="nextBtnProject">
        <p>&gt;</p>
      </button>
      <Project projects={projects} />
    </div>
  );
};

export default Projects;
