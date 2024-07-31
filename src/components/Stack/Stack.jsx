import React from "react";
import "./Stack.css"; // Assuming you have a CSS file for styling
import { stackData } from "./stackData";

const Stack = () => {
  return (
    <div className="stack">
      <div className="stack-icon">
        <h3>Stack</h3>
        <i className="fa-solid fa-cube"></i>
      </div>
      <div className="stack-main-head">
        <div className="stack-container">
          {stackData.map((stack, index) => (
            <div className="stack-outer" key={index}>
              <div className="stack-sub-head">
                <p>{stack.category}</p>
              </div>
              {stack.tools.map((tool, toolIndex) => (
                <div className="stack-image" key={toolIndex}>
                  <div className="stack-image-content">
                    <img src={tool.imgSrc} alt={tool.title} />
                  </div>
                  <div className="stack-text-content">
                    <h5 className="stack-para">{tool.title}</h5>
                    <p>{tool.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stack;
