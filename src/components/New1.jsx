
import React from "react";
import Intro from "./intro/Intro";
import About from "./about/About";
import Skills from "./skills/Skills";
import Resume from "./resume/Resume";
import Contact from "./contact/Contact";
import {IonContent, IonPage,IonButton,IonHeader,IonToolbar,IonButtons,IonBackButton,IonTitle, IonRefresher,IonRefresherContent} from "@ionic/react"
import { chevronDownCircleOutline } from 'ionicons/icons';
import { useHistory,Link } from 'react-router-dom';


function New1() {
  const history = useHistory();
  return (
    <>
    NEWWWWWWWWWWWWWWWWWWW👍👍👍👍👍👍👍👍👍👍👍👍
    {/* <button onClick={() => history.push('/contact')}>Press</button>
     */}
     <Link to="/contact">
        Go to Route
      </Link>
    </>
  );
}
export default New1;
