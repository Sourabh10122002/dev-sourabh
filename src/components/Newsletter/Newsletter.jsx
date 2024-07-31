import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section className="newslater-container">
      <div className="newsletter">
        <div className="newsletter-content">
          <h5>
            Join <span className="highlight">3500+</span> Readers
          </h5>
          <p className="newslater-para">
            Receive weekly updates on Design and Productivity
          </p>
        </div>
        <div className="newsletter-form">
          <input type="email" id="input" placeholder="name@email.com" />
          <button>Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
