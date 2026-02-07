import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 relative">
      
      <span className="text-xl font-bold tracking-wide">
        Nitin Mathur
      </span>

      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-24 py-2 mt-4 font-semibold md:mt-0 bg-black px-4 rounded-xl bg-opacity-30 
        md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <a href="#About">
          <li className="hover:text-gray-300 transition-all duration-300">
            About
          </li>
        </a>

        <a href="#Skills">
          <li className="hover:text-gray-300 transition-all duration-300">
            Skills
          </li>
        </a>

        <a href="#Projects">
          <li className="hover:text-gray-300 transition-all duration-300">
            Projects
          </li>
        </a>

        <a href="#Footer">
          <li className="hover:text-gray-300 transition-all duration-300">
            Contact
          </li>
        </a>

        {/* Resume Download */}
        <a
          href="/Nitin_Mathur_Resume.pdf"
          download
          className="bg-[#465697] px-3 py-1 rounded-2xl hover:opacity-80 transition-all duration-300"
        >
          Resume
        </a>
      </ul>

      {/* Mobile Menu Icon */}
      {menu ? (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 cursor-pointer"
          onClick={() => setMenu(false)}
        />
      ) : (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 cursor-pointer"
          onClick={() => setMenu(true)}
        />
      )}
    </nav>
  );
};

export default Navbar;
