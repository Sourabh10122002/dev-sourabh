import React from "react";
import Newsletter from "../../components/Newsletter/Newsletter";
import Works from "../../components/Works/Works";
import Stack from "../../components/Stack/Stack";
import Brands from "../../components/Brands/Brands";
import ClientTestimonials from "../../components/ClientTestimonials/ClientTestimonials";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <section class="home">
        <h3 class="home-green-head"> * Available for new Projects</h3>
        <div class="home-wrapper">
          <div class="home-container">
            <div class="home-text-content">
              <h3 class="home-head">Sourabh Rawat</h3>
              <br />
              <h3 class="home-sub-head">Web Developer</h3>

              <br />
              <p>
                I'm a product designer from India, focused on Visual Design for
                websites and mobile apps. I optimize business goals by solving
                human problems through user research and design.
              </p>
              <div class="home-buttons">
                <a class="home-cv-btn" href="/download">
                  Download CV
                </a>
                <a class="home-contact-btn" href="/contact">
                  Contact Me
                </a>
              </div>
            </div>
            <div class="home-image-content">
              <img
                src="https://www.shutterstock.com/image-vector/hands-work-laptop-keyboard-blank-260nw-1905729013.jpg"
                alt="img"
              />
            </div>
          </div>
        </div>
      </section>
      <Works />
      <Brands />
      <ClientTestimonials />
      <Stack />
      <Newsletter />
    </div>
  );
};

export default Home;
