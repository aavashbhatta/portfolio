import React from "react";
import Commontext from "./Commontext";
import Commontitle from "./Commontitle";
import { ProgressBar } from "react-bootstrap";

const Skills = () => {
  return (
    <main id="main">
      <section id="skills" className="skills section-bg">
        <div className="container">
          <div className="section-title">
            <Commontitle name="Skills" />

            <Commontext name="  As a computer engineer with skills in data entry , video editing and programming, I have a diverse range of abilities that can help excel in various industries. Some of the skills that may be relevant are:" />
          </div>

          <div className="row skills-content">
            <div className="col-lg-6" data-aos="fade-up">
              <div className="progress">
                <span className="skill">
                  HTML <i className="val"></i>
                </span>
                {/* <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div> */}
              </div>

              <div className="progress">
                <span className="skill">
                  CSS <i className="val"></i>
                </span>
                {/* <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div> */}
              </div>

              <div className="progress">
                <span className="skill">
                  React <i className="val"></i>
                </span>
                {/* <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div> */}
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="progress">
                <span className="skill">
                  Data Entry <i className="val"></i>
                </span>
                {/* <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div> */}
              </div>

              <div className="progress">
                <span className="skill">
                  Video Editing <i className="val"> </i>
                </span>
                {/* <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div> */}
              </div>

              <div className="progress">
                <span className="skill">
                  Python<i className="val"></i>
                </span>
                {/* <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="55"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Skills;
