import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import "./app.css";
import Loading from "./Loading";


function App() {

  const [loading, setloading] = useState(false);
  useEffect(() => {
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
        <div className="app1">
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
