import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container containers">
        <h1 className="footer__title">Harshil Patel</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="foother__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="foother__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonial" className="foother__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/hey.its.hp/"
            className="footer__social-link"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://twitter.com/ItsHpLOL"
            className="footer__social-link"
          >
            <i class="bx bxl-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/harshil-patel-027715211/"
            className="footer__social-link"
          >
            <i class="bx bxl-linkedin"></i>
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
