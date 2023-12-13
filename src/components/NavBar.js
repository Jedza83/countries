import React, { useState } from "react";
import { IoMoonOutline } from "react-icons/io5";

function NavBar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const updatedIsDarkMode = !isDarkMode;
    const html = document.querySelector("html");
    updatedIsDarkMode
      ? html.classList.add("dark")
      : html.classList.remove("dark");

    setIsDarkMode(updatedIsDarkMode);
  };

  return (
    <nav className="dark:bg-gray-800 bg-white drop-shadow-sm">
      <div className="flex h-16 items-center justify-between px-[20px] tablet:px-[50px] desktop:px-[100px] max-w-[2000px] mx-auto">
        <div className="flex">
          <div
            className={`text-${
              isDarkMode ? "white" : "black"
            } font-extrabold text-[20px]`}
          >
            Where in the world?
          </div>
        </div>
        <div className="flex items-baseline cursor-pointer">
          <IoMoonOutline
            className={`mr-[10px] ${
              isDarkMode ? "text-yellow-500" : "text-gray-500"
            }`}
            size={30}
            onClick={() => toggleDarkMode()}
          />
          <div className={`text-${isDarkMode ? "white" : "black"}`}>
            Dark Mode
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
