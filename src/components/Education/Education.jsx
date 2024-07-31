import React from "react";
import "./Education.css"; // Assuming you have a CSS file for styling
import { educationData } from "./educationData";

const Education = () => {
  return (
    <div className="experience">
      <div className="experience-icon">
        <h3>Education</h3>
        <i className="fa-solid fa-book-open"></i>
      </div>
      <div className="experience-main-head">
        <div className="experience-container">
          {educationData.map((edu, index) => (
            <div className="experience-content" key={index}>
              <div className="experience-date">
                <p>{edu.date}</p>
              </div>
              <div className="experience-text">
                <p className="experience-head">{edu.institution}</p>
                <p className="experience-sub-head">{edu.degree}</p>
                <p className="experience-para">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
