"use client";
import { navItems } from "@/utilities/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import ThemeButtons from "@/components/themeButtons";

const Nav = () => {
  const pathName = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className={"relative z-99  shadow-md dark:bg-gray-800 bg-white"}>
      <nav className="md:px-10 md:py-2 px-7 flex justify-between flex-wrap items-center ">
        <div className="w-6/1 flex items-center gap-2">
          <h2>Logo</h2>
          <ThemeButtons />
        </div>
        <div className="md:hidden">
          <IconButton onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? (
              <CloseIcon className="text-gray-500" />
            ) : (
              <MenuIcon className="text-gray-500" />
            )}
          </IconButton>
          {/*  button for theme*/}
        </div>
        <ul
          className={`md:flex w-full md:w-6/12 md:justify-end items-center
            transition-transform duration-500 ease-in-out
            transform origin-top
            absolute md:static left-0 top-10 z-9 shadow-md md:shadow-none light:bg-white dark:bg-gray-800
            md:bg-transparent
            md:scale-y-100
            ${showMenu ? "scale-y-100 " : "scale-y-0 "}
          `}
        >
          {navItems.map((item, index) => (
            <Link
              href={item.path}
              key={index}
              className={`block text-center  md:px-4 md:py-2 md:mx-2 md:my-0
                ${pathName === item.path ? "text-blue-500" : "text-gray-500"}
                hover:text-blue-700 hover-underline
                transition-all duration-500 ease-in-out
            `}
              onClick={() => setShowMenu(false)}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
