
import React from "react";
import Intro from "./intro/Intro";
import About from "./about/About";
import Skills from "./skills/Skills";
import Resume from "./resume/Resume";
import Contact from "./contact/Contact";
import {IonContent, IonPage, IonRefresher,IonRefresherContent} from "@ionic/react"
import { chevronDownCircleOutline } from 'ionicons/icons';

function New() {
  function handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      event.detail.complete();
    }, 2000);
  }
  return (
    <IonPage>
        <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent
            pullingIcon={chevronDownCircleOutline}
            pullingText="Pull to refresh"
            refreshingSpinner="circles"
            refreshingText="Refreshing..."
          ></IonRefresherContent>
        </IonRefresher>
    {/* <Intro />
    <About /> */}
    <Skills />
    <Resume />
    <Contact />
    </IonContent>
  </IonPage>
  );
}
export default New;
