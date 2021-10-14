import React, { useEffect } from "react";
import "./styles.scss";

export default function NavBar(props) {
  const {
    heroSectionInView,
    projectsSectionInView,
    resumeSectionInView,
    contactSectionInView,
  } = props;

  return (
    <div className="navbar">
      <a href="" className={`${heroSectionInView ? "active" : ""}`}>
        Home
      </a>
      <a href="" className={`${projectsSectionInView ? "active" : ""}`}>
        Projects
      </a>
      <a href="" className={`${resumeSectionInView ? "active" : ""}`}>
        Resume
      </a>
      <a href="" href="" className={`${contactSectionInView ? "active" : ""}`}>
        Contact
      </a>
    </div>
  );
}
