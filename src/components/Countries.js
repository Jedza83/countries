import React, { useState } from "react";

const Countries = ({
  countries,
  selectedRegion,
  searchText,
  onCountryClick,
  darkMode,
}) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    onCountryClick(country);
  };

  const filteredCountries = countries.filter((country) => {
    const matchRegion = !selectedRegion || country.region === selectedRegion;

    const matchSearch = searchText
      ? country.name.common.toLowerCase().includes(searchText.toLowerCase())
      : true;

    return matchRegion && matchSearch;
  });

  const countriesView = filteredCountries.map((country) => (
    <div
      key={country.cca3}
      className={`flex flex-col bg-white cursor-pointer shadow-md h-[400px] w-[250px] rounded-md mb-[40px] ${
        darkMode ? "dark" : ""
      }`}
      onClick={() => handleCountryClick(country)}
    >
      <div className="flex h-[145px]">
        <img
          className="h-full mx-auto flex self-baseline rounded-t-md"
          src={country.flags.png}
          alt={`${country.name.common} Flag`}
        />
      </div>
      <div className="flex flex-col pt-[20px] pl-[20px] gap-[10px]">
        <div
          className={`flex font-extrabold ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          {country.name.common}
        </div>
        <div className="flex flex-col">
          <div className="flex text-[14px]">
            <div className="flex font-semibold pr-[2px]">Population:</div>
            <div className={`flex ${darkMode ? "text-white" : "text-black"}`}>
              {country.population}
            </div>
          </div>
          <div className="flex text-[14px]">
            <div className="flex font-semibold pr-[2px]">Region:</div>
            <div className={`flex ${darkMode ? "text-white" : "text-black"}`}>
              {country.region}
            </div>
          </div>
          <div className="flex text-[14px]">
            <div className="flex font-semibold pr-[2px]">Capital:</div>
            <div className={`flex ${darkMode ? "text-white" : "text-black"}`}>
              {country.capital}
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-wrap gap-[40px] justify-center w-full max-w-[1200px] mx-auto">
      {countriesView}
    </div>
  );
};

export default Countries;
