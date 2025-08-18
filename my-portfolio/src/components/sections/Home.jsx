import React from "react";
import PortfolioPic from '/portfolio_pic.jpg'
import TextChange from "../TextChange";
import { FaLinkedin, FaGithub } from "react-icons/fa";


const Home = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row w-full justify-between items-center p-10 md:p-20">

  {/* Content Section */}
  <div className="w-full md:w-2/4 md:pt-10 text-center md:text-left">
    <h1 className="text-xl md:text-6xl font-bold leading-normal tracking-tighter">
      Hi, I'm Anoop
    </h1>
    <h3 className="text-lg md:text-3xl font-semibold">Welcome to My Portfolio</h3>
    <span>
      <h5 className="text-md md:text-xl font-semibold">I'm a Software Engineer, also a</h5>
      <h5 className="text-md md:text-xl font-semibold text-amber-300 min-h-[2rem]"><TextChange /></h5>
    </span>
    <p className="text-sm md:text-2xl tracking-tight">
      I'm a Computer Science Student with experience in Design and Development of Web and Software Applications.
    </p>
    <div className="flex space-x-4 mt-5 justify-center md:justify-start">
      <a href="https://www.linkedin.com/in/anoop-badam-002b6325a/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-3xl text-blue-600 hover:text-blue-800 transition-colors duration-300" />
      </a>
      <a href="https://github.com/Anoop-95" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-3xl text-gray-800 hover:text-black transition-colors duration-300" />
      </a>
    </div>
  </div>

  {/* Image Section */}
  <div className="w-full md:w-auto mt-10 md:mt-0 flex justify-center">
    <img
      className="w-48 h-48 md:w-[500px] md:h-[500px] rounded-full object-cover border-l border-blue-500"
      src={PortfolioPic}
      alt="Portfolio"
    />
  </div>
</section>

  );
};

export default Home;


