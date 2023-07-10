import React ,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import HashLoader from "react-spinners/HashLoader";
import "./app.css";

function App() {
  const [loading, setloading] = useState(false);
  useEffect (() => {
  setloading (true)
  setTimeout (() => {
  setloading(false)
  }, 2500)
}, [])
  return (
    <div className="app">
    {
      loading ?
      <div className="app-loader">
      <HashLoader
        color={"#172A8D"}
        loading={loading}
        // css={override}
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
      :
      <div className="app1">
      <Intro />
        <About />
        <Skills />
        <Resume />
        <Contact />
        </div>
    }

    </div>
  );
}

export default App;
 