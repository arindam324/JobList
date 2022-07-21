import React, { useState } from "react";
import { MenuIcon, MoonIcon, SunIcon, UserIcon } from "@heroicons/react/solid";
import { useTheme } from "../context/ThemeProvider";

import Link from "next/link";

const TABS = [
  {
    id: 0,
    name: "Jobs",
    href: "/",
  },
  {
    id: 1,
    name: "Salaries",
    href: "/",
  },
  {
    id: 2,
    name: "Talent",
    href: "/",
  },
  {
    id: 4,
    name: "Companies",
    href: "/",
  },
  {
    id: 5,
    name: "Twitter",
    href: "/",
  },
];

const Navbar = () => {
  const [isActive, setActive] = useState(TABS[0]);
  const theme = useTheme();

  return (
    <header className="flex items-center  justify-between">
      <h1 className="text-3xl font-bold text-blue-600">CryptoJob</h1>
      <nav className="space-x-8 text-lg font-medium text-white">
        {TABS.map((tab) => (
          <Link href={tab.href}>
            <a
              href={`#${tab.name}`}
              className={
                isActive.id === tab.id
                  ? `bg-gray-700 px-3 py-2 rounded-md`
                  : `px-3 py-2  ${!theme?.isDark && "text-gray-800"}`
              }
              key={tab.id}
              onClick={() => setActive(tab)}
            >
              {tab.name}
            </a>
          </Link>
        ))}
      </nav>
      <div
        className={`${
          theme?.isDark ? "text-white" : "text-gray-600"
        } flex items-center space-x-4`}
      >
        <div
          className={`${
            theme?.isDark ? "hover:bg-gray-500" : "hover:bg-gray-300"
          }   cursor-pointer h-8 grid place-items-center w-8 rounded-md`}
        >
          <MenuIcon className="h-6 w-6" />
        </div>
        <div
          className={`${
            theme?.isDark ? "hover:bg-gray-500" : "hover:bg-gray-300"
          }   cursor-pointer h-8 grid place-items-center w-8 rounded-md`}
          onClick={theme?.toggleTheme}
        >
          {theme?.isDark ? (
            <SunIcon className="h-6 w-6" />
          ) : (
            <MoonIcon className="h-6 w-6" />
          )}
        </div>
        <div
          className={`${
            theme?.isDark ? "hover:bg-gray-500" : "hover:bg-gray-300"
          }   cursor-pointer h-8 grid place-items-center w-8 rounded-md`}
        >
          <UserIcon className="h-6 w-6" />
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium">
          Post Jobs
        </button>
      </div>
    </header>
  );
};

export default Navbar;
