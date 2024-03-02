import React, { useEffect } from "react";
import Intro from "./intro/Intro";
import About from "./about/About";
import { useHistory } from "react-router-dom";
import { App as CapacitorApp } from "@capacitor/app";

function Home() {
  const history = useHistory();

  const exit = async () => {
    await CapacitorApp.exitApp();
  };
  useEffect(() => {
    const goBack = () => {
      exit();
    };
    CapacitorApp.addListener("backButton", goBack);
    return () => CapacitorApp.removeAllListeners();
  }, [history]);

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
