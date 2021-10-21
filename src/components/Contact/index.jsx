import React from "react";
import "./styles.scss";

export default function Contact(props) {
  const { contactSectionRef } = props;
  return (
    <div className="contact-container" ref={contactSectionRef} id="contact">
      <h2>Contact Me</h2>

      <p>
        I'm currently open for new opportunities, if you want to say hello hit
        me up via email.
      </p>
      <div className="email">
        Email:{" "}
        <a
          href="mailto:davidkost1999@gmail.com"
          target="_blank"
          onclick="window.open('your WS URL');"
        >
          davidkost1999@gmail.com
        </a>
      </div>
    </div>
  );
}
