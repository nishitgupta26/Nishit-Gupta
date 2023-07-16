import React, { useState, useLayoutEffect, useRef } from "react";

import "./Loading.css";

import { gsap } from "gsap";
import { Power3 } from "gsap";
import { TimelineLite } from "gsap/gsap-core.js";
import { CSSPlugin } from "gsap/CSSPlugin";


const Loading = () => {
    gsap.registerPlugin(CSSPlugin);

  
  let item = useRef(new Array());
  const names = ["N", "I", "S", "H", "I", "T", ".", "G", "U", "P", "T", "A"];

  const [tl1] = useState(new TimelineLite({ paused: false }));

  useLayoutEffect(() => {
    tl1.to(item.current, {
          y: 0,
          stagger: 0.1,
          delay: 0.05,
          duration: 0.05,
        },"a")
    .to(item.current, {
      y: "-14vw",
      stagger: 0.1,
      delay: 1,
      duration: 0.05,
    },"b");
  }, []);

  return (
    <div className="header"  >
          <div
            className="myText"
          >
            {names.map((name,index)=>(
            <div key={index} className={`char ${(name==='.')&&"dot"}`} ref={(el) => {
                item.current.push(el);
              }}>
              {name}
            </div>
          ))}
          </div>
        </div>
  )
}

export default Loading