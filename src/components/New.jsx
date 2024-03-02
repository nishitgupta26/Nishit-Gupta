import React,{useEffect} from "react";
import { useHistory } from "react-router-dom";
import { App as CapacitorApp } from "@capacitor/app";


function New() {
  const history = useHistory();

  const goToRoute = (val) => {
    history.push(`${val}`);
  };
  useEffect(() => {
    const goBack = () => {
      goToRoute("/");
    };
    CapacitorApp.addListener("backButton", goBack);
    return () => CapacitorApp.removeAllListeners();
  }, [history]);
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
