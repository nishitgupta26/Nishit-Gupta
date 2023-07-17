import React,{useRef} from "react";
import "./about.css";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutImag from "../../img/about-imag.jpg";


import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import ScrollTrigger from 'gsap/ScrollTrigger';

const About = () => {
  gsap.registerPlugin(CSSPlugin,ScrollTrigger);

  const comp = useRef();

  React.useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // use scoped selectors
      // gsap.to(".left-one", { opacity:0,
      //    delay: 1,
      //   duration: 2,
      //   scrollTrigger: {
      //     trigger: ".left-one",scrub: true,markers:true
      //   } });
      
    }, comp);
    
    return () => ctx.revert();
    
  }, []);

  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="about" ref={comp} className="a">
      <div className="a-container">
        {/* <div className="a-left"> */}
        <div className="upper">
          <h2 className="heading">About</h2>
        </div>
        <div className="details">
          <div
            className=" left-one aos-init aos-animate"
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="500"
          >
            <img src={AboutImag} alt="" className="about-img" />
          </div>
          <div
            className=" right-one aos-init aos-animate"
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="500"
          >
            <div className=" rightsmall">
              <h3>Web-Developer & Competetive Coder</h3>
              <p className="about-small-desc">
                Pre-Final Year student at LNMIIT pursuing B.Tech in Computer and
                Communication Engineering{" "}
              </p>
              <div class="a-row">
                <div className="a-row-left">
                  <ul>
                    <li>
                      <i class="fa-solid fa-chevron-right"></i>
                      <strong className="strng">Age:</strong>
                      <span>19</span>
                    </li>
                    <li>
                      <i class="fa-solid fa-chevron-right"></i>
                      <strong className="strng">Phone:</strong>
                      <span>7073925626</span>
                    </li>
                    <li>
                      <i class="fa-solid fa-chevron-right  "></i>
                      <strong className="strng">Website:</strong>
                      <span className=" "> www.nishitgupta.com</span>
                    </li>
                  </ul>
                </div>
                <div className="a-row-right">
                  <ul>
                    <li>
                      <i class="fa-solid fa-chevron-right  "></i>
                      <strong className="strng">Course:</strong>
                      <span>B.Tech in CCE</span>
                    </li>
                    <li>
                      <i class="fa-solid fa-chevron-right  "></i>
                      <strong className="strng">Email:</strong>
                      <span>21ucc070@lnmiit.ac.in</span>
                    </li>

                    <li>
                      <i class="fa-solid fa-chevron-right  "></i>
                      <strong className="strng">City:</strong>
                      <span>Jaipur,Rajasthan</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="bottom">
                Experienced and diligent B.Tech student with a strong focus on
                computer science. Skilled in  C++, HTML/CSS, and JavaScript,
                with familiarity in Java. Proficient in framework like React.js.
                Seeking opportunities to contribute to innovative projects and
                solve complex problems.Passionate about leveraging skills in
                software development to make a positive impact. Open to
                collaborations and discussing opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* </div> */}
      </div>
    </div>
  );
};

export default About;
