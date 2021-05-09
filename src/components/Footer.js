import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="12" className="footer-copywright">
          <h3>Designed and Developed by Team Bijective</h3>
        </Col>
        <Col md="12" className="footer-copywright">
          <h3>Copyright © {year} Bijective Classes</h3>
        </Col>
        <Col md="12" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://facebook.com/bijectiveclasses"target="_blank"
                style={{ color: "white" }}
              >
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://chat.whatsapp.com/DGn9mFHyHtd9ckHSLy4OTf"target="_blank"
                style={{ color: "white" }}
              >
                <i class="fab fa-whatsapp"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.youtube.com/channel/UCpN6eGz41I2yM6ObRqgudfA" target="_blank"
                style={{ color: "white" }}
              >
                <i class="fab fa-youtube"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/bijectiveclasses/"target="_blank"
                style={{ color: "white" }}
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
