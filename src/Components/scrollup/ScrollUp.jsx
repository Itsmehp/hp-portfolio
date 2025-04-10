import React from "react";
import { Link } from "react-scroll";
import "./scrollup.css";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });
  
  return (
    <Link 
      to="home"
      spy={false}
      smooth={true}
      offset={-80} // Adjust based on your header height
      duration={500}
      className="scrollup"
    >
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </Link>
  );
};

export default ScrollUp;