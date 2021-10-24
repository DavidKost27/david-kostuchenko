import React from "react";
import "./styles.scss";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

export default function Resume(props) {
  const { resumeSectionRef, resumeSectionAnimation, variants } = props;
  return (
    <div className="resume-section" ref={resumeSectionRef} id="resume">
      <motion.h2
        animate={resumeSectionAnimation}
        initial="hidden"
        variants={variants}
        transition={{
          duration: 0.8,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
      >
        Resume
      </motion.h2>
      <motion.a
        animate={resumeSectionAnimation}
        initial="hidden"
        variants={variants}
        transition={{
          duration: 1,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
        className="resume"
        href="https://docs.google.com/document/d/1WtvXA5dex7o0x78lK4jv7I6GAc1NXCYLQcM-H-OxiRo/edit?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <StaticImage
          src="../../assets/images/resume.PNG"
          alt="Edi Hovalot moving company."
        />
      </motion.a>

      <motion.a
        animate={resumeSectionAnimation}
        initial="hidden"
        variants={variants}
        transition={{
          duration: 1.5,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
        href="https://docs.google.com/document/d/1WtvXA5dex7o0x78lK4jv7I6GAc1NXCYLQcM-H-OxiRo/edit#"
        download
        className="resume-section__download"
      >
        Download
      </motion.a>
    </div>
  );
}
