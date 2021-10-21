import React from "react";
import "./styles.scss";
import { StaticImage } from "gatsby-plugin-image";

export default function Resume(props) {
  const { resumeSectionRef } = props;
  return (
    <div className="resume-section" ref={resumeSectionRef} id="resume">
      <h2>Resume</h2>
      <div className="resume">
        <StaticImage
          src="../../assets/images/resume.PNG"
          alt="Edi Hovalot moving company."
        />
      </div>
    </div>
  );
}
