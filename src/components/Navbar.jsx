import { RiCloseFill, RiMenu3Fill } from "@remixicon/react";
import React, { useState } from "react";
import { LINKS } from "../constants/index.js";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center  min-w-full bg-purple-950/20 py-4 px-[10vw] backdrop-blur-xl">
        
        <div className="text-white font-semibold text-lg uppercase">
          <a href="#">Garima Singh</a>
        </div>

        <div className="hidden md:flex space-x-8">
          {LINKS.map((link, index) => (
            <a key={index} href={link.href} className="text-white hover:text-purple-300 duration-300">
              {link.label}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          >
            {menuOpen ? (
                <RiCloseFill className="w-6 h-6"/>
            ):(
                <RiMenu3Fill className="w-6 h-6"/>
            )}
          </button>
        </div>
      </div>

     
      {menuOpen && (
        <div className="md:hidden bg-pink-950/50 p-2 backdrop-blur-lg flex flex-col mx-auto max-w-6xl space-y-4">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-white hover:text-stone-400 transition duration-300"
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
