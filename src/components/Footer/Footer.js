import "./Footer.scss";
import footerLogo from "../../images/footer_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-info">
      <div className="footer-info__image">
        <img src={footerLogo} alt="Logo" />
      </div>
        <p className="footer-info__text">
        Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
        <div className="footer-info__social">
        <a href="https://www.facebook.com" className="footer-info__social-icon">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://www.instagram.com" className="footer-info__social-icon">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://twitter.com/" className="footer-info__social-icon">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.youtube.com/" className="footer-info__social-icon">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
      </div>
    </div>
  );
};
