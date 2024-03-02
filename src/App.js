import React from "react";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import "./app.css";
import {
  setupIonicReact
} from "@ionic/react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Home from "./components/Home";
// import New from "./components/New";
// import New1 from "./components/New1";
import { Redirect } from "react-router-dom";
setupIonicReact();

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/" component={Home} exact={true} /> */}
        <Route path="/intro" component={Intro} exact={true} />
        <Route path="/about" component={About} exact={true} />
        <Route path="/skills" component={Skills} exact={true} />
        <Route path="/resume" component={Resume} exact={true} />
        <Route path="/education" component={Resume} exact={true} />
        <Route path="/contact" component={Contact} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/intro" />} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;