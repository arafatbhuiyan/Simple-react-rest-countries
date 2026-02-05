import React, { use } from 'react';

const Countries = ({CountriesPromis}) => {
    const countresData = use(CountriesPromis)
    const countres = countresData.countries
    console.log(countres);
    

    return (
        <div>
            <h1>In the Countries</h1>
            <h3> Countries : {countres.length}</h3>
        </div>
    );
};

export default Countries;