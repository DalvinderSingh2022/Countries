import React, { useEffect, useState } from "react";

const Card = ({ countryApi }) => {
  const [country, setCountry] = useState({});

  useEffect(() => {
    async function countryData(name) {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}?fullText=true`
        );
        const result = await response.json();
        setCountry(result[0]);
      } catch (error) {
        console.error(error);
      }
    }
    countryData(countryApi?.name?.common);
  }, []);

  return (
    country && (
      <div className="card" data-country={country?.name?.common}>
        <h1 className="name">{country?.name?.common}</h1>
        <div
          className="flag"
          style={{ backgroundImage: `url(${country?.flags?.png})` }}
        ></div>
      </div>
    )
  );
};

export default Card;
