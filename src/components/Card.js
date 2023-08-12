import React, { memo, useContext, useEffect, useState } from "react";
import { AppContext } from "../App";

const Card = ({ countryApi }) => {
  const [country, setCountry] = useState({});
  const { select } = useContext(AppContext);

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
        <h1 className="name" onClick={() => select(country)}>{country?.name?.common}</h1>
        <div
          className="flag"
          style={{ backgroundImage: `url(${country?.flags?.png})` }}
        ></div>
      </div>
    )
  );
};

export default memo(Card);
