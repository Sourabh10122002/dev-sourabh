import React from "react";
import { Link } from "react-router-dom";
import { projectsData } from "./WorkData";
import "./Works.css";

const Works = () => {
  return (
    <section className="projects">
      <div className="wrapper">
        <div className="projects-head">
          <h3>Projects</h3>
          <div className="projects-button">
            <button type="button" className="project-btn">
              All
            </button>
            <button type="button" className="project-btn">
              Website
            </button>
            <button type="button" className="project-btn">
              Mobile App
            </button>
            {/* <button type="button" className="project-btn">
              Branding
            </button> */}
          </div>
        </div>
        <div className="examples">
          {projectsData.map((project, index) => (
            <Link to={project.to} key={index}>
              <figure
                className="ls-izmir ls-border-bottom-left ls-image-rotate-right ls-gradient-bottom-right"
                tabIndex="0"
                style={{
                  "--primary-color": project.primaryColor,
                  "--secondary-color": project.secondaryColor,
                  "--image-opacity": 0.1,
                  "--border-margin": "30px",
                  "--padding": "20px",
                }}
              >
                <img src={project.src} alt={project.alt} />
                <figcaption className="ls-layout-bottom-left">
                  <div className="ls-reveal-right ls-delay-100">
                    <h4>{project.caption}</h4>
                  </div>
                </figcaption>
              </figure>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
