import React from "react";
import { Col, Row } from "react-bootstrap";

function Techstack() {
  return (
    <Row className="techstack-row" style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={12} md={3} className="tech-icons">
        <span role="img" aria-label="writing">📝</span>
        <div>Academic Writing</div>
      </Col>
      <Col xs={12} md={3} className="tech-icons">
        <span role="img" aria-label="books">📚</span>
        <div>Literature Review</div>
      </Col>
      <Col xs={12} md={3} className="tech-icons">
        <span role="img" aria-label="chart">📊</span>
        <div>Data Analysis</div>
      </Col>
      <Col xs={12} md={3} className="tech-icons">
        <span role="img" aria-label="methodology">🔬</span>
        <div>Research Methodology</div>
      </Col>
      <Col xs={12} md={3} className="tech-icons">
        <span role="img" aria-label="reference">🔖</span>
        <div>Reference Management (Mendeley, Zotero)</div>
      </Col>
      <Col xs={12} md={3} className="tech-icons">
        <span role="img" aria-label="word">🖥️</span>
        <div>Microsoft Word</div>
      </Col>
      <Col xs={12} md={3} className="tech-icons">
        <span role="img" aria-label="ppt">📽️</span>
        <div>PowerPoint</div>
      </Col>
      <Col xs={12} md={3} className="tech-icons">
        <span role="img" aria-label="plagiarism">🔎</span>
        <div>Plagiarism Checking</div>
      </Col>
      <Col xs={12} md={3} className="tech-icons">
        <span role="img" aria-label="journal">📰</span>
        <div>Journal Submission</div>
      </Col>
    </Row>
  );
}

export default Techstack;
