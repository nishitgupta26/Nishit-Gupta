import React from 'react';
import ReactDOM from 'react-dom/client';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
function App() {
  return (
    <div className="App">
        <Intro />
        <About />
        <Skills />
        <Resume />
        <Contact />
    </div>
  );
}

export default App;
 