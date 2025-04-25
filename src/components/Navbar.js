import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/GrowMore.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path
      ? "text-orange-500 font-semibold"
      : "text-gray-700";
  };

  return (
    <nav className="bg-white text-black px-6 py-4 shadow-md sticky top-0 w-full z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-black">
          <img src={logo} className="h-10 w-40" alt="GrowMore Logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-8 items-center">
          <Link
            to="/"
            className={`hover:text-orange-400 ${isActive("/")}`}
            aria-label="Home"
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`hover:text-orange-400 ${isActive("/about")}`}
            aria-label="About"
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`hover:text-orange-400 ${isActive("/contact")}`}
            aria-label="Contact"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <button
          className="lg:hidden text-orange-500"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu - Horizontal Nav */}
      <div
        className={`lg:hidden flex flex-col space-y-4  transition-all duration-300 ease-in-out transform overflow-hidden ${
          isMenuOpen
            ? "opacity-100 max-h-screen translate-y-0 visible mt-2"
            : "opacity-0 max-h-0 translate-y-10 invisible"
        }`}
      >
        <Link
          to="/"
          className={`hover:text-orange-400 ${isActive("/")}`}
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`hover:text-orange-400 ${isActive("/about")}`}
          onClick={toggleMenu}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={`hover:text-orange-400 ${isActive("/contact")}`}
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
