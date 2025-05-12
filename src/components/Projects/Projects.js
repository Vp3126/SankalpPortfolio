import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Academic <strong className="purple">Services </strong>
        </h1>
        <p style={{ color: "white" }}>
          Comprehensive academic writing and research support services I offer.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Dissertation Report"
              description="A comprehensive dissertation report covering research objectives, methodology, analysis, and findings."
              demoLink={process.env.PUBLIC_URL + '/report_sankalp/Dissertation Report.pdf'}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Graphical Abstract"
              description="A visual summary of research findings presented in a graphical abstract format."
              demoLink={process.env.PUBLIC_URL + '/report_sankalp/Graphical Abstract.pdf'}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Research Paper 1"
              description="A detailed research paper presenting original research, analysis, and conclusions."
              demoLink={process.env.PUBLIC_URL + '/report_sankalp/Research Paper 1.pdf'}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Research Paper 2"
              description="A second research paper with in-depth study and findings on a related topic."
              demoLink={process.env.PUBLIC_URL + '/report_sankalp/Research Paper 2.pdf'}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Research Thesis Report"
              description="A complete research thesis report including literature review, methodology, results, and discussion."
              demoLink={process.env.PUBLIC_URL + '/report_sankalp/Research Thesis Report.pdf'}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
