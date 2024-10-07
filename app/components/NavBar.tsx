"use client";
import React, { useState } from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
export default function NavBar() {
  //navigation bar links
  const navlinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Contact", path: "/contact" },
  ];

  //toggle navigation bar
  const [navOpen, isOpen] = useState(false);

  const toggleNav = () => {
    isOpen(!navOpen);
  };

  return (
    <div>
      <nav className="md:flex gap-4">
        <div>
          <Image
            className="dark:invert"
            src="https://nextjs.org/icons/next.svg"
            alt="Next.js logo"
            width={140}
            height={25}
            priority
          />
        </div>
        <div className="">
          <div className="absolute top-4 right-4 md:hidden">
            <button
              onClick={toggleNav}
              className={`absolute top-4 right-4 md:hidden ${navOpen ? "hidden" : "block"}`}
            >
              <RxHamburgerMenu className="text-3xl" />
            </button>
            <button
              onClick={toggleNav}
              className={`absolute top-6 right-4 md:hidden ${navOpen ? "block" : "hidden"}`}
            >
              <IoCloseSharp className="text-3xl" />
            </button>
          </div>
          <div
            className={`md:block md:right-12 md:absolute ${navOpen ? "block" : "hidden"}`}
          >
            <ul className="text-md md:flex md:space-x-4 lowercase">
              {navlinks.map((link) => (
                <li key={link.title}>
                  <a href={link.path}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
