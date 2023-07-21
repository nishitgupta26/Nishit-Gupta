import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import "./app.css";
import Loading from "./Loading";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const ap1 = useRef();

  const [loading, setloading] = useState(false);
  useEffect(() => {
    const locomotiveScroll =new LocomotiveScroll({
      lenisOptions: {
          wrapper: window,
          content: document.documentElement,
          lerp: 0.1,
          duration: 1.2,
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          smoothTouch: true,
          wheelMultiplier: 1,
          touchMultiplier: 1,
          normalizeWheel: true,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      },
  });
    setloading(true);

    setTimeout(() => {
      setloading(false);
    }, 3700);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <Loading />
      ) : (
        
          <div className="app1" ref={ap1}>
            <Intro />
            <About />
            <Skills />
            <Resume />
            <Contact />
          </div>
      )}
    </div>
  );
}

export default App;
