import React from "react";
import ReactDOM from "react-dom/client";
import "./intro.css";
import AOS from "aos";
import "aos/dist/aos.css";
import LeftMe from "../../img/Nishit_PIC-modified.png";
import Me from "../../img/Me.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CV from "../../Files/Resume_NISHIT-GUPTA.pdf";
const Intro = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="home" className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <div className="i-left-upper">
            <img src={LeftMe} alt="" className="i-left-img" />
            <h3 className="i-left-name">Nishit Gupta</h3>
            <div className="i-social">
              <a href="https://twitter.com/Nishit_5626?t=NRmW_tgWv1A56QY-GeshtA&s=09" className="c-logo twitter" target="__blank">
              <div className="icon-background">
              <i class='bx bxl-twitter social-icon'></i>
              </div>
              </a>
              <a href="https://github.com/WarBeast26" className=" c-logo github" target="__blank">
              <div className="icon-background">
              <i class='bx bxl-github social-icon' ></i>
              </div>
              </a>
              <a href="https://www.linkedin.com/in/nishitgupta26" className="c-logo linkedin" target="__blank">
              <div className="icon-background">
              <i class='bx bxl-linkedin social-icon' ></i>
              </div>
              </a>
              <a href="https://instagram.com/garg_nishit_26?igshid=MzNlNGNkZWQ4Mg==" className="c-logo instagram" target="__blank">
              <div className="icon-background">
              <i class='bx bxl-instagram social-icon' ></i>
              </div>
              </a>
            </div>
          </div>
          <div className="i-left-mid">
            <a href="#home" class="menu ">
              <i class="icon bx bx-home"></i>
              <span className="navBut home">Home</span>
            </a>
            <a href="#about" class="menu ">
              <i class="icon bx bx-user"></i>
              <span className="navBut about">About</span>
            </a>
            <a href="#skills" class="menu ">
              <i class="icon bx bx-cog"></i>
              <span className="navBut skills">Skills</span>
            </a>
            <a href="#resume" class="menu ">
              <i class="icon bx bx-file-blank"></i>
              <span className="navBut resume">Resume</span>
            </a>
            <a href="#resume" class="menu ">
              <i class="icon bx bx-book-reader"></i>
              <span className="navBut education">Education</span>
            </a>
            <a href="#contact" class="menu ">
              <i class="icon fa-regular fa-address-book"></i>
              <span className="navBut contact">Contact</span>
            </a>
          </div>
          <footer id="footer">
            <div class="i-container">
              <div class="copyright">
                © Copyright{" "}
                <strong>
                  <span>2023</span>
                </strong>
              </div>
              <div class="credits">
                <span>
                  Designed By
                  <a href="www.nishitgupta.com"> Nishit Gupta</a>
                </span>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <div className="i-right">
        <h2 className="portfolio">PORTFOLIO</h2>
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
          <div class="dwnlod">
          <a href={CV} download="Resume_Nishit-Gupta">
          <button className="button button-1">Download CV</button>
          </a>
          <a href="#">
          <button className="button button-2">Hire Me</button>
          </a>
          
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Intro;
