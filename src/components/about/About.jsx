import React from "react";
import "./about.css";
import MeAbout from "../../img/Me-about.png";
import AwardImg from "../../img/award.png";
const About = () => {
  return (
    <div className="a">
    <div className="container">
      {/* <div className="a-left"> */}
      <div className="upper">
        <h2 className="heading">About</h2>
        <p className="desc">
            kjdf ,vnxckjnvk , vkjlnfxk v,mdnfxkjvn,d fxmvkjxnv v,lfnhb dfxoihdf
            bbnhdfnbnfdvdfclvndls vlknfxcvv vflknb vln vkjnvfklcxnv .
        </p>
      </div>
      <div className="details">
        <div className=" col-lg-4 ">
          <img
            src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="" className="about-img"
          />
        </div>
        <div className=" col-lg-8 right">
          <h3>Web-Developer & Competetive Coder</h3>
          <p>kjdf ,vnxckjnvk , vkjlnfxk v,mdnfxkjvn,d fxmvkjxnv v,lfnhb dfxoihdf
        bbnhdfnbnfdvdfclvndls vlknfxcvv vflknb vln vkjnvfklcxnv .</p>
        <div class="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i class="fa-solid fa-chevron-right"></i> 
                    <strong>Birthday:</strong> 
                    <span>13 Feb 2004</span>
                  </li>
                  <li>
                    <i class="fa-solid fa-chevron-right"></i> 
                    <strong>Website:</strong> 
                    <span>www.nishitgupta.com</span>
                  </li>
                  <li>
                    <i class="fa-solid fa-chevron-right"></i> 
                    <strong>Phone:</strong> 
                    <span>+91-7073925626</span>
                  </li>
                  <li>
                    <i class="fa-solid fa-chevron-right"></i> 
                    <strong>City:</strong> 
                    <span>Jaipur,Rajasthan</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i class="fa-solid fa-chevron-right"></i> 
                    <strong>Degree:</strong> 
                    <span>B.Tech</span>
                  </li>
                  <li>
                    <i class="fa-solid fa-chevron-right"></i> 
                    <strong>Branch:</strong> 
                    <span>CCE</span>
                  </li>
                  <li>
                  <i class="fa-solid fa-chevron-right"></i> 
                    <strong>Email:</strong> 
                    <span>21ucc070@lnmiit.ac.in</span>
                  </li>
                  <li>
                    <i class="fa-solid fa-chevron-right"></i> 
                    <strong>Open To Work:</strong> 
                    <span>Yes</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="bottom">Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.</p>
        </div>
      </div>

      {/* </div> */}
    </div>
    </div>
  );
};

export default About;
