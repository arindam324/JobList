import React, { useState } from "react";
import { MenuIcon, MoonIcon, UserIcon } from "@heroicons/react/solid";

const TABS = [
  {
    id: 0,
    name: "Jobs",
  },
  {
    id: 1,
    name: "Salaries",
  },
  {
    id: 2,
    name: "Talent",
  },
  {
    id: 4,
    name: "Companies",
  },
  {
    id: 5,
    name: "Twitter",
  },
];

const Navbar = () => {
  const [isActive, setActive] = useState(TABS[0]);

  return (
    <header className="flex items-center  justify-between">
      <h1 className="text-3xl font-bold text-blue-600">CryptoJob</h1>
      <nav className="space-x-8 text-lg font-medium text-white">
        {TABS.map((tab) => (
          <a
            href={`#${tab.name}`}
            className={
              isActive.id === tab.id
                ? `bg-gray-700 px-3 py-2 rounded-md`
                : `px-3 py-2`
            }
            key={tab.id}
            onClick={() => setActive(tab)}
          >
            {tab.name}
          </a>
        ))}
      </nav>
      <div className="text-white flex items-center space-x-4">
        <MenuIcon className="h-6 hover:bg-gray-500 cursor-pointer  w-8 rounded-md" />
        <MoonIcon className="h-6 hover:bg-gray-500 cursor-pointer  w-8 rounded-md" />
        <UserIcon className="h-6 hover:bg-gray-500 cursor-pointer  w-8 rounded-md" />
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium">
          Post Jobs
        </button>
      </div>
    </header>
  );
};

export default Navbar;
