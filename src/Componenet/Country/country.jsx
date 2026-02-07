import React, { useState } from 'react';
import './country.css';

const Country = ({country, hendelVisitedCountries,hendelVisitedFlag}) => {
    const [visited , SetVisited] = useState(false)


   const hendelvisited = ()=>{
    if (visited) {
        SetVisited(false)
    }
    else{
        SetVisited(true)
    }
    hendelVisitedCountries(country)
    
   }
    
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />

            <h3>Name :{country.name.common}</h3>
            <p>Population :{country.population.population}</p>
            <p>Area : {country.area.area} {country.area.area > 300000 ? "(Big Country)" :"(Small Country)"}</p>
            <button onClick={hendelvisited}>{visited ? "Visited": "Not Visited"}</button>
            <button onClick={ () => {hendelVisitedFlag(country.flags.flags.png)}}>Add visited flag</button>


        </div>
    );
};

export default Country;