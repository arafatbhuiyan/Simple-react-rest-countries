import React, { use, useState } from "react";
import Country from "../Country/country";
import "./Countries.css";

const Countries = ({ CountriesPromis }) => {
  const [visitedCountries, SetVisitedCountries] = useState([])
  const hendelVisitedCountries = (country) =>{
    console.log("Hendel visited countries Clicked", country);
    
  }
  const countresData = use(CountriesPromis);
  const countres = countresData.countries;

  return (
    <div >
      <h1>In the Countries :{countres.length}</h1>
      <h3>Total countries visit: </h3>
      <div className="countries">
        {countres.map((country) => (
          <Country key={country.cca3.cca3} country={country}
          hendelVisitedCountries = {hendelVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
