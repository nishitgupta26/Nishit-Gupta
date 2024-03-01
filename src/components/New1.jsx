
import React from "react";
import Intro from "./intro/Intro";
import About from "./about/About";
import Skills from "./skills/Skills";
import Resume from "./resume/Resume";
import Contact from "./contact/Contact";
import {IonContent, IonPage,IonButton,IonHeader,IonToolbar,IonButtons,IonBackButton,IonTitle} from "@ionic/react"

function New1() {

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
    {/* <Intro />
    <About /> */}
    <IonButton routerLink="/">Home</IonButton>
    </IonContent>
  </IonPage>
  );
}
export default New1;
