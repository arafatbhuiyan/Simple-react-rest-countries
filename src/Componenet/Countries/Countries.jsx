import React, { use } from 'react';
import Country from '../Country/country';

const Countries = ({CountriesPromis}) => {
    const countresData = use(CountriesPromis)
    const countres = countresData.countries
    

    return (
        <div>
            <h1>In the Countries</h1>
            <h3> Countries : {countres.length}</h3>
            {
                countres. map(country => <Country key={country.cca3.cca3} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;