import React from "react";
import ReactDOM from "react-dom/client";
import "./intro.css";
import AOS from "aos";
import "aos/dist/aos.css";
import  Header from "../header/Header";
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
     <Header />
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
