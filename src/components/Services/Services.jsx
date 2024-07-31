import React from "react";
import "./Services.css"; // Assuming you have a CSS file for styling
import { servicesData } from "./servicesData";

const Services = () => {
  return (
    <div className="services">
      <div className="services-main-head">
        <h3>Services</h3>
        <i className="fa-solid fa-cube"></i>
      </div>

      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className="services-card" key={index}>
            <div className="services-card-content">
              <img src={service.imgSrc} alt="img" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
