import React from "react";
import ProjectCard from "./ProjectCard";

import fuzzingVideo from "../../assets/fuzzing.mp4";
import callingVideo from "../../assets/calling.mp4";
import portfolioVideo from "../../assets/portfolio.mp4";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">

      <h1 className="text-2xl md:text-4xl font-bold mb-8">
        Projects
      </h1>

      <div className="py-12 px-8 flex flex-wrap gap-8 justify-center">

        <ProjectCard
          title="Web Fuzzing Tool"
          main="Security testing tool built using React, Tailwind CSS and Node.js to detect SQL Injection (SQLi) and XSS vulnerabilities."
          video={fuzzingVideo}
        />

        <ProjectCard
          title="Voice & Video Calling App"
          main="Real-time calling application built using React and ZEGOCLOUD SDK with peer-to-peer communication."
          video={callingVideo}
        />

        <ProjectCard
          title="Personal Portfolio Website"
          main="Responsive portfolio website built using HTML, CSS and JavaScript and deployed on GitHub Pages."
          video={portfolioVideo}
        />

      </div>
    </div>
  );
};

export default Projects;
