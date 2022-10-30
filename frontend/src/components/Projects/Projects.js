import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import ProjectModal from "../ProjectModal/ProjectModal";
import Project from "../Projects/Project";
import ProjectEditModal from "../ProjectModal/ProjectEditModal";
import "./Projects.css";

const Projects = () => {
  const [admin, setAdmin] = useState(true);
  const [addProjectModal, setAddProjectModal] = useState(false);
  const [editProjectModal, setEditProjectModal] = useState(false);
  const [editId, setEditId] = useState("");
  const [clickedProject, setClickedProject] = useState({});
  const [projects, setProjects] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const TOTAL_SLIDES = projects ? projects.length - 1 : 0;

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

  const getId = (id) => {
    setEditProjectModal(true);
    setEditId(id);
  };
  // Get projects
  const getProjects = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/projects");
      setProjects(data.projects);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  const getSpeicificProject = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/projects/${editId}`);
      const clickedProject = await res.data;
      setClickedProject(clickedProject);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (editId) {
      getSpeicificProject();
    }
  }, [editId]);
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
        <div className="projectModalContainer">
          <ProjectModal
            closeModal={addProjectModal}
            setCloseModal={setAddProjectModal}
          />
        </div>
      )}
      {editProjectModal && (
        <ProjectEditModal
          id={editId}
          closeModal={editProjectModal}
          setCloseModal={setEditProjectModal}
          selectedProject={clickedProject}
        />
      )}
      {projects && (
        <div className="projectButtonContainer">
          <button className="preBtnProject" onClick={preBtnHandler}>
            <div className="preProject">&lt;</div>
          </button>
          <button className="nextBtnProject" onClick={nextBtnHandler}>
            <div className="nextProject">&gt;</div>
          </button>
        </div>
      )}

      <div className="sliderContainer" ref={slideRef}>
        <Project projects={projects} admin={admin} sendId={getId} />
      </div>
    </div>
  );
};

export default Projects;
