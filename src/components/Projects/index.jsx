/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./styles.scss";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

export default function Projects(props) {
  const { projectsSectionRef, projectsSectionAnimation, variants } = props;
  return (
    <div className="projects" ref={projectsSectionRef} id="projects">
      <motion.h2
        animate={projectsSectionAnimation}
        initial="hidden"
        variants={variants}
        transition={{
          duration: 0.8,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
      >
        Projects
      </motion.h2>

      <div className="projects__wrapper">
        <motion.div
          className="projects__wrapper__container"
          animate={projectsSectionAnimation}
          initial="hidden"
          variants={variants}
          transition={{
            duration: 0.8,
            ease: [0.6, 0.05, -0.01, 0.9],
          }}
        >
          <a href="https://edihovalot.co.il/" target="_blank" rel="noreferrer">
            <StaticImage
              className="preview"
              src="../../assets/images/edi_hovalot.png"
              alt="Edi Hovalot moving company."
            />
          </a>
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
        </motion.div>

        <motion.div
          className="projects__wrapper__container"
          animate={projectsSectionAnimation}
          initial="hidden"
          variants={variants}
          transition={{
            duration: 0.8,
            ease: [0.6, 0.05, -0.01, 0.9],
          }}
        >
          <a href="https://lizawillow.com/" target="_blank" rel="noreferrer">
            <StaticImage
              className="preview"
              src="../../assets/images/liza_willow.png"
              alt="Liza Willow's Personal online portfolio."
            />
          </a>
          <h3>Liza Willow</h3>
          <p>
            Personal online portfolio showcasing the colorful and unique
            illustrations of a young and aspiring digital illustrator Liza
            Willow.
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
        </motion.div>

        <motion.div
          className="projects__wrapper__container"
          animate={projectsSectionAnimation}
          initial="hidden"
          variants={variants}
          transition={{
            duration: 1.5,
            ease: [0.6, 0.05, -0.01, 0.9],
          }}
        >
          <a
            href="https://steve-antonioni.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              className="preview"
              src="../../assets/images/steve_antonioni.PNG"
              alt="Steve Antonioni educator & creator."
            />
          </a>
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
        </motion.div>

        <motion.div
          className="projects__wrapper__container"
          animate={projectsSectionAnimation}
          initial="hidden"
          variants={variants}
          transition={{
            duration: 1.5,
            ease: [0.6, 0.05, -0.01, 0.9],
          }}
        >
          <a href="#home">
            <StaticImage
              src="../../assets/images/david_kostuchenko.png"
              alt="David Kostuchenko's portfolio."
              className="preview"
            />
          </a>
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
          <a href="#home" className="link">
            Demo
          </a>
        </motion.div>
      </div>
    </div>
  );
}
