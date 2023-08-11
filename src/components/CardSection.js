import React, { memo, useEffect, useState } from "react";
import Section from "./Section";

const CardSection = ({ region }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function countryByRegion(region) {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/region/${region}`
        );
        const result = await response.json();
        if (result[0]) setCountries(result);
      } catch (error) {
        console.error(error);
      }
    }
    countryByRegion(region);
  }, []);

  return (
    <Section region={region} countries={countries} />
  );
};

export default memo(CardSection);  