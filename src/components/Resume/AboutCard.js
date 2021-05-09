import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import fundamental from "../Resume/(conflicting copy) Fundamental Unit of Life.pdf";
import oneunit from "../Resume/define_one_unit_of_quantities.pdf";
import questionbnk from "../Resume/Question bank class 9.pdf";
import physicsques from "../Resume/sample physics class 9 part 1 (2).pdf";
import tissue from "../Resume/tissue.pdf";
import ill from "../Resume/why do we fall ill class 9th.pdf";
import work from "../Resume/work and energy.pdf";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Fundamental Unit of Cell    &nbsp;    <span className="purple"><a href={fundamental}><i class="fas fa-download"></i></a>.</span>
            
            <br />
            <br />One unit of quantities    &nbsp;    <span className="purple"><a href={oneunit}><i class="fas fa-download"></i></a>.</span>
            
            <br />
            <br />Question bank    &nbsp;    <span className="purple"><a href={questionbnk}><i class="fas fa-download"></i></a>.</span>
           
            <br />
            <br /> Question bank physics    &nbsp;    <span className="purple"><a href={physicsques}><i class="fas fa-download"></i></a>.</span>
            
            <br />
            <br />Tissues   &nbsp;    <span className="purple"><a href={tissue}><i class="fas fa-download"></i></a>.</span>
            
            <br />
            <br />Why do We Fall Ill    &nbsp;    <span className="purple"><a href={ill}><i class="fas fa-download"></i></a>.</span>
            
            <br />
            <br />Work , Energy & Power    &nbsp;    <span className="purple"><a href={work}><i class="fas fa-download"></i></a>.</span>
            <br />
            <br />
            
            
          </p>
          
        

         
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
