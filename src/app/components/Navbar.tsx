"use client";

import { useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TfiMenu } from "react-icons/tfi";
import { RxCross2 } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Fashion Logo" width={150} height={150} />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search the items..."
            className="rounded-l-md border p-2 border-gray-200 pl-10 pr-10"
          />
          <FiSearch
            size={21}
            className="absolute left-3 top-1/2 transform -translate-y-1/2
                     text-black"
          />
        </div>

        <div className="hidden lg:flex space-x-10 text-white">
          <Link className="navbar_link" href="#">
            Home
          </Link>
          <Link className="navbar_link" href="/about">
            About
          </Link>
          <Link className="navbar_link" href="/contact">
            Contact
          </Link>
        </div>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <RxCross2 /> : <TfiMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-2 p-4">
            <Link className="navbar_link" href="#">
              Home
            </Link>
            <Link className="navbar_link" href="/about">
              About
            </Link>
            <Link className="navbar_link" href="/contact">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
