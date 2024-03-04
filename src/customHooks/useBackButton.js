import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { App as CapacitorApp } from "@capacitor/app";

export const useBackButton = (route) => {
  const navigate = useNavigate();

  useEffect(() => {
    const exit = async () => {
      await CapacitorApp.exitApp();
    };

    const goToRoute = (val) => {
      navigate(`${val}`);
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
  }, [navigate,route]); // Re-run effect when history changes
};
