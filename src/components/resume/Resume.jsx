import React,{useRef,useMemo,useLayoutEffect} from "react";
import "./resume.css";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


const Resume = () => {

  const comp2 = useRef();
  const r1 = useRef();
  const tl = useMemo(() => gsap.timeline({ paused: false }), []);

  React.useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // use scoped selectors

      tl.fromTo(
        ".resume-item",
        {
          x: "150px",
          opacity: 0,
        },
        {
          x: 0,
          opacity:1,
          stagger: 0.3,
          delay: 0.05,
          duration: 2,     
          scrollTrigger: {
            trigger: r1.current,
            scrub: true,
            // markers: true,
            start: 'top bottom',
            end: '30% top',
          },
        },
        "a"
      );

      ScrollTrigger.create({
        trigger: r1.current,
        // markers:true,
        start:"top 50%",
        end:"bottom 0%", 
      
        onEnter: () => {
          gsap.to('body', { duration: 1.5, backgroundColor: '#000'})
        },
        
        onLeaveBack: () => {
          gsap.to('body', { duration: 1.5, backgroundColor: '#000336'})
        },
      
        
      });
      
    }, comp2);

    return () =>{ ctx.revert();
      tl.kill();}
  }, [tl]);

  return (
    <div  id="resume" className="r" ref={comp2} >
      <div className="r-container" ref={r1}>
        <div class="r-section-title">
          <h2 className="heading">Resume</h2>

          <div class="r-row">
            <div class="col-lg-6" 
            // data-aos="fade-up" 
            // data-aos-delay='100' 
            // data-aos-duration='500'
            >
              <h3 class="resume-title">Education</h3>
              
              
              <div class="resume-item">
                <h4>Graduation</h4>
                <h5>2021-Present</h5>
                <p>
                  <em>
                    The LNM Institute of informational Technology, Jaipur,
                    Rajasthan
                  </em>
                </p>
                <p>
                  CGPA(till 4th sem) : <strong>6.83</strong>
                </p>
              </div>
              <div class="resume-item">
                <h4>Secondary (XII th)</h4>
                <h5>2021</h5>
                <p>
                  <em>
                    Sarvodaya Senior Secondary School, Hindaun City,
                    Rajasthan(322230)
                  </em>
                </p>
                <p>
                  Precentage : <strong>97.80%</strong>
                </p>
              </div>
              <div class="resume-item">
                <h4>Secondary (X th)</h4>
                <h5>2019</h5>
                <p>
                  <em>
                    Holy Angel's English Secondary School,Hindaun
                    City,Rajasthan(322230)
                  </em>
                </p>
                <p>
                  Precentage : <strong>90.83%</strong>
                </p>
              </div>
            </div>
            <div
              class="col-lg-6 "
              // data-aos="fade-up" data-aos-delay='100' data-aos-duration='500'
              >
              <h3 class="resume-title">Extra-Currricular</h3>
              <div class="resume-item">
                <h4>Member</h4>
                <h5>2022 - Present</h5>
                <p>
                  <em> @Sankalp Social Club,LNMIIT</em>
                </p>
              </div>
              <div class="resume-item">
                <h4>Open Source Contributor</h4>
                <h5>2023 - Present</h5>
                <p>
                  <em>Open Source Contributor @SSOC'23(Social Summer Of Code Season 2 )</em>
                </p>
              </div>
              <div class="resume-item">
                <h4>Moz-Hacks</h4>
                <h5>2023</h5>
                <p>
                  <em>Participated and got 1st place in a intra college Hackathon organised by Mozilla Firefox Team at LNMIIT</em>
                </p>
                <p>Created a working cross-browser extension using Google Search API</p>
              </div>
              <div class="resume-item">
                <h4>LNMHacks 5.0</h4>
                <h5>2023</h5>
                <p>
                  <em>Participated a inter college Hackathon organised by LNMIIT</em>
                </p>
                <p>Created a clone of Chat-GPT using Open API</p>
              </div>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
