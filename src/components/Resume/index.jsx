import React from "react";
import "./styles.scss";

export default function Resume(props) {
  const { resumeSectionRef } = props;
  return (
    <div className="resume-section" ref={resumeSectionRef}>
      <h2>Resume</h2>
      <div className="resume"></div>
    </div>
  );
}
