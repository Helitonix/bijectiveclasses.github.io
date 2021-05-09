import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Card from "react-bootstrap/Card";
import fundamental from "../Resume/(conflicting copy) Fundamental Unit of Life.pdf";
import oneunit from "../Resume/define_one_unit_of_quantities.pdf";
import questionbnk from "../Resume/Question bank class 9.pdf";
import physicsques from "../Resume/sample physics class 9 part 1 (2).pdf";
import tissue from "../Resume/tissue.pdf";
import ill from "../Resume/why do we fall ill class 9th.pdf";
import work from "../Resume/work and energy.pdf";

// import pdf from "../../Assets/Soumyajit-Behera.pdf";
import Button from "react-bootstrap/Button";

// import Aboutcard2 from "./AboutCard2";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
      {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={fundamental} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row> */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Download  <strong className="purple">Notes</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        {/* <h1 className="project-heading">
          Our <strong className="purple">Branches </strong>
        </h1> */}
        {/* here starts 2nd oart */}
        {/* <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">We're</strong>
            </h1>
            <AboutCard2 />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row> */}
        {/* <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           Fundamental Unit of Cell  <span className="purple">Bijective Classes </span>
             in <span className="purple">  <a href="https://goo.gl/maps/1AorE5ZUN8u1F23n7" target="_blank">Maujpur</a> and <a href="https://goo.gl/maps/Ff1GT2m1oZJcdLxj9" target="_blank">Ashok Nagar</a> </span>
            <br />You can also call us:-
            <br />
            Sourabh Pal &nbsp;&nbsp;&nbsp;&nbsp;(Co-owner) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -<a href="tel:+917982646778">&nbsp; &nbsp;7982646778</a>
            <br />
            Aman Kapoor &nbsp;(Co-owner) &nbsp; &nbsp; &nbsp; -<a href="tel:+919911190767">&nbsp; &nbsp;9911190767</a>
            <br />
            <br />
           You Can also Checkout our <a href="https://www.youtube.com/channel/UCpN6eGz41I2yM6ObRqgudfA" target="_blank">Youtube</a> Channel For free educational content.
           <br />
           Here are our social media links:
           <br/>
          </p>
          
          <ul>
            <li className="about-activity">
            <i class="fab fa-facebook"></i> <a href="https://www.facebook.com/bijectiveclasses" target="_blank">Facebook</a>
            </li>
            <li className="about-activity">
              <i class="fab fa-instagram"></i> <a href="https://www.instagram.com/bijectiveclasses" target="_blank">Instagram</a>
            </li>
            <li className="about-activity">
              <i class="fab fa-whatsapp"></i> <a href="https://chat.whatsapp.com/DGn9mFHyHtd9ckHSLy4OTf" target="_blank">Whatsapp</a>
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card> */}
        
        
        {/* <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-linux-plain" />
          <Techstack iconName="cib-visual-studio-code" />
          <Techstack iconName="cib-anaconda" />
          <Techstack iconName="cib-postman" />
          <Techstack iconName="cib-zeit" />
          <Techstack iconName="cib-heroku" />
        </Row> */}
      
      </Container>
    </Container>
  );
}

export default About;
