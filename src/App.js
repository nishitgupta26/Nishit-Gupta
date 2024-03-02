import React, { useEffect } from "react";
import Home from "./components/Home";
import "./app.css";
import Loading from "./Loading";
// import '@ionic/react/css/core.css';
// import {setupIonicReact,IonApp,IonRouterOutlet} from "@ionic/react"
import {
  setupIonicReact
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { BrowserRouter, Switch, Route, Redirect,useHistory } from "react-router-dom";
import New from "./components/New";
import { App as CapacitorApp } from "@capacitor/app";
import New1 from "./components/New1";
setupIonicReact();

function App() {
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