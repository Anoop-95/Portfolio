import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaBook } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import RevealonScroll from "../RevealonScroll";

const About = () => {
  const skills = [
    { Icon: FaHtml5, color: "#E34F26", name: "HTML" },
    { Icon: FaCss3Alt, color: "#1572B6", name: "CSS" },
    { Icon: FaJs, color: "#F7DF1E", name: "JavaScript" },
    { Icon: FaReact, color: "#61DAFB", name: "React" },
    { Icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind" },
    { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
    { Icon: SiExpress, color: "#FF4438", name: "Express" },
    { Icon: FaNodeJs, color: "#339933", name: "Node.js" },
    { Icon: SiMysql, color: "#00758F", name: "MySQL" },
    { Icon: FaPython, color: "#3776AB", name: "Python" },
  ];

  return (
    <section id="about" className="p-10 md:p-24  bg-gray-100">
      <RevealonScroll>
      <h1 className="text-2xl md:text-4xl  font-bold mb-8">About Me</h1>
      <div className="flex flex-wrap items-center justify-around">
        
        {/* Skills Icons */}
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          {skills.map(({ Icon, color, name }) => (
            <span key={name} className="p-3 bg-zinc-600 flex flex-col items-center rounded-2xl">
              <Icon color={color} size={50} />
              <p className="text-white mt-2 text-sm">{name}</p>
            </span>
          ))}
        </div>

        {/* Experience Card */}
        <div>
          <div className="flex gap-10 bg-slate-700 bg-opacity-45 mt-4 rounded-lg p-4 items-start max-w-md">
            <FaBook color="#E34F26" size={50} />
            <span className="text-white break-words">
              <h2 className="leading-tight">Education 🏫 (2020-2024)</h2>
              
              <ul className="text-sm p-2 list-disc list-inside">
                <li>Bachelor of Engineering in Computer Science</li>
                <li>Relevant Courses: Artificial Intelligence, Web Technologies, Cloud Computing</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
      </RevealonScroll>
    </section>
  );
};

export default About;
