import React, { useState } from 'react';
import './Country.css';

const Country = ({country}) => {
    console.log(country);
    const [visited , SetVisited] = useState(false)


   const hendelvisited = ()=>{
    if (visited) {
        SetVisited(false)
    }
    else{
        SetVisited(true)
    }
    
   }
    
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />

            <h3>Name :{country.name.common}</h3>
            <p>Population :{country.population.population}</p>
            <p>Area : {country.area.area} {country.area.area > 300000 ? "(Big Country)" :"(Small Country)"}</p>
            <button onClick={hendelvisited}>{visited ? "Visited": "Not Visited"}</button>


        </div>
    );
};

export default Country;