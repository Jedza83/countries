import { Link } from "react-router-dom";

const CountryDetails = ({ country }) => {
  if (!country) {
    return null;
  }

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital}</p>
      <Link to="/">Back to countries</Link>
    </div>
  );
};

export default CountryDetails;
