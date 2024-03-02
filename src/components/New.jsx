
import React from "react";
import Intro from "./intro/Intro";
import About from "./about/About";
import Skills from "./skills/Skills";
import Resume from "./resume/Resume";
import Contact from "./contact/Contact";
import {IonContent, IonPage, IonRefresher,IonRefresherContent} from "@ionic/react"
import { chevronDownCircleOutline } from 'ionicons/icons';
import { useHistory } from "react-router-dom";

function New() {
  const history = useHistory();
  return (
    <>
    {/* <Intro />
    <About /> */}
    {history.length}
    👍👍👍👍👍👍seconddddddd
    </>
  );
}
export default New;
