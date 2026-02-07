import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="Footer" className="flex justify-center py-16">

      {/* Main Footer Card */}
      <div className="w-[90%] md:w-[60%] bg-gradient-to-r from-[#1f2937] via-[#111827] to-black text-white rounded-2xl p-10 shadow-2xl">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Let’s Connect</h1>
          <p className="text-gray-400 text-sm">
            Open to collaborations and exciting opportunities.
          </p>
        </div>

        <ul className="space-y-5 text-sm md:text-base">

          <li className="flex items-center gap-3 hover:scale-105 transition duration-300">
            <MdOutlineEmail size={22} />
            <a href="mailto:mathurnitin274@gmail.com">
              mathurnitin274@gmail.com
            </a>
          </li>

          <li className="flex items-center gap-3 hover:scale-105 transition duration-300">
            <FaPhone size={20} />
            <a href="tel:+919821172798">
              +91 9821172798
            </a>
          </li>

          <li className="flex items-center gap-3 hover:scale-105 transition duration-300">
            <CiLinkedin size={24} />
            <a
              href="https://www.linkedin.com/in/nitin-mathur03/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/nitin-mathur03
            </a>
          </li>

          <li className="flex items-center gap-3 hover:scale-105 transition duration-300">
            <FaGithub size={22} />
            <a
              href="https://github.com/nitinmathur021-png"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/nitinmathur021-png
            </a>
          </li>

        </ul>

        <div className="text-center mt-10 text-gray-500 text-xs">
          © {new Date().getFullYear()} Nitin Mathur. All rights reserved.
        </div>

      </div>
    </div>
  );
};

export default Footer;
