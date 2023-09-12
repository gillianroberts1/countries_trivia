import React, { useState } from "react";
import CountrySelect from "../components/CountriesSelect";
import CountryDetails from "../components/CountryDetails";

const CountriesContainer = () => {
    const [countriesData]  = useState([
        
            {
              "name": "United States",
              "capital": "Washington, D.C.",
              "population": "331,002,651",
              "currency": "United States Dollar (USD)",
              "fact": "The United States has the world's largest economy."
            },
            {
              "name": "Canada",
              "capital": "Ottawa",
              "population": "37,742,154",
              "currency": "Canadian Dollar (CAD)",
              "fact": "Canada has more lakes than the rest of the world's lakes combined."
            },
            {
              "name": "United Kingdom",
              "capital": "London",
              "population": "67,886,011",
              "currency": "British Pound Sterling (GBP)",
              "fact": "The Queen of the United Kingdom has no passport."
            },
            {
              "name": "France",
              "capital": "Paris",
              "population": "65,273,511",
              "currency": "Euro (EUR)",
              "fact": "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion."
            },
            {
              "name": "Germany",
              "capital": "Berlin",
              "population": "83,783,942",
              "currency": "Euro (EUR)",
              "fact": "Germany is home to the world's oldest brewery, founded in 1040."
            },
            {
              "name": "Australia",
              "capital": "Canberra",
              "population": "25,499,884",
              "currency": "Australian Dollar (AUD)",
              "fact": "Australia is the only continent without an active volcano."
            },
            {
              "name": "China",
              "capital": "Beijing",
              "population": "1,402,520,000",
              "currency": "Renminbi (CNY)",
              "fact": "The Great Wall of China is visible from space."
            },
            {
              "name": "Japan",
              "capital": "Tokyo",
              "population": "126,476,461",
              "currency": "Japanese Yen (JPY)",
              "fact": "Japan has one of the highest life expectancy rates in the world."
            },
            {
              "name": "Brazil",
              "capital": "Brasília",
              "population": "211,755,692",
              "currency": "Brazilian Real (BRL)",
              "fact": "Brazil is home to the Amazon Rainforest, the world's largest tropical rainforest."
            },
            {
              "name": "India",
              "capital": "New Delhi",
              "population": "1,366,418,309",
              "currency": "Indian Rupee (INR)",
              "fact": "India is the birthplace of four major religions: Hinduism, Buddhism, Jainism, and Sikhism."
            },
            {
              "name": "Russia",
              "capital": "Moscow",
              "population": "145,934,462",
              "currency": "Russian Ruble (RUB)",
              "fact": "Russia spans 11 time zones, making it the largest country in the world."
            },
            {
              "name": "South Africa",
              "capital": "Pretoria (Administrative), Bloemfontein (Judicial), Cape Town (Legislative)",
              "population": "59,308,690",
              "currency": "South African Rand (ZAR)",
              "fact": "South Africa is known for its diverse wildlife, including the Big Five: lion, elephant, buffalo, leopard, and rhinoceros."
            },
            {
              "name": "Mexico",
              "capital": "Mexico City",
              "population": "128,932,753",
              "currency": "Mexican Peso (MXN)",
              "fact": "Mexico introduced chocolate, chilies, and corn to the world."
            },
            {
              "name": "Egypt",
              "capital": "Cairo",
              "population": "102,334,404",
              "currency": "Egyptian Pound (EGP)",
              "fact": "The Great Pyramid of Giza is one of the Seven Wonders of the Ancient World."
            },
            {
              "name": "Saudi Arabia",
              "capital": "Riyadh",
              "population": "34,813,871",
              "currency": "Saudi Riyal (SAR)",
              "fact": "Saudi Arabia is the birthplace of Islam and home to its two holiest cities, Mecca and Medina."
            },
            {
              "name": "Argentina",
              "capital": "Buenos Aires",
              "population": "45,376,763",
              "currency": "Argentine Peso (ARS)",
              "fact": "Argentina is famous for its tango music and dance."
            },
            {
              "name": "Nigeria",
              "capital": "Abuja",
              "population": "206,139,589",
              "currency": "Nigerian Naira (NGN)",
              "fact": "Nigeria is the most populous country in Africa."
            },
            {
              "name": "South Korea",
              "capital": "Seoul",
              "population": "51,269,185",
              "currency": "South Korean Won (KRW)",
              "fact": "South Korea is known for its advanced technology and is home to companies like Samsung and LG."
            },
            {
              "name": "Sweden",
              "capital": "Stockholm",
              "population": "10,379,295",
              "currency": "Swedish Krona (SEK)",
              "fact": "Sweden has a law called Allemansrätten, which allows people to camp and hike freely in the countryside."
            },
            {
              "name": "Kenya",
              "capital": "Nairobi",
              "population": "54,985,698",
              "currency": "Kenyan Shilling (KES)",
              "fact": "Kenya is known for its wildlife safaris and the Great Migration of wildebeests."
            }
          
          
    ])
    const [curentCountry, setCurrentCountry] = useState() 

    const handleSelect = (event) => {
        const foundCountry = countriesData.find(country => country.name === event.target.value )
        setCurrentCountry(foundCountry)
    }

    return(
        <>
        <CountrySelect countries={countriesData} handleSelect={handleSelect}/>
        {curentCountry ? <CountryDetails currentCountry={curentCountry}/>: <p>Pick a country</p>}
        </>
    )
    
}

export default CountriesContainer