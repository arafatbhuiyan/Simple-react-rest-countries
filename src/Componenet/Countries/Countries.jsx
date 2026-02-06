import React, { use } from "react";
import Country from "../Country/country";
import "./Countries.css";

const Countries = ({ CountriesPromis }) => {
  const countresData = use(CountriesPromis);
  const countres = countresData.countries;

  return (
    <div >
      <h1>In the Countries :{countres.length}</h1>
      <div className="countries">
        {countres.map((country) => (
          <Country key={country.cca3.cca3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
