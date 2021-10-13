import React from "react";
import "./styles.scss";

export default function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <div>
        E-mail:{" "}
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
