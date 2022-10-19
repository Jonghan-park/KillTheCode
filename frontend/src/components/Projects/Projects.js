import React, { useRef, useState, useEffect } from "react";
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
    github: "https://github.com/example1",
    link: "http://www.google.ca",
  },
  {
    id: 2,
    title: "Weather application",
    type: "Web application",
    language: "React, NodeJS, Express, MongoDB",
    period: "Oct 30, 2022",
    contributor: "Name1, Name2, Name3",
    github: "https://github.com/example1",
    link: "http://www.weather.ca",
  },
  {
    id: 3,
    title: "Weather application",
    type: "Web application",
    language: "React, NodeJS, Express, MongoDB",
    period: "Oct 30, 2022",
    contributor: "Name1, Name2, Name3",
    github: "https://github.com/example1",
    link: "http://www.weather.ca",
  },
  {
    id: 4,
    title: "Weather application",
    type: "Web application",
    language: "React, NodeJS, Express, MongoDB",
    period: "Oct 30, 2022",
    contributor: "Name1, Name2, Name3",
    github: "https://github.com/example1",
    link: "http://www.weather.ca",
  },
  {
    id: 5,
    title: "Weather application",
    type: "Web application",
    language: "React, NodeJS, Express, MongoDB",
    period: "Oct 30, 2022",
    contributor: "Name1, Name2, Name3",
    github: "https://github.com/example1",
    link: "http://www.weather.ca",
  },
];

const Projects = () => {
  const [admin, setAdmin] = useState(true);
  const [addProjectModal, setAddProjectModal] = useState(true);
  const [projects, setProjects] = useState(project);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const TOTAL_SLIDES = projects.length - 1;

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translate(-${currentSlide * 510}px)`;
  }, [currentSlide]);
  const openModal = () => {
    setAddProjectModal(true);
  };

  const nextBtnHandler = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const preBtnHandler = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
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
    <div className="projectsContainer">
      <div className="projectsTitleContainer">
        <div className="projectsTitle">PROJECTs</div>
        {admin && (
          <div className="addProject">
            <button className="addProjectBtn" onClick={openModal}>
              Add project
            </button>
          </div>
        )}
      </div>

      {addProjectModal && admin && (
        <div className="projectModalContainer">modal </div>
      )}

      <div className="projectButtonContainer">
        <button className="preBtnProject" onClick={preBtnHandler}>
          <div className="preProject">&lt;</div>
        </button>
        <button className="nextBtnProject" onClick={nextBtnHandler}>
          <div className="nextProject">&gt;</div>
        </button>
      </div>

      <div className="sliderContainer" ref={slideRef}>
        <Project projects={projects} />
      </div>
    </div>
  );
};

export default Projects;
