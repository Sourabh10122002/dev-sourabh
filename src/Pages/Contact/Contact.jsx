import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-section">
        <div className="form">
          <h2>
            Have a project in <span>mind?</span>
          </h2>
          <p>
            Please drop a message if you want to talk about a potential
            collaboration. I’m available for selected work.
          </p>
          <form className="form-st">
            <div className="form-upper-input">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-lower-input">
              <textarea
                name="message"
                cols="2"
                rows="6"
                placeholder="Type Your Message"
              ></textarea>
            </div>
            <button className="submit-btn">Submit</button>
          </form>
        </div>
        <div className="form-img">
          <img
            src="https://framerusercontent.com/images/JIUXRpQbtqcIB4CdOAU060p8mMQ.jpg"
            alt="contact-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
