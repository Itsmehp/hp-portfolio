import React from "react";
import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
          <i className="uil uil-graduation-cap qualification__icon"></i>
            Timeline
            <i className="uil uil-briefcase-alt qualification__icon"></i>
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content qualification__content-active">
          
          <div className="qualification__data">
              
              <div>
                <h3 className="qualification__title">
                  Masters in Artificial Intellegence and Robotics
                </h3>
                <span className="qualification__subtitle">
                <span className="education-badge">Hochschule Hof, Germany</span>
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2024 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
            <div></div>
            <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Freelancing Web Developer
                </h3>
                <span className="qualification__subtitle">Online</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2023 - 2024
                </div>
              </div>
              
            </div>



            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Front/Back-End Developer (ReactJS)</h3>
                <span className="qualification__subtitle">
                HP Infosys - India
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2022 - 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>


            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Web Development / Design (ReactJS)
                </h3>
                <span className="qualification__subtitle">Udemy</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2021-2022
                </div>
              </div>

            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">HTML CSS & JavaScript</h3>
                <span className="qualification__subtitle">
                  Front-End Intern
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2021-2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Bachelors in Computer Science
                </h3>
                <span className="qualification__subtitle">
                  Parul Institute of Technology
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2017 - 2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;