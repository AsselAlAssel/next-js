"use client";
import { navItems } from "@/utilities/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Button, IconButton } from "@mui/material";
import ThemeButtons from "@/components/themeButtons";

const Nav = () => {
  const pathName = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className={"shadow-md dark:bg-gray-800 bg-white justify-center "}>
      <nav
        className="py-3  px-3 flex justify-between flex-wrap items-center
      w-full md:w-[95%] lg:w-[90%]  2xl:w-[1400px] mx-auto"
      >
        <div className="w-6/1 flex items-center gap-2">
          <h2>Logo</h2>
          <ThemeButtons />
        </div>
        <div className="md:hidden">
          <button onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? (
              <CloseIcon className="text-gray-500" />
            ) : (
              <MenuIcon className="text-gray-500" />
            )}
          </button>
          {/*  button for theme*/}
        </div>
        <div
          className={`hidden md:flex w-full md:w-6/12 md:justify-end items-center
            bg-white dark:bg-gray-800
            `}
        >
          {navItems.map((item, index) => (
            <Button
              key={index}
              onClick={() => setShowMenu(false)}
              href={item.path}
              className={`block text-center  md:px-4 md:py-2 md:mx-2 md:my-0
              hover:bg-transparent font-semibold
                  ${pathName === item.path ? "text-blue-500" : "text-gray-500"}
                  hover:text-blue-700 hover-underline
                  transition-all duration-500 ease-in-out
                  `}
            >
              {item.name}
            </Button>
          ))}
        </div>
        <div
          className={`
            ${showMenu ? "left-0" : "-left-full"}
          absolute z-10 top-0 h-full w-full bg-white dark:bg-gray-800 
            transition-all duration-500 ease-in-out
            md:hidden
            `}
        >
          <div className="flex flex-col items-center justify-center gap-4 relative w-full h-full">
            {navItems.map((item, index) => (
              <Button
                key={index}
                href={item.path}
                onClick={() => setShowMenu(false)}
                className={`block text-center  md:px-4 md:py-2 md:mx-2 md:my-0
                hover:bg-transparent font-semibold
                ${pathName === item.path ? "text-blue-500" : "text-gray-500"}
                hover:text-blue-700 hover-underline
                transition-all duration-500 ease-in-out
                `}
              >
                {item.name}
              </Button>
            ))}
            <Button
              className="text-gray-500 absolute top-3 right-0 p-1 "
              onClick={() => setShowMenu(false)}
            >
              <CloseIcon />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
