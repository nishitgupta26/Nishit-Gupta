import React from "react";
import "./cform.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowRight, GeoAlt } from "react-bootstrap-icons";
import "bootstrap-icons/font/bootstrap-icons.css";

const CForm = () => {
  return (
    <div class="c-form">
      <form action="https://formspree.io/f/xnqkqvba" method="post" role="form" class="form">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            class="form-control"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div class="form-group">
          <label for="name">Email</label>
          <input
            type="email"
            class="form-control"
            name="email"
            id="email"
            placeholder="E-mail"
            required
          />
        </div>

        <div class="form-group">
          <label for="name">Subject</label>
          <input
            type="text"
            class="form-control"
            name="subject"
            id="subject"
            placeholder="Subject"
            required
          />
        </div>
        <div class="form-group">
          <label for="name">Message</label>
          <textarea
            class="form-control"
            name="message"
            rows="15"
            placeholder="Message"
            required
          ></textarea>
        </div>
        {/* <div class="my-3">
          <div class="loading">Loading</div>
          <div class="error-message"></div>
          <div class="sent-message">Your message has been sent. Thank you!</div>
        </div> */}
        <div class="c-form-submit">
        <button>
  <div class="svg-wrapper-1">
    <div class="svg-wrapper">
      <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
      </svg>
    </div>
  </div>
  <span>Send</span>
</button>
        </div>
      </form>
    </div>
  );
};

export default CForm;
