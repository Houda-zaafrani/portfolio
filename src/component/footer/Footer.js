import {
  faBitbucket,
  faLinkedin,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./footer.css";
const Footer = ({ data }) => {
  return (
    <div className="footer f-content">
      <span className="email-icon">
        <FontAwesomeIcon icon={faEnvelope} className="icon-footer" />
        {data.email}
      </span>
      <div className="f-icons">
        <a href="https://www.linkedin.com/in/houda-zaafrani/details">
          <FontAwesomeIcon icon={faLinkedin} className="icon-footer" />
        </a>
        <a href="https://github.com/Houda-zaafrani">
          <FontAwesomeIcon icon={faSquareGithub} className="icon-footer" />{" "}
        </a>
        <a href="https://bitbucket.org/houda-zaafrani/workspace/overview/">
          <FontAwesomeIcon icon={faBitbucket} className="icon-footer" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
