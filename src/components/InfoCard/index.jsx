import React from "react";
import "./styles.scss";
import { StaticImage } from "gatsby-plugin-image";

export default function InfoCard() {
  return (
    <div className="card-container">
      <div className="card-container__secondary card skills">
        <h3>Skills:</h3>
        <div>
          <span>CSS</span>
          <span>SASS</span>
          <span>HTML</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Gatsby</span>
          <span>Node</span>
          <span>Express</span>
          <span>MongoDB</span>
        </div>
      </div>
      <div className="card-container__primary card">
        <div className="avatar">
          {" "}
          <StaticImage
            className="david"
            src="../../assets/images/david.jpg"
            alt="David Kostuchenko seating down"
          />
        </div>
        <a>Resume</a>
        <a>Projects</a>
        <a>Contact</a>
      </div>
      <div className="card-container__secondary card extra-technologies">
        <h3> Extra Technologies:</h3>
        <div>
          <span>AntD</span>
          <span>Material UI</span>
          <span>GraphQL</span>
          <span>Postman</span>
          <span>Robo 3T</span>
          <span>Firebase</span>
          <span>Adobe XD</span>
          <span>Figma</span>
          <span>Framer Motion</span>
        </div>
      </div>
    </div>
  );
}
