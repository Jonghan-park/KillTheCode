import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Calendar from "../Calendar/Calendar";
import Chatting from "../Chatting/Chatting";
import "./Working.css";

const currentProject = {
  title: "KillTheCode",
  github: "https://github.com/Jonghan-park/KillTheCode",
};

const Working = () => {
  const [project, setProject] = useState(currentProject);
  return (
    <div className="workingContainer">
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
          <Calendar />
        </Col>
        <Col lg="5">
          <Chatting />
        </Col>
      </Row>
    </div>
  );
};

export default Working;
