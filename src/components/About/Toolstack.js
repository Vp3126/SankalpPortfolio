import React from "react";
import { Col, Row } from "react-bootstrap";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={12} md={3} className="tech-icons">
        <span role="img" aria-label="mendeley">📕</span>
        <div>Mendeley</div>
      </Col>
      <Col xs={12} md={3} className="tech-icons">
        <span role="img" aria-label="zotero">📗</span>
        <div>Zotero</div>
      </Col>
      <Col xs={12} md={3} className="tech-icons">
        <span role="img" aria-label="grammarly">📝</span>
        <div>Grammarly</div>
      </Col>
      <Col xs={12} md={3} className="tech-icons">
        <span role="img" aria-label="turnitin">🔍</span>
        <div>Turnitin</div>
      </Col>
      <Col xs={12} md={3} className="tech-icons">
        <span role="img" aria-label="endnote">📒</span>
        <div>EndNote</div>
      </Col>
      <Col xs={12} md={3} className="tech-icons">
        <span role="img" aria-label="scholar">🔎</span>
        <div>Google Scholar</div>
      </Col>
      <Col xs={12} md={3} className="tech-icons">
        <span role="img" aria-label="word">🖥️</span>
        <div>Microsoft Word</div>
      </Col>
      <Col xs={12} md={3} className="tech-icons">
        <span role="img" aria-label="ppt">📽️</span>
        <div>PowerPoint</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
