import React from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import Services from "../../components/Services/Services";
import Experience from "../../components/Experience/Experience";
import Education from "../../components/Education/Education";
import Stack from "../../components/Stack/Stack";

const About = () => {
  return (
    <div>
      <AboutMe />
      <Services />
      <Experience />
      <Education />
      <Stack />
    </div>
  );
};

export default About;
