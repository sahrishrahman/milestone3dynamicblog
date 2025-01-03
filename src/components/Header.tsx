"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {label:"Blogs", href:"/allblogs"},
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className='text-[#5E3A87] font-playfair w-full justify-between  flex items-center  p-4 lg:p-6'>
      {/* Logo */}
      <Link href={"/"} onClick={() => setMenuOpen(false)} ><h1 className="text-2xl  sm:text-3xl md:text-4xl font-bold">
        Gorgeous You
      </h1></Link>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-8 mt-4 sm:mt-0">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-xl font-bold hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Hamburger Menu for Small Screens */}
      <div className="md:hidden mt-4 sm:mt-0">
        <button onClick={toggleMenu}>
          {menuOpen ? (
            <FaTimes className="text-3xl text-[#5E3A87]" />
          ) : (
            <FaBars className="text-3xl text-[#5E3A87]" />
          )}
        </button>
        {menuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-[#F4EDE4] shadow-lg flex flex-col items-center space-y-4 p-4 z-10">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-[#5E3A87] hover:underline"
                  onClick={() => setMenuOpen(false)} 
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
