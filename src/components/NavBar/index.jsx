import React, { useEffect } from "react";
import "./styles.scss";

export default function NavBar(props) {
  const { heroSectionInView, projectsSectionInView, resumeSectionInView } =
    props;

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
      <a href="">Contact</a>
    </div>
  );
}
