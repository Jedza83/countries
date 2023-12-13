import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

function FilterMenu(props) {
  const { regionFilter, setRegionFilter, darkMode } = props;
  const [showSelectOptions, setShowSelectOptions] = useState(false);

  const toggleOptions = () => {
    setShowSelectOptions(!showSelectOptions);
  };

  const handleRegionChange = (selectedRegion) => {
    setRegionFilter(selectedRegion);
    setShowSelectOptions(false);
  };

  const options = [
    { value: "", text: "Clear Filter" },
    { value: "Europe", text: "Europe" },
    { value: "Asia", text: "Asia" },
    { value: "Africa", text: "Africa" },
    { value: "Americas", text: "America" },
    { value: "Oceania", text: "Oceania" },
  ];

  return (
    <div className="flex relative">
      {showSelectOptions && (
        <div
          className={`absolute top-0 mt-10 w-full bg-white shadow-md rounded-md outline-none z-10 ${
            darkMode
              ? "dark:bg-dark-blue dark:text-white"
              : "dark:bg-white dark:text-black"
          }`}
        >
          {options.map((option) => (
            <div
              key={option.value}
              className="cursor-pointer p-2 hover:bg-gray-200 dark:hover:bg-dark-gray"
              onClick={() => handleRegionChange(option)}
            >
              {option.text}
            </div>
          ))}
        </div>
      )}
      <div
        className={`shadow-md rounded outline-none w-[200px] h-[50px] ${
          darkMode ? "dark:bg-dark-blue dark:text-white" : ""
        }`}
        onClick={toggleOptions}
      >
        <button
          className="flex justify-between items-center w-full h-full"
          onClick={toggleOptions}
        >
          <div className="flex pl-[25px]">
            {regionFilter && regionFilter.value
              ? regionFilter.text
              : "Filter by Region"}
          </div>
          <div className="flex pr-[25px]">
            <IoIosArrowUp
              className={darkMode ? "text-white" : ""}
              icon={
                showSelectOptions
                  ? "fa-solid fa-angle-down"
                  : "fa-solid fa-angle-up"
              }
            />
          </div>
        </button>
      </div>
    </div>
  );
}

export default FilterMenu;
