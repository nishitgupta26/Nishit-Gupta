import React, { useState, useRef } from "react";
import "./intro.css";
import Header from "../header/Header";
import CV from "../../Files/Resume_NISHIT-GUPTA.pdf";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import NGlogo from "../../img/ng.png";
import {Link} from "react-router-dom"
// import { useNavigate } from 'react-router-dom';
import AppUrlListener from "../../Listeners/AppUrlListener";
import { useBackButton } from "../../customHooks/useBackButton";
// import { Filesystem, Directory } from '@capacitor/filesystem';
// import  { Browser } from '@capacitor/browser';
import  {Capacitor} from '@capacitor/core'

// import LocomotiveScroll from "locomotive-scroll";

const Intro = () => {
  useBackButton("exit");

  const menuElement = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 1201) {
      return { right: !menuOpened && "-100%" };
    }
  };

  // const downloadFile = async () => {
  //   const response = await fetch('https://nishitgupta.com/static/media/Resume_NISHIT-GUPTA.94560955de7147b728e5.pdf');
  //   const blob = await response.blob();
  //   const data = await new Response(blob).arrayBuffer();
  //   const base64Data = btoa(
  //     new Uint8Array(data)
  //       .reduce((data, byte) => data + String.fromCharCode(byte), '')
  //   );

  //   const result = await Filesystem.writeFile({
  //     path: 'Resume_NISHIT-GUPTA.pdf',
  //     data: base64Data,
  //     directory: Directory.Documents,
  //     recursive: true
  //   });

  //   Browser.open({ url: result.uri });
  // };
  
  return (
    <div id="home" className="i">
      <AppUrlListener></AppUrlListener>
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
            <a 
            // onClick={()=>{Capacitor.isNativePlatform()&&downloadFile();}} 
             href={"https://nishitgupta.com/static/media/Resume_NISHIT-GUPTA.94560955de7147b728e5.pdf"} 
             target="__blank">
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
