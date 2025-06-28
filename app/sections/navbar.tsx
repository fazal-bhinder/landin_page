"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 sm:px-10 py-3">
        <div className="text-black font-extrabold text-xl sm:text-2xl bg-gray-300 px-4 py-2">
          LOGO
        </div>
        <div className="hidden md:flex space-x-6">
          {["Lorem Ipsum ▼", "Lorem Ipsum ▼", "Lorem Ipsum ▼"].map((text, idx) => (
            <a key={idx} href="#" className="text-blue-500 text-sm font-medium">
              {text}
            </a>
          ))}
        </div>
        <button className="hidden md:inline bg-white shadow px-4 py-2 rounded text-black font-medium hover:bg-gray-50 transition">
          Sign In
        </button>
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-md">
          {["Lorem Ipsum ▼", "Lorem Ipsum ▼", "Lorem Ipsum ▼"].map((text, idx) => (
            <a key={idx} href="#" className="block text-blue-500 font-medium">
              {text}
            </a>
          ))}
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
