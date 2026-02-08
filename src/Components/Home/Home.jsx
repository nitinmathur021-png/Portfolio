import React from "react";
import avatarImg from "../../assets/ChatGPT Image Feb 7, 2026, 05_20_10 PM.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center p-10 md:p-20">

      {/* LEFT SIDE */}
      <div className="md:w-2/4 md:pt-10">
        
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>


        <p className="text-sm md:text-2xl tracking-tight mt-2 leading-relaxed text-gray-300">
         Transforming complex problems into clean, powerful, and user-focused web solutions.
        </p>

        <button
          onClick={() => window.location.href = "#Footer"}
          className="mt-6 text-white px-4 py-2 md:px-6 md:py-3 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Contact Me
        </button>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="mt-10 md:mt-0">
        <img className="w-72 md:w-96" src={avatarImg} alt="Avatar" />
      </div>

    </div>
  );
};

export default Home;
