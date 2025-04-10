import React, { useState } from "react";
import "./header.css";
import { Link } from "react-scroll";
// import logo from "../../assets/DarkLogo.png";

const Header = () => {
  /*=============== Change Background header ===============*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  
  /*=============== Toggle Menu ===============*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  // Common props for Link components
  const scrollLinkProps = {
    spy: true,
    smooth: true,
    offset: -80, // Adjust based on your header height
    duration: 500,
    onClick: () => showMenu(false) // Close menu when clicking a link
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          Harshil
          {/* LOGO */}
          {/* <img className="nav__logo" src={logo} alt="Dark-Logo"></img> */}
        </a>
        
        {/* =========================NAV MENU========================= */}
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link
                to="home"
                className={activeNav === "home" ? "nav__link active-link" : "nav__link"}
                onClick={() => setActiveNav("home")}
                {...scrollLinkProps}
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="about"
                className={activeNav === "about" ? "nav__link active-link" : "nav__link"}
                onClick={() => setActiveNav("about")}
                {...scrollLinkProps}
              >
                <i className="uil uil-user nav__icon"></i> About
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="skills"
                className={activeNav === "skills" ? "nav__link active-link" : "nav__link"}
                onClick={() => setActiveNav("skills")}
                {...scrollLinkProps}
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="services"
                className={activeNav === "services" ? "nav__link active-link" : "nav__link"}
                onClick={() => setActiveNav("services")}
                {...scrollLinkProps}
              >
                <i className="uil uil-briefcase nav__icon"></i> Services
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="portfolio"
                className={activeNav === "portfolio" ? "nav__link active-link" : "nav__link"}
                onClick={() => setActiveNav("portfolio")}
                {...scrollLinkProps}
              >
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="contact"
                className={activeNav === "contact" ? "nav__link active-link" : "nav__link"}
                onClick={() => setActiveNav("contact")}
                {...scrollLinkProps}
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </Link>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;