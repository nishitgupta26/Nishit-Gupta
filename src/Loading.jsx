import React, { useState, useLayoutEffect, useRef } from "react";

import "./Loading.css";

import { gsap } from "gsap";
import { TimelineLite } from "gsap/gsap-core.js";
import { CSSPlugin } from "gsap/CSSPlugin";

const Loading = () => {
  gsap.registerPlugin(CSSPlugin);

  let item = useRef(new Array());
  let comp = useRef();
  const names = ["N", "I", "S", "H", "I", "T", ".", "G", "U", "P", "T", "A"];

  const [tl1] = useState(new TimelineLite({ paused: false }));
  
  useLayoutEffect(() => {
    
    let ctx = gsap.context(() => {
      tl1.set(document.body, {overflowY: "hidden"})
      .to(
        item.current,
        {
          y: 0,
          stagger: 0.1,
          delay: 0.05,
          duration: 0.05,
        },
        "a"
      )
      .to(
        item.current,
        {
          y: "-14vw",
          stagger: 0.1,
          delay: 1,
          duration: 0.05,
        },
        "b"
      )
      .to(
        ".bar", 1,
        {
          height:0,
          stagger:{
            amount:0.5,
          }
        },
        "c"
      )
      .set(document.body, {overflowY: "auto"})
      ;
    }, comp);

    return () =>{ ctx.revert();
      tl1.kill();}
    
  }, [tl1]);

  return (
    <div ref={comp}>
    <div className="overlay">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
    <div className="header">
      <div className="myText">
        {names.map((name, index) => (
          <div
            key={index}
            className={`char ${name === "." && "dot"}`}
            ref={(el) => {
              item.current.push(el);
            }}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Loading;
