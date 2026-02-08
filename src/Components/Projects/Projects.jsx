import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">

      <h1 className="text-2xl md:text-4xl font-bold mb-10 text-center">
        My Projects
      </h1>

      <div className="flex flex-wrap justify-center gap-10">

        <ProjectCard
          title="Personal Portfolio Website"
          main="Modern responsive portfolio built using React and Tailwind CSS showcasing projects, skills, and contact details."
          liveLink="https://nitinmathur.netlify.app/"
          sourceCode="https://github.com/nitinmathur021-png/Portfolio"
        />

        <ProjectCard
          title="Voice & Video Calling App"
          main="Real-time calling application built using React and ZEGOCLOUD SDK with peer-to-peer video and voice communication."
          liveLink="https://video-voice.netlify.app/"
          sourceCode="https://github.com/nitinmathur021-png/video-calling"
        />

        <ProjectCard
          title="Web Fuzzing Tool"
          main="Security testing tool built using React, Tailwind CSS, and Node.js to detect SQL Injection (SQLi) and XSS vulnerabilities."
          liveLink="https://your-fuzzing-live-link.netlify.app/"
          sourceCode="https://github.com/nitinmathur021-png/web-fuzzing-tool"
        />

      </div>

    </div>
  );
};

export default Projects;
