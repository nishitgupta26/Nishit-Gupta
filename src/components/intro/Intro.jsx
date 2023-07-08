import React, { useState,useRef } from "react";
import ReactDOM from "react-dom/client";
import "./intro.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../header/Header";
import LeftMe from "../../img/Nishit_PIC-modified.png";
import Me from "../../img/Me.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CV from "../../Files/Resume_NISHIT-GUPTA.pdf";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Intro = () => {
  const menuElement = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);  
  const getMenuStyles = (menuOpened) => {
    if(document.documentElement.clientWidth <= 1201){
      return{right: !menuOpened && "-100%"}
    }
  }
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="home" className="i">
      <Header />
      <div className="i-right">
        <div className="right-upper">
          <h2 className="portfolio">PORTFOLIO</h2>
          
          <div className="menu-icon" id="menu"
          ref={menuElement}
          onClick={()=>{setMenuOpened((prev)=>!prev);
          }}
          >
              <BiMenuAltRight size={30} />
            </div>
          <div className="m-container">
          <OutsideClickHandler
          onOutsideClick={(e)=>{
            // console.log(menuElement.current.contains(e.target));
            !menuElement.current.contains(e.target) && setMenuOpened(false)
          }}>
            <div className="m-menu" style={getMenuStyles(menuOpened)}>
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Skills</a>
              <a href="">Resume</a>
              <a href="">Education</a>
              <a href="">Contact Us</a>
            </div>
          </OutsideClickHandler>
          </div>
          

        </div>
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
