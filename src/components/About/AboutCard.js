import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Greetings, We are team  <span className="purple">Bijective .</span>
            from <span className="purple"> Delhi, India.</span>
            <br />We have 2 Branches and still growing.
            <br />
            We hire young teachers so that students can relate and interact smoothly for better learning.
            <br />
            <br />
           We provide :
          </p>
          
          <ul>
            <li className="about-activity">
            <i class="fas fa-book-open"></i>&nbsp; Self Made Notes
            </li>
            <li className="about-activity">
            <i class="fas fa-book"></i> &nbsp;Own Sample Papers
            </li>
            <li className="about-activity">
            <i class="fas fa-money-check-alt"></i>&nbsp; Affordable
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Balanced dish of Knowledge & love with pinch of fun"{" "}
          </p>
          <footer className="blockquote-footer">Bijective Classes</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
