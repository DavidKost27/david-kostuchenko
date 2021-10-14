import React from "react";
import "./styles.scss";

// SVG
import Github from "../../assets/svg/github.svg";
import Linkedin from "../../assets/svg/linkedin.svg";
import Gmail from "../../assets/svg/gmail.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__icons">
        <Gmail
          className="footer__icons__gmail"
          style={{ width: "34px", height: "auto" }}
        />
        <Linkedin
          className="footer__icons__linkedin"
          style={{ width: "31px", height: "auto" }}
        />
        <Github
          className="footer__icons__github"
          style={{ width: "32px", height: "auto" }}
        />
      </div>
      <p>© David Kostuchenko - 2021</p>
    </div>
  );
}
