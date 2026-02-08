import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ title, main, liveLink, sourceCode }) => {
  return (
    <div className="w-80 md:w-96 bg-slate-900 bg-opacity-40 rounded-2xl p-6 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-white/10">

      {/* Project Title */}
      <h2 className="text-xl font-bold mb-3">{title}</h2>

      {/* Description */}
      <p className="text-sm text-gray-300 leading-relaxed mb-6">
        {main}
      </p>

      {/* Buttons */}
      <div className="flex gap-4">

        {/* Live Demo */}
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm font-semibold transition"
        >
          <FiExternalLink /> Live
        </a>

        {/* Source Code */}
        <a
          href={sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded-full text-sm font-semibold transition"
        >
          <FaGithub /> Code
        </a>

      </div>
    </div>
  );
};

export default ProjectCard;
