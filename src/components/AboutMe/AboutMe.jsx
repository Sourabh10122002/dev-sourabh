import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="about">
      <div className="about-wrapper">
        <div className="about-container">
          <div className="about-text-content">
            <h3 className="about-head">Sourabh Rawat</h3>
            <h4 className="about-sub-head">Developer</h4>
            <p>
              I'm a User Experience/Interface Designer focused on Visual Design
              for websites and mobile apps. Currently working as UX/UI designer
              at Grarri Private Limited. By continuously learning, practicing
              and reflecting, I seek to create simple and aesthetic interactive
              experiences. I enjoy turning complex problems into simple,
              beautiful and intuitive designs.
            </p>
            <br />
            <p>
              Apart from designing, I also enjoy building websites and playing
              with CSS animation. On Instagram, we have a community of 10K+
              designers, where I help them with UI/UX Design and Web
              Development. I also share UI/UX tutorials and tips. So when I'm
              not pushing pixels, you'll find me scrolling through my Instagram
              or Twitter feed.
            </p>
            <br />
            <p>Here's a fun fact: I prefer tea to coffee ☕</p>
            <div className="about-buttons">
              <a className="about-cv-btn" href="/download">
                Download CV
              </a>
              <a className="about-contact-btn" href="/contact">
                Contact Me
              </a>
            </div>
          </div>
          <div className="about-image-content">
            <img
              src="https://www.shutterstock.com/image-vector/hands-work-laptop-keyboard-blank-260nw-1905729013.jpg"
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
