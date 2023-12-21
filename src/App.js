import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import FilterMenu from "./components/FilterMenu";
import Countries from "./components/Countries";
import CountryDetails from "./components/CountryDetails";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [countriesData, setCountriesData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchText, setSearchText] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountriesData(data);
        console.log("First country:", data[1]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
    setSelectedCountry(null);
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="flex flex-col p-5">
        <div className="flex items-center justify-between mb-5">
          <div>
            <Search setSearchText={setSearchText} darkMode={darkMode} />
          </div>
          <div>
            <FilterMenu
              onRegionChange={handleRegionChange}
              darkMode={darkMode}
            />
          </div>
        </div>
        {countriesData.length > 0 ? (
          <Countries
            countries={countriesData}
            selectedRegion={selectedRegion}
            searchText={searchText}
            onCountryClick={handleCountryClick}
            darkMode={darkMode}
          />
        ) : (
          <p>Loading countries...</p>
        )}
        <CountryDetails country={selectedCountry} />
      </div>
    </div>
  );
};

export default App;
