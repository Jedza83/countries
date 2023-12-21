import React, { useState } from "react";
import { IoMoonOutline } from "react-icons/io5";

function NavBar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const updatedIsDarkMode = !isDarkMode;
    const html = document.querySelector("html");
    const body = document.querySelector("body");

    updatedIsDarkMode
      ? html.classList.add("dark")
      : html.classList.remove("dark");

    // Postavi boju pozadine i teksta za body
    body.style.backgroundColor = updatedIsDarkMode ? "#1a1a1a" : "#fff";
    body.style.color = updatedIsDarkMode ? "#fff" : "#000";

    setIsDarkMode(updatedIsDarkMode);
  };

  return (
    <div
      className={`flex h-16 items-center justify-between px-[20px] tablet:px-[50px] desktop:px-[100px] max-w-[2000px] mx-auto ${
        isDarkMode ? "dark" : ""
      }`}
    >
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
  );
}

export default NavBar;
