import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ CountriesPromis }) => {
  const [visitedCountries, SetVisitedCountries] = useState([]);

  const hendelVisitedCountries = (country) => {
    console.log("Hendel visited countries Clicked", country);
    const newVisitedCountries = [...visitedCountries, country];
    SetVisitedCountries(newVisitedCountries);
  };
  const [Visitedflag, SetvisitedFlag] = useState([]);
  const hendelVisitedFlag = (flag) => {
    const newVisitedFlag = [...Visitedflag, flag];
    SetvisitedFlag(newVisitedFlag);
  };
  const countresData = use(CountriesPromis);
  const countres = countresData.countries;

  return (
    <div className="container">
      <h1>In the Countries :{countres.length}</h1>
      <h3>Total countries visit: {visitedCountries.length}</h3>
      <h3>Total flag visited : {Visitedflag.length}</h3>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol>
      
        <div className="visited-flag-container">
          {Visitedflag.map((flag,index) => (
            <img key={index} src={flag} />
          ))}
        </div>
      

      <div className="countries">
        {countres.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            hendelVisitedCountries={hendelVisitedCountries}
            hendelVisitedFlag={hendelVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
