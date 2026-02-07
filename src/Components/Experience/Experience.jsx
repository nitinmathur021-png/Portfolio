import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiGithub, SiC } from "react-icons/si";

const Experience = () => {
  return (
    <div id="Skills" className="p-10 md:p-24">
      
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-10">
        My Skills
      </h1>

      <div className="flex flex-wrap items-center justify-around">

        {/* ICON GRID */}
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiTailwindcss color="#38B2AC" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiC color="#A8B9CC" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJava color="#f89820" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiGithub color="white" size={50} />
          </span>

        </div>

        {/* SKILL DESCRIPTION SECTION */}
        <div className="md:w-2/5 text-white">

          <div className="bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">
              Frontend Development
            </h2>
            <p className="text-sm leading-relaxed text-gray-300">
              Experienced in building responsive and interactive web
              applications using HTML, CSS, JavaScript, React and
              Tailwind CSS. Focused on clean UI design and user experience.
            </p>
          </div>

          <div className="bg-slate-950 bg-opacity-45 mt-6 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">
              Programming & CS Fundamentals
            </h2>
            <p className="text-sm leading-relaxed text-gray-300">
              Strong understanding of C and Java along with Object-Oriented
              Programming, Data Structures and Operating Systems.
            </p>
          </div>

          <div className="bg-slate-950 bg-opacity-45 mt-6 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">
              Tools & Platforms
            </h2>
            <p className="text-sm leading-relaxed text-gray-300">
              Comfortable using GitHub for version control and collaboration,
              along with VS Code and IntelliJ IDEA for development.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Experience;
