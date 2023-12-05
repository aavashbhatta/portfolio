import React from "react";
import Commontext from "./Commontext";
import Commontitle from "./Commontitle";

const Resume = () => {
  return (
    <main id="main">
      <section id="resume" className="resume">
        <div className="container">
          <div className="section-title">
            <Commontitle name=" Resume " />
          </div>

          <div className="row">
            <div className="col-lg-6" data-aos="fade-up">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <h4>Aavash Bhatta</h4>
                <p>
                  <em>
                    I am a highly motivated computer engineer with a strong
                    passion for continuous learning. With a solid foundation in
                    software development, video editing, and programming
                    overall, I possess a deep enthusiasm for technology and a
                    knack for solving complex problems. I am driven by a strong
                    desire to learn and grow.
                  </em>
                </p>
                <ul>
                  <li>Kalanki,Kathmandu</li>
                  <li>(+977) 9808550222</li>
                  <li>aavash2@gmail.com</li>
                </ul>
              </div>

              <h3 className="resume-title">Education</h3>

              <div className="resume-item">
                <h4>Bachelor in Computer Engineering </h4>
                <h5>2019 - 2023</h5>
                <p>
                  <em>Kantipur Engineering College</em>
                </p>
                <p></p>
                <br></br>
                <h4>Higher Secondary School </h4>
                <h5>2017-2019</h5>
                <p>
                  <em>Uniglobe College</em>
                </p>
                <p></p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>MERN Training</h4>
                <h5>2023 </h5>
                <p>
                  <em>Tech Axis , Kumaripati </em>
                </p>
                <ul>
                  <li>3 months MERN training</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Resume;
