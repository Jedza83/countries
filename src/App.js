import "./App.css";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import Countries from "./components/Countries";
import SingleCountry from "./components/SingleCountry";
import { useEffect, useState } from "react";

function App() {
  return (
    <div>
      <NavBar />
      <Search />
      {/* <SingleCountry /> */}
      <Countries />
    </div>
  );
}

export default App;
