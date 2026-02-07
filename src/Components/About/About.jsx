import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold mb-6">About Me</h2>

        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          
          <img className="md:h-80 mb-6 md:mb-0" src={AboutImg} alt="About img" />

          <ul>

            {/* EDUCATION */}
            <div className="flex gap-3 py-4">
              <IoArrowForward size={28} className="mt-1 text-blue-400" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold">
                  Computer Science Student
                </h1>
                <p className="text-sm md:text-md leading-relaxed">
                  I am currently pursuing a Bachelor of Technology (B.Tech) in
                  Computer Science at KIET Group of Institutions, Ghaziabad
                  (2023–2027). I have a strong foundation in
                  programming and core computer science fundamentals.
                </p>
              </span>
            </div>

            {/* SKILLS */}
            <div className="flex gap-3 py-4">
              <IoArrowForward size={28} className="mt-1 text-blue-400" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold">
                  Technical Skills
                </h1>
                <p className="text-sm md:text-md leading-relaxed">
                  I have experience with C and Java, along with frontend
                  technologies including HTML, CSS, JavaScript, React, and
                  Tailwind CSS. I am comfortable working with GitHub, VS Code,
                  and IntelliJ IDEA.
                </p>
              </span>
            </div>

            {/* CS FUNDAMENTALS */}
            <div className="flex gap-3 py-4">
              <IoArrowForward size={28} className="mt-1 text-blue-400" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold">
                  Core Knowledge
                </h1>
                <p className="text-sm md:text-md leading-relaxed">
                  I possess strong understanding of Object-Oriented Programming,
                  Data Structures, and Operating Systems. I enjoy solving
                  problems and continuously improving my logical thinking
                  skills.
                </p>
              </span>
            </div>

            {/* GOALS */}
            {/* <div className="flex gap-3 py-4">
              <IoArrowForward size={28} className="mt-1 text-blue-400" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold">
                  Career Goals
                </h1>
                <p className="text-sm md:text-md leading-relaxed">
                  I am passionate about web development and building
                  real-world applications. My goal is to gain practical
                  experience through internships and contribute to impactful
                  projects while continuously learning new technologies.
                </p>
              </span>
            </div> */}

          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
