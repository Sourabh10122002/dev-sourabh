import "./Experience.css"; // Assuming you have a CSS file for styling
import { experienceData } from "./experienceData";

const Experience = () => {
  return (
    <div className="experience">
      <div className="experience-icon">
        <h3>Experience</h3>
        <i className="fa-solid fa-suitcase"></i>
      </div>
      <div className="experience-main-head">
        <div className="experience-container">
          {experienceData.map((exp, index) => (
            <div className="experience-content" key={index}>
              <div className="experience-date">
                <p>{exp.date}</p>
              </div>
              <div className="experience-text">
                <p className="experience-head">{exp.company}</p>
                <p className="experience-sub-head">{exp.position}</p>
                <p className="experience-para">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
