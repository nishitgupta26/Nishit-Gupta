
    import React from "react";
    import Intro from "./intro/Intro";
    import About from "./about/About";
    import { useHistory } from "react-router-dom";
    import Skills from "./skills/Skills";
    import Resume from "./resume/Resume";
    import Contact from "./contact/Contact";
    import {IonContent, IonPage} from "@ionic/react"
    
    function Home() {
      const history = useHistory();
      return (
        <>
        <Intro />
        {history.length}
        <About />
        {/* <Skills />
        <Resume />
        <Contact /> */}
        </>
      );
    }
    export default Home;
    