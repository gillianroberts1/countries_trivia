

const CountrySelect = ({countries, handleSelect}) => {

    return (
        <select onChange={handleSelect} >
            {countries.map((country) => (
                <option value={country.name} key={country.name}>{country.name}</option>
            ))}
        </select>
    )


}

export default CountrySelect