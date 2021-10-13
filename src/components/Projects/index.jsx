import React from "react";
import "./styles.scss";
import { StaticImage } from "gatsby-plugin-image";

export default function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>

      <div className="projects__container">
        <StaticImage
          src="../../assets/images/edi_hovalot.png"
          alt="A dinosaur"
        />
        <h3>Edi Hovalot</h3>
        <p>
          A website for a moving company that specialises in sensetive and
          expensive equipment packaging and transportation.
        </p>
      </div>

      <div className="projects__container">
        <StaticImage
          src="../../assets/images/liza_willow.png"
          alt="A dinosaur"
        />
        <h3>Liza Willow</h3>
        <p>
          Personal online portfolio showcasing the illustrations of a young and
          aspiring digital illustrator Liza Willow.
        </p>
      </div>

      <div className="projects__container">
        <h3>Steve Antonioni</h3>
        <p>
          A personal brand website of Steve Antonioni, a creator & educator that
          combines the world of pathography and the personal finance niche.
        </p>
      </div>

      <div className="projects__container">
        <h3>David Kostuchenko</h3>
        <p>
          My personal website showcasing my professional and personal projects.
        </p>
      </div>
    </div>
  );
}
