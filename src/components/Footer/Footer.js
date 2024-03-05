import "./Footer.scss";
import footerLogo from "../../images/footer_logo.png";
import footerNews1 from "../../images/news1.png";
import footerNews2 from "../../images/news2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  const menuItems = [
    "Home",
    "About us",
    "Books",
    "New release",
    "Contact us",
    "Blog",
  ];

  return (
    <footer className="footer-container">
      <div className="footer-container__information">
      <div className="footer-info">
        <div className="footer-info__image">
          <img src={footerLogo} alt="Logo" />
        </div>
        <p className="footer-info__text">
          Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <div className="footer-info__social">
          <a
            href="https://www.facebook.com"
            className="footer-info__social-icon"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://www.instagram.com"
            className="footer-info__social-icon"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com/" className="footer-info__social-icon">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.youtube.com/"
            className="footer-info__social-icon"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>

      <div className="footer-menu">
        <h5 className="footer-menu__title">Company</h5>
        <ul className="footer-menu__list">
          {menuItems.map((menuItem) => (
            <li key={menuItem}>{menuItem}</li>
          ))}
        </ul>
      </div>

      <div className="footer-news">
        <h5 className="footer-menu__title">Latest news</h5>
        <article className="footer-news__article">
          <div className="footer-news__image">
            <img src={footerNews1} alt="Boy and girl are using the laptop" />
          </div>
          <div className="footer-news__content">
            <h6 className="footer-news__title">Nostrud exercitation</h6>
            <p className="footer-news__text">
              Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.{" "}
            </p>
            <p className="footer-news__date">15 April 2022</p>
          </div>
        </article>
        <article className="footer-news__article">
          <div className="footer-news__image">
            <img src={footerNews2} alt="Girls are working on the desk" />
          </div>
          
          <div className="footer-news__content">
            <h6 className="footer-news__title">Nostrud exercitation</h6>
            <p className="footer-news__text">
              Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.{" "}
            </p>
            <p className="footer-news__date">15 April 2022</p>
          </div>
        </article>
      </div>
      </div>

      <div className="footer__author">
        <p>© 2022 Arihant. All Rights Reserved.</p>
        <p>
          {" "}
          <span className="footer__author-important">Privacy</span> | Terms of
          Service
        </p>
      </div>
    </footer>
  );
};
