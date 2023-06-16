import React from "react";
import ReactDOM from "react-dom/client";
import "./intro.css";
import LeftMe from "../../img/Nishit_PIC-modified.png";
import Me from "../../img/Me.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <div className="i-left-upper">
            <img src={LeftMe} alt="" className="i-left-img" />
            <h3 className="i-left-name">Nishit Gupta</h3>
            <div className="i-social">
              <a href="#" className="c-logo twitter">
              <span class="fa-stack">
              <i class="fa-solid fa-circle fa-stack-2x"></i>
              <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
              </span>
              </a>
              <a href="#" className=" c-logo instagram">
              <span class="fa-stack">
              <i class="fa-solid fa-circle fa-stack-2x"></i>
              <i class="fab fa-instagram fa-stack-1x fa-inverse"></i>
              </span>
              </a>
              <a href="#" className="c-logo github">
              <span class="fa-stack">
              <i class="fa-solid fa-circle fa-stack-2x"></i>
              <i class="fab fa-github fa-stack-1x fa-inverse"></i>
              </span>
              </a>
              <a href="#" className="c-logo facebook">
              <span class="fa-stack">
              <i class="fa-solid fa-circle fa-stack-2x"></i>
              <i class="fab fa-facebook fa-stack-1x fa-inverse"></i>
              </span>
              </a>
              <a href="#" className="c-logo linkedin">
              <span class="fa-stack">
              <i class="fa-solid fa-circle fa-stack-2x"></i>
              <i class="fab fa-linkedin fa-stack-1x fa-inverse"></i>
              </span>
              </a>
            </div>
          </div>
        <div className="i-left-mid">
                <a href="#home" class="menu ">
                <i class='icon bx bx-home' ></i>
                  <span className="c home">Home</span>
                </a>
                <a href="#about" class="menu ">
                <i class='icon bx bx-user' ></i>
                  <span className="c about">About</span>
                </a>
                <a href="#skills" class="menu ">
                <i class='icon bx bx-cog' ></i>
                  <span className="c skills">Skills</span>
                </a>
                <a href="#resume" class="menu ">
                <i class='icon bx bx-file-blank' ></i>
                  <span className="c resume">Resume</span>
                </a>
                <a href="#projects" class="menu ">
                <i class='icon bx bxl-react' ></i>
                  <span className="c projects">Projects</span>
                </a>
                <a href="#education" class="menu ">
                <i class='icon bx bx-book-reader'></i>
                  <span className="c education">Education</span>
                </a>
                <a href="#contact" class="menu ">
                <i class="icon fa-regular fa-address-book"></i>
                  <span className="c contact">Contact</span>
                </a>
        </div>
        <footer id="footer">
          <div class="container">
            <div class="copyright">
                 © Copyright <strong><span>2023</span></strong>
            </div>
            <div class="credits">
            <span>Designed By  
            <a href="www.nishitgupta.com"> Nishit Gupta</a></span>
            </div>
          </div>
        </footer>
        </div>
      </div>
      <div className="i-right">
        <div className="i-right-wrapper">
          <h2 className="i-intro">Hello,I am </h2>
          <h1 className="i-name">Nishit Gupta</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Competetive Coder</div>
              <div className="i-title-item">Tech Enthusiast</div>
              <div className="i-title-item">Social Worker</div>
            </div>
          </div>
          <div className="i-desc">
            Lorem ipsum dolor sit amet. Id sint pariatur qui enim quia ea unde
            dolore aut tempora maxime eum iure corporis aut voluptates officia
            ea numquam veniam. Aut reiciendis quos quo consequatur dolorem rem
            saepe reiciendis ea dolorem Quis nam vitae quisquam.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
