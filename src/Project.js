import React from "react";
import Commontext from "./Commontext";
import Commontitle from "./Commontitle";
import { ProgressBar } from "react-bootstrap";

const Project = () => {
  return (
    <main id="main">
      <section id="Project" className="skills section-bg">
        <div className="container">
          <div className="section-title">
            <Commontitle name="Projects" />

            <Commontext name="" />
          </div>

          <div className="row skills-content">
            <div className="col-lg-6" data-aos="fade-up">
              <div className="progress">
                <span className="skill">
                  <a href="https://ilamiagro.com">
                    Ilami Agro <i className="val"></i>
                  </a>
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
                  <a href="https://constructible-chapl.000webhostapp.com/">
                    Ptatts <i className="val"></i>
                  </a>
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
                  <a href=" https://aron-engineering.com">
                    Aron Engineering <i className="val"></i>
                  </a>
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
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="progress">
                <span className="skill">
                  <a href="https://www.actionforchange.netfy.org/">
                    Action For Change <i className="val"></i>
                  </a>
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

              {/* <div className="progress">
                  <span className="skill">
                    <a href="https://ilamiagro.com">
                      Ilami Agro <i className="val"></i>
                    </a>
                  </span>
                  <div className="progress-bar-wrap"> 
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="10"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div> */}

              {/* <div className="progress">
                <span className="skill">
                  <a href="https://ilamiagro.com">
                    Ilami Agro <i className="val"></i>
                  </a>
                </span>
                 <div className="progress-bar-wrap"> 
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div> 
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Project;
