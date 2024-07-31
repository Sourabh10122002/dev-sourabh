import React from "react";
import "./Brands.css"; // Assuming you have a CSS file for styling
import { brandsData } from "./brandsData";

const Brand = () => {
  return (
    <section className="brand">
      <h3>I have been fortunate enough to work with </h3>
      <h3>
        many <span>awesome</span> companies and brands
      </h3>

      <div className="brand-container">
        <div className="brand-wrapper">
          {brandsData.map((brand, index) => (
            <div className="brand-company" key={index}>
              <i className={brand.icon}></i>
              <p>{brand.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brand;
