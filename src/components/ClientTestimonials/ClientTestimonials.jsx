import React from "react";
import "./ClientTestimonials.css"; // Assuming you have a CSS file for styling
import { testimonials } from "./testimonialsData";

const ClientTestimonials = () => {
  return (
    <section className="client-container">
      <div className="client-main-head">
        <h3>Client love</h3>
        <i className="fa-solid fa-quote-right"></i>
      </div>
      <div className="ce2-p1-e2" id="ce2-p1-e2">
        {testimonials.map((testimonial, index) => (
          <div className="p1-e2-cntr" key={index}>
            <p>{testimonial.text}</p>
            <div className="client-head">
              <img src={testimonial.img} alt="client-img" />
              <div className="client-name">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientTestimonials;
