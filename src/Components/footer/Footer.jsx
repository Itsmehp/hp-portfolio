import React from "react";
import { Link } from "react-scroll";
import "./footer.css";

const Footer = () => {
  // Common props for Link components
  const scrollLinkProps = {
    spy: false,
    smooth: true,
    offset: -80, // Adjust based on your header height
    duration: 500
  };

  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Harshil Patel</h1>
        <ul className="footer__list">
          <li>
            <Link to="about" className="foother__link" {...scrollLinkProps}>
              About
            </Link>
          </li>
          <li>
            <Link to="portfolio" className="foother__link" {...scrollLinkProps}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="testimonial" className="foother__link" {...scrollLinkProps}>
              Testimonials
            </Link>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.instagram.com/hey.its.hp/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://twitter.com/ItsHpLOL"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/harshil-patel-027715211/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Harshil Patel, All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;