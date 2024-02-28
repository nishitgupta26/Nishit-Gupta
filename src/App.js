import React, { useState, useEffect, useRef } from "react";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import "./app.css";
import Loading from "./Loading";

import LocomotiveScroll from "locomotive-scroll";
import { PushNotifications } from '@capacitor/push-notifications';

function App() {
  useEffect(() => {
    const setupPushNotifications = async () => {
        // Request permission for push notifications
        await PushNotifications.requestPermissions();

        // Register for push notifications
        PushNotifications.addListener('registration', (token) => {
            console.log('Push token:', token.value);
            // Save the token to your server or use it as needed
        });

        // Handle received notifications
        PushNotifications.addListener('pushNotificationReceived', (notification) => {
            console.log('Push notification received:', notification);
            // Handle the notification data (e.g., show an alert, navigate to a specific page)
        });

        // Handle tap on notification
        PushNotifications.addListener('pushNotificationActionPerformed', (action) => {
            console.log('Push notification action performed:', action);
            // Handle the action (e.g., navigate to a specific page)
        });
    };

    setupPushNotifications();
}, []);




  const ap1 = useRef();

  // const [loading, setloading] = useState(false);
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      lenisOptions: {
        wrapper: window,
        content: document.documentElement,
        lerp: 0.1,
        duration: 1.2,
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        // smoothTouch: true,
        wheelMultiplier: 1,
        // touchMultiplier: 1,
        normalizeWheel: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      }
    });
    // setloading(true);

    // setTimeout(() => {
    //   setloading(false);
    // }, 3700);
  }, []);

  return (
    <div className="app">
      {/* {loading ? (
        <Loading />
      ) : ( */}

      <Loading />
      <div className="app1" ref={ap1}>
        <Intro />
        <About />
        <Skills />
        <Resume />
        <Contact />
      </div>

      {/* )} */}
    </div>
  );
}
export default App;
