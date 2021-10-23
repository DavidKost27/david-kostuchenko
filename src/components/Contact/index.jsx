import React from "react";
import "./styles.scss";
import { motion } from "framer-motion";

export default function Contact(props) {
  const { contactSectionRef, contactSectionAnimation, variants } = props;
  return (
    <div className="contact-container" ref={contactSectionRef} id="contact">
      <motion.h2
        animate={contactSectionAnimation}
        initial="hidden"
        variants={variants}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        animate={contactSectionAnimation}
        initial="hidden"
        variants={variants}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
      >
        I'm currently open for new opportunities, if you want to say hello hit
        me up via email.
      </motion.p>

      <motion.div
        className="email"
        animate={contactSectionAnimation}
        initial="hidden"
        variants={variants}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
      >
        Email:{" "}
        <a
          href="mailto:davidkost.dev@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          davidkost.dev@gmail.com
        </a>
      </motion.div>
    </div>
  );
}
