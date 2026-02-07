import React, { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ title, main, video, liveLink, sourceCode }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div
      className="relative w-80 md:w-96 bg-slate-900 bg-opacity-40 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video Section */}
      <div className="relative h-52 overflow-hidden">

        <video
          ref={videoRef}
          src={video}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
          muted
          loop
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-4">

          {/* Live Button */}
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm font-semibold transition"
          >
            <FiExternalLink /> Live Demo
          </a>

          {/* Source Code Button */}
          <a
            href={sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded-full text-sm font-semibold transition"
          >
            <FaGithub /> Source Code
          </a>

        </div>
      </div>

      {/* Text Section */}
      <div className="p-5">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-gray-300 leading-relaxed">{main}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
