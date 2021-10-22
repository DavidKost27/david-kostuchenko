import React from "react";
import "./styles.scss";
import { StaticImage } from "gatsby-plugin-image";

export default function Resume(props) {
  const { resumeSectionRef } = props;
  return (
    <div className="resume-section" ref={resumeSectionRef} id="resume">
      <h2>Resume</h2>
      <a
        className="resume"
        href="https://docs.google.com/document/d/1WtvXA5dex7o0x78lK4jv7I6GAc1NXCYLQcM-H-OxiRo/edit?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <StaticImage
          src="../../assets/images/resume.PNG"
          alt="Edi Hovalot moving company."
        />
      </a>

      <a
        href="../../assets/pdf/David_Kostuchenko.pdf"
        download
        className="resume-section__download"
      >
        Download
      </a>
    </div>
  );
}
