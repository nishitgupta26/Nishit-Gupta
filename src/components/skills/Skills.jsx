import React from "react";
import "./skills.css";
const Skills = () => {
  return (
    <div  id="skills" className="s">
      <div className="s-container">
      <div class="section-title">
          <h2 className="heading">Skills</h2>
        </div>
        <div class="row skills-content">
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" data-aos="fade-up" data-aos-delay='100' data-aos-duration='500'>
            <div class="progress">
              <span class="skill">HTML 
              {/* <i class="val">100%</i> */}
              </span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{width: '90%'}}
                ></div>
              </div>
            </div>
            <div class="progress">
              <span class="skill">CSS 
              {/* <i class="val">90%</i> */}
              </span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="86"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{width: '86%'}}
                ></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">JavaScript 
              {/* <i class="val">75%</i> */}
              </span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{width: '75%'}}
                ></div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12"
            data-aos="fade-up"
            data-aos-delay='100' data-aos-duration='500'>
            <div class="progress">
              <span class="skill">Problem Solving
              {/* <i class="val">80%</i> */}
              </span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{width: '80%'}}
                ></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">C/C++ 
              {/* <i class="val">90%</i> */}
              </span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{width: '90%'}}
                ></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">ReactJS 
              {/* <i class="val">55%</i> */}
              </span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="55"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{width: '55%'}}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
