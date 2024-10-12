"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { ModeToggle } from "./toggle-theme";

export default function NavBar() {
  //navigation bar links
  const navlinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Contact", path: "/contact" },
  ];

  //toggle navigation bar
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="relative">
      <nav className="md:flex items-center justify-between gap-4 border-b border-sky-100">
        <div className="flex items-center justify-between w-full md:w-auto">
          <button onClick={toggleNav} className="md:hidden text-4xl">
            {navOpen ? (
              <IoCloseSharp className="text-4xl" />
            ) : (
              <RxHamburgerMenu className="text-4xl" />
            )}
          </button>
          <Image
            className="dark:invert md:order-2"
            src="/groceries-round-svgrepo-com.svg"
            alt="Next.js logo"
            width={60}
            height={0}
            priority
          />
        </div>
        <div
          className={`${
            navOpen ? "block" : "hidden"
          } md:flex md:items-center w-full md:w-auto`}
        >
          <ul className="text-md md:flex md:space-x-4 lowercase mt-4 md:mt-0 md:mb-4">
            {navlinks.map((link) => (
              <li key={link.title} className="py-2 md:py-0">
                <Link
                  href={link.path}
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-md"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 md:mt-0 md:ml-4">
            <ModeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
}
