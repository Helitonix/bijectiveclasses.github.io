import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import myImg from "../../Assets/avatar.svg";
import myImg2 from "../../Assets/avataraman.svg";
import Tilt from "react-parallax-tilt";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our Team <strong className="purple">Members </strong>
        </h1>
        <p style={{ color: "white" }}>
          We two are running Bijective classes for now.
        </p>
        
        <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            {/* <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> US
            </h1> */}
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> Sourabh Pal </span> 
            </h1>
            
            <p className="home-about-body">
              I decided to become a Teacher when i was completing my Software Engineering
              <br />
              <br />As I'm an engineer as i am experienced and knowledgeful in my field, and i look forward to teach it to others.
              <i>
                <b className="purple"> I work as co-owner and as a Computers teacher in Bijective Classes. </b>
              </i>
              <br />
              <br />
              My current focus is on &nbsp;
              <i>
                <b className="purple">
                  provoding best possible education.
                </b>
              </i>
              <br />
              <br />
              My goal is to make every person educated who is willing so  
              <i>
                <b className="purple"> ,</b>
              </i>
                &nbsp; With my experience in
              <i>
                <b className="purple"> teaching and technical field</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               <span className="purple"> Aman Kapoor </span> 
            </h1>
            <p className="home-about-body">
              {/* second card  */}
              I have started teaching when when i was pursuing Maths Hons. 
              <br />
              <br />And i dont know when i fall in love with it.. 
              <i>
                <b className="purple"> I have expertise in mathematics..... </b>
              </i>
              <br />
              <br />
              And i look forward to help students to crack govt. Exams in the field of maths  with my experience as i have cracked many exams... In this field...&nbsp;
              <br />
              <br />
              My only aim is to provide
              <i>
                <b className="purple">
                &nbsp; best
                </b>
                &nbsp; and
                <b className="purple">
                &nbsp; accurate knowledge
                </b>
              </i>
              <br />
              <br />
              to all who is willing so..
              <i>
                <b className="purple">  work as co-owner and as a Maths teacher in Bijective Classes. </b>
              </i>
               
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg2} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND US ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with us
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/bijectiveclasses"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/channel/UCpN6eGz41I2yM6ObRqgudfA"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://chat.whatsapp.com/DGn9mFHyHtd9ckHSLy4OTf"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/bijectiveclasses/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
      </Container>
    </Container>
    
  );
}

export default Projects;
