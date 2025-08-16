import React, { useState } from "react";
import { X, AlignJustify } from "lucide-react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => setMenu(!menu);
  const closeMenu = () => setMenu(false);

  return (
    <nav className="static flex flex-wrap justify-between md:items-center px-10 pt-6 md:px-20 bg-slate-100 ">
      <span className="text-xl tracking-wide">Anoop's Portfolio</span>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6">
        <a href="#home"><li className="text-md transition-all duration-300">Home</li></a>
        <a href="#about"><li className="text-md transition-all duration-300">About</li></a>
        <a href="#projects"><li className="text-md transition-all duration-300">Projects</li></a>
        <a href="#contact"><li className="text-md transition-all duration-300">Contact</li></a>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        {menu ? (
          <X
            size={30}
            className="absolute right-10 top-6 cursor-pointer z-50"
            onClick={toggleMenu}
          />
        ) : (
          <AlignJustify
            size={30}
            className="absolute right-10 top-6 cursor-pointer"
            onClick={toggleMenu}
          />
        )}
      </div>

      {/* Sliding Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-amber-50 bg-opacity-95 text-black transform transition-transform duration-500 z-40 
          ${menu ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex flex-col gap-6 mt-20 ml-6 ">
          <a href="#home" onClick={closeMenu}><li>Home</li></a>
          <a href="#about" onClick={closeMenu}><li>About</li></a>
          <a href="#projects" onClick={closeMenu}><li>Projects</li></a>
          <a href="#contact" onClick={closeMenu}><li>Contact</li></a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
