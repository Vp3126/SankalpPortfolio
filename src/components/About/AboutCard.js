import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sankalp Shrivastava</span>
            <br />
            I am a <span className="purple">Research and Academic Writing Consultant</span>
            <br />
            <br />
            I specialize in providing comprehensive academic writing services including:
            <br />
            • Research Paper Writing
            <br />
            • Review Paper Writing
            <br />
            • Thesis Writing
            <br />
            • Graphical Abstract Creation
            <br />
            • PowerPoint Presentations
            <br />
            • Conference Proceedings
            <br />
            • Research Publication Assistance (Scopus, Web of Science, UGC)
            <br />
            <br />
            Currently pursuing my Master's degree in <span className="purple">Social Science</span>
            <br />
            <br />
            <strong>Contact Information:</strong>
            <br />
            <FaEnvelope /> Email: <a href="mailto:Sankalpshrivastava2000@gmail.com" style={{ color: "rgb(155 126 172)" }}>Sankalpshrivastava2000@gmail.com</a>
            <br />
            <FaPhone /> Phone: <a href="tel:+917719757947" style={{ color: "rgb(155 126 172)" }}>+91 7719757947</a>
            <br />
            <FaWhatsapp /> WhatsApp: <a href="https://wa.me/917719757947" style={{ color: "rgb(155 126 172)" }}>+91 7719757947</a>
            <br />
            <br />
            Some of my professional interests include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Academic Research & Writing
            </li>
            <li className="about-activity">
              <ImPointRight /> Scholarly Publication Support
            </li>
            <li className="about-activity">
              <ImPointRight /> Academic Conference Presentations
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Empowering researchers through quality academic writing and publication support!"
          </p>
          <footer className="blockquote-footer">Sankalp Shrivastava</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
