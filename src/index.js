import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyAt5FpnXQXzZa8hj_YaReIUwBgW11YdZKM",
  authDomain: "test-noti-dbae3.firebaseapp.com",
  projectId: "test-noti-dbae3",
  storageBucket: "test-noti-dbae3.appspot.com",
  messagingSenderId: "386458624453",
  appId: "1:386458624453:web:43793f1a47950e0125ebac"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


