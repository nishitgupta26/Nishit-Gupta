import React from 'react';
import ReactDOM from 'react-dom/client';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Skills from './components/skills/Skills';
function App() {
  return (
    <div className="App">
        <div>
        <Intro />
        <About />
        <Skills />
        </div>
    </div>
  );
}

export default App;
 