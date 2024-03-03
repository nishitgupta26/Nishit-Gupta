import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { App as CapacitorApp } from "@capacitor/app";

export const useBackButton = (route) => {
  const history = useHistory();

  useEffect(() => {
    const exit = async () => {
      await CapacitorApp.exitApp();
    };

    const goToRoute = (val) => {
        history.push(`${val}`);
      };

    const goBack = () => {
      if(route==="exit"){
        exit();
      }
      else{
        goToRoute(route);
      }
    };

    CapacitorApp.addListener("backButton", goBack);
    return () => CapacitorApp.removeAllListeners();
  }, [history,route]); // Re-run effect when history changes
};
