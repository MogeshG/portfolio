"use client";
import Image from "next/image";
import IndiaFlag from "@/public/ind_flag.png";
import MenuIcon from "@/public/menu.svg";
import CloseIcon from "@/public/close.svg";
import React, { useEffect, useState } from "react";

export function scrollToDiv(target: string) {
  const element = document.querySelector(target);
  if (element) element.scrollIntoView({ behavior: "smooth" });
}

const Header = () => {
  const [width, setWidth] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="h-10">
      {width < 650 ? (
        <div className="relative w-[85vw] flex justify-end z-10 top-10 transform translate-x-1/10">
          <span className={`rounded-full opacity-0 transition-opacity duration-800 border-2 border-[#323a47] w-fit aspect-square p-1 border-box ${showMenu ? "" : "hide-menu"}`}>
            <Image onClick={toggleMenu} src={MenuIcon} width={40} height={40} alt="Menu Icon" />
          </span>
          <div className={`mini-menu ${showMenu ? "animate-width" : ""}`}>
            <ul className="flex flex-col text-white w-fit gap-3">
              <li
                onClick={() => scrollToDiv("#skills")}
                className="cursor-pointer hover:text-[#4579c9] w-fit h-10"
              >
                TECHNOLOGIES
              </li>
              <li
                onClick={() => scrollToDiv("#projects")}
                className="cursor-pointer hover:text-[#4579c9] w-fit h-10"
              >
                PROJECTS
              </li>
              <li
                onClick={() => scrollToDiv("#contact")}
                className="cursor-pointer hover:text-[#4579c9] w-fit h-10"
              >
                CONTACT
              </li>
            </ul>
            <button
              className={`absolute bg-transparent right-1 top-1 rounded-full border border-[#323a47] `}
            >
              <Image onClick={toggleMenu} src={CloseIcon} width={40} height={40} alt="Menu Icon" />
            </button>
          </div>
        </div>
      ) : (
        <div className="min-h-[40px] bg-transparent text-[1rem] z-10 items-center text-white rounded-md border sticky translate-y-1/2 transform translate-x-1/10 border-[#323a47] flex justify-between px-4 w-[80vw] h-[10vh]">
          <div>MOGESH G</div>
          <ul className="flex w-[25%] min-w-[250px] justify-between">
            <li
              onClick={() => scrollToDiv("#skills")}
              className="cursor-pointer hover:text-[#4579c9] w-fit"
            >
              TECHNOLOGIES
            </li>
            <li
              onClick={() => scrollToDiv("#projects")}
              className="cursor-pointer hover:text-[#4579c9] w-fit"
            >
              PROJECTS
            </li>
            <li
              onClick={() => scrollToDiv("#contact")}
              className="cursor-pointer hover:text-[#4579c9] w-fit"
            >
              CONTACT
            </li>
          </ul>
          <div>
            <Image src={IndiaFlag} width={25} height={25} alt="Indian Flag"></Image>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
