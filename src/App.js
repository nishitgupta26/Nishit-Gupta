import React, { useEffect } from "react";
import Home from "./components/Home";
import "./app.css";
import Loading from "./Loading";
// import '@ionic/react/css/core.css';
// import {setupIonicReact,IonApp,IonRouterOutlet} from "@ionic/react"
import {
  setupIonicReact,
  IonRouterOutlet,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonApp,
  IonPage,
  useIonRouter,
  RefresherEventDetail,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { BrowserRouter, Switch, Route, Redirect,useHistory } from "react-router-dom";

import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import New from "./components/New";
import { App as CapacitorApp } from "@capacitor/app";

/* Basic CSS for apps built with Ionic */
// import '@ionic/react/css/normalize.css';
// import '@ionic/react/css/structure.css';
// import '@ionic/react/css/typography.css';
import New1 from "./components/New1";

/* Optional CSS utils that can be commented out */
// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/display.css';

setupIonicReact();

function App() {
  // const router = useIonRouter();

  // useEffect(() => {
  //   const handler = (ev) => {
  //     ev.preventDefault();
  //     if (router.canGoBack()) {
  //       router.goBack();
  //     } else {
  //       window.navigator['app'].exitApp();
  //     }
  //   };

  //   window.addEventListener('popstate', handler);
  //   return () => window.removeEventListener('popstate', handler);
  // }, [router]);

  // const history = useHistory();
  // const exit = async()=>{
  //   await CapacitorApp.exitApp();
  // };
  // useEffect(() => {
    
  //   const goBack = () => {
  //     if (history.length >= 2) {
  //       exit();
  //       // history.goBack();
  //     } else {
  //       exit();
  //     }
  //   };
  //   CapacitorApp.addEventListener("backbutton", goBack);
  //   return () => CapacitorApp.removeEventListener("backbutton", goBack);
  // }, [history]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        {/* <Route path="/intro" component={Intro} exact={true} />
        <Route path="/about" component={About} exact={true} />
        <Route path="/skills" component={Skills} exact={true} /> */}
        <Route path="/resume" component={New1} exact={true} />
        <Route path="/contact" component={New} exact={true} />
        {/* <Route exact path="/" render={() => <Redirect to="/home" />} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;

// function App() {

//   // const [loading, setloading] = useState(false);
//   useEffect(() => {
//     new LocomotiveScroll({
//       lenisOptions: {
//         wrapper: window,
//         content: document.documentElement,
//         lerp: 0.1,
//         duration: 1.2,
//         orientation: "vertical",
//         gestureOrientation: "vertical",
//         smoothWheel: true,
//         // smoothTouch: true,
//         wheelMultiplier: 1,
//         // touchMultiplier: 1,
//         normalizeWheel: true,
//         easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
//       }
//     });
//   }, []);

//   return (
//     <IonApp>
//       <IonPage>
//     <IonHeader>
//     <IonToolbar>
//       <IonTitle>My Page</IonTitle>
//     </IonToolbar>
//   </IonHeader>
//   <Intro />
//         <About />
//         <Skills />
//         <Resume />
//         <Contact />

//         </IonPage>
//   </IonApp>
//   //   <IonApp>
//   //   <IonReactRouter>
//   //     <Loading />
//   //     <IonRouterOutlet>
//   //       <Route path="/home" component={<Home />} exact={true} />
//   //       <Route exact path="/" render={() => <Redirect to="/home" />} />
//   //     </IonRouterOutlet>
//   //   </IonReactRouter>
//   // </IonApp>
//   );
// }
// export default App;
