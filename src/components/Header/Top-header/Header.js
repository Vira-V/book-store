import React from "react";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faBloggerB,
} from "@fortawesome/free-brands-svg-icons";
import { MiddleHeader } from "../Middle-header/MiddleHeader";

export const Header = () => {
  return (
    <>
    <div className="top-header">
      <div className="top-header__phone">
        <FontAwesomeIcon icon={faPhone} className="top-header__phone-icon" />
        <a href="tel: +91 8374902234" className="top-header__phone-link">
          +91 8374902234
        </a>
      </div>
      <div className="top-header__social">
        <a href="https://www.facebook.com" className="top-header__social-icon">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://www.instagram.com" className="top-header__social-icon">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com" className="top-header__social-icon">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://twitter.com/" className="top-header__social-icon">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.blogger.com/" className="top-header__social-icon">
          <FontAwesomeIcon icon={faBloggerB} />
        </a>
      </div>
    </div>

    <MiddleHeader />
    </>
  );
};
