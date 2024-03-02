import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./intro.css";
import Header from "../header/Header";
import CV from "../../Files/Resume_NISHIT-GUPTA.pdf";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import NGlogo from "../../img/ng.png";
import {Link} from "react-router-dom"
// import { useNavigate } from 'react-router-dom';
import { IonButton } from '@ionic/react';
import { App as CapacitorApp } from "@capacitor/app";
import { useHistory } from "react-router-dom";


// import LocomotiveScroll from "locomotive-scroll";

const Intro = () => {
  const history = useHistory();

  const exit = async () => {
    await CapacitorApp.exitApp();
  };
  useEffect(() => {
    const goBack = () => {
      exit();
    };
    CapacitorApp.addListener("backButton", goBack);
    return () => CapacitorApp.removeAllListeners();
  }, [history]);


  const menuElement = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 1201) {
      return { right: !menuOpened && "-100%" };
    }
  };

  // useEffect(() => {
  //   locomotiveScroll = new LocomotiveScroll({
  //     lenisOptions: {
  //       wrapper: window,
  //       content: document.documentElement,
  //       lerp: 0.1,
  //       duration: 1.2,
  //       orientation: "vertical",
  //       gestureOrientation: "vertical",
  //       smoothWheel: true,
  //       // smoothTouch: true,
  //       wheelMultiplier: 1,
  //       // touchMultiplier: 1,
  //       normalizeWheel: true,
  //       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //     },
  //   });
  // }, []);
  return (
    <div id="home" className="i">
      <Header />
      <div className="i-right">
        <div className="right-upper">
          <img src={NGlogo} className="portfolio" />

          <div
            className="menu-icon"
            id="menu"
            ref={menuElement}
            onClick={() => {
              setMenuOpened((prev) => !prev);
            }}
          >
            <BiMenuAltRight size={30} />
          </div>
          <div className="m-container">
            <OutsideClickHandler
              onOutsideClick={(e) => {
                // console.log(menuElement.current.contains(e.target));
                !menuElement.current.contains(e.target) && setMenuOpened(false);
              }}
            >
              <div className="m-menu" style={getMenuStyles(menuOpened)}>

{/* ................................MOBILE NAVBAR............................................... */}
                <Link to="/">Home</Link>
                <Link to="/intro">Intro</Link> 
                <Link to="/about">About</Link>
                <Link to="/skills">Skills</Link> 
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link> 
{/* ............................................................................... */}

              </div>
            </OutsideClickHandler>
          </div>
        </div>
        <div className="i-right-wrapper">
          <h2 className="i-intro">Hello, I am </h2>
          <h1 className="i-name">Nishit Gupta</h1>
          <div data-scroll data-scroll-speed="0.05" className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Competetive Coder</div>
              <div className="i-title-item">Tech Enthusiast</div>
              <div className="i-title-item">Social Worker</div>
            </div>
          </div>
          <div data-scroll data-scroll-speed="0.12" class="dwnlod">
            <a onClick={exit} className="button-a" href={CV} download="Resume_Nishit-Gupta">
              <button className="button button-1">Download CV</button>
            </a>
            <a
              className="button-a"
              href="mailto:nishitgupta222@gmail.com"
              target="__blank"
            >
              <button className="button button-2">Hire Me</button>
            </a>
          </div>
          <div className="i-s-links">
            <button class="i-s-links-h">
              <a
                href="https://github.com/WarBeast26"
                target="__blank"
                className="sp"
              >
                <i class="bx bxl-github"></i>
              </a>
            </button>
            <button class="i-s-links-h">
              <a
                href="https://www.linkedin.com/in/nishitgupta26"
                target="__blank"
                className="sp"
              >
                <i class="bx bxl-linkedin"></i>
              </a>
            </button>
            <button class="i-s-links-h">
              <a href="https://wa.me/7073925626" className="sp">
                <i class="bx bxl-whatsapp"></i>
              </a>
            </button>
            <button class="i-s-links-h">
              <a
                href="https://instagram.com/garg_nishit_26?igshid=MzNlNGNkZWQ4Mg=="
                target="__blank"
                className="sp"
              >
                <i class="bx bxl-instagram"></i>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
