import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">

      <h1 className="text-2xl md:text-4xl font-bold mb-10 text-center">
        My Projects
      </h1>

      <div className="flex flex-wrap justify-center gap-10">

        {/* Portfolio Website */}
        <ProjectCard
          title="Personal Portfolio Website"
          main="Modern responsive portfolio built using React and Tailwind CSS showcasing projects, skills, and contact details."
          video="/videos/portfolio.mp4"
          liveLink="https://nitinmathur.netlify.app/"
          sourceCode="https://github.com/nitinmathur021-png/Portfolio"
        />

        {/* Voice & Video Calling App */}
        <ProjectCard
          title="Voice & Video Calling App"
          main="Real-time calling application built using React and ZEGOCLOUD SDK with peer-to-peer video and voice communication."
          video="/videos/calling.mp4"
          liveLink="https://video-voice.netlify.app/"
          sourceCode="https://github.com/nitinmathur021-png/video-calling"
        />

        {/* Web Fuzzing Tool */}
        <ProjectCard
          title="Web Fuzzing Tool"
          main="Security testing tool built using React, Tailwind CSS, and Node.js to detect SQL Injection (SQLi) and XSS vulnerabilities."
          video="/videos/fuzzing.mp4"
          liveLink="https://your-fuzzing-live-link.netlify.app/"
          sourceCode="https://github.com/nitinmathur021-png/web-fuzzing-tool"
        />

      </div>

    </div>
  );
};

export default Projects;
