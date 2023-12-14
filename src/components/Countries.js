import { useState, useEffect } from "react";

function Countries(props) {
  const { setSelectedCountry } = props;
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const countriesView = countries.map((country) => (
    <div
      key={country.cca3}
      onClick={() => {
        setSelectedCountry(country);
      }}
      className={`flex flex-col bg-white ${
        country.darkMode
          ? "dark:bg-dark-blue dark:text-white"
          : "dark:bg-gray-800 dark:text-white"
      } cursor-pointer shadow-md h-[400px] w-[250px] rounded-md mb-[40px]`}
    >
      <div className="flex h-[145px]">
        <img
          className="h-full mx-auto flex self-baseline rounded-t-md"
          src={country.flags.png}
          alt={`${country.name.common} Flag`}
        />
        <div></div>
      </div>
      <div className="flex flex-col pt-[20px] pl-[20px] gap-[10px]">
        <div
          className={`flex font-extrabold ${
            country.darkMode ? "text-white" : "text-black"
          }`}
        >
          {country.name.common}
        </div>
        <div className="flex flex-col">
          <div className="flex text-[14px]">
            <div className="flex font-semibold pr-[2px]">Population:</div>
            <div
              className={`flex ${
                country.darkMode ? "text-white" : "text-black"
              }`}
            >
              {country.population}
            </div>
          </div>
          <div className="flex text-[14px]">
            <div className="flex font-semibold pr-[2px]">Region:</div>
            <div
              className={`flex ${
                country.darkMode ? "text-white" : "text-black"
              }`}
            >
              {country.region}
            </div>
          </div>
          <div className="flex text-[14px]">
            <div className="flex font-semibold pr-[2px]">Capital:</div>
            <div
              className={`flex ${
                country.darkMode ? "text-white" : "text-black"
              }`}
            >
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
}

export default Countries;
