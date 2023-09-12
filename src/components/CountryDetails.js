import React from "react";


const CountryDetails = ({currentCountry}) => {
    const {name, capital, population, currency, fact} = currentCountry
    return(
        <li>
            
            <p>name: {name} </p>
            <p>capital: {capital}   </p>
            <p>population: {population}</p>
            <p>fact: {fact}</p>
            <p>currency: {currency}</p>
        </li>
    )
}

export default CountryDetails