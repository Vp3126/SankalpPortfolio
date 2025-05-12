import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My passion lies in <b className="purple">academic research and writing</b>, helping students and scholars achieve excellence in their work.
              <br />
              <br />I specialize in:
              <i>
                <b className="purple"> Thesis Writing, Research Paper Writing, Review Paper Writing, and Publication Support. </b>
              </i>
              <br />
              <br />
              My interests include:
              <i>
                <b className="purple">Literature Review, Data Analysis, Research Methodology, and Academic Presentations.</b>
              </i>
              <br />
              <br />
              I am proficient with tools such as <b className="purple">Mendeley, Zotero, Grammarly, Turnitin, EndNote, Microsoft Word, and PowerPoint</b> to ensure quality and originality in every project.
              <br />
              <br />
              I am dedicated to supporting researchers and students in their academic journey, from idea to publication.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:Sankalpshrivastava2000@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <span style={{fontSize: '1.5em'}}>📧</span>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/home"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sankalp-shrivastava-4778b2262/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/Sankalp.s2000"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
