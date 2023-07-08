import React from "react";
import "./contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowRight, GeoAlt } from "react-bootstrap-icons";
import "bootstrap-icons/font/bootstrap-icons.css";
import CForm from "./CForm.jsx";

const Contact = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="contact" className="c">
      <div className="c-container">
        <div class="contact-title">
          <h2>Contact Us</h2>
        </div>
        <div className="c-row aos-init aos-animate" data-aos="fade-up">
          <div className="left-side">
            <div class="things">
              <div class="address">
                {/* <GeoAlt className='iconsinc'/> */}
                <i class="bi bi-geo-alt cont-icons"></i>
                <h4 className="icon-title">Location:</h4>
                <p className="icon-detail">Jaipur(302031),Rajasthan,India</p>
              </div>

              <div class="email">
                <i class="bi bi-envelope cont-icons"></i>
                <h4 className="icon-title">Email:</h4>
                <p className="icon-detail">guptanishit.2626@gmail.com</p>
              </div>

              <div class="phone">
                <i class="bi bi-phone cont-icons"></i>
                <h4 className="icon-title">Call:</h4>
                <p className="icon-detail">+91-7073925626</p>
              </div>

              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style={{border:0; width: 100%; height: 290px;}} allowfullscreen=""></iframe> */}
            </div>
          </div>
          <div class=" right-side">
            <CForm />
          </div>
          <div className="c-s-links">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
