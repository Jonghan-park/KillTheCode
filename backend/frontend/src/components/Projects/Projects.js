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
  const [deleteId, setDeleteId] = useState("");
  const [clickedProject, setClickedProject] = useState();
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

  const getId = (id, msg) => {
    if (msg === "Edit") {
      setEditProjectModal(true);
      setEditId(id);
    } else if (msg === "Delete") {
      setDeleteId(id);
    }
  };

  // Get projects
  const getProjects = async () => {
    try {
      const { data } = await axios.get("http://vast-island-14964.herokuapp.com/projects");
      setProjects(data.projects);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjects();
    // console.log(slideRef.current.style);
    if (TOTAL_SLIDES > 2) {
      slideRef.current.style.justifyContent = "flex-start";
    }
  }, [projects]);

  const getSpecificProject = async () => {
    try {
      const res = await axios.get(`http://vast-island-14964.herokuapp.com/projects/${editId}`);
      const project = await res.data;
      setClickedProject(project);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (editId) {
      getSpecificProject();
      setEditId("");
    }
    if (deleteId) {
      deleteProject();
      setDeleteId("");
    }
  }, [editId, deleteId]);

  const deleteProject = async () => {
    try {
      await axios.delete(`http://vast-island-14964.herokuapp.com/projects/delete/${deleteId}`);
    } catch (error) {
      console.log(error);
    }
  };
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
