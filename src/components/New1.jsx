
import React from "react";
import Intro from "./intro/Intro";
import About from "./about/About";
import Skills from "./skills/Skills";
import Resume from "./resume/Resume";
import Contact from "./contact/Contact";
import {IonContent, IonPage,IonButton,IonHeader,IonToolbar,IonButtons,IonBackButton,IonTitle, IonRefresher,IonRefresherContent} from "@ionic/react"
import { chevronDownCircleOutline } from 'ionicons/icons';

function New1() {

  function handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      event.detail.complete();
    }, 2000);
  }
  return (
    <IonPage>
        <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/home" />
        </IonButtons>
        <IonTitle>My Page</IonTitle>
      </IonToolbar>
    </IonHeader>
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
    <IonButton routerLink="/">Home</IonButton>
    </IonContent>
  </IonPage>
  );
}
export default New1;
