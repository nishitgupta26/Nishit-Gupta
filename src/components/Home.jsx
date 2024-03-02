
    import React from "react";
    import Intro from "./intro/Intro";
    import About from "./about/About";
    import Skills from "./skills/Skills";
    import Resume from "./resume/Resume";
    import Contact from "./contact/Contact";
    import {IonContent, IonPage} from "@ionic/react"
    
    function Home() {
    
      return (
        <>
        <Intro />
        <About />
        {/* <Skills />
        <Resume />
        <Contact /> */}
        </>
      );
    }
    export default Home;
    