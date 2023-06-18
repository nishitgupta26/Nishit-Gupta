import React from "react";
import "./progressBar.css";

const ProgressBar = () => {
    window.onload = function() {
        what();
        function what(){
            let num = document.getElementById("num");
            let counter = 0;
            setInterval(() => {
              if (counter == 65) {
                clearInterval();
              } else {
                counter =counter +1;
                num.innerHTML = counter + "%";
                console.log(counter);
              }
            }, 30);
        };
    }
   
  return (
    <div className="p">
      <div className="progress">
        <div className="outer">
          <div className="inner">
            <div id="num"></div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="160px"
          height="160px"
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stop-color="#e91e63" />
              <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
          </defs>
          <circle cx="80" cy="80" r="70" stroke-linecap="round" />
        </svg>
      </div>
    </div>
  );
};

export default ProgressBar;
