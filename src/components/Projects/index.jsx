import React from "react";
import "./styles.scss";
import { StaticImage } from "gatsby-plugin-image";

export default function Projects(props) {
  const { projectsSectionRef } = props;
  return (
    <div className="projects" ref={projectsSectionRef} id="projects">
      <h2>Projects</h2>

      <div className="projects__wrapper">
        <div className="projects__wrapper__container">
          <StaticImage
            src="../../assets/images/edi_hovalot.png"
            alt="Edi Hovalot moving company."
          />
          <h3>Edi Hovalot</h3>
          <p>
            A website for a moving company that specialises in sensetive and
            expensive equipment packaging and transportation.
          </p>

          <a
            href="https://github.com/DavidKost27/Edi_Hovalot-new"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href="https://edihovalot.co.il/"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            Demo
          </a>
        </div>

        <div className="projects__wrapper__container">
          <StaticImage
            src="../../assets/images/liza_willow.png"
            alt="Liza Willow's Personal online portfolio."
          />
          <h3>Liza Willow</h3>
          <p>
            Personal online portfolio showcasing the illustrations of a young
            and aspiring digital illustrator Liza Willow.
          </p>

          <a
            href="https://github.com/DavidKost27/lizawillow-2021"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href="https://lizawillow.com/"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            Demo
          </a>
        </div>

        <div className="projects__wrapper__container">
          <StaticImage
            src="../../assets/images/steve_antonioni.PNG"
            alt="Steve Antonioni educator & creator."
          />
          <h3>Steve Antonioni</h3>
          <p>
            A personal brand website of Steve Antonioni, a creator & educator in
            the personal finance niche.
          </p>

          <a
            href="https://github.com/DavidKost27/steve-antonioni"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href="https://steve-antonioni.web.app/"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            Demo
          </a>
        </div>

        <div className="projects__wrapper__container">
          <StaticImage
            src="../../assets/images/david_kostuchenko.png"
            alt="David Kostuchenko's portfolio."
          />
          <h3>David Kostuchenko</h3>
          <p>
            My personal website showcasing my professional and personal projects
            and some of my skills.
          </p>

          <a
            href="https://github.com/DavidKost27/david-kostuchenko"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a href="" className="link" target="_blank" rel="noreferrer">
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}
