import axios from "axios";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Calendar from "../Calendar/Calendar";
import Chatting from "../Chatting/Chatting";
import "./Working.css";

const Working = () => {
  const [project, setProject] = useState(null);

  // Get projects
  const getProjects = async () => {
    try {
      const { data } = await axios.get("http://vast-island-14964.herokuapp.com/projects");
      const currentProject = data.projects[data.projects.length - 1];
      setProject(currentProject);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="workingContainer">
      {project ? (
        <>
          <div className="workingTitle">
            Working on: {project.title} <span className="toGithub"> / </span>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="toGithub"
            >
              Github
            </a>
          </div>
          <Row className="mx-2 mx-xl-5">
            <Col lg="7">
              <Calendar projectId={project._id} />
            </Col>
            <Col lg="5">
              <Chatting projectId={project._id} />
            </Col>
          </Row>
        </>
      ) : (
        <div className="noWorking">No project currently working</div>
      )}      
    </div>
  );
};

export default Working;
